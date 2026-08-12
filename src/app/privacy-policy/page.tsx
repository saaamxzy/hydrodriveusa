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
    <main className="min-h-screen bg-[var(--color-dark)]">
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

      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Privacy Policy
          </h1>
          <p className="text-gray-400 mb-12">Last updated: April 20, 2026</p>

          <div className="space-y-10 text-gray-300 leading-relaxed">
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Overview</h2>
              <p>
                HydroDrive LLC (&ldquo;HydroDrive,&rdquo; &ldquo;we,&rdquo; &ldquo;our,&rdquo; or
                &ldquo;us&rdquo;) respects your privacy. This Privacy Policy explains what information
                we collect when you interact with us, how we use it, and the choices you have. It
                applies to hydrodriveusa.com and to any phone-based interactions with our customer
                service line.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Information we collect</h2>
              <p className="mb-4">
                We collect information you provide directly &mdash; for example, your name, email
                address, phone number, and the content of messages you send us &mdash; as well as
                basic technical data (such as device type and approximate location) when you visit
                our website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Phone numbers &amp; SMS</h2>
              <p className="mb-4">
                Phone numbers given during a call to our customer service line are collected only
                to return the call or to send transactional SMS that the caller requested &mdash;
                for example, a callback confirmation, a reservation detail, or a link the caller
                asked us to share.
              </p>
              <p className="mb-4">
                SMS messages are sent via Twilio from <span className="text-white font-medium">+1 (916) 668-4285</span>.
                Messages are sent only to the phone number you called from and only when you ask
                our agent (including our voice AI auto-attendant, &ldquo;Sona&rdquo;) to text you.
              </p>
              <p className="mb-4">
                <span className="text-white font-medium">
                  We do not share phone numbers with third parties, and we do not use them for
                  marketing.
                </span>{" "}
                Message frequency is typically 1&ndash;3 messages per support interaction, never
                recurring or scheduled. Standard carrier message and data rates may apply. You can
                opt out at any time by replying <span className="font-bold text-white">STOP</span> to
                any message; for help, reply <span className="font-bold text-white">HELP</span>.
                See our{" "}
                <Link href="/sms-terms" className="text-[var(--color-accent)] hover:underline">
                  SMS Terms of Service
                </Link>{" "}
                for full program details.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">How we use information</h2>
              <p className="mb-4">
                We use the information we collect to respond to your inquiries, fulfill bookings
                and rental requests, send transactional SMS you have requested, operate and improve
                our website and services, and comply with legal obligations.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Sharing</h2>
              <p>
                We do not sell your personal information. We share information only with service
                providers who help us operate our business (for example, Twilio, which delivers
                SMS messages on our behalf) and only to the extent necessary for them to perform
                those services, or when required by law.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Your choices</h2>
              <p>
                You may request access to, correction of, or deletion of the personal information
                we hold about you. To opt out of SMS, reply{" "}
                <span className="font-bold text-white">STOP</span> to any message from our customer
                service line.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Contact for data requests</h2>
              <p>
                For privacy questions or data requests, email us at{" "}
                <a
                  href="mailto:support@hydrodriveusa.com"
                  className="text-[var(--color-accent)] hover:underline"
                >
                  support@hydrodriveusa.com
                </a>
                .
              </p>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
}
