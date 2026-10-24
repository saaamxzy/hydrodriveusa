import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | HydroDrive USA",
  description:
    "HydroDrive USA privacy policy — how we collect, use, and protect your information, including phone numbers and SMS messages from our customer service line.",
};

export default function PrivacyPolicyPage() {
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
            Privacy Policy
          </h1>
          <p>Last updated: April 20, 2026</p>
        </div>

        <div className="document-body">
          <section>
            <h2>Overview</h2>
            <p>
              HydroDrive LLC (&ldquo;HydroDrive,&rdquo; &ldquo;we,&rdquo; &ldquo;our,&rdquo; or
              &ldquo;us&rdquo;) respects your privacy. This Privacy Policy explains what information
              we collect when you interact with us, how we use it, and the choices you have. It
              applies to hydrodriveusa.com and to any phone-based interactions with our customer
              service line.
            </p>
          </section>

          <section>
            <h2>Information we collect</h2>
            <p>
              We collect information you provide directly &mdash; for example, your name, email
              address, phone number, and the content of messages you send us &mdash; as well as
              basic technical data (such as device type and approximate location) when you visit
              our website.
            </p>
          </section>

          <section>
            <h2>Phone numbers &amp; SMS</h2>
            <p>
              Phone numbers given during a call to our customer service line are collected only
              to return the call or to send transactional SMS that the caller requested &mdash;
              for example, a callback confirmation, a reservation detail, or a link the caller
              asked us to share.
            </p>
            <p>
              SMS messages are sent via Twilio from <strong>+1 (916) 668-4285</strong>.
              Messages are sent only to the phone number you called from and only when you ask
              our agent (including our voice AI auto-attendant, &ldquo;Sona&rdquo;) to text you.
            </p>
            <p>
              <strong>
                We do not share phone numbers with third parties, and we do not use them for
                marketing.
              </strong>{" "}
              Message frequency is typically 1&ndash;3 messages per support interaction, never
              recurring or scheduled. Standard carrier message and data rates may apply. You can
              opt out at any time by replying <strong>STOP</strong> to
              any message; for help, reply <strong>HELP</strong>.
              See our{" "}
              <Link href="/sms-terms" className="text-link">
                SMS Terms of Service
              </Link>{" "}
              for full program details.
            </p>
          </section>

          <section>
            <h2>How we use information</h2>
            <p>
              We use the information we collect to respond to your inquiries, fulfill bookings
              and rental requests, send transactional SMS you have requested, operate and improve
              our website and services, and comply with legal obligations.
            </p>
          </section>

          <section>
            <h2>Sharing</h2>
            <p>
              We do not sell your personal information. We share information only with service
              providers who help us operate our business (for example, Twilio, which delivers
              SMS messages on our behalf) and only to the extent necessary for them to perform
              those services, or when required by law.
            </p>
          </section>

          <section>
            <h2>Your choices</h2>
            <p>
              You may request access to, correction of, or deletion of the personal information
              we hold about you. To opt out of SMS, reply{" "}
              <strong>STOP</strong> to any message from our customer
              service line.
            </p>
          </section>

          <section>
            <h2>Contact for data requests</h2>
            <p>
              For privacy questions or data requests, email us at{" "}
              <a
                href="mailto:support@hydrodriveusa.com"
                className="text-link"
              >
                support@hydrodriveusa.com
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
