import type { Metadata } from 'next';
import { ArrowLeft } from 'lucide-react';
import { getPublishedStories } from '@/content/stories';
import { StoryCard } from '@/components/story-card';
import { SITE_URL } from '@/lib/site';

const title = 'Stories | EITDA';
const description =
  'Perspectives on work, experience and finding your next opportunity in the digital age.';

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: '/blog' },
  openGraph: {
    title,
    description,
    url: new URL('/blog', SITE_URL).href,
    type: 'website',
    images: [
      {
        url: new URL('/eitda-community.jpg', SITE_URL).href,
        alt: 'The EITDA community',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: [new URL('/eitda-community.jpg', SITE_URL).href],
  },
};

export default function BlogPage() {
  const stories = getPublishedStories();
  const groups = [
    { id: 'career', label: 'Career', description: 'Work, positioning and the next chapter.', categories: ['Work & careers'] },
    { id: 'digital-economy', label: 'Digital Economy', description: 'The skills, systems and shifts changing how we earn.', categories: ['Digital economy'] },
    { id: 'founders', label: 'Founders', description: 'Building teams, businesses and useful things.', categories: ['Founders & teams', 'Business development'] },
    { id: 'eitda-2026', label: 'EITDA 2026', description: 'Updates, ideas and preparation for the room.', categories: ['EITDA 2026'] },
  ];

  return (
    <main id="blog-main">
      <section className="blog-intro">
        <div className="stories-container">
          <a className="blog-back-link" href="/">
            <ArrowLeft size={16} aria-hidden="true" /> Back to EITDA
          </a>
          <p className="section-kicker">The EITDA journal</p>
          <h1>
            Stories for your
            <br />
            <em>next chapter.</em>
          </h1>
          <p className="blog-intro-copy">
            Perspectives on work, experience and finding your next opportunity
            in the digital age.
          </p>
          <nav className="blog-category-nav" aria-label="Story categories">
            {groups.map((group) => <a key={group.id} href={`#${group.id}`}>{group.label}</a>)}
          </nav>
        </div>
      </section>
      <section className="blog-collection" aria-label="Published stories">
        <div className="stories-container">
          {stories.length > 0 ? groups.map((group) => {
            const groupedStories = stories.filter((story) => group.categories.includes(story.category));
            if (groupedStories.length === 0) return null;
            return (
              <section className="blog-category-group" id={group.id} key={group.id}>
                <div className="blog-category-heading">
                  <div><p className="section-kicker">Campaign stream</p><h2>{group.label}</h2></div>
                  <p>{group.description}</p>
                </div>
                <div className="story-grid">
                  {groupedStories.map((story) => <StoryCard key={story.slug} story={story} />)}
                </div>
              </section>
            );
          }) : (
            <div className="blog-empty">
              <h2>The next story is on its way.</h2>
              <p>In the meantime, discover what we are building at EITDA.</p>
              <a className="button button-yellow" href="/#programme">
                Explore the programme
              </a>
            </div>
          )}
          {stories.length > 0 && <div className="blog-whatsapp-cta"><div><p className="section-kicker">Stay close to the story</p><h2>Get the next EITDA story on WhatsApp.</h2></div><a className="button button-yellow" href="https://whatsapp.com/channel/0029Vb86kPQ2ZjCmbY8RrY1x" target="_blank" rel="noopener noreferrer">Join the channel <ArrowLeft size={16} aria-hidden="true" /></a></div>}
        </div>
      </section>
    </main>
  );
}
