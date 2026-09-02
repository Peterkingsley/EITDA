import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  BriefcaseBusiness,
  CalendarDays,
  Check,
  CircleCheck,
  Compass,
  MapPin,
  MessageCircleMore,
  MonitorPlay,
  Sparkles,
  Ticket,
  Users,
} from 'lucide-react';

const recognitionCards = [
  { icon: BriefcaseBusiness, title: 'Your knowledge is still hidden inside your role', copy: 'You are paid to do the work, but the methods and experience behind it have not yet become an independent asset.' },
  { icon: MessageCircleMore, title: 'People ask for your help, but there is no offer', copy: 'You solve problems and give useful advice, yet there is no clear service, workshop, resource, or product they can buy.' },
  { icon: Compass, title: 'You have ideas, but no route to market', copy: 'You may know what you want to build, but not who needs it most, where to find them, what to charge, or how to pitch it.' },
];

const transformation = [
  ['Identify the expertise', 'Recognize the problems you solve, the results you understand, and what people already trust you for.'],
  ['Package the value', 'Choose a useful form: a service, workshop, advisory offer, programme, book, template, course, or community.'],
  ['Define the buyer', 'Find the people or organizations with the strongest need, urgency, and ability to value the result.'],
  ['Choose a starting price', 'Consider value, complexity, support, access, customer type, and delivery instead of guessing from fear.'],
  ['Find the route to market', 'Choose the relationships, platforms, communities, institutions, and channels that reach the right people.'],
  ['Explain and pitch it', 'Communicate the problem, outcome, method, and next step clearly enough for the right person to act.'],
];

const takeaways = [
  ['One expertise area', 'A clearer view of the knowledge, skill, method, or experience worth exploring.'],
  ['A possible offer', 'A practical direction for shaping that expertise into something people can use.'],
  ['A specific customer', 'A sharper idea of who needs the outcome and why they would care.'],
  ['A pricing approach', 'The factors to consider when deciding what to charge and what support to include.'],
  ['A simpler pitch', 'Language that connects the buyer’s problem to the result you can help create.'],
  ['A next-action plan', 'The first steps required to validate the idea instead of keeping it in your head.'],
];

const audiences = [
  ['Professional', 'Turn years of expertise in banking, health, education, law, engineering, administration, technology, or leadership into a clearer offer.'],
  ['Business owner', 'Package a proven method, operating system, training, consulting service, or product from what already works.'],
  ['Educator or consultant', 'Clarify your offer, pricing, positioning, and the way the right people discover your work.'],
  ['Creator or specialist', 'Build stronger packaging, commercial direction, and a route to consistent opportunities.'],
  ['Student or early-career builder', 'Understand early how useful skills become valuable offers in the digital economy.'],
];

const programme = [
  ['Discover the value', 'The economic value inside experience', 'Why knowledge does not automatically become income—and what changes when it is packaged.'],
  ['Discover the value', 'What can you sell?', 'Identify valuable problems, repeatable methods, and useful outcomes hidden inside your career or business.'],
  ['Build the offer', 'What form should it take?', 'Choose between services, workshops, consulting, training, books, templates, courses, or communities.'],
  ['Build the offer', 'Who needs it most?', 'Find an audience with a specific problem, urgency, and willingness to act.'],
  ['Take it to market', 'Pricing and positioning', 'Frame the value, choose a starting price, and avoid sounding generic.'],
  ['Take it to market', 'Distribution and pitching', 'Reach the right people through platforms, organizations, communities, partnerships, and relationships.'],
  ['Take it to market', 'Live examples and questions', 'Apply the framework to real professions, offers, and business situations.'],
];

