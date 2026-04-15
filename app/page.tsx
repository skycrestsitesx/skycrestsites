"use client";

import { useEffect, useState } from "react";

export default function HomePage() {
  const [showIntro, setShowIntro] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowIntro(false);
    }, 3600);

    return () => clearTimeout(timer);
  }, []);

  const today = new Date();
  const day = today.getDate();
  const month = today.toLocaleString("en-US", { month: "long" });
  const year = today.getFullYear();

  return (
    <>
      {showIntro && (
        <div className="intro-overlay" aria-hidden="true">
          <div className="intro-stage">
            <div className="intro-lockup">
              <img
                className="intro-wordmark-base"
                src="/logo-wordmark.png"
                alt=""
              />

              <img className="intro-s-static" src="/logo-icon.png" alt="" />

              <div className="intro-tail intro-tail-1">
                <img src="/logo-wordmark.png" alt="" />
              </div>
              <div className="intro-tail intro-tail-2">
                <img src="/logo-wordmark.png" alt="" />
              </div>
              <div className="intro-tail intro-tail-3">
                <img src="/logo-wordmark.png" alt="" />
              </div>
              <div className="intro-tail intro-tail-4">
                <img src="/logo-wordmark.png" alt="" />
              </div>
              <div className="intro-tail intro-tail-5">
                <img src="/logo-wordmark.png" alt="" />
              </div>
              <div className="intro-tail intro-tail-6">
                <img src="/logo-wordmark.png" alt="" />
              </div>

              <img className="intro-s-final" src="/logo-icon.png" alt="" />
            </div>
          </div>
        </div>
      )}

      <div className="top-note">
        <div className="small">Modern website studio</div>
        <div className="big">
          <img src="/logo-wordmark.png" alt="SkyCrest logo" />
        </div>
      </div>

      <div className="page">
        <div className="inner">
          <header className="nav">
            <a className="brand" href="#top">
              <img
                className="brand-icon"
                src="/logo-icon.png"
                alt="SkyCrest icon"
              />
              <img
                className="brand-word"
                src="/logo-wordmark.png"
                alt="SkyCrest wordmark"
              />
            </a>

            <nav className={`nav-links ${mobileOpen ? "open" : ""}`}>
              <a
                className="active"
                href="#top"
                onClick={() => setMobileOpen(false)}
              >
                Home
              </a>
              <a href="#about" onClick={() => setMobileOpen(false)}>
                About
              </a>
              <a href="#work" onClick={() => setMobileOpen(false)}>
                Sample Work
              </a>
              <a href="#services" onClick={() => setMobileOpen(false)}>
                Services
              </a>
              <a href="#contact" onClick={() => setMobileOpen(false)}>
                Contact
              </a>
            </nav>

            <div className="nav-cta">
              <a className="button" href="#work">
                Gallery
              </a>
              <a className="button fill" href="#contact">
                Get Quote
              </a>
              <button
                className="mobile-toggle"
                onClick={() => setMobileOpen((prev) => !prev)}
                aria-label="Toggle menu"
                type="button"
              >
                {mobileOpen ? "✕" : "☰"}
              </button>
            </div>
          </header>

          <section className="hero" id="top">
            <div className="hero-copy">
              <span className="eyebrow">
                Elegant websites for modern businesses
              </span>

              <h1>
                <span className="tone-gold">Design</span>
                <br />
                <span className="tone-cream">that feels premium</span>
              </h1>

              <p>
                SkyCrest Sites creates refined websites for local businesses
                that want a cleaner presence, stronger credibility, and a more
                modern first impression.
              </p>

              <div className="hero-actions">
                <a className="button fill" href="#contact">
                  Start Project
                </a>
                <a className="button" href="#work">
                  Sample Work
                </a>
              </div>

              <div className="socials">
                <a href="#">Instagram</a>
                <a href="#">Behance</a>
                <a href="mailto:hello@skycrestsites.us">Email</a>
              </div>
            </div>

            <div className="hero-visual">
              <div className="visual-frame">
                <div className="helix-image-wrap">
                  <img
                    className="helix-image"
                    src="/helix-gold.png"
                    alt="Golden DNA helix"
                  />
                </div>

                <div className="date-box">
                  <strong>{day}</strong>
                  {month}
                  <br />
                  {year}
                </div>

                <div className="plus-btn">+</div>
              </div>
            </div>
          </section>

          <section className="section" id="about">
            <div className="section-head">
              <h2>About</h2>
            </div>

            <div className="about-grid">
              <div className="card">
                <span className="tag">SkyCrest approach</span>
                <h3>Modern, intentional, and quietly premium.</h3>
                <p>
                  This style is designed to feel less like a generic builder
                  template and more like a custom creative studio site. The
                  visual language stays restrained, spacious, and clean while
                  still feeling memorable.
                </p>
              </div>

              <div className="stat-stack">
                <div className="stat-box">
                  <strong>Elegant</strong>
                  <span>
                    Refined layouts with better spacing and a stronger first
                    impression.
                  </span>
                </div>
                <div className="stat-box">
                  <strong>Focused</strong>
                  <span>
                    Clear hierarchy so visitors know what you do and what to do
                    next.
                  </span>
                </div>
              </div>
            </div>
          </section>

          <section className="section" id="services">
            <div className="section-head">
              <h2>Services</h2>
              <p>
                Clean offerings for businesses that want to look sharper online
                without clutter or overdesigned visuals.
              </p>
            </div>

            <div className="services-grid">
              <div className="card">
                <div className="service-icon" />
                <h3>Custom Website Design</h3>
                <p>
                  Tailored layouts that make your business feel intentional,
                  polished, and premium.
                </p>
              </div>

              <div className="card">
                <div className="service-icon" />
                <h3>Website Redesign</h3>
                <p>
                  Turn an outdated site into something cleaner, more modern, and
                  easier to trust.
                </p>
              </div>

              <div className="card">
                <div className="service-icon" />
                <h3>Local SEO Setup</h3>
                <p>
                  Build the basic structure your business needs to show up
                  clearly in local search.
                </p>
              </div>

              <div className="card">
                <div className="service-icon" />
                <h3>Fast Launch</h3>
                <p>
                  Get a polished site live quickly with a straightforward
                  process and less friction.
                </p>
              </div>
            </div>
          </section>

          <section className="section" id="work">
            <div className="section-head">
              <h2>Sample Work</h2>
              <p>
                Placeholder concepts for now. You can replace these later with
                real client projects, screenshots, and case studies.
              </p>
            </div>

            <div className="work-grid">
              <div className="card">
                <div className="work-thumb">
                  <div className="mini-site">
                    <div className="mini-top">
                      <span>Dental</span>
                      <span>Placeholder</span>
                    </div>
                    <div className="mini-title">
                      Bright, clean, high-trust care.
                    </div>
                    <div className="mini-lines">
                      <span />
                      <span />
                      <span />
                    </div>
                  </div>
                </div>
                <h3>Dental Website</h3>
                <p>
                  A cleaner homepage concept focused on credibility, simplicity,
                  and patient trust.
                </p>
              </div>

              <div className="card">
                <div className="work-thumb alt-a">
                  <div className="mini-site">
                    <div className="mini-top">
                      <span>Legal</span>
                      <span>Placeholder</span>
                    </div>
                    <div className="mini-title">
                      Sharp, restrained, and credible.
                    </div>
                    <div className="mini-lines">
                      <span />
                      <span />
                      <span />
                    </div>
                  </div>
                </div>
                <h3>Law Firm Website</h3>
                <p>
                  Built to feel more composed and professional for high-trust
                  service industries.
                </p>
              </div>

              <div className="card">
                <div className="work-thumb alt-b">
                  <div className="mini-site">
                    <div className="mini-top">
                      <span>Home Services</span>
                      <span>Placeholder</span>
                    </div>
                    <div className="mini-title">
                      Clear offer. Faster quote flow.
                    </div>
                    <div className="mini-lines">
                      <span />
                      <span />
                      <span />
                    </div>
                  </div>
                </div>
                <h3>Home Services Website</h3>
                <p>
                  A more modern concept for local service businesses that need
                  quick lead conversion.
                </p>
              </div>
            </div>
          </section>

          <section className="section">
            <div className="section-head">
              <h2>Process</h2>
              <p>
                A simple path from idea to launch, without making you manage
                unnecessary technical complexity.
              </p>
            </div>

            <div className="process-grid">
              <div className="card">
                <div className="process-num">01</div>
                <h3>Tell us about your business</h3>
                <p>
                  Share what you do, who you serve, and the kind of impression
                  you want your website to create.
                </p>
              </div>

              <div className="card">
                <div className="process-num">02</div>
                <h3>We design and build</h3>
                <p>
                  We shape the layout, structure, and visual style into a
                  cleaner and more elegant online presence.
                </p>
              </div>

              <div className="card">
                <div className="process-num">03</div>
                <h3>Launch and refine</h3>
                <p>
                  Your site goes live with a stronger foundation and room to
                  improve over time.
                </p>
              </div>
            </div>
          </section>

          <section className="section">
            <div className="section-head">
              <h2>FAQ</h2>
              <p>
                Basic placeholder answers for now. These can be replaced with
                your real operating details later.
              </p>
            </div>

            <div className="faq-grid">
              <div className="card">
                <h3>How long does a project take?</h3>
                <p>
                  Smaller sites move faster, while more advanced pages and
                  custom content take longer.
                </p>
              </div>

              <div className="card">
                <h3>Can you redesign an old site?</h3>
                <p>
                  Yes. Many projects start with an outdated website that needs a
                  stronger visual identity.
                </p>
              </div>

              <div className="card">
                <h3>Can this be updated later?</h3>
                <p>
                  Yes. The structure is simple enough to edit as your business
                  and offer evolve.
                </p>
              </div>

              <div className="card">
                <h3>Who is this style best for?</h3>
                <p>
                  Local businesses that want a cleaner, more premium presence
                  without looking generic.
                </p>
              </div>
            </div>
          </section>

          <section className="section" id="contact">
            <div className="section-head">
              <h2>Contact</h2>
              <p>
                Keep this as a placeholder for now, then connect it to a real
                form or CRM later.
              </p>
            </div>

            <div className="split-cta">
              <div className="contact-panel">
                <h3>Start your project</h3>
                <p>
                  Tell us a bit about your business and what kind of website you
                  want to build. Clean, modern, and tailored to your niche.
                </p>

                <div className="contact-list">
                  <div>Email: hello@skycrestsites.us</div>
                  <div>Based in Texas</div>
                  <div>Custom websites for local businesses</div>
                </div>
              </div>

              <div className="contact-panel">
                <form>
                  <div className="form-grid">
                    <input type="text" placeholder="Name" />
                    <input type="email" placeholder="Email" />
                    <input
                      className="full"
                      type="text"
                      placeholder="Business name"
                    />
                    <textarea
                      className="full"
                      placeholder="Tell us about your project"
                    />
                  </div>

                  <div style={{ marginTop: 16 }}>
                    <button className="button fill" type="submit">
                      Send
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </section>

          <footer className="footer">
            <div>SkyCrest Sites © {year}</div>
            <div className="footer-links">
              <a href="#about">About</a>
              <a href="#services">Services</a>
              <a href="#work">Work</a>
              <a href="#contact">Contact</a>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
}