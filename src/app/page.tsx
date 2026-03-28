"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import reviews from "@/data/reviews.json";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[var(--color-dark)]/95 backdrop-blur-sm border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="flex items-center gap-2">
            <Image src="/logo.png" alt="HydroDrive Logo" width={36} height={36} className="rounded-full" />
            <span className="text-white font-bold text-xl">
              Hydro<span className="text-[var(--color-accent)]">Drive</span>
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {["About", "Fleet", "Pricing", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-300 hover:text-white transition-colors text-sm font-medium"
              >
                {item}
              </a>
            ))}
            <a
              href="#book"
              className="bg-[var(--color-primary)] hover:bg-[var(--color-primary-light)] text-white px-5 py-2 rounded-full text-sm font-semibold transition-colors"
            >
              Book Now
            </a>
          </nav>

          <button
            className="md:hidden text-white"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden pb-4 border-t border-white/10 mt-2 pt-4">
            {["About", "Fleet", "Pricing", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="block py-2 text-gray-300 hover:text-white transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {item}
              </a>
            ))}
            <a
              href="#book"
              className="inline-block mt-2 bg-[var(--color-primary)] hover:bg-[var(--color-primary-light)] text-white px-5 py-2 rounded-full text-sm font-semibold transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              Book Now
            </a>
          </div>
        )}
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-[var(--color-dark)] overflow-hidden">
      {/* Background gradient effect */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[var(--color-primary)]/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[var(--color-accent)]/15 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
        <div className="inline-block mb-6 px-4 py-1.5 rounded-full border border-[var(--color-accent)]/30 bg-[var(--color-accent)]/10">
          <span className="text-[var(--color-accent)] text-sm font-medium">
            Zero-Emission Vehicle Rentals
          </span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          Drive Clean.<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-primary-light)] to-[var(--color-accent)]">
            Drive HydroDrive.
          </span>
        </h1>

        <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
          Explore Southern California in eco-friendly hydrogen fuel cell, electric, and hybrid vehicles.
          Starting at just <span className="text-white font-semibold">$20/day</span>.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#book"
            className="bg-[var(--color-primary)] hover:bg-[var(--color-primary-light)] text-white px-8 py-4 rounded-full text-lg font-semibold transition-colors"
          >
            Browse Vehicles
          </a>
          <a
            href="#about"
            className="border border-white/20 hover:border-white/40 text-white px-8 py-4 rounded-full text-lg font-semibold transition-colors"
          >
            Learn More
          </a>
        </div>

        <div className="mt-16 grid grid-cols-3 gap-8 max-w-lg mx-auto">
          {[
            { value: "$20+", label: "Per Day" },
            { value: "0", label: "Emissions" },
            { value: "45%", label: "Off Monthly" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-white">{stat.value}</div>
              <div className="text-gray-500 text-sm mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  const features = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
        </svg>
      ),
      title: "Clean Energy Fleet",
      description:
        "Our vehicles run on hydrogen fuel cells, electricity, and hybrid technology — reducing your carbon footprint to zero.",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
        </svg>
      ),
      title: "Mechanic Verified",
      description:
        "Every vehicle is inspected and maintained by Intune Motors with 10+ years of professional service experience.",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
        </svg>
      ),
      title: "Flexible Rentals",
      description:
        "Daily, weekly, and monthly options with generous discounts for longer stays. Plus rent-to-own programs available.",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
    <section id="about" className="py-24 bg-[#0d1b2e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Why HydroDrive?
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            We specialize in eco-friendly transportation solutions, offering zero-emission
            driving experiences across Southern California.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-[var(--color-dark-light)] rounded-2xl p-6 border border-white/5 hover:border-[var(--color-primary)]/30 transition-colors"
            >
              <div className="w-12 h-12 rounded-xl bg-[var(--color-primary)]/10 flex items-center justify-center text-[var(--color-primary-light)] mb-4">
                {feature.icon}
              </div>
              <h3 className="text-white font-semibold text-lg mb-2">{feature.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
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
      description: "Experience cutting-edge hydrogen fuel cell technology. Refuel in minutes, drive for hundreds of miles with zero emissions.",
      gradient: "from-emerald-500/20 to-teal-500/20",
      accent: "text-emerald-400",
      border: "border-emerald-500/20",
    },
    {
      type: "Electric Vehicles",
      tagline: "Silent power",
      description: "Fully electric vehicles with instant torque and smooth, quiet rides. Perfect for city commutes and weekend adventures.",
      gradient: "from-blue-500/20 to-cyan-500/20",
      accent: "text-blue-400",
      border: "border-blue-500/20",
    },
    {
      type: "Hybrid Vehicles",
      tagline: "Best of both worlds",
      description: "Combine electric efficiency with gasoline flexibility. Ideal for longer trips while still reducing your carbon footprint.",
      gradient: "from-violet-500/20 to-purple-500/20",
      accent: "text-violet-400",
      border: "border-violet-500/20",
    },
  ];

  return (
    <section id="fleet" className="py-24 bg-[var(--color-dark)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Our Fleet</h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Choose from our range of clean energy vehicles, all mechanic-verified and ready to drive.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {vehicles.map((v) => (
            <div
              key={v.type}
              className={`relative rounded-2xl border ${v.border} bg-gradient-to-br ${v.gradient} p-8 hover:scale-[1.02] transition-transform`}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl" />
              <div className={`${v.accent} text-sm font-medium mb-2`}>{v.tagline}</div>
              <h3 className="text-2xl font-bold text-white mb-3">{v.type}</h3>
              <p className="text-gray-400 mb-6 leading-relaxed">{v.description}</p>
              <a
                href="#book"
                className="inline-flex items-center gap-2 text-white font-medium hover:gap-3 transition-all"
              >
                View Availability
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          ))}
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
    <section id="pricing" className="py-24 bg-[#0d1b2e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Simple Pricing</h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            The longer you rent, the more you save. Discounts for 3-day, weekly, and monthly rentals.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-2xl p-8 ${
                plan.highlight
                  ? "bg-gradient-to-b from-[var(--color-primary)]/20 to-[var(--color-dark-light)] border-2 border-[var(--color-primary)]/40 scale-105"
                  : "bg-[var(--color-dark-light)] border border-white/5"
              }`}
            >
              {plan.highlight && (
                <div className="text-[var(--color-accent)] text-xs font-semibold uppercase tracking-wider mb-4">
                  Most Popular
                </div>
              )}
              <h3 className="text-white text-xl font-bold mb-1">{plan.name}</h3>
              <div className="flex items-baseline gap-1 mb-1">
                <span className="text-4xl font-bold text-white">{plan.price}</span>
              </div>
              <div className="text-gray-500 text-sm mb-6">{plan.period}</div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-gray-300 text-sm">
                    <svg className="w-5 h-5 text-[var(--color-primary-light)] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href="#book"
                className={`block text-center py-3 rounded-full font-semibold transition-colors ${
                  plan.highlight
                    ? "bg-[var(--color-primary)] hover:bg-[var(--color-primary-light)] text-white"
                    : "bg-white/5 hover:bg-white/10 text-white"
                }`}
              >
                Get Started
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function StarRating() {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

function Testimonials() {
  const [current, setCurrent] = useState(0);
  const totalSlides = Math.ceil(reviews.length / 3);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % totalSlides);
  }, [totalSlides]);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + totalSlides) % totalSlides);
  }, [totalSlides]);

  // Auto-scroll every 5 seconds
  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section id="testimonials" className="py-24 bg-[var(--color-dark)] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">What Our Guests Say</h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Real reviews from real drivers on Turo. 100% five-star experiences.
          </p>
        </div>

        <div className="relative">
          {/* Carousel container */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              {Array.from({ length: totalSlides }).map((_, slideIdx) => (
                <div
                  key={slideIdx}
                  className="w-full flex-shrink-0 grid grid-cols-1 md:grid-cols-3 gap-6 px-1"
                >
                  {reviews.slice(slideIdx * 3, slideIdx * 3 + 3).map((review, i) => (
                    <div
                      key={`${slideIdx}-${i}`}
                      className="bg-[var(--color-dark-light)] rounded-2xl p-6 border border-white/5 hover:border-[var(--color-primary)]/20 transition-colors flex flex-col"
                    >
                      <div className="flex items-center gap-3 mb-4">
                        <Image
                          src={review.profileImageUrl}
                          alt={review.name}
                          width={44}
                          height={44}
                          className="rounded-full"
                        />
                        <div>
                          <a
                            href={review.profileUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white font-semibold hover:text-[var(--color-accent)] transition-colors"
                          >
                            {review.name}
                          </a>
                          <div className="text-gray-500 text-xs">{review.date}</div>
                        </div>
                      </div>

                      <StarRating />

                      <p className="text-gray-300 text-sm mt-3 flex-grow leading-relaxed">
                        {review.reviewText
                          ? `"${review.reviewText}"`
                          : (
                            <span className="text-gray-500 italic">Left a 5-star rating</span>
                          )}
                      </p>

                      <div className="mt-4 pt-3 border-t border-white/5">
                        <span className="text-gray-500 text-xs">{review.vehicle}</span>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Navigation arrows */}
          <button
            onClick={prev}
            className="absolute top-1/2 -translate-y-1/2 -left-2 md:-left-4 w-10 h-10 rounded-full bg-[var(--color-dark-light)] border border-white/10 flex items-center justify-center text-white hover:border-[var(--color-primary)]/40 transition-colors"
            aria-label="Previous reviews"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={next}
            className="absolute top-1/2 -translate-y-1/2 -right-2 md:-right-4 w-10 h-10 rounded-full bg-[var(--color-dark-light)] border border-white/10 flex items-center justify-center text-white hover:border-[var(--color-primary)]/40 transition-colors"
            aria-label="Next reviews"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: totalSlides }).map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2 h-2 rounded-full transition-all ${
                  i === current
                    ? "bg-[var(--color-primary-light)] w-6"
                    : "bg-white/20 hover:bg-white/40"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function BookCTA() {
  return (
    <section id="book" className="py-24 bg-[var(--color-dark)]">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <div className="rounded-3xl bg-gradient-to-br from-[var(--color-primary)]/20 to-[var(--color-accent)]/10 border border-white/10 p-12 md:p-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Ready to Go Green?
          </h2>
          <p className="text-gray-400 text-lg mb-8 max-w-xl mx-auto">
            Browse our fleet on Turo and book your eco-friendly ride today.
            Zero emissions, maximum adventure.
          </p>
          <a
            href="https://turo.com/us/en/host/48895154"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[var(--color-primary)] hover:bg-[var(--color-primary-light)] text-white px-8 py-4 rounded-full text-lg font-semibold transition-colors"
          >
            Book on Turo
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="py-24 bg-[#0d1b2e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold text-white mb-4">Get in Touch</h2>
            <p className="text-gray-400 text-lg mb-8">
              Have questions about our fleet or rental options? We&apos;re here to help you
              find the perfect eco-friendly vehicle.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[var(--color-primary)]/10 flex items-center justify-center text-[var(--color-primary-light)]">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                </div>
                <div>
                  <div className="text-gray-500 text-sm">Phone</div>
                  <a href="tel:9188886631" className="text-white font-medium hover:text-[var(--color-accent)] transition-colors">
                    (918) 888-6631
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[var(--color-primary)]/10 flex items-center justify-center text-[var(--color-primary-light)]">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                </div>
                <div>
                  <div className="text-gray-500 text-sm">Location</div>
                  <span className="text-white font-medium">Irvine, Orange County, CA</span>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[var(--color-primary)]/10 flex items-center justify-center text-[var(--color-primary-light)]">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <div className="text-gray-500 text-sm">Booking</div>
                  <span className="text-white font-medium">Available on Turo &mdash; 24/7</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[var(--color-dark-light)] rounded-2xl p-8 border border-white/5">
            <h3 className="text-white text-xl font-bold mb-6">Send a Message</h3>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                window.location.href = "tel:9188886631";
              }}
              className="space-y-4"
            >
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[var(--color-primary)]/50 transition-colors"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[var(--color-primary)]/50 transition-colors"
                />
              </div>
              <div>
                <textarea
                  rows={4}
                  placeholder="How can we help?"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[var(--color-primary)]/50 transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-[var(--color-primary)] hover:bg-[var(--color-primary-light)] text-white py-3 rounded-xl font-semibold transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-[var(--color-dark)] border-t border-white/5 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Image src="/logo.png" alt="HydroDrive Logo" width={28} height={28} className="rounded-full" />
            <span className="text-white font-bold">
              Hydro<span className="text-[var(--color-accent)]">Drive</span> USA
            </span>
          </div>

          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} HydroDrive LLC. All rights reserved.
          </p>

          <div className="flex gap-6">
            {["About", "Fleet", "Pricing", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-500 hover:text-gray-300 text-sm transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <About />
      <Fleet />
      <Pricing />
      <Testimonials />
      <BookCTA />
      <Contact />
      <Footer />
    </main>
  );
}
