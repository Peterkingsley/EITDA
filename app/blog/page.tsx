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
  const [latest, ...moreStories] = getPublishedStories();

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
        </div>
      </section>
      <section className="blog-collection" aria-label="Published stories">
        <div className="stories-container">
          {latest ? (
            <>
              <StoryCard story={latest} featured />
              {moreStories.length > 0 && (
                <div className="blog-more-stories">
                  <h2 className="blog-more-heading">More stories</h2>
                  <div className="story-grid">
                    {moreStories.map((story) => (
                      <StoryCard key={story.slug} story={story} />
                    ))}
                  </div>
                </div>
              )}
            </>
          ) : (
            <div className="blog-empty">
              <h2>The next story is on its way.</h2>
              <p>In the meantime, discover what we are building at EITDA.</p>
              <a className="button button-yellow" href="/#programme">
                Explore the programme
              </a>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
