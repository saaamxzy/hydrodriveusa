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
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-12">
            Hydrodrive Customer Service SMS &mdash; Terms of Service
          </h1>

          <div className="space-y-8 text-gray-300 leading-relaxed">
            <section>
              <h2 className="text-2xl font-bold text-white mb-3">Program description.</h2>
              <p>
                Hydrodrive&rsquo;s SMS line (+1 916-668-4285) may send you SMS
                messages at your request during or after a call &mdash; for example, to confirm a
                callback time, share a reservation detail, or send a link you asked for.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-3">How to opt in.</h2>
              <p>
                You opt in by verbally asking our agent to text you while on a call with our
                customer service line. Messages are sent only to the phone number you called from.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-3">Message frequency.</h2>
              <p>Typical: 1&ndash;3 messages per support interaction. Never recurring or scheduled.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-3">
                Message and data rates may apply.
              </h2>
              <p>Standard carrier rates.</p>
            </section>

            <section>
              <p className="font-bold text-white">
                To opt out, reply STOP at any time. You will receive a confirmation and no further
                messages.
              </p>
            </section>

            <section>
              <p className="font-bold text-white">
                For help, reply HELP or contact us at support@hydrodriveusa.com / +1 (918) 238-8688.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-3">No third-party sharing.</h2>
              <p>
                We do not share your phone number or message content with third parties or
                affiliates for their marketing purposes.
              </p>
            </section>

            <section>
              <p className="text-gray-400">Last updated: April 20, 2026.</p>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
}
