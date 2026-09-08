import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function StoryNotFound() {
  return (
    <main className="blog-empty" id="blog-main">
      <p className="section-kicker">Story unavailable</p>
      <h1>There is no story here yet.</h1>
      <p>
        This story may have moved or is not available. Explore the latest from
        EITDA.
      </p>
      <Link className="button button-yellow" href="/blog">
        <ArrowLeft size={18} aria-hidden="true" /> Back to stories
      </Link>
    </main>
  );
}
