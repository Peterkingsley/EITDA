import { ArrowDownRight, ArrowUpRight } from 'lucide-react';

const SELAR_TICKET_URL = 'https://selar.com/817383or48';
const SELAR_VIP_URL = 'https://selar.com/8d08851l58';

const tracks = [
  {
    number: '01',
    title: 'Find Your Value',
    copy: 'Break down your experience, skills and knowledge to discover the problems you are already equipped to solve.',
    image: '/photos/speaker.jpg',
    alt: 'An EITDA participant sharing a practical demonstration',
  },
  {
    number: '02',
    title: 'Package What You Know',
    copy: 'Turn your experience into a clear service, role, solution or contribution that a company, founder or organisation can understand and use.',
    image: '/photos/conversation.jpg',
    alt: 'EITDA participants connecting after a session',
  },
  {
    number: '03',
    title: 'Take It To Market',
    copy: 'Learn how to position yourself, find the people who need your expertise, communicate your value and turn opportunities into income.',
    image: '/photos/collaboration.jpg',
    alt: 'Participants collaborating during the EITDA event',
  },
];

const pathway = [
  {
    step: 'A Clearer Positioning',
    copy: 'Know what part of your experience is valuable and how to describe it in a way companies, founders and organisations understand.',
  },
  {
    step: 'A Market To Target',
    copy: 'Know the types of startups, businesses, teams and opportunities that are most likely to need what you already know.',
  },
  {
    step: 'A Practical Next Move',
    copy: 'Leave with a clearer offer, positioning, outreach direction or career path you can start acting on immediately.',
  },
];

