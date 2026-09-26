"use client";

import React, { useState } from "react";
import Link from "next/link";

const menuItems = [
  { href: "/", label: "Home" },
  { href: "/aboutus", label: "About Us" },
  { href: "/contactus", label: "Contact Us" },
  { href: "/whatsincluded", label: "Whats Included" },
  { href: "/subscriptionplans", label: "Subscription Plans" },
  { href: "/featuredcities", label: "Featured Cities" },
  { href: "/settings", label: "Accessibility Settings" },
];

export default function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed z-2000 md:hidden">
      <button 
        onClick={toggle}
        className="relative p-[1.5vh] bg-black rounded-[1.565vh] flex flex-col gap-1.5 cursor-pointer aria-label='Toggle Menu'"
      >
        <div className={`w-8.75 h-1.25 bg-white transition-all duration-400 ${isOpen ? "-rotate-45 translate-y-2.75" : ""}`} />
        <div className={`w-8.75 h-1.25 bg-white transition-all duration-400 ${isOpen ? "opacity-0" : ""}`} />
        <div className={`w-8.75 h-1.25 bg-white transition-all duration-400 ${isOpen ? "rotate-45 -translate-y-2.5" : ""}`} />
      </button>
      <ul className={`absolute top-[calc(100%+10px)] left-0 flex flex-col w-max bg-black rounded-[0.7825vh] py-[1.5649vh] shadow-[0_0.626vh_1.252vh_rgba(0,0,0,0.1)] transition-all duration-300 ${isOpen ? "animate-fade-in" : "animate-fade-out"}`}>
        {menuItems.map(({ href, label }) => (
          <li key={href}>
            <Link 
              href={href} 
              onClick={toggle}
              className="block p-2 text-xl text-[#f2f2f2] no-underline text-left hover:bg-[#575757] hover:text-white"
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};