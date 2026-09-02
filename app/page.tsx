import { ArrowDownRight, ArrowUpRight } from 'lucide-react';

const tracks = [
  {
    number: '01',
    title: 'Digital Skills',
    copy: 'Build the practical confidence to use today’s digital tools for work, learning, and growth.',
    image: '/photos/speaker.jpg',
    alt: 'An EITDA participant sharing a practical demonstration',
  },
  {
    number: '02',
    title: 'Work & Freelancing',
    copy: 'Learn how to position your skills, find opportunities, and deliver value in a borderless economy.',
    image: '/photos/conversation.jpg',
    alt: 'EITDA participants connecting after a session',
  },
  {
    number: '03',
    title: 'Digital Enterprise',
    copy: 'Turn useful ideas into resilient, technology-enabled ventures that serve real communities.',
    image: '/photos/collaboration.jpg',
    alt: 'Participants collaborating during the EITDA event',
  },
];

const pathway = [
  {
    step: 'Discover',
    copy: 'Understand the digital economy and identify where your strengths can create value.',
  },
  {
    step: 'Develop',
    copy: 'Build useful skills through practical, guided learning and hands-on exercises.',
  },
  {
    step: 'Deploy',
    copy: 'Turn learning into a portfolio, service, product, or next step you can act on.',
  },
];

const faqs = [
  [
    'What is EITDA?',
    'Earning in the Digital Age is an Eshiet Foundation initiative designed to help young people understand, navigate, and benefit from the opportunities created by the digital economy.',
  ],
  [
    'Is this the first EITDA edition?',
    'No. The upcoming event on 28 November 2026 is the second edition. The first edition was held in December 2025, and the photographs on this website are from that inaugural gathering.',
  ],
  [
    'Who is the programme for?',
    'EITDA is for curious young people who want practical exposure to digital work, enterprise, and the skills shaping today’s economy.',
  ],
  [
    'Do I need previous experience?',
    'No. The learning journey is designed to be approachable for beginners while still giving participants practical ideas they can build on.',
  ],
  [
    'When and where is EITDA 2026?',
    'EITDA takes place on Saturday, 28 November 2026 at Women War Memorial, Ikot Abasi, Akwa Ibom.',
  ],
  [
    'How much are tickets?',
    'General admission is free. The ₦15,000 VIP Pass is limited to 50 people and includes reserved front-row seating, the full event recording, after-event speaker access, and more intimate networking and Q&A opportunities.',
  ],
];

