// Runtime adapter appended to the shared, tested validation engine by build-apps-script.mjs.
// This source is not loaded by the website. Deploy generated Code.gs to Apps Script.
function property_(name) {
  var value = PropertiesService.getScriptProperties().getProperty(name);
  if (!value) throw new ImpactError('Campaign configuration needs attention.', 503);
  return value;
}
function hex_(bytes) { return bytes.map(function(b) { return ('0' + ((b + 256) % 256).toString(16)).slice(-2); }).join(''); }
function runtime_() {
  var secret = property_('TOKEN_SECRET');
  if (!/^[a-f0-9]{64}$/.test(secret)) throw new ImpactError('Campaign configuration needs attention.', 503);
  return {
    now: function() { return new Date().toISOString(); },
    id: function() { return Utilities.getUuid(); },
    hash: function(value) { return hex_(Utilities.computeDigest(Utilities.DigestAlgorithm.SHA_256, value, Utilities.Charset.UTF_8)); },
    token: function(value) { return hex_(Utilities.computeHmacSha256Signature(value, secret, Utilities.Charset.UTF_8)); }
  };
}
function spreadsheet_() { return SpreadsheetApp.openById(property_('SPREADSHEET_ID')); }
function loadState_(spreadsheet) {
  var state = emptyState();
  Object.keys(schemas).forEach(function(name) {
    var sheet = spreadsheet.getSheetByName(name);
    if (!sheet) throw new ImpactError('Run setupCampaign in Apps Script first.', 503);
    var headers = sheet.getRange(1, 1, 1, schemas[name].length).getValues()[0];
    if (headers.join('|') !== schemas[name].join('|')) throw new ImpactError('Campaign sheet headers have changed. Ask the team to check setup.', 503);
    if (sheet.getLastRow() < 2) return;
    state[name] = sheet.getRange(2, 1, sheet.getLastRow() - 1, headers.length).getValues().filter(function(values) { return values[0] !== ''; }).map(function(values) {
      var row = {};
      headers.forEach(function(key, index) { var value = values[index]; row[key] = value instanceof Date ? value.toISOString() : value; });
      return row;
    });
  });
  return state;
}
function saveState_(spreadsheet, before, state) {
  // Primary records first. Retries recover from a partial write using submission
  // IDs and deterministic credentials, and reconcile derived counters/events.
  ['People','Advocates','Events','Milestones','PublicImpact'].forEach(function(name) {
    var sheet = spreadsheet.getSheetByName(name);
    var columns = schemas[name];
    var rows = state[name];
    var old = before[name];
    if (sheet.getMaxRows() < rows.length + 1) sheet.insertRowsAfter(sheet.getMaxRows(), rows.length + 1 - sheet.getMaxRows());
    for (var i = 0; i < Math.min(old.length, rows.length); i++) {
      if (JSON.stringify(old[i]) !== JSON.stringify(rows[i])) {
        if (name === 'Events') throw new Error('Events are append-only.');
        sheet.getRange(i + 2, 1, 1, columns.length).setValues([columns.map(function(key) { return sheetSafe(rows[i][key] === undefined ? '' : rows[i][key]); })]);
      }
    }
    if (rows.length > old.length) {
      var added = rows.slice(old.length).map(function(row) { return columns.map(function(key) { return sheetSafe(row[key] === undefined ? '' : row[key]); }); });
      sheet.getRange(old.length + 2, 1, added.length, columns.length).setValues(added);
    }
    if (old.length > rows.length && name === 'PublicImpact') sheet.getRange(rows.length + 2, 1, old.length - rows.length, columns.length).clearContent();
  });
  SpreadsheetApp.flush();
}
function rate_(key, limit, seconds) {
  var cache = CacheService.getScriptCache();
  var count = Number(cache.get(key) || 0);
  if (count >= limit) throw new ImpactError('Please wait a few minutes before trying again.', 429);
  cache.put(key, String(count + 1), seconds);
}
function json_(value) { return ContentService.createTextOutput(JSON.stringify(value)).setMimeType(ContentService.MimeType.JSON); }
function response_(action, payload, clientKey, publicOnly) {
  var lock = LockService.getScriptLock();
  var acquired = false;
  try {
    acquired = lock.tryLock(5000);
    if (!acquired) throw new ImpactError('The campaign is busy. Please try again shortly.', 503);
    var reads = ['getCampaignStats','getPublicImpact','getAdvocate','getRecognition'];
    if (publicOnly && reads.indexOf(action) === -1) throw new ImpactError('Use the secure website form for this action.', 401);
    var read = reads.indexOf(action) !== -1 || action === 'getAdvocateImpact' || action === 'getPerson';
    rate_('global:' + (read ? 'read' : 'write'), read ? 1500 : 600, 600);
    if (!publicOnly) rate_('client:' + clientKey + ':' + (read ? 'read' : 'write'), read ? 180 : 40, 600);
    if (action === 'getCampaignStats') {
      var cached = CacheService.getScriptCache().get('campaign-stats');
      if (cached) return json_({success:true, data:JSON.parse(cached)});
    }
    var spreadsheet = spreadsheet_();
    var state = loadState_(spreadsheet);
    var before = JSON.parse(JSON.stringify(state));
    var result = perform(state, action, payload, runtime_());
    if (!read) {
      saveState_(spreadsheet, before, state);
      CacheService.getScriptCache().remove('campaign-stats');
    }
    if (action === 'getCampaignStats') CacheService.getScriptCache().put('campaign-stats', JSON.stringify(result), 30);
    return json_({success:true, data:result});
  } catch (error) {
    return json_({success:false, error:error instanceof ImpactError ? error.message : 'We couldn’t save this right now. Please try again.', status:error instanceof ImpactError ? error.status : 503});
  } finally { if (acquired) lock.releaseLock(); }
}
function doGet(e) {
  var params = e && e.parameter || {};
  return response_(String(params.action || ''), params, 'public', true);
}
function doPost(e) {
  try {
    var raw = e && e.postData && e.postData.contents || '';
    if (raw.length > 20000) throw new ImpactError('This submission is too large.');
    var body = JSON.parse(raw);
    var secret = property_('API_SECRET');
    if (!/^[a-f0-9]{64}$/.test(secret) || typeof body.api_secret !== 'string' || !safeEqual(secret, body.api_secret)) throw new ImpactError('Use the secure website form for this action.', 401);
    if (!/^[a-f0-9]{64}$/.test(body.client_key || '') || !body.payload || typeof body.payload !== 'object' || Array.isArray(body.payload)) throw new ImpactError('Invalid submission.');
    return response_(String(body.action || ''), body.payload, body.client_key, false);
  } catch (error) {
    return json_({success:false, error:error instanceof ImpactError ? error.message : 'Invalid submission.', status:error instanceof ImpactError ? error.status : 400});
  }
}
function setupCampaign() {
  var spreadsheet = spreadsheet_();
  Object.keys(schemas).forEach(function(name) {
    var sheet = spreadsheet.getSheetByName(name) || spreadsheet.insertSheet(name);
    if (sheet.getLastRow() === 0) {
      if (sheet.getMaxColumns() < schemas[name].length) sheet.insertColumnsAfter(sheet.getMaxColumns(), schemas[name].length - sheet.getMaxColumns());
      sheet.getRange(1, 1, 1, schemas[name].length).setValues([schemas[name]]).setFontWeight('bold').setBackground('#0731b5').setFontColor('#ffffff');
      sheet.setFrozenRows(1);
    }
  });
  loadState_(spreadsheet); // Fail clearly instead of silently replacing changed headers.
}
function syncCampaign() {
  var lock = LockService.getScriptLock();
  lock.waitLock(10000);
  try {
    var spreadsheet = spreadsheet_();
    var state = loadState_(spreadsheet);
    var before = JSON.parse(JSON.stringify(state));
    var runtime = runtime_();
    state.People.forEach(function(p) {
      if (p.ticket_status === 'confirmed' || p.ticket_status === 'attended') event(state, runtime, p.ticket_status === 'confirmed' ? 'ticket_confirmed' : 'attended', String(p.advocate_code), String(p.person_id), {source:'team_sheet_update'}, 'manual:' + p.person_id + ':' + p.ticket_status);
    });
    reconcile(state, runtime);
    saveState_(spreadsheet, before, state);
    CacheService.getScriptCache().remove('campaign-stats');
  } finally { lock.releaseLock(); }
}
function campaignEdited(e) {
  if (e && e.range && ['People','Advocates'].indexOf(e.range.getSheet().getName()) !== -1) syncCampaign();
}
function installCampaignTrigger() {
  ScriptApp.getProjectTriggers().forEach(function(trigger) { if (trigger.getHandlerFunction() === 'campaignEdited') ScriptApp.deleteTrigger(trigger); });
  ScriptApp.newTrigger('campaignEdited').forSpreadsheet(property_('SPREADSHEET_ID')).onEdit().create();
}
function onOpen() {
  SpreadsheetApp.getUi().createMenu('EITDA campaign').addItem('Check / create tabs', 'setupCampaign').addItem('Refresh counts, wall and ticket events', 'syncCampaign').addToUi();
}