const speakerTeasers = [
  { number: '01', note: 'Founder / Operator', prompt: 'Who do you think this is?' },
  { number: '02', note: 'Industry Professional', prompt: 'Revealing soon' },
  { number: '03', note: 'Builder / Advisor', prompt: 'Speaker reveal coming soon' },
  { number: '04', note: 'Market Expert', prompt: 'Who is joining the room?' },
  { number: '05', note: 'Founder / Operator', prompt: 'Revealing soon' },
  { number: '06', note: 'Industry Professional', prompt: 'Speaker reveal coming soon' },
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
    'General Access is free and available for both physical and virtual attendees. The ₦15,000 VIP Experience is also available physically or virtually. Physical VIP includes reserved front-row seating, while all VIP attendees receive premium access, the full event recording, private VIP community access, speaker access, and more intimate networking and Q&A opportunities.',
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
          <a href="#speakers">Speakers</a>
          <a href="#tickets">Tickets</a>
          <a href="#impact">Impact</a>
          <a href="#faq">FAQ</a>
        </nav>

        <a className="nav-cta" href="#tickets">
          Book tickets
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
            Your experience.
            <br />
            Can earn more.
          </h1>

          <p className="hero-copy">
            EITDA helps professionals, business owners, workers and everyday
            people discover where their existing knowledge is valuable, how to
            package it, and how to position themselves for companies and
            opportunities willing to pay for it.
          </p>

          <div className="hero-actions">
            <a className="button button-yellow" href="#tickets">
              Choose your ticket
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
          <h2>
            You don&apos;t have to
            <br />
            start from zero.
          </h2>

          <p>
            Too many people think earning in the digital economy means learning
            to code, becoming a creator or starting an entirely new career. EITDA
            starts with what you already know and shows you how experience from
            banking, medicine, teaching, trading, public service, business and
            other fields can become valuable to startups, companies and growing
            teams.
          </p>
        </div>
      </section>

      <section className="track-preview" id="programme">
        <div className="track-heading">
          <p className="eyebrow dark">
            <span /> The EITDA journey
          </p>

          <h2>
            From experience
            <br />
            to market value.
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


      <section className="event-details" id="tickets">
        <div className="event-details-top">
          <div className="event-details-heading">
            <p className="eyebrow dark">
              <span /> Physical or Virtual · EITDA 2026
            </p>

            <h2>
              Choose how you
              <br />
              experience EITDA.
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
              <span>General access</span>
              <b>01</b>
            </div>

            <strong>
              Free
              <del
                style={{
                  marginLeft: '14px',
                  fontSize: '0.28em',
                  fontWeight: 750,
                  letterSpacing: '-0.02em',
                  opacity: 0.55,
                  verticalAlign: 'middle',
                }}
              >
                ₦5,000
              </del>
            </strong>

            <p>
              Attend physically or join virtually at no ticket cost.
            </p>

            <ul
              className="ticket-benefits general-benefits"
              aria-label="General access benefits"
            >
              <li>Full access to the main EITDA 2.0 experience</li>
              <li>Access to all main speaker sessions</li>
              <li>Practical sessions and demonstrations</li>
              <li>General networking and community access</li>
              <li>Choose Physical or Virtual when registering</li>
            </ul>

            <a
              className="button button-yellow"
              href={SELAR_TICKET_URL}
              target="_blank"
              rel="noopener noreferrer"
              style={{ marginTop: 'auto', width: 'max-content' }}
            >
              Get general access
              <ArrowUpRight size={18} aria-hidden="true" />
            </a>
          </article>

          <article className="ticket-card ticket-vip" data-number="02">
            <div>
              <span>VIP Experience</span>
              <b>50 Physical VIP Seats</b>
            </div>

            <strong>
              <small>₦</small>15,000
              <del
                style={{
                  marginLeft: '14px',
                  fontSize: '0.28em',
                  fontWeight: 750,
                  letterSpacing: '-0.02em',
                  opacity: 0.6,
                  verticalAlign: 'middle',
                }}
              >
                ₦50,000
              </del>
            </strong>

            <p>
              Available for both physical and virtual attendees with premium
              access beyond the main event.
            </p>

            <ul className="ticket-benefits vip-benefits" aria-label="VIP Experience benefits">
              <li>Full EITDA 2.0 premium experience</li>
              <li>Full event recording</li>
              <li>Private VIP WhatsApp community</li>
              <li>Special access to participating speakers</li>
              <li>More intimate Q&amp;A and networking opportunities</li>
              <li>Physical VIP includes reserved front-row seating</li>
            </ul>

            <a
              className="button button-yellow"
              href={SELAR_VIP_URL}
              target="_blank"
              rel="noopener noreferrer"
              style={{ marginTop: 'auto', width: 'max-content' }}
            >
              Get VIP access
              <ArrowUpRight size={18} aria-hidden="true" />
            </a>
          </article>
        </div>
      </section>

      <section className="speaker-reveal" id="speakers" aria-labelledby="speaker-reveal-title">
        <div className="speaker-reveal-heading">
          <p className="eyebrow">
            <span /> Speaker reveals · Coming soon
          </p>

          <h2 id="speaker-reveal-title">
            The people
            <br />
            behind the room.
          </h2>

          <p>
            Founders, operators and professionals with real experience turning
            knowledge into market value will be joining EITDA 2026. Speaker
            announcements begin soon.
          </p>
        </div>

        <div className="speaker-marquee" aria-label="EITDA 2026 speaker announcements coming soon">
          <div className="speaker-marquee-track">
            {[...speakerTeasers, ...speakerTeasers].map((speaker, index) => (
              <article
                className="speaker-teaser-card"
                key={`${speaker.number}-${index}`}
                aria-hidden={index >= speakerTeasers.length}
              >
                <div className="speaker-silhouette" aria-hidden="true">
                  <span className="speaker-head" />
                  <span className="speaker-body" />
                </div>

                <div className="speaker-card-overlay" aria-hidden="true" />

                <div className="speaker-card-top">
                  <span>Speaker {speaker.number}</span>
                  <b>?</b>
                </div>

                <div className="speaker-card-copy">
                  <small>{speaker.note}</small>
                  <h3>{speaker.prompt}</h3>
                  <span>Announcement coming soon</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="pathway">
        <div className="pathway-copy">
          <div className="section-kicker light">
            What you leave with <span>03</span>
          </div>

          <h2>
            Leave with direction,
            <br />
            not just inspiration.
          </h2>

          <p>
            EITDA is designed to move you from a good idea about your experience
            to a clearer understanding of where it fits, who needs it and what
            you can do next.
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
            <span /> From the first edition to EITDA 2.0
          </p>

          <h2>
            We&apos;ve seen what happens when people see their value.
          </h2>

          <div className="community-proof-copy">
            <p>
              The first edition of EITDA brought people together to learn,
              connect and discover new possibilities in the digital economy.
            </p>

            <p>
              EITDA 2.0 builds on that foundation with a sharper mission:
              helping people recognise the market value of the knowledge,
              skills and experience they already have.
            </p>
          </div>

          <div className="impact-principles" aria-label="What defined the first EITDA edition">
            <span>Real people</span>
            <span>Real conversations</span>
            <span>Real opportunities</span>
          </div>
        </div>
      </section>

      <section className="manifesto">
        <p>Our belief</p>

        <h2>
          WHAT YOU KNOW 
          <br />
          <em>SHOULD OPEN MORE DOORS.</em>
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
            Join EITDA 2026 physically in Ikot Abasi or virtually from anywhere.
            General Access is free; the VIP Experience is ₦15,000.
          </p>

          <a className="button button-yellow" href="#tickets">
            Choose your ticket
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
          <a href="#speakers">Speakers</a>
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