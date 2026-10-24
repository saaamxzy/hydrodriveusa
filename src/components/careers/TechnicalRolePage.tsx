import Image from "next/image";
import Link from "next/link";

type TechnicalRolePageProps = {
  title: string;
  compensation: string;
  overview: string;
  responsibilities: string[];
  requiredExperience: string[];
  preferredExperience: string[];
  impact: string[];
};

function CheckList({
  items,
  colorClass,
}: {
  items: string[];
  colorClass: string;
}) {
  return (
    <ul className="job-list">
      {items.map((item) => (
        <li key={item}>
          <svg
            className={`w-5 h-5 ${colorClass} shrink-0 mt-0.5`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function SectionHeading({
  children,
  colorClass,
  icon,
}: {
  children: React.ReactNode;
  colorClass: string;
  icon: "check" | "person" | "plus" | "spark";
}) {
  const paths = {
    check: "M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
    person: "M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z",
    plus: "M12 4.5v15m7.5-7.5h-15",
    spark: "M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456z",
  };

  return (
    <h2>
      <svg
        className={`w-5 h-5 ${colorClass}`}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={paths[icon]} />
      </svg>
      {children}
    </h2>
  );
}

export default function TechnicalRolePage({
  title,
  compensation,
  overview,
  responsibilities,
  requiredExperience,
  preferredExperience,
  impact,
}: TechnicalRolePageProps) {
  return (
    <main>
      <header className="site-header">
        <div className="container header-row">
          <Link href="/" className="brand">
            <Image src="/logo.png" alt="" width={36} height={36} className="rounded-full" unoptimized />
            <span className="brand-name">
              Hydro<span className="brand-accent">Drive</span>
            </span>
          </Link>
          <Link
            href="/career"
            className="back-link"
          >
            All Positions
          </Link>
        </div>
      </header>

      <div className="container">
        <nav className="breadcrumbs" aria-label="Breadcrumb">
          <Link href="/" className="text-link">Home</Link>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
          <Link href="/career" className="text-link">Careers</Link>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
          <span aria-current="page">{title}</span>
        </nav>
      </div>

      <section className="container job-layout">
        <div className="job-summary">
          <h1 className="job-title">
            {title}
          </h1>
          <div className="job-meta">
            <span>
              Now Hiring
            </span>
            <span>
              Full-Time
            </span>
            <span>
              Remote
            </span>
            <span>
              Technology Team
            </span>
          </div>
          <div className="job-meta">
            <span className="flex items-center gap-1.5">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
              </svg>
              Remote
            </span>
            <span className="flex items-center gap-1.5">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {compensation}
            </span>
          </div>
          <div className="job-apply">
            <p>
              Interested in building the systems behind HydroDrive? Send us your resume and a brief introduction.
            </p>
            <a
              href={`mailto:support@hydrodriveusa.com?subject=${encodeURIComponent(`${title} Application`)}`}
              className="button"
            >
              Apply by Email
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8.25l8.378 5.027a1.25 1.25 0 001.244 0L21 8.25M5.25 19.5h13.5A2.25 2.25 0 0021 17.25v-10.5A2.25 2.25 0 0018.75 4.5H5.25A2.25 2.25 0 003 6.75v10.5a2.25 2.25 0 002.25 2.25z" />
              </svg>
            </a>
          </div>
        </div>

        <div className="job-content">
          <section className="job-section">
            <h2>About HydroDrive LLC</h2>
            <p>
              HydroDrive LLC is a community-rooted clean-mobility company in Irvine, CA. Our software connects the day-to-day work behind vehicle rentals, fleet operations, staff coordination, customer support, and AI-assisted communications.
            </p>
          </section>

          <section className="job-section">
            <h2>Role Overview</h2>
            <p>{overview}</p>
          </section>

          <section className="job-section">
            <SectionHeading colorClass="text-[var(--color-accent-light)]" icon="check">
              What You&apos;ll Do
            </SectionHeading>
            <CheckList items={responsibilities} colorClass="text-[var(--color-accent-light)]" />
          </section>

          <section className="job-section">
            <SectionHeading colorClass="text-[var(--color-accent-light)]" icon="person">
              Required Experience
            </SectionHeading>
            <CheckList items={requiredExperience} colorClass="text-[var(--color-accent-light)]" />
          </section>

          <section className="job-section">
            <SectionHeading colorClass="text-[var(--color-accent-light)]" icon="plus">
              Helpful Experience
            </SectionHeading>
            <CheckList items={preferredExperience} colorClass="text-[var(--color-accent-light)]" />
          </section>

          <section className="job-section">
            <SectionHeading colorClass="text-[var(--color-accent-light)]" icon="spark">
              Why This Role Matters
            </SectionHeading>
            <CheckList items={impact} colorClass="text-[var(--color-accent-light)]" />
          </section>
          <div className="job-end-apply">
            <a
              href={`mailto:support@hydrodriveusa.com?subject=${encodeURIComponent(`${title} Application`)}`}
              className="button"
            >
              Apply by Email
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8.25l8.378 5.027a1.25 1.25 0 001.244 0L21 8.25M5.25 19.5h13.5A2.25 2.25 0 0021 17.25v-10.5A2.25 2.25 0 0018.75 4.5H5.25A2.25 2.25 0 003 6.75v10.5a2.25 2.25 0 002.25 2.25z" />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
