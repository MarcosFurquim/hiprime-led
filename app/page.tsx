const services = [
  {
    number: "01",
    title: "Dead pixels & dark lines",
    description:
      "We isolate failed pixels, broken color channels, dark areas, and line defects to restore a clean, consistent image.",
    tag: "Pixel-level diagnostics",
  },
  {
    number: "02",
    title: "LED module repair",
    description:
      "From damaged components to connection failures, we troubleshoot and repair LED modules with component-level precision.",
    tag: "Module & panel service",
  },
  {
    number: "03",
    title: "Inspection & quality testing",
    description:
      "Every repair is inspected, tested, and checked for color, brightness, and signal stability before it goes back to work.",
    tag: "Final performance check",
  },
];

const process = [
  ["01", "Share the issue", "Send photos or video, the screen model, and a short description of the problem."],
  ["02", "Get an assessment", "We review the symptoms and explain the recommended repair path."],
  ["03", "Precision repair", "The affected pixels, connections, or module components are carefully serviced."],
  ["04", "Final quality test", "The repaired module is tested for a stable, consistent result."],
];

const faqs = [
  {
    question: "What LED screen problems do you repair?",
    answer:
      "HiPrime LED works on dead pixels, missing colors, dark lines or sections, damaged modules, connection issues, and other common LED panel faults.",
  },
  {
    question: "What should I send for an estimate?",
    answer:
      "Send clear photos or a short video of the issue, the brand or model when available, the module size, and your location. That gives us the best starting point for an assessment.",
  },
  {
    question: "How long does a repair take?",
    answer:
      "Turnaround depends on the type of failure, the number of affected modules, and component availability. Contact us with the details and we’ll give you the clearest timeline possible.",
  },
  {
    question: "Do you work with commercial LED displays?",
    answer:
      "Yes. The service is focused on professional LED modules and panels used in commercial displays, events, installations, and large-format screens.",
  },
];

function PixelMark({ compact = false }: { compact?: boolean }) {
  return (
    <span className={`pixel-mark${compact ? " pixel-mark--compact" : ""}`} aria-hidden="true">
      {Array.from({ length: 16 }, (_, index) => (
        <span key={index} />
      ))}
    </span>
  );
}

