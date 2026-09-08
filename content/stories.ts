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
  {
    slug: 'why-stablecoin-builders-belong-in-the-eitda-room',
    title: 'Why stablecoin builders belong in the EITDA room.',
    excerpt:
      'The stablecoin market is crowded. The opportunity is in understanding the real problems underneath the products.',
    category: 'Digital economy',
    author: 'Kingsley Peter',
    publishedAt: '2026-09-08',
    status: 'published',
    image: {
      src: '/drive-stories/e-4.jpg',
      alt: 'A speaker sharing ideas with participants at an EITDA session',
    },
    introduction:
      'There are hundreds of teams building stablecoin payment products. From the outside, many of them can look almost identical. That is exactly why the people building in this space need better conversations about customers, distribution and the problems they are actually solving.',
    sections: [
      {
        heading: 'A crowded market still has room',
        paragraphs: [
          'The number of products does not mean the opportunity has disappeared. Transfers, settlement and cross-border payments are large, recurring problems. The question is whether a team can make one part of that experience cheaper, faster, safer or easier for a specific customer.',
          'A founder does not need to copy every other payment product. They need to understand which customer has a problem worth solving and why their approach deserves attention.',
        ],
      },
      {
        heading: 'Africa needs a stronger voice',
        paragraphs: [
          'African builders should not only consume infrastructure created elsewhere. More teams need to enter the market, learn the business deeply and build enough useful products to earn meaningful market share.',
          'EITDA will bring builders into the same room as professionals who want to understand how digital products are created, positioned and taken to market.',
        ],
      },
      {
        heading: 'The conversation at EITDA',
        paragraphs: [
          'The goal is not to turn every attendee into a stablecoin founder. It is to show how emerging markets create new roles for people who can research customers, explain products, build partnerships, support users and operate responsibly.',
          'The digital economy needs more than engineers. It needs people who can connect technology to a real human problem.',
        ],
      },
    ],
    sources: [
      {
        title: 'Original LinkedIn post by Kingsley Peter',
        url: 'https://www.linkedin.com/in/kingsley-peter-a3a116204/recent-activity/all/',
      },
    ],
  },
  {
    slug: 'come-to-eitda-knowing-what-you-want-to-learn',
    title: 'Come to EITDA knowing what you want to learn.',
    excerpt:
      'EITDA should begin before the event date. Here is the preparation we want every attendee to make.',
    category: 'EITDA 2026',
    author: 'Kingsley Peter',
    publishedAt: '2026-09-08',
    status: 'published',
    image: {
      src: '/drive-stories/e-3.jpg',
      alt: 'A speaker explaining an idea to the EITDA audience',
    },
    introduction:
      'A good conference does not leave you with a collection of quotes and photographs. It helps you see a problem in your own life more clearly and gives you a practical next step.',
    sections: [
      {
        heading: 'Do not buy a ticket for the flyer',
        paragraphs: [
          "Before you arrive, you should understand what EITDA is trying to show you: how to look at the knowledge, skills and experience you already have and ask how they could become useful in today's digital economy.",
          'That question is more valuable than a long list of impressive speakers because it gives you something to test against every session.',
        ],
      },
      {
        heading: 'Bring a real question',
        paragraphs: [
          'What could you package? Who might pay for it? How should you position it? Which tools would help you deliver it? These questions turn passive attendance into a working session.',
          'Write down one problem from your current work before you come. Notice the tasks people already trust you to handle. Bring those examples into the room.',
        ],
      },
      {
        heading: 'Leave with a next move',
        paragraphs: [
          'The event is successful when you leave with more than motivation. You should know what to investigate, who to speak to and what small experiment you can run next.',
          'If you go home without knowing how to apply what you learned, then we have not done enough.',
        ],
      },
    ],
    sources: [
      {
        title: 'Original LinkedIn post by Kingsley Peter',
        url: 'https://www.linkedin.com/in/kingsley-peter-a3a116204/recent-activity/all/',
      },
    ],
  },
  {
    slug: 'your-skill-needs-a-market-not-another-certificate',
    title: 'Your skill needs a market, not another certificate.',
    excerpt:
      'Experience alone does not set a price. The right customer, problem and positioning do.',
    category: 'Work & careers',
    author: 'Kingsley Peter',
    publishedAt: '2026-09-08',
    status: 'published',
    image: {
      src: '/drive-stories/e-47.jpg',
      alt: 'Two EITDA participants standing together after a session',
    },
    introduction:
      'Two people can do similar work and earn very different amounts. The difference is often not another skill. It is the customer they serve and the value that customer attaches to the problem.',
    sections: [
      {
        heading: 'The same work can carry different value',
        paragraphs: [
          'A marketer with four years of experience may earn more than someone with ten years. A designer may charge far more for a similar deliverable when the work is connected to a higher-value business problem.',
          'This does not mean that expertise is irrelevant. It means expertise becomes valuable in context.',
        ],
      },
      {
        heading: 'Find the problem behind the price',
        paragraphs: [
          'A buyer does not purchase years of experience. They purchase a result: more qualified leads, a clearer process, a faster launch or fewer expensive mistakes.',
          'Start by finding people who have the problem you know how to solve and the resources to act on it.',
        ],
      },
      {
        heading: 'Positioning makes experience visible',
        paragraphs: [
          'A clear offer helps the right people recognise themselves in your work. Explain who you help, what problem you solve, what outcome you support and how the work happens.',
          'That is one of the practical skills EITDA is designed to help you build.',
        ],
      },
    ],
    sources: [
      {
        title: 'Original LinkedIn post by Kingsley Peter',
        url: 'https://www.linkedin.com/in/kingsley-peter-a3a116204/recent-activity/all/',
      },
    ],
  },
  {
    slug: 'the-operating-speed-lesson-from-utila',
    title: 'The operating-speed lesson from Utila.',
    excerpt:
      'A company becomes easier to notice when it keeps creating useful things worth talking about.',
    category: 'Founders & teams',
    author: 'Kingsley Peter',
    publishedAt: '2026-09-08',
    status: 'published',
    image: {
      src: '/drive-stories/e-6.jpg',
      alt: 'Participants celebrating the EITDA experience',
    },
    introduction:
      'Sometimes what looks like excellent marketing is a company moving quickly enough to give its marketing team something real to talk about.',
    sections: [
      {
        heading: 'Visibility follows useful movement',
        paragraphs: [
          'Partnerships, product updates, events, new hires and market conversations create a steady stream of reasons for people to pay attention. That kind of visibility is difficult to manufacture when the rest of the company is standing still.',
          'The lesson is bigger than any one company. Marketing is often a reflection of the work happening underneath it.',
        ],
      },
      {
        heading: 'The whole team contributes to attention',
        paragraphs: [
          'Engineering, business development, customer support and leadership all create stories when they solve meaningful problems. A content team can explain that progress, but it cannot invent progress forever.',
          'Teams become more visible when they build a habit of learning, shipping and sharing what changed.',
        ],
      },
      {
        heading: 'What EITDA is building',
        paragraphs: [
          'EITDA is designed around the same idea: make useful conversations difficult to ignore. We want professionals and founders to see how their experience can become a contribution that people understand and value.',
          'That starts with doing work worth explaining.',
        ],
      },
    ],
    sources: [
      {
        title: 'Original LinkedIn post by Kingsley Peter',
        url: 'https://www.linkedin.com/in/kingsley-peter-a3a116204/recent-activity/all/',
      },
    ],
  },
  {
    slug: 'stablecoins-are-not-the-whole-story',
    title: 'Stablecoins are not the whole story.',
    excerpt:
      'Digital products need people who can translate infrastructure into trust, clarity and everyday usefulness.',
    category: 'Digital economy',
    author: 'EITDA Editorial',
    publishedAt: '2026-09-07',
    status: 'published',
    image: {
      src: '/drive-stories/e-2.jpg',
      alt: 'A participant speaking with an EITDA facilitator',
    },
    introduction:
      'The technology behind a payment product can be complex. The reason a customer chooses it should be simple.',
    sections: [
      {
        heading: 'Start with the person using it',
        paragraphs: [
          'A merchant wants faster settlement. A freelancer wants to receive an international payment. A family wants to send money across borders without losing too much to fees.',
          'None of these people needs a lecture before they understand the benefit. They need a product that is reliable, affordable and easy to use.',
        ],
      },
      {
        heading: 'Technology needs translation',
        paragraphs: [
          'This is why digital teams need researchers, writers, operators, partnership leads and customer advocates alongside technical builders.',
          'The person who can explain a complex product in the language of a customer is creating real market value.',
        ],
      },
      {
        heading: 'The EITDA connection',
        paragraphs: [
          'EITDA helps people identify the work they can already do around emerging technology. You may not build the infrastructure, but you may be able to help the right people understand, adopt or improve it.',
        ],
      },
    ],
    sources: [
      {
        title: 'Original LinkedIn post by Kingsley Peter',
        url: 'https://www.linkedin.com/in/kingsley-peter-a3a116204/recent-activity/all/',
      },
    ],
  },
  {
    slug: 'package-your-knowledge-around-an-outcome',
    title: 'Package your knowledge around an outcome.',
    excerpt:
      'Professional knowledge becomes easier to sell when a buyer can see exactly what it helps them achieve.',
    category: 'Work & careers',
    author: 'EITDA Editorial',
    publishedAt: '2026-08-18',
    status: 'published',
    image: {
      src: '/drive-stories/e-93.jpg',
      alt: 'A speaker holding a microphone during an EITDA session',
    },
    introduction:
      '“Marketing consultant” is broad. “I help early-stage fintech companies build their first repeatable customer-acquisition process” gives a buyer something they can understand.',
    sections: [
      {
        heading: 'A useful offer answers four questions',
        paragraphs: [
          'Who is the work for? What problem does it solve? What result should the buyer expect? How will the work be delivered?',
          'These questions do not force you to promise an outcome you cannot control. They remove the ambiguity that makes good work difficult to buy.',
        ],
      },
      {
        heading: 'Clarity helps everyone',
        paragraphs: [
          'A clear offer helps clients decide faster, helps collaborators refer you and helps you see which opportunities fit your strengths.',
          'It also reveals what you still need to learn. Packaging your knowledge is a practical form of professional development.',
        ],
      },
      {
        heading: 'Start with one problem',
        paragraphs: [
          'Choose one audience and one recurring problem. Describe the work you would do, the evidence you have and the next conversation you need to have.',
          'That is a stronger starting point than listing every skill you have ever collected.',
        ],
      },
    ],
    sources: [
      {
        title: 'Original LinkedIn post by Kingsley Peter',
        url: 'https://www.linkedin.com/in/kingsley-peter-a3a116204/recent-activity/all/',
      },
    ],
  },
  {
    slug: 'customer-conversations-before-more-code',
    title: 'Have customer conversations before writing more code.',
    excerpt:
      'A week of building can show that a product works. A few honest conversations can show whether anyone needs it.',
    category: 'Founders & teams',
    author: 'EITDA Editorial',
    publishedAt: '2026-08-18',
    status: 'published',
    image: {
      src: '/drive-stories/e-31.jpg',
      alt: 'An EITDA facilitator speaking with participants in a classroom',
    },
    introduction:
      'Customer conversations are not a final check after the product is built. They are one of the earliest tools for deciding what deserves to be built.',
    sections: [
      {
        heading: 'Investigate existing behaviour',
        paragraphs: [
          'Ask how people solve the problem today, what frustrates them about the current process, what they have already tried and what the problem costs them.',
          'These questions are more useful than asking whether someone likes your idea.',
        ],
      },
      {
        heading: 'Find the decision-maker',
        paragraphs: [
          'A person who experiences a problem may not be the person who can buy a solution. Good discovery includes the people who use, approve and pay for the work.',
          'That context can change the product, the pitch and the market you choose.',
        ],
      },
      {
        heading: 'A skill for every professional',
        paragraphs: [
          'Customer discovery is not limited to startup founders. Anyone who wants to package professional knowledge needs to understand the person they are trying to help.',
          'EITDA treats listening as a market skill.',
        ],
      },
    ],
    sources: [
      {
        title: 'Original LinkedIn post by Kingsley Peter',
        url: 'https://www.linkedin.com/in/kingsley-peter-a3a116204/recent-activity/all/',
      },
    ],
  },
  {
    slug: 'a-busy-partnership-pipeline-can-still-be-empty',
    title: 'A busy partnership pipeline can still be empty.',
    excerpt:
      'Count the conversations that reached a clear next step, not only the ones that started.',
    category: 'Business development',
    author: 'EITDA Editorial',
    publishedAt: '2026-08-18',
    status: 'published',
    image: {
      src: '/drive-stories/e-67.jpg',
      alt: 'Participants presenting a partnership moment at EITDA',
    },
    introduction:
      'A long list of meetings can create the feeling of progress while promising relationships quietly lose momentum.',
    sections: [
      {
        heading: 'Measure movement',
        paragraphs: [
          'A serious opportunity should have a defined customer problem, a reason both sides benefit, a named owner in each company, a specific action and deadline, and a simple measure of success.',
          'Without those details, activity creates motion but not necessarily progress.',
        ],
      },
      {
        heading: 'Clarity is a professional skill',
        paragraphs: [
          'The ability to turn an interesting conversation into a clear decision process is valuable across sales, partnerships, community work and fundraising.',
          'It is a form of knowledge that many professionals already use informally and can learn to explain more deliberately.',
        ],
      },
      {
        heading: 'Build the next step together',
        paragraphs: [
          'Before ending a promising conversation, agree on what happens next, who owns it and when you will review progress. That small habit protects both sides from vague follow-up.',
        ],
      },
    ],
    sources: [
      {
        title: 'Original LinkedIn post by Kingsley Peter',
        url: 'https://www.linkedin.com/in/kingsley-peter-a3a116204/recent-activity/all/',
      },
    ],
  },
  {
    slug: 'the-first-step-to-web3-adoption-is-a-normal-problem',
    title: 'The first step to Web3 adoption is a normal problem.',
    excerpt:
      'People adopt technology when it solves an everyday need, not when they have memorised its vocabulary.',
    category: 'Digital economy',
    author: 'EITDA Editorial',
    publishedAt: '2026-08-18',
    status: 'published',
    image: {
      src: '/drive-stories/e-63.jpg',
      alt: 'The EITDA community gathered for a group photograph',
    },
    introduction:
      'Web3 adoption will not begin with customers learning blockchain vocabulary. It will begin with ordinary problems being solved better.',
    sections: [
      {
        heading: 'Lead with the problem',
        paragraphs: [
          'A merchant may want faster settlement. A freelancer may need a better way to receive international payments. A family may need to send money across borders at a fairer cost.',
          'These needs are clear before anyone explains the infrastructure behind them.',
        ],
      },
      {
        heading: 'Make the experience trustworthy',
        paragraphs: [
          'Customers care whether a product is reliable, affordable and easy to use. Complex technology can stay behind the scenes if the experience earns confidence.',
          'That changes how teams should write, sell, support and design their products.',
        ],
      },
      {
        heading: 'Where professionals fit',
        paragraphs: [
          'The digital economy needs people who can translate technical capability into a useful customer experience. Research, education, operations, partnerships and communication all matter.',
        ],
      },
    ],
    sources: [
      {
        title: 'Original LinkedIn post by Kingsley Peter',
        url: 'https://www.linkedin.com/in/kingsley-peter-a3a116204/recent-activity/all/',
      },
    ],
  },
  {
    slug: 'more-users-do-not-always-mean-more-growth',
    title: 'More users do not always mean more growth.',
    excerpt:
      'A better growth question is whether the right customers stay long enough to reach a meaningful outcome.',
    category: 'Founders & teams',
    author: 'EITDA Editorial',
    publishedAt: '2026-08-18',
    status: 'published',
    image: {
      src: '/drive-stories/e.jpg',
      alt: 'An attendee listening during an EITDA session',
    },
    introduction:
      'A dashboard can show rising sign-ups while the business is simply renting attention through incentives.',
    sections: [
      {
        heading: 'Growth needs the right customer',
        paragraphs: [
          'People may sign up for a promotion, complete the rewarded action and leave when the reward disappears. That creates activity without durable demand.',
          'The cheapest user to acquire can become the most expensive user to serve.',
        ],
      },
      {
        heading: 'Ask better questions',
        paragraphs: [
          'Which users stay? What did they come to accomplish? How quickly do they reach that outcome? Why do others leave?',
          'These questions help teams improve the product and the customer they choose to pursue.',
        ],
      },
      {
        heading: 'A lesson for your own work',
        paragraphs: [
          'Professionals can apply the same discipline to their careers. Do not count every opportunity equally. Notice which people value your contribution, return for more and can help you grow in the direction you want.',
        ],
      },
    ],
    sources: [
      {
        title: 'Original LinkedIn post by Kingsley Peter',
        url: 'https://www.linkedin.com/in/kingsley-peter-a3a116204/recent-activity/all/',
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
