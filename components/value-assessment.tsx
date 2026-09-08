'use client';

import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';

const roles = [
  ['banker', 'Banker', 'reporting, risk judgement, process improvement and financial operations'],
  ['teacher', 'Teacher', 'explanation, curriculum design, facilitation and learning systems'],
  ['designer', 'Designer', 'visual communication, product thinking and brand clarity'],
  ['trader', 'Trader', 'market research, risk discipline, pricing insight and distribution'],
  ['business-owner', 'Business owner', 'customer understanding, operations, partnerships and decision-making'],
] as const;

export function ValueAssessment() {
  const [selectedRole, setSelectedRole] = useState<(typeof roles)[number][0]>('banker');
  const selected = roles.find(([id]) => id === selectedRole) ?? roles[0];

  return (
    <section className="value-assessment" aria-labelledby="assessment-title">
      <div className="value-assessment-heading">
        <p className="eyebrow dark"><span /> Before you arrive</p>
        <h2 id="assessment-title">What can you already sell?</h2>
        <p>Choose the role closest to your work and start with the value hidden in your everyday experience.</p>
      </div>
      <div className="assessment-tool">
        <div className="assessment-roles" role="list" aria-label="Choose your role">
          {roles.map(([id, label]) => (
            <button
              key={id}
              type="button"
              className={selectedRole === id ? 'assessment-role is-selected' : 'assessment-role'}
              onClick={() => setSelectedRole(id)}
              aria-pressed={selectedRole === id}
            >
              {label}
            </button>
          ))}
        </div>
        <div className="assessment-result">
          <span className="assessment-result-label">Your starting point</span>
          <p>As a {selected[1].toLowerCase()}, you may already sell <strong>{selected[2]}</strong>.</p>
          <a className="text-link" href="#tickets">Bring this question to EITDA <ArrowUpRight size={17} aria-hidden="true" /></a>
        </div>
      </div>
    </section>
  );
}
