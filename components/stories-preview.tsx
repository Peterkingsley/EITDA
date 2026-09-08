import { ArrowUpRight } from 'lucide-react';
import { getPublishedStories } from '@/content/stories';
import { StoryCard } from '@/components/story-card';

export function StoriesPreview() {
  const stories = getPublishedStories().slice(0, 3);
  if (stories.length === 0) return null;

  return (
    <section
      className="stories-preview"
      id="stories"
      aria-labelledby="stories-heading"
    >
      <div className="stories-container">
        <div className="stories-section-heading">
          <div>
            <p className="section-kicker">The EITDA journal</p>
            <h2 id="stories-heading">
              Stories for your
              <br />
              next chapter.
            </h2>
          </div>
          <a className="stories-all-link" href="/blog">
            All stories <ArrowUpRight size={20} aria-hidden="true" />
          </a>
        </div>
        <div className={stories.length === 1 ? 'story-feature' : 'story-grid'}>
          {stories.map((story) => (
            <StoryCard
              key={story.slug}
              story={story}
              heading="h3"
              featured={stories.length === 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