const galleryPhotos = [
  {
    src: '/photos/session.jpg',
    alt: 'A learning session at the first EITDA edition in December 2025',
    className: 'gallery-wide',
  },
  {
    src: '/photos/community-four.jpg',
    alt: 'Members of the EITDA community at the first edition',
    className: 'gallery-standard',
  },
  {
    src: '/photos/learning.jpg',
    alt: 'A participant focused during the first EITDA edition',
    className: 'gallery-tall',
  },
  {
    src: '/photos/host.jpg',
    alt: 'An EITDA host smiling at the first edition',
    className: 'gallery-standard',
  },
  {
    src: '/photos/stage-moment.jpg',
    alt: 'A stage moment from the first EITDA edition',
    className: 'gallery-standard',
  },
  {
    src: '/photos/attendees.jpg',
    alt: 'Three attendees at the first EITDA edition',
    className: 'gallery-wide',
  },
  {
    src: '/photos/connections.jpg',
    alt: 'Two community members at the first EITDA edition',
    className: 'gallery-standard',
  },
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="EITDA home">
          <img
            src="/eshiet-foundation-full-logo.png"
            alt="Eshiet Foundation"
          />
          <span>
            <strong>EITDA</strong>
            <small>Second Edition · 2026</small>
          </span>
        </a>

        <nav className="desktop-nav" aria-label="Primary navigation">
          <a href="#about">About</a>
          <a href="#programme">Programme</a>
          <a href="#tickets">Tickets</a>
          <a href="#impact">Impact</a>
          <a href="#faq">FAQ</a>
        </nav>

        <a className="nav-cta" href="#tickets">
          Ticket options
          <ArrowUpRight size={17} aria-hidden="true" />
        </a>
      </header>

      <section className="hero" id="top">
        <img
          className="hero-image"
          src="/eitda-community.jpg"
          alt="Young people gathered at the first Earning in the Digital Age edition in December 2025"
        />

        <div className="hero-shade" />
        <div className="hero-grid" aria-hidden="true" />

        <div className="hero-content">
          <p className="eyebrow">
            <span /> EITDA 2026 · Second Edition
          </p>

          <h1>
            Learn the skills.
            <br />
            Build your future.
          </h1>

          <p className="hero-copy">
            Earning in the Digital Age returns for its second edition—an Eshiet
            Foundation youth empowerment experience helping a new generation
            turn digital skills into opportunity.
          </p>

          <div className="hero-actions">
            <a className="button button-yellow" href="#tickets">
              View ticket options
              <ArrowDownRight size={20} aria-hidden="true" />
            </a>

            <a className="text-link" href="#about">
              Discover our mission
              <ArrowUpRight size={17} aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className="hero-side-note">
          <span>Skills</span>
          <span>Opportunity</span>
          <span>Community</span>
        </div>
      </section>

      <section className="intro" id="about">
        <div className="section-kicker">
          Why EITDA <span>01</span>
        </div>

        <div className="intro-copy">
          <h2>The digital economy should work for everyone.</h2>

          <p>
            EITDA creates a practical bridge between ambition and access. We
            bring learning, real-world guidance, and community into one place so
            young people can move from consuming technology to creating value
            with it.
          </p>
        </div>
      </section>

      <section className="event-details" id="tickets">
        <div className="event-details-top">
          <div className="event-details-heading">
            <p className="eyebrow dark">
              <span /> The Second Edition · EITDA 2026
            </p>

            <h2>
              One day.
              <br />
              Real opportunity.
            </h2>
          </div>

          <div className="event-venue">
            <div className="event-date-block">
              <span>Saturday</span>
              <strong>28</strong>
              <small>November 2026</small>
            </div>

            <div className="event-place-block">
              <span>Venue</span>
              <strong>
                Women War
                <br />
                Memorial
              </strong>
              <p>Ikot Abasi, Akwa Ibom</p>
            </div>
          </div>
        </div>

        <div className="ticket-options">
          <article className="ticket-card ticket-free" data-number="01">
            <div>
              <span>General admission</span>
              <b>01</b>
            </div>

            <strong>Free</strong>

            <p>
              Join the EITDA 2026 learning experience at no ticket cost.
            </p>

            <span className="ticket-status">
              Registration details coming soon
            </span>
          </article>

          <article className="ticket-card ticket-vip" data-number="02">
            <div>
              <span>VIP Pass</span>
              <b>Only 50</b>
            </div>

            <strong>
              <small>₦</small>15,000
            </strong>

            <p>
              A more personal EITDA experience with premium access throughout
              the event.
            </p>

            <ul className="vip-benefits" aria-label="VIP Pass benefits">
              <li>Reserved front-row seating</li>
              <li>Full event recording</li>
              <li>Special after-event access to participating speakers</li>
              <li>More intimate networking and Q&amp;A opportunities</li>
            </ul>

            <span className="ticket-status">Limited to 50 people</span>
          </article>
        </div>
      </section>

      <section className="track-preview" id="programme">
        <div className="track-heading">
          <p className="eyebrow dark">
            <span /> The learning journey
          </p>

          <h2>
            Skills for the way
            <br />
            the world works now.
          </h2>
        </div>

        <div className="track-list">
          {tracks.map((track) => (
            <article className="track-card" key={track.number}>
              <img
                src={track.image}
                alt={track.alt}
                loading="lazy"
                decoding="async"
              />

              <div className="track-card-copy">
                <span>{track.number}</span>
                <h3>{track.title}</h3>
                <p>{track.copy}</p>
                <ArrowUpRight aria-hidden="true" />
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="pathway">
        <div className="pathway-copy">
          <div className="section-kicker light">
            How it works <span>02</span>
          </div>

          <h2>
            From curiosity
            <br />
            to capability.
          </h2>

          <p>
            EITDA is built around action. Each stage moves participants closer
            to seeing themselves as confident contributors to the digital
            economy.
          </p>
        </div>

        <div className="pathway-steps">
          {pathway.map((item, index) => (
            <article key={item.step}>
              <span>0{index + 1}</span>

              <div>
                <h3>{item.step}</h3>
                <p>{item.copy}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="experience" aria-labelledby="experience-title">
        <div className="experience-heading">
          <p className="eyebrow">
            <span /> First Edition · December 2025
          </p>

          <h2 id="experience-title">
            Where the journey
            <br />
            began.
          </h2>

          <p>
            These moments are from our first edition—real rooms, real
            conversations, and a community moving from possibility to practice.
          </p>
        </div>

        <div className="gallery-grid">
          {galleryPhotos.map((photo) => (
            <figure className={photo.className} key={photo.src}>
              <img
                src={photo.src}
                alt={photo.alt}
                loading="lazy"
                decoding="async"
              />
            </figure>
          ))}
        </div>
      </section>

      <section className="community" id="impact">
        <div className="community-image-wrap">
          <img
            src="/photos/team.jpg"
            alt="The EITDA organising team at the first edition in December 2025"
            loading="lazy"
            decoding="async"
          />

          <div className="photo-label">
            First edition · Dec 2025 <span>↗</span>
          </div>
        </div>

        <div className="community-copy">
          <p className="eyebrow dark">
            <span /> From one edition to the next
          </p>

          <h2>Opportunity grows when knowledge is shared.</h2>

          <p>
            Our first edition in December 2025 showed what happens when access,
            practical learning, and community meet. The second edition builds on
            that momentum and opens the door to even more young people.
          </p>

          <div className="impact-principles">
            <span>Accessible learning</span>
            <span>Practical guidance</span>
            <span>Peer support</span>
          </div>
        </div>
      </section>

      <section className="manifesto">
        <p>Our belief</p>

        <h2>
          Talent is everywhere.
          <br />
          <em>Access should be too.</em>
        </h2>

        <div className="manifesto-mark" aria-hidden="true">
          <i />
          <i />
          <i />
        </div>
      </section>

      <section className="faq" id="faq">
        <div className="faq-heading">
          <div className="section-kicker">
            Good to know <span>03</span>
          </div>

          <h2>
            Questions,
            <br />
            answered.
          </h2>

          <p>
            Everything you need to know about attending EITDA 2026 in Ikot
            Abasi.
          </p>
        </div>

        <div className="faq-list">
          {faqs.map(([question, answer], index) => (
            <details key={question} open={index === 0}>
              <summary>
                <span>0{index + 1}</span>
                {question}
                <b aria-hidden="true">+</b>
              </summary>

              <p>{answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="closing">
        <img
          className="closing-image"
          src="/photos/session.jpg"
          alt=""
          aria-hidden="true"
          loading="lazy"
          decoding="async"
        />

        <div className="closing-overlay" aria-hidden="true" />

        <div>
          <p className="eyebrow">
            <span /> The next chapter
          </p>

          <h2>
            Ready to earn
            <br />
            in the digital age?
          </h2>
        </div>

        <div className="closing-note">
          <p>
            Join the second edition on Saturday, 28 November 2026 at Women War
            Memorial, Ikot Abasi. General admission is free; VIP tickets are
            ₦15,000.
          </p>

          <a className="button button-yellow" href="#tickets">
            View ticket options
            <ArrowUpRight size={20} aria-hidden="true" />
          </a>
        </div>
      </section>

      <footer>
        <div className="footer-brand">
          <img
            src="/eshiet-foundation-full-logo.png"
            alt="Eshiet Foundation"
          />

          <div>
            <strong>EITDA</strong>
            <span>Earning in the Digital Age</span>
          </div>
        </div>

        <nav aria-label="Footer navigation">
          <a href="#about">About</a>
          <a href="#programme">Programme</a>
          <a href="#tickets">Tickets</a>
          <a href="#impact">Impact</a>
          <a href="#faq">FAQ</a>
        </nav>

        <div className="footer-bottom">
          <span>An initiative of Eshiet Foundation</span>
          <span>© {new Date().getFullYear()} Eshiet Foundation</span>
        </div>
      </footer>
    </main>
  );
}