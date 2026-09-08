import type { Metadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import {
  formatStoryDate,
  getPublishedStories,
  getReadingMinutes,
  getStory,
} from '@/content/stories';
import { SITE_URL } from '@/lib/site';

type StoryPageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getPublishedStories().map((story) => ({ slug: story.slug }));
}

export async function generateMetadata({
  params,
}: StoryPageProps): Promise<Metadata> {
  const { slug } = await params;
  const story = getStory(slug);
  if (!story) notFound();
  const title = `${story.title} | EITDA`;
  const image = new URL(story.image.src, SITE_URL).href;
  return {
    title,
    description: story.excerpt,
    alternates: { canonical: `/blog/${story.slug}` },
    openGraph: {
      title,
      description: story.excerpt,
      url: new URL(`/blog/${story.slug}`, SITE_URL).href,
      type: 'article',
      publishedTime: `${story.publishedAt}T00:00:00Z`,
      authors: [story.author],
      images: [{ url: image, alt: story.image.alt }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description: story.excerpt,
      images: [image],
    },
  };
}

export default async function StoryPage({ params }: StoryPageProps) {
  const { slug } = await params;
  const story = getStory(slug);
  if (!story) notFound();

  return (
    <main id="blog-main">
      <article className="story-page">
        <header className="story-heading stories-container">
          <a className="blog-back-link" href="/blog">
            <ArrowLeft size={16} aria-hidden="true" /> All stories
          </a>
          <p className="story-category">{story.category}</p>
          <h1>{story.title}</h1>
          <p className="story-deck">{story.excerpt}</p>
          <div className="story-meta">
            <span>By {story.author}</span>
            <time dateTime={story.publishedAt}>
              {formatStoryDate(story.publishedAt)}
            </time>
            <span>{getReadingMinutes(story)} min read</span>
          </div>
        </header>
        <figure className="story-cover stories-container">
          <div className="story-cover-image">
            <Image
              src={story.image.src}
              alt={story.image.alt}
              fill
              unoptimized
              priority
              sizes="(max-width: 820px) 100vw, 88vw"
            />
          </div>
          {story.image.caption && (
            <figcaption>{story.image.caption}</figcaption>
          )}
        </figure>
        <div className="story-reading-layout stories-container">
          <aside className="story-contents" aria-label="In this story">
            <p>In this story</p>
            <nav aria-label="Article sections">
              {story.sections.map((section, index) => (
                <a key={section.heading} href={`#section-${index + 1}`}>
                  {section.heading}
                </a>
              ))}
            </nav>
          </aside>
          <div className="story-body">
            <p className="story-lead">{story.introduction}</p>
            {story.sections.map((section, index) => (
              <section key={section.heading} id={`section-${index + 1}`}>
                <h2>{section.heading}</h2>
                {section.paragraphs.map((paragraph, paragraphIndex) => (
                  <p key={paragraphIndex}>{paragraph}</p>
                ))}
                {section.points && (
                  <ul>
                    {section.points.map((point, pointIndex) => (
                      <li key={pointIndex}>{point}</li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
            {story.sources && story.sources.length > 0 && (
              <section
                className="story-sources"
                aria-labelledby="sources-heading"
              >
                <h2 id="sources-heading">Sources & further reading</h2>
                <ul>
                  {story.sources.map((source) => (
                    <li key={source.url}>
                      <a
                        href={source.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {source.title}
                        <span className="sr-only"> (opens in a new tab)</span>
                        <ArrowUpRight size={15} aria-hidden="true" />
                      </a>
                    </li>
                  ))}
                </ul>
              </section>
            )}
            <div className="story-next-step">
              <p className="section-kicker">Your next chapter</p>
              <h2>
                Give your experience
                <br />a new direction.
              </h2>
              <p>
                Explore the EITDA journey: find your value, package what you
                know and take it to market.
              </p>
              <a className="button button-yellow" href="/#programme">
                Explore EITDA <ArrowUpRight size={18} aria-hidden="true" />
              </a>
            </div>
            <a className="blog-back-link" href="/blog">
              <ArrowLeft size={16} aria-hidden="true" /> Back to all stories
            </a>
          </div>
        </div>
      </article>
    </main>
  );
}