const faqs = [
  ['Who is EITDA 2.0 for?', 'Professionals, business owners, educators, consultants, creators, founders, specialists, students, and people with valuable knowledge or experience who want to turn it into a clearer offer, wider opportunities, or additional income.'],
  ['Is the event free?', 'Yes. Regular physical registration and the main livestream are free. Every attendee must still register. The optional Physical VIP upgrade costs ₦5,000 and is limited to 50 people.'],
  ['What is included in VIP?', 'Reserved front-row seating, the full event recording after EITDA, selected after-event speaker access, and a more intimate networking or Q&A opportunity.'],
  ['Is VIP available to online attendees?', 'No separate online VIP package has been announced. The current VIP offer is a physical-event upgrade. Online attendees can register for the free main livestream.'],
  ['Where and when will the event hold?', 'EITDA 2.0 will hold on Saturday, 28 November 2026 at Women War Memorial in Ikot Abasi, Akwa Ibom. The confirmed start time and arrival instructions will be sent to registered attendees.'],
  ['What if I do not yet know what I can sell?', 'That is one of the main reasons to attend. The event will help you examine your work, results, methods, and experience so you can identify possible offers worth validating.'],
  ['Do I need to be active on social media?', 'No. Products, consulting, training, communities, partnerships, digital delivery, professional networks, and direct business relationships are all part of the digital economy.'],
  ['Do I need to quit my job?', 'No. EITDA is about creating more economic value and opportunity from what you know. Every participant should make responsible decisions based on their own situation.'],
  ['Will the event guarantee that I make money?', 'No. EITDA provides practical teaching, examples, access, and a framework for making better decisions. Results depend on the offer, market need, execution, consistency, and other factors.'],
];

const gallery = [
  ['/photos/session.jpg', 'A practical session at the first EITDA edition in December 2025'],
  ['/photos/speaker.jpg', 'A speaker presenting during the first EITDA edition'],
  ['/photos/conversation.jpg', 'EITDA attendees connecting after a session'],
];

