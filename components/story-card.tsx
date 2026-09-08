import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import {
  formatStoryDate,
  getReadingMinutes,
  type Story,
} from '@/content/stories';

export function StoryCard({
  story,
  featured = false,
  heading: Heading = 'h2',
}: {
  story: Story;
  featured?: boolean;
  heading?: 'h2' | 'h3';
}) {
  return (
    <article className={`story-card${featured ? ' story-card-featured' : ''}`}>
      <a className="story-card-link" href={`/blog/${story.slug}`}>
        <div className="story-card-image">
          <Image
            src={story.image.src}
            alt={story.image.alt}
            fill
            unoptimized
            sizes={
              featured
                ? '(max-width: 820px) 100vw, 55vw'
                : '(max-width: 520px) 100vw, (max-width: 1120px) 50vw, 33vw'
            }
          />
          {featured && (
            <span className="story-featured-label">Latest story</span>
          )}
        </div>
        <div className="story-card-copy">
          <p className="story-category">{story.category}</p>
          <Heading>{story.title}</Heading>
          <p className="story-excerpt">{story.excerpt}</p>
          <div className="story-meta">
            <time dateTime={story.publishedAt}>
              {formatStoryDate(story.publishedAt)}
            </time>
            <span>{getReadingMinutes(story)} min read</span>
          </div>
          <span className="story-read-link">
            Read story <ArrowUpRight size={20} aria-hidden="true" />
          </span>
        </div>
      </a>
    </article>
  );
}
