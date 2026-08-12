import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers | HydroDrive USA",
  description:
    "Join HydroDrive LLC and help build the operations, software, and infrastructure behind accessible clean-energy mobility. View our Costa Mesa and remote openings.",
};

export default function CareerPage() {
  const positions = [
    {
      title: "Rental Fleet Manager",
      href: "/career/rental-fleet-manager",
      employmentType: "Full-Time / Part-Time",
      location: "Costa Mesa, CA",
      compensation: "$22 - $25 / hour",
      department: "Operations",
    },
    {
      title: "Software Development Engineer",
      href: "/career/software-development-engineer",
      employmentType: "Full-Time",
      location: "Remote",
      compensation: "$120,000 - $140,000 / year",
      department: "Technology",
    },
    {
      title: "DevOps Engineer",
      href: "/career/devops-engineer",
      employmentType: "Full-Time",
      location: "Remote",
      compensation: "$80,000 - $100,000 / year",
      department: "Technology",
    },
  ];

  return (
    <main className="min-h-screen bg-[var(--color-dark)]">
      {/* Header */}
      <header className="bg-[var(--color-dark)]/95 backdrop-blur-sm border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-2">
              <Image src="/logo.png" alt="HydroDrive Logo" width={36} height={36} className="rounded-full" />
              <span className="text-white font-bold text-xl">
                Hydro<span className="text-[var(--color-accent)]">Drive</span>
              </span>
            </Link>
            <Link
              href="/"
              className="text-gray-300 hover:text-white transition-colors text-sm font-medium"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-[var(--color-accent)]/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-[var(--color-primary)]/10 rounded-full blur-3xl" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <div className="inline-block mb-6 px-4 py-1.5 rounded-full border border-[var(--color-accent)]/30 bg-[var(--color-accent)]/10">
            <span className="text-[var(--color-accent)] text-sm font-medium">
              Careers at HydroDrive
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Join Our Mission
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Help us make clean energy vehicles accessible and affordable for everyone. We&apos;re a community-rooted team in Orange County, CA, and we&apos;re growing.
          </p>
        </div>
      </section>

      {/* Open Positions */}
      <section className="pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-2">Open Positions</h2>
            <p className="text-gray-400">
              {positions.length} open roles
            </p>
          </div>

          <div className="space-y-4">
            {positions.map((position) => (
              <Link
                key={position.href}
                href={position.href}
                className="block rounded-2xl border border-white/10 bg-[var(--color-dark-light)] p-8 hover:border-[var(--color-primary)]/40 transition-all group"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <span className="px-3 py-1 rounded-full bg-[var(--color-primary)]/20 text-[var(--color-accent-light)] text-xs font-semibold uppercase tracking-wider">
                        Now Hiring
                      </span>
                      <span className="px-3 py-1 rounded-full bg-white/5 text-gray-400 text-xs font-medium">
                        {position.employmentType}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                      {position.title}
                    </h3>
                    <div className="flex flex-wrap items-center gap-4 text-gray-400 text-sm">
                      <span className="flex items-center gap-1.5">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                        </svg>
                        {position.location}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {position.compensation}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.25 14.15v4.073a2.625 2.625 0 01-2.625 2.625H6.375a2.625 2.625 0 01-2.625-2.625V14.15M15 5.625V4.5A2.25 2.25 0 0012.75 2.25h-1.5A2.25 2.25 0 009 4.5v1.125m11.25 0H3.75A1.5 1.5 0 002.25 7.125v4.5a1.5 1.5 0 001.5 1.5h16.5a1.5 1.5 0 001.5-1.5v-4.5a1.5 1.5 0 00-1.5-1.5zM8.25 12.75v.008m7.5-.008v.008" />
                        </svg>
                        {position.department}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-[var(--color-accent-light)] font-medium group-hover:gap-3 transition-all">
                    View Details
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
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
            <Link href="/" className="text-gray-500 hover:text-gray-300 text-sm transition-colors">
              Home
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
