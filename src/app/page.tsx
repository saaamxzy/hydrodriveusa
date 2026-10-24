"use client";

import { useState } from "react";
import Image from "next/image";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="container">
        <div className="header-row">
          <a href="#" className="brand" aria-label="HydroDrive home">
            <Image src="/logo.png" alt="" width={36} height={36} unoptimized />
            <span className="brand-name">Hydro<span className="brand-accent">Drive</span></span>
          </a>
          <nav className="desktop-nav" aria-label="Main navigation">
            {["About", "Fleet", "Pricing", "Contact"].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="nav-link">{item}</a>
            ))}
            <a href="/career" className="nav-link">Careers</a>
            <a href="#book" className="button">Book Now</a>
          </nav>
          <button
            type="button"
            className="menu-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
          >
            <svg aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
        {menuOpen && (
          <nav id="mobile-navigation" className="mobile-nav" aria-label="Mobile navigation">
            {["About", "Fleet", "Pricing", "Contact"].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="nav-link" onClick={() => setMenuOpen(false)}>{item}</a>
            ))}
            <a href="/career" className="nav-link" onClick={() => setMenuOpen(false)}>Careers</a>
            <a href="#book" className="button" onClick={() => setMenuOpen(false)}>Book Now</a>
          </nav>
        )}
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="home-hero">
      <div className="container">
        <div className="hero-copy">
          <h1 className="hero-title">
            <span>Electric days.</span>{" "}
            <span>Luxury getaways.</span>
          </h1>
          <p className="hero-lead">Discover Orange County with HydroDrive. Choose a lower-emission ride for your everyday plans, or make room for a little luxury.</p>
          <div className="hero-actions">
            <a href="#book" className="button">Book your drive
              <svg aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14m-6-6 6 6-6 6" /></svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function About() {
  const features = [
    {
      icon: (
        <svg aria-hidden="true" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
        </svg>
      ),
      title: "Lower-Emission Fleet",
      description:
        "Choose from hydrogen fuel cell, electric, hybrid, and fuel-efficient gas vehicles designed to reduce your carbon footprint.",
    },
    {
      icon: (
        <svg aria-hidden="true" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
        </svg>
      ),
      title: "Mechanic Verified",
      description:
        "Every vehicle is inspected and maintained by Intune Motors with 10+ years of professional service experience.",
    },
    {
      icon: (
        <svg aria-hidden="true" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
        </svg>
      ),
      title: "Flexible Rentals",
      description:
        "Daily, weekly, and monthly options with generous discounts for longer stays. Plus rent-to-own programs available.",
    },
    {
      icon: (
        <svg aria-hidden="true" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
        </svg>
      ),
      title: "Orange County Based",
      description:
        "Proudly serving Irvine and the greater Orange County area. Explore Southern California the clean way.",
    },
  ];

  return (
    <section id="about" className="home-section about-section">
      <div className="container">
        <div className="section-head">
          <h2 className="section-heading">Why HydroDrive?</h2>
          <p className="section-intro">We specialize in eco-friendly transportation solutions, offering lower-emission driving options across Southern California.</p>
        </div>
        <div className="feature-list">
          {features.map((feature) => (
            <div key={feature.title} className="feature-item">
              {feature.icon}
              <div><h3>{feature.title}</h3><p>{feature.description}</p></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

}

function Fleet() {
  const vehicles = [
    {
      type: "Hydrogen Fuel Cell",
      tagline: "The future of driving",
      description: "Experience cutting-edge hydrogen fuel cell technology. Refuel in minutes, drive for hundreds of miles with zero tailpipe emissions.",
    },
    {
      type: "Electric Vehicles",
      tagline: "Silent power",
      description: "Fully electric vehicles with instant torque and smooth, quiet rides. Perfect for city commutes and weekend adventures.",
    },
    {
      type: "Hybrid Vehicles",
      tagline: "Best of both worlds",
      description: "Combine electric efficiency with gasoline flexibility. Ideal for longer trips while still reducing your carbon footprint.",
    },
  ];

  return (
    <section id="fleet" className="home-section fleet-section">
      <div className="container">
        <div className="section-head">
          <h2 className="section-heading">Our Fleet</h2>
          <p className="section-intro">From lower-emission options to luxury favorites, find a vehicle for your kind of trip. Every rental is mechanic-verified and ready to drive.</p>
        </div>
        <div className="fleet-layout">
          <div>
            <div className="fleet-gallery">
              {[
                { file: "bolt", label: "Chevrolet Bolt" },
                { file: "crv", label: "Honda CR-V" },
                { file: "cayenne", label: "Porsche Cayenne" },
                { file: "gwagon", label: "Mercedes-Benz G-Class" },
              ].map((photo) => (
                <figure key={photo.file} className="fleet-portrait">
                  <Image src={`/images/fleet/${photo.file}.webp`} alt={`${photo.label} from the HydroDrive fleet`} width={1448} height={1086} sizes="(max-width: 640px) calc(100vw - 40px), (max-width: 1280px) 46vw, 576px" loading="eager" />
                  <figcaption>{photo.label}</figcaption>
                </figure>
              ))}
            </div>
          </div>
          <div className="fleet-categories">
            {vehicles.map((v) => (
              <article key={v.type} className="fleet-row">
                <h3>{v.type}</h3>
                <p className="fleet-tagline">{v.tagline}</p>
                <p>{v.description}</p>
                <a href="#book" className="text-link">View Availability
                  <svg aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                </a>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );

}

function Pricing() {
  const plans = [
    {
      name: "Daily",
      price: "$20+",
      period: "per day",
      features: ["All vehicle types", "Free mileage on select models", "24/7 roadside support", "Flexible pickup & return"],
      highlight: false,
    },
    {
      name: "Weekly",
      price: "25% Off",
      period: "7+ day rental",
      features: ["All daily benefits", "25% discount applied", "Free mileage packages", "Priority vehicle selection"],
      highlight: true,
    },
    {
      name: "Monthly",
      price: "45% Off",
      period: "30+ day rental",
      features: ["All weekly benefits", "45% discount applied", "Rent-to-own available", "Dedicated support line"],
      highlight: false,
    },
  ];

  return (
    <section id="pricing" className="home-section pricing-section">
      <div className="container">
        <div className="section-head">
          <h2 className="section-heading">Simple Pricing</h2>
          <p className="section-intro">The longer you rent, the more you save. Discounts for 3-day, weekly, and monthly rentals.</p>
        </div>
        <div className="pricing-list">
          {plans.map((plan) => (
            <article key={plan.name} className={plan.highlight ? "price-row is-featured" : "price-row"}>
              <div>
                <h3>{plan.name}</h3>
                <span className="price-value">{plan.price}</span>
                <span className="price-period">{plan.period}</span>
                {plan.highlight && <p className="price-popular">Most Popular</p>}
              </div>
              <ul className="price-features">
                {plan.features.map((feature) => (
                  <li key={feature}>
                    <svg aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <a href="#book" className="button-secondary">Get Started</a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );

}

function Testimonials() {
  return (
    <section id="testimonials" className="trust-section">
      <div className="container trust-layout">
        <div>
          <h2 className="section-heading">Trusted by Guests</h2>
          <p className="section-intro">See what our guests have to say on Turo.</p>
          <a href="https://turo.com/us/en/host/48895154" target="_blank" rel="noopener noreferrer" className="text-link">Read Reviews on Turo
            <svg aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" /></svg>
          </a>
        </div>
        <div className="trust-facts">
          <div className="trust-fact">
            <div><div className="trust-value">4.5</div><div className="rating-stars">              {[...Array(4)].map((_, i) => (
                <svg key={i} className="rating-star" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
              <svg className="rating-star" aria-hidden="true" viewBox="0 0 20 20">
                <defs>
                  <linearGradient id="halfStar">
                    <stop offset="50%" stopColor="currentColor" />
                    <stop offset="50%" stopColor="var(--color-rating-empty)" />
                  </linearGradient>
                </defs>
                <path fill="url(#halfStar)" d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg></div></div>
            <div className="trust-label">Average Rating</div>
          </div>
          <div className="trust-fact"><div className="trust-value">2000+</div><div className="trust-label"><strong>Verified</strong><br />Trips Completed on Turo</div></div>
          <div className="trust-fact"><div className="trust-value">Top</div><div className="trust-label"><strong>Rated Host</strong><br />On Turo in Orange County</div></div>
        </div>
      </div>
    </section>
  );

}

function BookCTA() {
  return (
    <section id="book" className="booking-section">
      <div className="container booking-row">
        <div>
          <h2 className="section-heading">Book your rental on Turo.</h2>
          <p>Browse our fleet on Turo and book your eco-friendly ride today.</p>
        </div>
        <a href="https://turo.com/us/en/host/48895154" target="_blank" rel="noopener noreferrer" className="button">Book on Turo
          <svg aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" /></svg>
        </a>
      </div>
    </section>
  );

}

function Contact() {
  return (
    <section id="contact" className="home-section contact-section">
      <div className="container contact-layout">
        <div>
          <h2 className="section-heading">Get in Touch</h2>
          <p className="section-intro">Have questions about our fleet or rental options? We&apos;re here to help you find the perfect eco-friendly vehicle.</p>
          <dl className="contact-details">
            <div className="contact-detail"><div><dt>Phone</dt><dd><a href="tel:9182388688" className="text-link">(918) 238-8688</a></dd></div></div>
            <div className="contact-detail"><div><dt>Location</dt><dd>Irvine, Orange County, CA</dd></div></div>
            <div className="contact-detail"><div><dt>Booking</dt><dd>Available on Turo &mdash; 24/7</dd></div></div>
          </dl>
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            window.location.href = "tel:9182388688";
          }}
          className="contact-form"
          aria-describedby="contact-form-help"
        >
          <div><h3>Call HydroDrive</h3><p id="contact-form-help" className="form-help">This form opens your phone app. Your entries are not sent.</p></div>
          <div className="field"><label htmlFor="contact-name">Your name</label><input id="contact-name" type="text" placeholder="Your Name" autoComplete="name" /></div>
          <div className="field"><label htmlFor="contact-email">Email address</label><input id="contact-email" type="email" placeholder="Email Address" autoComplete="email" /></div>
          <div className="field"><label htmlFor="contact-message">How can we help?</label><textarea id="contact-message" rows={4} placeholder="How can we help?" /></div>
          <button type="submit" className="button">Call HydroDrive</button>
        </form>
      </div>
    </section>
  );

}

function Careers() {
  return (
    <section id="careers" className="careers-callout">
      <div className="container booking-row">
        <div>
          <h2 className="section-heading">We&apos;re Hiring</h2>
          <p>Join our mission to make clean energy vehicles accessible for local communities. See our open positions and grow with us.</p>
        </div>
        <a href="/career" className="button-secondary">View Open Positions
          <svg aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
        </a>
      </div>
    </section>
  );

}

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Fleet />
      <About />
      <Pricing />
      <Testimonials />
      <BookCTA />
      <Contact />
      <Careers />
    </main>
  );
}
