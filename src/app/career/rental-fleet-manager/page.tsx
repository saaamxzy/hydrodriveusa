import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Rental Fleet Manager | Careers | HydroDrive USA",
  description:
    "Join HydroDrive LLC as a Rental Fleet Manager in Costa Mesa, CA 92626. $22-$25/hr, full-time or part-time. Help us lead the local clean energy rental market.",
};

export default function RentalFleetManagerPage() {
  const responsibilities = [
    "Check vehicles in and out while guiding customers through the rental process with professionalism.",
    "Fuel, vacuum, and wipe down interiors so every vehicle meets HydroDrive LLC standards between rentals.",
    "Inspect vehicles for damage upon return, document findings, and escalate issues quickly.",
    "Track vehicle availability, mileage, and scheduling so the team always knows what's on the lot.",
    "Coordinate with service, sales, and leadership to ensure the fleet is ready for the next driver.",
  ];

  const qualifications = [
    "Valid California driver's license (required, non-negotiable) and confidence driving hydrogen-powered vehicles.",
    "Customer service mindset with sharp attention to detail when inspecting vehicles or paperwork.",
    "Experience in fleet, rental, automotive, hospitality, or operations is a plus — willing to train the right person.",
  ];

  const perks = [
    "Drive impact by working with a modern hydrogen-powered fleet leading the local clean energy rental market.",
    "Join a tight-knit, bilingual team that cares about each other and the Orange County community.",
    "Grow with a mission-driven company committed to affordable, clean mobility for local communities.",
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
              href="/career"
              className="text-gray-300 hover:text-white transition-colors text-sm font-medium"
            >
              All Positions
            </Link>
          </div>
        </div>
      </header>

      {/* Breadcrumb */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <nav className="flex items-center gap-2 text-sm text-gray-500">
          <Link href="/" className="hover:text-gray-300 transition-colors">Home</Link>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
          <Link href="/career" className="hover:text-gray-300 transition-colors">Careers</Link>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
          <span className="text-gray-300">Rental Fleet Manager</span>
        </nav>
      </div>

      {/* Job Content */}
      <section className="py-12 pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Job Header */}
          <div className="mb-10">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="px-3 py-1 rounded-full bg-[var(--color-primary)]/20 text-[var(--color-primary-light)] text-xs font-semibold uppercase tracking-wider">
                Now Hiring
              </span>
              <span className="px-3 py-1 rounded-full bg-white/5 text-gray-400 text-xs font-medium">
                Full-Time / Part-Time
              </span>
              <span className="px-3 py-1 rounded-full bg-white/5 text-gray-400 text-xs font-medium">
                On-Site
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Rental Fleet Manager
            </h1>
            <div className="flex flex-wrap items-center gap-5 text-gray-400">
              <span className="flex items-center gap-1.5">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
                Costa Mesa, CA 92626
              </span>
              <span className="flex items-center gap-1.5">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                $22 - $25 / hour
              </span>
            </div>
          </div>

          {/* Job Body */}
          <div className="rounded-2xl border border-white/10 bg-[var(--color-dark-light)] overflow-hidden">
            <div className="p-8 md:p-10 space-y-10">
              {/* About the Company */}
              <div>
                <h2 className="text-white font-semibold text-xl mb-4">About HydroDrive LLC</h2>
                <p className="text-gray-400 leading-relaxed">
                  HydroDrive LLC is a local, community-rooted car rental company in Orange County, CA, dedicated to making clean energy vehicles accessible and affordable for everyone. Our hydrogen-forward rental fleet and bilingual (English &amp; Chinese) team make us a standout mobility partner for Orange County.
                </p>
              </div>

              {/* Role Overview */}
              <div>
                <h2 className="text-white font-semibold text-xl mb-4">Role Overview</h2>
                <p className="text-gray-400 leading-relaxed">
                  We&apos;re hiring a Rental Fleet Manager who keeps vehicles moving, customers smiling, and our hydrogen fleet spotless. You&apos;ll own the check-in/check-out workflow, coordinate availability with the team, and be the friendly face of our rental program.
                </p>
              </div>

              {/* What You'll Do */}
              <div>
                <h2 className="text-white font-semibold text-xl mb-4 flex items-center gap-2">
                  <svg className="w-5 h-5 text-[var(--color-primary-light)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  What You&apos;ll Do
                </h2>
                <ul className="space-y-3">
                  {responsibilities.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-gray-400">
                      <svg className="w-5 h-5 text-[var(--color-primary-light)] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* What You'll Bring */}
              <div>
                <h2 className="text-white font-semibold text-xl mb-4 flex items-center gap-2">
                  <svg className="w-5 h-5 text-[var(--color-accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                  </svg>
                  What You&apos;ll Bring
                </h2>
                <ul className="space-y-3">
                  {qualifications.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-gray-400">
                      <svg className="w-5 h-5 text-[var(--color-accent)] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Pay & Schedule */}
              <div>
                <h2 className="text-white font-semibold text-xl mb-4 flex items-center gap-2">
                  <svg className="w-5 h-5 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Pay &amp; Schedule
                </h2>
                <ul className="space-y-3 text-gray-400">
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-yellow-400 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    $22 &ndash; $25 per hour, based on experience
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-yellow-400 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Full-time or Part-time, on-site in Costa Mesa, CA (92626)
                  </li>
                </ul>
              </div>

              {/* Why HydroDrive */}
              <div>
                <h2 className="text-white font-semibold text-xl mb-4 flex items-center gap-2">
                  <svg className="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456z" />
                  </svg>
                  Why HydroDrive LLC
                </h2>
                <ul className="space-y-3">
                  {perks.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-gray-400">
                      <svg className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Apply CTA */}
            <div className="p-8 md:p-10 bg-gradient-to-r from-[var(--color-primary)]/10 to-[var(--color-accent)]/5 border-t border-white/10 text-center">
              <p className="text-gray-300 mb-6 text-lg">
                Ready to join the team? Apply through Indeed to get started.
              </p>
              <a
                href="https://www.indeed.com/job/rental-fleet-manager-440aceb23eb91996"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[var(--color-primary)] hover:bg-[var(--color-primary-light)] text-white px-8 py-4 rounded-full text-lg font-semibold transition-colors"
              >
                Apply on Indeed
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