export default function Home() {
  return (
    <main>
      <div className="announcement">Eshiet Foundation presents EITDA 2.0 <span>•</span> Saturday, 28 November 2026 <span>•</span> Ikot Abasi + Online</div>

      <header className="site-header">
        <a className="brand" href="#top" aria-label="EITDA 2.0 home">
          <img src="/eshiet-foundation-full-logo.png" alt="Eshiet Foundation" />
          <span><strong>EITDA 2.0</strong><small>Earning in the Digital Age</small></span>
        </a>
        <nav className="desktop-nav" aria-label="Primary navigation">
          <a href="#learn">What You Will Learn</a><a href="#audience">Who It Is For</a><a href="#programme">Programme</a><a href="#vip">VIP</a><a href="#faq">FAQ</a>
        </nav>
        <a className="nav-cta" href="#attendance">Reserve My Free Seat <ArrowUpRight size={17} aria-hidden="true" /></a>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy-block">
          <p className="eyebrow">A practical event for people with valuable experience</p>
          <h1>Your experience has earned you a living. <em>Now turn it into something you own.</em></h1>
          <p className="hero-lead">You may already have the knowledge for a workshop, consulting offer, service, training programme, book, digital product, or community.</p>
          <p className="hero-body">EITDA 2.0 will show you how to identify what you can offer, package it clearly, find the people who need it, choose a starting price, and explain its value with confidence.</p>
          <div className="event-facts" aria-label="Event details">
            <div><CalendarDays aria-hidden="true" /><span><small>Date</small><strong>Saturday, 28 November 2026</strong></span></div>
            <div><MapPin aria-hidden="true" /><span><small>Venue</small><strong>Women War Memorial, Ikot Abasi</strong></span></div>
            <div><MonitorPlay aria-hidden="true" /><span><small>Access</small><strong>Physical event + free livestream</strong></span></div>
          </div>
          <div className="hero-actions">
            <a className="button button-gold" href="#attendance">Reserve My Free Physical Seat <ArrowRight aria-hidden="true" /></a>
            <a className="button button-outline" href="#vip">Get the ₦5,000 VIP Pass</a>
          </div>
          <a className="livestream-link" href="#livestream">Cannot be in Ikot Abasi? Register for the free livestream <ArrowDown size={16} aria-hidden="true" /></a>
          <p className="hero-micro">Regular physical attendance and the livestream are free. Physical VIP is limited to 50 people.</p>
        </div>

        <div className="hero-visual">
          <img src="/eitda-community.jpg" alt="Attendees gathered at the first EITDA edition in December 2025" />
          <span className="photo-proof">Real moment from EITDA 1.0 · December 2025</span>
          <div className="floating-path"><small>Your path at EITDA 2.0</small><strong>Expertise → Offer → Market</strong><span>Make what you know easier to understand and buy.</span></div>
        </div>
      </section>

      <section className="proof" aria-labelledby="proof-title">
        <div className="proof-copy"><p className="eyebrow dark">Built on real community</p><h2 id="proof-title">Valuable experience should create more opportunities.</h2></div>
        <div className="proof-grid">
          <div><strong>01</strong><span>First edition held in December 2025</span></div>
          <div><strong>02</strong><span>The second EITDA edition returns in 2026</span></div>
          <div><strong>Ikot Abasi</strong><span>A physical room for practical learning and connection</span></div>
          <div><strong>+ Online</strong><span>A free livestream for people outside the room</span></div>
        </div>
        <div className="proof-photos" aria-label="Photographs from the first EITDA edition">
          <img src="/photos/stage-moment.jpg" alt="A speaker addressing the first EITDA audience" loading="lazy" />
          <img src="/photos/attendees.jpg" alt="Attendees at the first EITDA edition" loading="lazy" />
          <img src="/photos/collaboration.jpg" alt="Participants connecting at the first EITDA edition" loading="lazy" />
        </div>
      </section>

      <section className="recognition" id="learn">
        <div className="section-intro"><p className="eyebrow">The value may already be there</p><h2>You may not need a new skill. <em>You may need a better way to package the skills you have.</em></h2><p>Every year spent solving problems, serving customers, leading people, teaching, building systems, or improving results has created knowledge. EITDA 2.0 helps you turn that knowledge into something the market can understand.</p></div>
        <div className="recognition-cards">
          {recognitionCards.map(({ icon: Icon, title, copy }, index) => <article key={title}><div><Icon aria-hidden="true" /><span>0{index + 1}</span></div><h3>{title}</h3><p>{copy}</p></article>)}
          <p className="recognition-bridge">The missing link is not motivation. It is a practical path from expertise to an offer.</p>
        </div>
      </section>

      <section className="transformation" aria-labelledby="path-title">
        <div className="center-heading"><p className="eyebrow">The expertise-to-income path</p><h2 id="path-title">Six decisions stand between “I know this” and “this is what I offer.”</h2><p>EITDA 2.0 organizes the journey into practical decisions you can understand and begin to apply.</p></div>
        <div className="transformation-grid">
          {transformation.map(([title, copy], index) => <article className={index === 1 || index === 5 ? 'featured-step' : ''} key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{copy}</p></article>)}
        </div>
        <p className="path-line">Expertise <b>→</b> Offer <b>→</b> Audience <b>→</b> Price <b>→</b> Route to Market <b>→</b> Pitch</p>
        <a className="button button-gold" href="#attendance">Help Me Find My Offer <ArrowRight aria-hidden="true" /></a>
      </section>

      <section className="takeaways">
        <div className="takeaways-heading"><p className="eyebrow">What you should leave with</p><h2>Not just inspiration. A clearer decision about what to build next.</h2></div>
        <div className="takeaways-board">{takeaways.map(([title, copy], index) => <article key={title}><span>0{index + 1}</span><div><h3>{title}</h3><p>{copy}</p></div><CircleCheck aria-hidden="true" /></article>)}</div>
      </section>

      <section className="audience" id="audience">
        <div className="center-heading dark-heading"><p className="eyebrow dark">This room was built for you if...</p><h2>You have useful knowledge, but it has not yet become a clear offer.</h2></div>
        <div className="audience-grid">{audiences.map(([title, copy], index) => <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{copy}</p></article>)}</div>
        <p className="qualifier"><Sparkles aria-hidden="true" /> You do not need to be an influencer. You do not need to quit your job. Come with your experience and the willingness to examine it differently.</p>
      </section>

      <section className="physical">
        <div className="physical-image"><img src="/photos/session.jpg" alt="An engaged audience listening during the first EITDA edition" loading="lazy" /><span>Some opportunities begin because you were in the room.</span></div>
        <div className="physical-copy"><p className="eyebrow">More than a livestream</p><h2>Information can be watched. Relationships are built in the room.</h2><p>The livestream gives you the main teaching. The physical room gives you live questions, conversations with other professionals, new relationships, and opportunities that are difficult to schedule in advance.</p><ul><li><Check aria-hidden="true" /> Live teaching and practical sessions</li><li><Check aria-hidden="true" /> Interaction and Q&amp;A opportunities</li><li><Check aria-hidden="true" /> Professional and founder networking</li><li><Check aria-hidden="true" /> On-site activities and event resources</li></ul><a className="button button-gold" href="#attendance">Reserve My Free Physical Seat</a></div>
      </section>

      <section className="vip" id="vip">
        <div className="vip-pitch"><p className="eyebrow">Only 50 physical VIP passes</p><h2>Do not only attend the room. <em>Get closer to the people and ideas inside it.</em></h2><p>VIP is for attendees who want stronger access before, during, and after the main sessions. You are paying for better proximity, retained access to the teaching, and a more focused opportunity to connect.</p><div className="scarcity"><Users aria-hidden="true" /><span><strong>50 passes only</strong>VIP closes when all paid places are filled.</span></div></div>
        <article className="vip-card"><div className="vip-card-top"><span>EITDA 2.0 Physical VIP</span><BadgeCheck aria-hidden="true" /></div><strong className="vip-price"><small>₦</small>5,000</strong><div className="vip-benefits"><div><Check aria-hidden="true" /><span><strong>Reserved front-row seating</strong>Arrive knowing a premium seat is waiting for you.</span></div><div><Check aria-hidden="true" /><span><strong>Full event recording</strong>Revisit important lessons and details after EITDA.</span></div><div><Check aria-hidden="true" /><span><strong>Selected speaker access</strong>Join the after-event interaction arranged for VIPs.</span></div><div><Check aria-hidden="true" /><span><strong>Focused networking and Q&amp;A</strong>Ask specific questions and connect in a smaller setting.</span></div></div><a className="button button-gold" href="#vip-option">Reserve One of the 50 VIP Passes</a></article>
        <div className="comparison" aria-label="Free physical and VIP experience comparison">
          <div className="comparison-head"><span>Experience</span><strong>Free physical</strong><strong>Physical VIP</strong></div>
          {([['Main event access', true, true], ['General seating', true, false], ['Reserved front row', false, true], ['Main live Q&A', true, true], ['Selected after-event access', false, true], ['Full recording', false, true]] as [string, boolean, boolean][]).map(([label, free, paid]) => <div className="comparison-row" key={label}><span>{label}</span><b>{free ? '✓' : '—'}</b><b>{paid ? '✓' : '—'}</b></div>)}
        </div>
      </section>

      <section className="programme" id="programme">
        <div className="programme-heading"><p className="eyebrow dark">The event journey</p><h2>Every session should move you one step closer to a clear offer.</h2><p>The final programme will combine teaching, examples, audience interaction, networking, and the decisions required to move from experience to an offer.</p></div>
        <div className="programme-list">{programme.map(([phase, title, copy], index) => <article key={title}><span>0{index + 1}</span><div><small>{phase}</small><h3>{title}</h3><p>{copy}</p></div></article>)}</div>
      </section>

      <section className="previous" aria-labelledby="previous-title">
        <div className="previous-heading"><p className="eyebrow">First edition · December 2025</p><h2 id="previous-title">Real people. Real conversations. <em>A bigger room in 2026.</em></h2><p>These photographs are from the first EITDA edition. The second edition builds on that foundation with a sharper path from experience to a clear offer.</p></div>
        <div className="previous-gallery">{gallery.map(([src, alt], index) => <figure className={index === 0 ? 'wide' : ''} key={src}><img src={src} alt={alt} loading="lazy" /></figure>)}</div>
      </section>

      <section className="host-section">
        <div className="host-logo"><img src="/eshiet-foundation-full-logo.png" alt="Eshiet Foundation" /></div>
        <div><p className="eyebrow dark">About the host</p><h2>Eshiet Foundation creates access to knowledge, people, and opportunities that can change economic outcomes.</h2><p>EITDA 2.0 is built on the belief that many people already possess valuable knowledge and experience but need clearer commercial thinking, stronger networks, and practical support to turn that value into opportunities and income.</p></div>
      </section>

      <section className="attendance" id="attendance">
        <div className="center-heading"><p className="eyebrow">Choose how you will attend</p><h2>Be in the room, get closer with VIP, or join online.</h2></div>
        <div className="attendance-grid">
          <article className="attendance-card physical-option"><div className="option-label">Recommended in Ikot Abasi</div><Ticket aria-hidden="true" /><h3>Free physical</h3><strong>₦0</strong><ul><li>Main event access</li><li>Live sessions and Q&amp;A</li><li>General networking</li><li>On-site activities and resources</li></ul><a className="button button-dark" href="#registration-status">Reserve My Free Physical Seat</a><p>Registration is free, but every attendee must hold a valid ticket.</p></article>
          <article className="attendance-card vip-option" id="vip-option"><div className="option-label">Only 50</div><BadgeCheck aria-hidden="true" /><h3>Physical VIP</h3><strong>₦5,000</strong><ul><li>Reserved front-row seating</li><li>Full event recording</li><li>Selected speaker access</li><li>Focused networking and Q&amp;A</li></ul><a className="button button-gold" href="#registration-status">Get the Physical VIP Pass</a><p>VIP closes when all 50 paid passes are filled.</p></article>
          <article className="attendance-card livestream-option" id="livestream"><div className="option-label">Join from anywhere</div><MonitorPlay aria-hidden="true" /><h3>Free livestream</h3><strong>₦0</strong><ul><li>Main livestream access</li><li>Follow key sessions live</li><li>Receive viewing instructions</li><li>Stay connected to EITDA resources</li></ul><a className="button button-outline-dark" href="#registration-status">Register for the Free Livestream</a><p>Online access is separate from the physical VIP experience.</p></article>
        </div>
        <div className="registration-status" id="registration-status"><CircleCheck aria-hidden="true" /><p><strong>Registration links are the final operational step.</strong> The physical, livestream, and VIP buttons are ready to connect as soon as the approved form and payment links are supplied.</p></div>
      </section>

      <section className="faq" id="faq">
        <div className="faq-heading"><p className="eyebrow dark">Good to know</p><h2>Questions, answered.</h2><p>Clear details for choosing the EITDA experience that fits you.</p></div>
        <div className="faq-list">{faqs.map(([question, answer], index) => <details key={question} open={index === 0}><summary><span>0{index + 1}</span>{question}<b aria-hidden="true">+</b></summary><p>{answer}</p></details>)}</div>
      </section>

      <section className="closing">
        <img src="/photos/team.jpg" alt="The EITDA organizing team at the first edition" loading="lazy" />
        <div className="closing-copy"><p className="eyebrow">EITDA 2.0 · Saturday, 28 November 2026</p><h2>Come with your experience. <em>Leave with a clearer idea of what to build from it.</em></h2><p>Do not let years of learning, solving, serving, leading, teaching, and building remain trapped inside a title or routine.</p><div className="hero-actions"><a className="button button-gold" href="#attendance">Reserve My Free Physical Seat</a><a className="button button-outline" href="#vip">Get the ₦5,000 VIP Pass</a></div><a className="livestream-link" href="#livestream">Register for the free livestream <ArrowUpRight size={16} aria-hidden="true" /></a></div>
      </section>

      <footer>
        <div className="footer-brand"><img src="/eshiet-foundation-full-logo.png" alt="Eshiet Foundation" /><div><strong>EITDA 2.0</strong><span>Turning knowledge, skills, and experience into products, opportunities, and income.</span></div></div>
        <nav aria-label="Footer navigation"><a href="#learn">What You Will Learn</a><a href="#attendance">Attendance Options</a><a href="#vip">VIP</a><a href="#faq">FAQ</a></nav>
        <div className="footer-bottom"><span>An initiative of Eshiet Foundation</span><span>© {new Date().getFullYear()} Eshiet Foundation</span></div>
      </footer>

      <div className="mobile-cta"><a href="#attendance">Reserve Free Seat</a><a href="#vip">See VIP</a></div>
    </main>
  );
}
