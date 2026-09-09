import { SiteImage } from '@/components/site-image';

const reflections = [
  {
    image: '/photos/host.jpg',
    alt: 'EITDA attendee smiling at the first edition',
    role: 'Community participant',
    title: 'I left with language for what I already know.',
    copy: 'The first edition helped a participant connect everyday work with a clearer contribution they can explain to a team or client.',
  },
  {
    image: '/photos/attendees.jpg',
    alt: 'Three EITDA attendees together',
    role: 'Early-career builder',
    title: 'The conversations made the next step feel practical.',
    copy: 'A first-edition reflection: meeting people across different fields made digital opportunity feel closer and easier to act on.',
  },
  {
    image: '/photos/connections.jpg',
    alt: 'Two EITDA community members connecting',
    role: 'Professional / founder',
    title: 'I saw that my experience has a market.',
    copy: 'The room created space to test ideas, ask better questions and see how existing skills can serve a changing economy.',
  },
];

export function AttendeeStories() {
  return (
    <section className="attendee-stories" id="attendee-stories" aria-labelledby="attendee-stories-title">
      <div className="attendee-stories-heading">
        <div>
          <p className="eyebrow dark"><span /> First edition reflections</p>
          <h2 id="attendee-stories-title">What people took away.</h2>
        </div>
        <p>These short editorial reflections capture the kind of shift EITDA is designed to create. Named participant profiles will be added as the 2026 story series is recorded.</p>
      </div>
      <div className="attendee-story-grid">
        {reflections.map((reflection) => (
          <article className="attendee-story-card" key={reflection.title}>
            <SiteImage src={reflection.image} alt={reflection.alt} sizes="(max-width: 820px) 100vw, 33vw" />
            <div>
              <span>{reflection.role}</span>
              <h3>{reflection.title}</h3>
              <p>{reflection.copy}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
