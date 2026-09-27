"use client";

import { useState } from "react";
import Link from "next/link";

const menuItems = [
  { href: "/", label: "Home" },
  { href: "/about-us", label: "About Us" },
  { href: "/contact-us", label: "Contact Us" },
  { href: "/whats-included", label: "Whats Included" },
  { href: "/subscription-plans", label: "Subscription Plans" },
  { href: "/featured-cities", label: "Featured Cities" },
  { href: "/settings", label: "Accessibility Settings" },
];

export default function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed z-2000 md:hidden">
      <button onClick={toggle} aria-label="Main Menu" className="aria-label='Toggle Menu' relative flex cursor-pointer flex-col gap-1.5 rounded-[1.565vh] bg-black px-[1.5vh] py-[2vh]">
        <div className={`h-1.25 w-8.75 bg-white transition-all duration-400 ${isOpen ? "translate-y-2.75 -rotate-45" : ""}`} />
        <div className={`h-1.25 w-8.75 bg-white transition-all duration-400 ${isOpen ? "opacity-0" : ""}`} />
        <div className={`h-1.25 w-8.75 bg-white transition-all duration-400 ${isOpen ? "-translate-y-2.5 rotate-45" : ""}`} />
      </button>
      <ul className={`absolute top-[calc(100%+10px)] left-0 flex w-max flex-col rounded-[0.7825vh] bg-black py-[1.5649vh] shadow-[0_0.626vh_1.252vh_rgba(0,0,0,0.1)] transition-all duration-300 ${isOpen ? "animate-fade-in" : "animate-fade-out"}`}>
        {menuItems.map(({ href, label }) => (
          <li key={href}>
            <Link href={href} onClick={toggle} className="block p-1.5 text-left text-xl text-[#f2f2f2] no-underline hover:bg-[#575757] hover:text-white">
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}