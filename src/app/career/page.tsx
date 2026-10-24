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
    <main>
      <header className="site-header">
        <div className="container header-row">
          <Link href="/" className="brand">
            <Image src="/logo.png" alt="" width={36} height={36} unoptimized />
            <span className="brand-name">
              Hydro<span className="brand-accent">Drive</span>
            </span>
          </Link>
          <Link href="/" className="back-link">
            Back to Home
          </Link>
        </div>
      </header>

      <section className="page-intro">
        <div className="container">
          {/* Hallmark · reworded "Join Our Mission" to "Careers at HydroDrive" · 54 promotes the plain label to the heading. */}
          <h1 className="page-title">Careers at HydroDrive</h1>
          <p className="page-lead">
            Help us make clean energy vehicles accessible and affordable for everyone. We&apos;re a community-rooted team in Orange County, CA, and we&apos;re growing.
          </p>
        </div>
      </section>

      <section className="career-openings">
        <div className="container">
          <h2 className="section-heading">Open Positions</h2>
          <p className="section-intro">{positions.length} open roles</p>

          <div className="role-list">
            {positions.map((position) => (
              <Link
                key={position.href}
                href={position.href}
                className="role-row"
              >
                <div>
                  <h3 className="role-title">{position.title}</h3>
                  <div className="role-meta">
                    <span>{position.location}</span>
                    <span>{position.employmentType}</span>
                    <span>{position.department}</span>
                    <span>Now Hiring</span>
                  </div>
                </div>
                <p className="role-compensation">{position.compensation}</p>
                <span className="role-action">View Details</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
