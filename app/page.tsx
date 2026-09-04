const services = [
  {
    number: "01",
    title: "Dead pixels & dark lines",
    description:
      "Diagnosis and repair of dead pixels, failed color channels, lines, and dark areas.",
    tag: "Pixel and row faults",
  },
  {
    number: "02",
    title: "Damaged LED modules",
    description:
      "Repair of damaged modules, solder points, electronic components, and connections.",
    tag: "Module repair",
  },
  {
    number: "03",
    title: "Diagnostics & testing",
    description:
      "Image, color, signal, and stability checks during diagnosis and after the repair.",
    tag: "Final testing",
  },
];

const repairStages = [
  {
    title: "Inspection",
    detail: "Module and pixel check",
    tone: "red",
  },
  {
    title: "Soldering",
    detail: "Components & connections",
    tone: "green",
  },
  {
    title: "Diagnostics",
    detail: "Signal and color check",
    tone: "blue",
  },
  {
    title: "Testing",
    detail: "Final operation check",
    tone: "violet",
  },
];

const youtubeShorts = [
  {
    id: "cor6zQRBLBs",
    title: "LED Module Repair | Pixel Replacement P2.6 mm",
  },
  {
    id: "IpeVgbYATDE",
    title: "Fixing a Dead Pixel on a 2.6 mm LED Module",
  },
  {
    id: "GlF38LbitPY",
    title: "LED Pixel Replacement & Testing",
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
    name: "HiPrime Solutions",
    description:
      "LED screen and module repair in Florida for dead pixels, dark lines, damaged modules, and connection faults.",
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
        <a className="brand" href="#top" aria-label="HiPrime Solutions home">
          <PixelMark compact />
          <span className="brand-copy">
            <strong>HiPrime</strong>
            <span>Solutions</span>
          </span>
        </a>

        <nav className="desktop-nav" aria-label="Main navigation">
          <a href="#services">Services</a>
          <a href="#about">About</a>
          <a href="#videos">Videos</a>
          <a href="#contact">Contact</a>
        </nav>

        <a className="header-cta" href="tel:+15618662936">
          <span aria-hidden="true">●</span> Call now
        </a>
      </header>

      <section className="hero" id="top">
        <img
          className="hero-background"
          src="/eduardo-led-repair-hero.webp"
          alt="Illustration of Eduardo repairing an LED module at the HiPrime workbench"
        />
        <div className="hero-background-shade" />
        <div className="hero-glow hero-glow--red" />
        <div className="hero-glow hero-glow--blue" />
        <div className="hero-copy">
          <p className="poster-slogan">LED screen &amp; module repair · Florida</p>
          <h1 className="poster-title">
            <span>LED SCREEN</span>
            <span className="poster-title-rgb"><b>REPAIR</b> <b>SERVICE</b></span>
          </h1>
          <div className="repair-manifesto">
            <p><i>×</i> Dead pixels</p>
            <p><i>↻</i> Damaged modules</p>
            <p>
              <i>✦</i>
              <span className="manifesto-label">Color &amp; <strong>signal faults</strong></span>
            </p>
          </div>
          <p className="hero-lede">
            HiPrime Solutions repairs <strong>LED</strong> screens and modules used in
            commercial displays and installations. Call or email to discuss the screen,
            model, and fault.
          </p>
          <div className="hero-actions">
            <a className="button button--primary" href="tel:+15618662936">
              Call HiPrime <span aria-hidden="true">↗</span>
            </a>
            <a
              className="button button--ghost"
              href="mailto:eduffurquim@gmail.com?subject=LED%20Screen%20Repair%20Request"
            >
              Email HiPrime
            </a>
          </div>
          <div className="hero-contact-line">
            <span>Phone and email</span>
            <a href="tel:+15618662936">561 866 2936</a>
            <a href="mailto:eduffurquim@gmail.com">eduffurquim@gmail.com</a>
          </div>
        </div>

      </section>

      <section className="issue-strip" aria-label="Common LED screen issues">
        <p>Common repairs</p>
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
            <p className="eyebrow"><span /> Services</p>
            <h2>LED screen and module repair</h2>
          </div>
          <p>
            We work on LED modules and panels from different manufacturers, including
            equipment used in commercial displays, events, and installations.
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

      <section className="workflow-showcase" aria-label="HiPrime LED repair workflow">
        <div className="workflow-grid">
          {repairStages.map((stage) => (
            <article className={`workflow-stage workflow-stage--${stage.tone}`} key={stage.tone}>
              <div className="workflow-stage-visual" aria-hidden="true">
                <span /><span /><span /><span /><span /><span /><span /><span /><span />
              </div>
              <div className="workflow-stage-copy">
                <strong>{stage.title}</strong>
                <span>{stage.detail}</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section why-section" id="about">
        <div className="why-visual">
          <div className="repair-detail-photo">
            <img
              src="/led-repair-measurement.webp"
              alt="Real LED module being measured with a caliper during inspection"
            />
            <span className="detail-scanline" />
            <span className="detail-grid" />
            <div className="precision-note">
              <span>Module inspection</span>
              <strong>and repair</strong>
            </div>
          </div>
        </div>

        <div className="why-copy">
          <p className="eyebrow"><span /> About HiPrime</p>
          <h2>LED repair service in Florida</h2>
          <p className="why-lede">
            HiPrime Solutions provides LED screen and module repair for dead pixels,
            dark lines, missing colors, damaged modules, and connection faults.
          </p>
          <p className="why-lede">
            For repair inquiries, call 561 866 2936 or email eduffurquim@gmail.com.
          </p>
        </div>
      </section>

      <section className="video-section" id="videos">
        <div className="video-section-heading">
          <div>
            <p className="eyebrow eyebrow--light"><span /> On YouTube</p>
            <h2>Watch the repair in action</h2>
          </div>
          <div className="video-section-intro">
            <p>
              See real LED module diagnostics, pixel replacement, soldering, and final
              testing from the HiPrime workbench.
            </p>
            <a
              className="text-link video-channel-link"
              href="https://www.youtube.com/@HiPrimeLED/shorts"
              target="_blank"
              rel="noreferrer"
            >
              View all videos <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>

        <div className="shorts-grid">
          {youtubeShorts.map((video, index) => (
            <article className={`youtube-short youtube-short--${index + 1}`} key={video.id}>
              <div className="youtube-short-frame">
                <iframe
                  src={`https://www.youtube-nocookie.com/embed/${video.id}`}
                  title={video.title}
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>
              <div className="youtube-short-copy">
                <span>0{index + 1}</span>
                <h3>{video.title}</h3>
                <a
                  href={`https://www.youtube.com/shorts/${video.id}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  Watch on YouTube <span aria-hidden="true">↗</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="contact-glow" />
        <PixelMark />
        <p className="eyebrow eyebrow--light"><span /> Contact</p>
        <h2>Phone and email</h2>
        <p className="contact-lede">
          For repair inquiries, provide the screen or module model if available,
          describe the fault, and include your location.
        </p>
        <div className="contact-actions">
          <a className="button button--light" href="tel:+15618662936">
            561 866 2936 <span aria-hidden="true">↗</span>
          </a>
          <a
            className="button button--outline-light"
            href="mailto:eduffurquim@gmail.com?subject=LED%20Screen%20Repair%20Request&body=Hi%20HiPrime%2C%0A%0AI%20need%20help%20with%20an%20LED%20screen.%20Here%20are%20the%20details%3A%0A"
          >
            eduffurquim@gmail.com
          </a>
        </div>
      </section>

      <footer>
        <a className="brand brand--footer" href="#top" aria-label="HiPrime Solutions home">
          <PixelMark compact />
          <span className="brand-copy"><strong>HiPrime</strong><span>Solutions</span></span>
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
