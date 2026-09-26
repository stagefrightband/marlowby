import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  const navLinks = [
    { href: '/aboutus', label: 'About Us' },
    { href: '/contactus', label: 'Contact Us' },
    { href: '/whatsincluded', label: 'Whats Included' },
    { href: '/subscriptionplans', label: 'Subscription Plans' },
    { href: '/featuredcities', label: 'Featured Cities' },
  ];

  const linkStyles = "grow flex h-full items-center justify-center px-[2.504vh] text-center text-base text-[#f2f2f2] no-underline hover:bg-[#ddd] hover:text-black";

  return (
    <nav className="hidden md:flex h-16 items-center justify-between rounded-lg relative z-50 mb-[2vh] bg-[#333] px-[3.13vh]">
      <Link href="/">
        <Image src="/Media/FrightTitleIcon.webp" alt="Marlowby Logo" width={64} height={64} className="box-content m-[0.313vh] h-[7.825vh] w-[7.825vh] p-[1.565vh]" />
      </Link>

      {navLinks.map((link) => (
        <Link key={link.href} href={link.href} className={linkStyles}>
          {link.label}
        </Link>
      ))}

      <Link href="/settings">
        <Image src="/Media/accessibilityicon.webp" alt="Accessibility Settings" width={40} height={40} className="h-[10vh] w-[10vh]" />
      </Link>
    </nav>
  );
}
