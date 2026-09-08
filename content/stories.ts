export type Story = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  publishedAt: string;
  status: 'draft' | 'published';
  image: { src: string; alt: string; caption?: string };
  introduction: string;
  sections: {
    heading: string;
    paragraphs: string[];
    points?: string[];
  }[];
  sources?: { title: string; url: string }[];
};

// Add stories here. Only entries marked "published" appear on the website.
// See docs/adding-stories.md for a copy-and-paste template.
const stories: Story[] = [
  {
    slug: 'experienced-employed-and-ready-for-more',
    title: 'Experienced, employed—and ready for more.',
    excerpt:
      'What recent research tells us about work in Nigeria, and why your next step can begin with the experience you already have.',
    category: 'Work & careers',
    author: 'EITDA Editorial',
    publishedAt: '2026-09-08',
    status: 'published',
    image: {
      src: '/photos/conversation.jpg',
      alt: 'Participants connecting at the first EITDA gathering',
      caption: 'A conversation at the first EITDA edition, December 2025.',
    },
    introduction:
      'You can care about your work and still want more from it. Better pay. Room to grow. A clearer idea of where your experience could take you. Wanting those things does not erase what you have already built.',
    sections: [
      {
        heading: 'When work does not feel like progress',
        paragraphs: [
          'Having a job and feeling financially secure are different experiences. In its summary of Nigerian responses to the 2024 Workforce Hopes and Fears Survey, PwC reported that 30% described a household financial position with enough left after bills for savings, holidays and extras. The short summary does not disclose the Nigerian sample size.',
          'The same summary reported a significant increase in workload for 48% of Nigerian respondents. These findings describe the people surveyed at that time. They help explain why a conversation about career growth should account for the demands of a current job.',
        ],
      },
      {
        heading: 'A next step needs room in your life',
        paragraphs: [
          'Gallup’s 2026 Nigeria workplace report records 55% of employees experiencing stress a lot during the previous day, using a three-year rolling average ending in 2025. This measures stress in daily life; it does not establish that the job caused it or that those employees were experiencing burnout.',
          'For someone already managing work and family responsibilities, a useful starting point can be a small exercise: choose one problem you regularly solve and describe how you solve it. That gives you something concrete to explore without having to decide your entire future at once.',
        ],
      },
      {
        heading: 'Look closely at what you already know',
        paragraphs: [
          'Your job title is only one description of your experience. Think about the tasks people trust you with, the decisions you help them make and the processes you understand well. Those details can help you explain your contribution to a different team or potential customer.',
          'A teacher could explore adapting a lesson into a digital learning resource. An administrator could document an onboarding process. An accountant could demonstrate a clear management report. These are examples to investigate: each needs the relevant skills, a useful output and someone who actually needs it.',
        ],
        points: [
          'Name a problem you have helped solve.',
          'Describe what you did and what changed.',
          'Identify another person or organisation with a similar need.',
          'Find out what additional knowledge or tools that setting requires.',
        ],
      },
      {
        heading: 'Explore an option before making a big decision',
        paragraphs: [
          'ACCA’s Africa Talent Trends 2025 report found that 44% of its Nigerian accountancy and finance respondents were undertaking another role. The report gives country results for samples of at least 70 respondents but does not state Nigeria’s exact sample. Additional roles are not necessarily digital work, and the figure does not tell us how profitable they are.',
          'For your own next step, choose one direction to examine. It might be a different role, a more clearly defined professional service or a new way to contribute in your current workplace. Speak to someone who understands that opportunity and ask what evidence of ability would matter to them.',
        ],
      },
      {
        heading: 'Start with experience. Give it a direction.',
        paragraphs: [
          'EITDA’s learning journey begins with finding your value, packaging what you know and taking it to market. The aim is to help you describe your expertise, explore who needs it and work towards a practical next move.',
          'Learning and testing an idea take time, and no event can promise a job or a particular income. A clearer understanding of what you can offer, what you need to learn and whom to approach is a useful place to begin.',
        ],
      },
    ],
    sources: [
      {
        title:
          'PwC Nigeria: Six actions to build a future-fit workforce (2024 survey)',
        url: 'https://www.pwc.com/ng/en/assets/pdf/six-actions-to-build-a-future-fit-workforce-in-nigeria%20.pdf',
      },
      {
        title: 'Gallup: Nigeria, State of the Global Workplace (2026 report)',
        url: 'https://www.gallup.com/workplace/706562/state-global-workplace-nigeria-country-level-data.aspx',
      },
      {
        title: 'ACCA: Africa Talent Trends 2025',
        url: 'https://www.accaglobal.com/content/dam/ACCA_Global/professional-insights/Global-talent-trends-2025/PI-GTT-2025-AFRICA%20v6.pdf',
      },
    ],
  },
];

export function getPublishedStories(): Story[] {
  return stories
    .filter((story) => story.status === 'published')
    .sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));
}

export function getStory(slug: string): Story | undefined {
  return getPublishedStories().find((story) => story.slug === slug);
}

export function getReadingMinutes(story: Story): number {
  const words = [
    story.introduction,
    ...story.sections.flatMap((section) => [
      section.heading,
      ...section.paragraphs,
      ...(section.points ?? []),
    ]),
  ]
    .join(' ')
    .trim()
    .split(/\s+/).length;
  return Math.max(1, Math.ceil(words / 200));
}

export function formatStoryDate(date: string): string {
  return new Intl.DateTimeFormat('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  }).format(new Date(`${date}T00:00:00Z`));
}
