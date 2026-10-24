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
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top">
          <Link href="/" className="brand footer-brand" aria-label="HydroDrive USA home">
            <Image src="/logo.png" alt="" width={28} height={28} unoptimized />
            <span>Hydro<span className="brand-accent">Drive</span> USA</span>
          </Link>
          <nav aria-label="Footer navigation" className="footer-nav">
            {footerLinks.map((link) => <Link key={link.href} href={link.href}>{link.label}</Link>)}
          </nav>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} HydroDrive LLC. All rights reserved.</p>
          <a href="https://claricloud.io" target="_blank" rel="noopener noreferrer" className="footer-credit">
            <span>Powered by</span>
            <Image src="/images/claricloud-mark.svg" alt="" width={38} height={25} />
            <strong>ClariCloud</strong>
            <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H6.75A2.25 2.25 0 004.5 8.25v9A2.25 2.25 0 006.75 19.5h9A2.25 2.25 0 0018 17.25V10.5m-6-6h7.5m0 0V12m0-7.5L10.5 13.5" />
            </svg>
            <span className="sr-only">(opens in a new tab)</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
