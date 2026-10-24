import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SMS Terms of Service | HydroDrive USA",
  description:
    "Hydrodrive Customer Service SMS Terms of Service — program description, opt-in, opt-out, message frequency, and help.",
};

export default function SmsTermsPage() {
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
            href="/"
            className="back-link"
          >
            Back to Home
          </Link>
        </div>
      </header>

      <div className="container document-layout">
        <div className="document-intro">
          <h1 className="document-title">
            Hydrodrive Customer Service SMS &mdash; Terms of Service
          </h1>
          <p>Last updated: April 20, 2026.</p>
        </div>

        <div className="document-body">
          <section>
            <h2>Program description.</h2>
            <p>
              Hydrodrive&rsquo;s SMS line (+1 916-668-4285) may send you SMS
              messages at your request during or after a call &mdash; for example, to confirm a
              callback time, share a reservation detail, or send a link you asked for.
            </p>
          </section>

          <section>
            <h2>How to opt in.</h2>
            <p>
              You opt in by verbally asking our agent to text you while on a call with our
              customer service line. Messages are sent only to the phone number you called from.
            </p>
          </section>

          <section>
            <h2>Message frequency.</h2>
            <p>Typical: 1&ndash;3 messages per support interaction. Never recurring or scheduled.</p>
          </section>

          <section>
            <h2>
              Message and data rates may apply.
            </h2>
            <p>Standard carrier rates.</p>
          </section>

          <section>
            <p>
              <strong>
                To opt out, reply STOP at any time. You will receive a confirmation and no further
                messages.
              </strong>
            </p>
          </section>

          <section>
            <p>
              <strong>
                For help, reply HELP or contact us at support@hydrodriveusa.com / +1 (918) 238-8688.
              </strong>
            </p>
          </section>

          <section>
            <h2>No third-party sharing.</h2>
            <p>
              We do not share your phone number or message content with third parties or
              affiliates for their marketing purposes.
            </p>
          </section>

        </div>
      </div>
    </main>
  );
}