export default function Home() {
  const currentYear = new Date().getFullYear();

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "HiPrime LED",
    description:
      "Florida LED screen repair service specializing in pixels, modules, panels, diagnostics, and quality testing.",
    telephone: "+1-561-866-2936",
    email: "eduffurquim@gmail.com",
    areaServed: "Florida",
    serviceType: "LED screen and module repair",
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <header className="site-header">
        <a className="brand" href="#top" aria-label="HiPrime LED home">
          <PixelMark compact />
          <span className="brand-copy">
            <strong>HiPrime</strong>
            <span>LED</span>
          </span>
        </a>

        <nav className="desktop-nav" aria-label="Main navigation">
          <a href="#services">Services</a>
          <a href="#process">Process</a>
          <a href="#why-us">Why HiPrime</a>
          <a href="#faq">FAQ</a>
        </nav>

        <a className="header-cta" href="tel:+15618662936">
          <span aria-hidden="true">●</span> Call now
        </a>
      </header>

      <section className="hero" id="top">
        <div className="hero-glow hero-glow--red" />
        <div className="hero-glow hero-glow--blue" />
        <div className="hero-copy">
          <p className="eyebrow"><span /> Florida LED screen service</p>
          <h1>
            Every pixel<br />
            <span>back to brilliant.</span>
          </h1>
          <p className="hero-lede">
            Specialized LED screen and module repair with careful diagnostics,
            precision workmanship, and a clear path from damaged to display-ready.
          </p>
          <div className="hero-actions">
            <a className="button button--primary" href="tel:+15618662936">
              Call for an assessment <span aria-hidden="true">↗</span>
            </a>
            <a
              className="button button--ghost"
              href="mailto:eduffurquim@gmail.com?subject=LED%20Screen%20Repair%20Request"
            >
              Email photos of the issue
            </a>
          </div>
          <div className="hero-contact-line">
            <span>Fast response</span>
            <a href="tel:+15618662936">561 866 2936</a>
            <a href="mailto:eduffurquim@gmail.com">eduffurquim@gmail.com</a>
          </div>
        </div>

        <div className="hero-visual" aria-label="Abstract LED screen diagnostic illustration">
          <div className="matrix-shell">
            <div className="matrix-topline">
              <span>HiPrime diagnostics</span>
              <span className="live-dot">Live check</span>
            </div>
            <div className="led-matrix" aria-hidden="true">
              {Array.from({ length: 252 }, (_, index) => (
                <span key={index} className={`led led--${(index * 7 + Math.floor(index / 18)) % 19}`} />
              ))}
            </div>
            <div className="diagnostic-card">
              <span className="diagnostic-icon">✓</span>
              <span><small>Quality test</small><strong>Display restored</strong></span>
              <b>100%</b>
            </div>
          </div>
          <div className="floating-tag floating-tag--one">Dead pixels</div>
          <div className="floating-tag floating-tag--two">Module repair</div>
        </div>
      </section>

      <section className="issue-strip" aria-label="Common LED screen issues">
        <p>Built for the problems that stop a screen from performing</p>
        <div>
          <span>Dead pixels</span><i />
          <span>Dark lines</span><i />
          <span>Damaged modules</span><i />
          <span>Color failures</span><i />
          <span>Signal issues</span>
        </div>
      </section>

      <section className="section services-section" id="services">
        <div className="section-heading">
          <div>
            <p className="eyebrow"><span /> Expert LED repair</p>
            <h2>Repair the fault.<br /><em>Protect the display.</em></h2>
          </div>
          <p>
            Focused service for the pixels, modules, and connections behind a
            professional LED screen—without vague promises or unnecessary replacements.
          </p>
        </div>

        <div className="service-grid">
          {services.map((service) => (
            <article className="service-card" key={service.number}>
              <div className="service-number">{service.number}</div>
              <div className={`service-symbol service-symbol--${service.number}`} aria-hidden="true">
                <span /><span /><span /><span /><span /><span /><span /><span /><span />
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <div className="service-tag"><span /> {service.tag}</div>
            </article>
          ))}
        </div>
      </section>

      <section className="section process-section" id="process">
        <div className="process-intro">
          <p className="eyebrow eyebrow--light"><span /> How it works</p>
          <h2>From first photo<br />to final test.</h2>
          <p>
            Start with the issue you can see. We’ll help identify what is happening
            behind the panel and map the next step.
          </p>
          <a className="text-link" href="mailto:eduffurquim@gmail.com?subject=LED%20Screen%20Repair%20Assessment">
            Start your assessment <span aria-hidden="true">→</span>
          </a>
        </div>

        <div className="process-list">
          {process.map(([number, title, description]) => (
            <article className="process-step" key={number}>
              <span className="process-number">{number}</span>
              <div>
                <h3>{title}</h3>
                <p>{description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section why-section" id="why-us">
        <div className="why-visual">
          <div className="flyer-frame">
            <img
              src="/hiprime-flyer.jpg"
              alt="HiPrime Solutions LED screen repair service flyer"
              loading="lazy"
            />
          </div>
          <div className="precision-note">
            <span>Built around</span>
            <strong>precision.</strong>
          </div>
        </div>

        <div className="why-copy">
          <p className="eyebrow"><span /> Why HiPrime</p>
          <h2>Careful work where every connection counts.</h2>
          <p className="why-lede">
            LED modules reward precision. HiPrime brings a focused repair mindset
            to each diagnosis—from the first inspection to the final display test.
          </p>

          <div className="benefit-list">
            <article>
              <span>01</span>
              <div><h3>Component-level attention</h3><p>Focused troubleshooting at the pixel, connection, and module level.</p></div>
            </article>
            <article>
              <span>02</span>
              <div><h3>Clear, practical assessment</h3><p>A straightforward repair path based on the actual symptoms you share.</p></div>
            </article>
            <article>
              <span>03</span>
              <div><h3>Quality before handoff</h3><p>Final testing helps confirm the repaired display is ready to perform.</p></div>
            </article>
          </div>
        </div>
      </section>

      <section className="section faq-section" id="faq">
        <div className="faq-heading">
          <p className="eyebrow"><span /> Common questions</p>
          <h2>Before you send<br />the first photo.</h2>
          <p>Have a different issue? Call or email and describe what the screen is doing.</p>
        </div>
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <details key={faq.question} open={index === 0}>
              <summary>{faq.question}<span aria-hidden="true">+</span></summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="contact-glow" />
        <PixelMark />
        <p className="eyebrow eyebrow--light"><span /> Let’s bring it back</p>
        <h2>Show us what<br /><em>the screen is doing.</em></h2>
        <p className="contact-lede">
          Send a photo or short video, the screen or module model, and your location.
          We’ll start with a practical assessment.
        </p>
        <div className="contact-actions">
          <a className="button button--light" href="tel:+15618662936">
            Call 561 866 2936 <span aria-hidden="true">↗</span>
          </a>
          <a
            className="button button--outline-light"
            href="mailto:eduffurquim@gmail.com?subject=LED%20Screen%20Repair%20Request&body=Hi%20Eduardo%2C%0A%0AI%20need%20help%20with%20an%20LED%20screen.%20Here%20are%20the%20details%3A%0A"
          >
            Email your repair details
          </a>
        </div>
        <p className="contact-email">eduffurquim@gmail.com</p>
      </section>

      <footer>
        <a className="brand brand--footer" href="#top" aria-label="HiPrime LED home">
          <PixelMark compact />
          <span className="brand-copy"><strong>HiPrime</strong><span>LED</span></span>
        </a>
        <p>LED screen & module repair · Florida</p>
        <p>© {currentYear} HiPrime Solutions. All rights reserved.</p>
      </footer>

      <a className="mobile-call" href="tel:+15618662936" aria-label="Call HiPrime LED at 561 866 2936">
        Call now <span>561 866 2936</span>
      </a>
    </main>
  );
}
