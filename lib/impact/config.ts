export const impactConfig = {
  name: 'One person. A new possibility.',
  headline: 'Help one person discover what their experience is worth.',
  description: 'There is someone in your family, workplace, community or network who has spent years learning something valuable. Help them see where that experience could take them.',
  contactEmail: 'eshietsfoundation@gmail.com',
  milestones: [1, 5, 10, 25, 50, 100],
  professions: ['Teacher', 'Lecturer', 'Banker', 'Accountant', 'Civil Servant', 'Healthcare Professional', 'Business Owner', 'Entrepreneur', 'Creative', 'Artisan', 'Engineer', 'Lawyer', 'Sales Professional', 'Marketing Professional', 'Other'],
  experienceRanges: ['Less than 3', '3–5 years', '6–10 years', '11–15 years', '16–20 years', '20+ years', "I don’t know yet"],
  outsideIncome: ['Yes', 'No', 'Not yet'],
  intentIncome: ['Yes', 'No', "I’m not sure"],
  goals: ['Where my experience is valuable', 'How to package what I know', 'Who could pay for my knowledge', 'How to build an additional income stream from my expertise', 'How to position myself professionally', "I’m still figuring it out"],
  missions: ['Find one teacher with more than 10 years of experience.', 'Think of someone in your family who has worked in the same profession for more than five years.', 'Call someone who taught you something that still helps you today.', 'Ask an experienced colleague: “Have you ever earned from what you know outside your normal job?”'],
  shareText: 'You know more than you might think. Take a moment to discover what your experience could become with EITDA.',
  wallPageSize: 24,
  statsRefreshMs: 60_000,
  privacyVersion: '2026-09-10',
};

export function currentMission(now = new Date()) {
  return impactConfig.missions[Math.floor(now.getTime() / 604800000) % impactConfig.missions.length];
}
