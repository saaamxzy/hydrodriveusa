import Image from "next/image";
import Link from "next/link";

const footerLinks = [
  { label: "About", href: "/#about" },
  { label: "Fleet", href: "/#fleet" },
  { label: "Pricing", href: "/#pricing" },
  { label: "Contact", href: "/#contact" },
  { label: "Careers", href: "/career" },
  { label: "Privacy", href: "/privacy-policy" },
  { label: "SMS Terms", href: "/sms-terms" },
];

export default function SiteFooter() {
  return (
    <footer className="border-t border-white/5 bg-[var(--color-dark)]">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-6 lg:flex-row lg:justify-between">
          <Link href="/" className="flex items-center gap-2" aria-label="HydroDrive USA home">
            <Image
              src="/logo.png"
              alt=""
              width={28}
              height={28}
              className="rounded-full"
            />
            <span className="font-bold text-white">
              Hydro<span className="text-[var(--color-accent)]">Drive</span> USA
            </span>
          </Link>

          <nav
            aria-label="Footer navigation"
            className="flex flex-wrap items-center justify-center gap-x-5 gap-y-3"
          >
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-gray-400 transition-colors hover:text-white focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-accent)]"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <p className="text-center text-sm text-gray-400 lg:text-right">
            &copy; {new Date().getFullYear()} HydroDrive LLC. All rights reserved.
          </p>
        </div>

        <div className="mt-8 border-t border-white/10 pt-5">
          <a
            href="https://claricloud.io"
            target="_blank"
            rel="noopener noreferrer"
            className="group mx-auto flex w-fit items-center gap-2.5 rounded-sm text-xs text-gray-400 transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-accent)] lg:mx-0"
          >
            <span>Powered by</span>
            <Image
              src="/images/claricloud-mark.svg"
              alt=""
              width={38}
              height={25}
              className="h-[25px] w-[38px]"
            />
            <strong className="text-sm font-semibold tracking-tight text-gray-300 transition-colors group-hover:text-white">
              ClariCloud
            </strong>
            <svg
              aria-hidden="true"
              className="h-3.5 w-3.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.75}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H6.75A2.25 2.25 0 004.5 8.25v9A2.25 2.25 0 006.75 19.5h9A2.25 2.25 0 0018 17.25V10.5m-6-6h7.5m0 0V12m0-7.5L10.5 13.5" />
            </svg>
            <span className="sr-only">(opens in a new tab)</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
