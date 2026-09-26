import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  const navLinks = [
    { href: '/about-us', label: 'About Us' },
    { href: '/contact-us', label: 'Contact Us' },
    { href: '/whats-included', label: 'Whats Included' },
    { href: '/subscription-plans', label: 'Subscription Plans' },
    { href: '/featured-cities', label: 'Featured Cities' },
  ];

  return (
    <nav className="hidden animate-fade-in md:flex h-16 items-center justify-between rounded-lg relative z-50 mb-[2vh] bg-[#333] px-[3.13vh]">
      <Link href="/">
        <Image src="/Media/FrightTitleIcon.webp" alt="Marlowby Logo" width={64} height={64} className="m-[0.313vh] w-full h-full p-[1.565vh]" />
      </Link>

      {navLinks.map((link) => (
        <Link key={link.href} href={link.href} className="grow flex h-full items-center justify-center px-[2.504vh] text-center text-base text-[#f2f2f2] no-underline hover:bg-[#ddd] hover:text-black">
          {link.label}
        </Link>
      ))}

      <Link href="/settings">
        <Image src="/Media/accessibilityicon.webp" alt="Accessibility Settings" width={64} height={64} className="w-full h-full" />
      </Link>
    </nav>
  );
}
