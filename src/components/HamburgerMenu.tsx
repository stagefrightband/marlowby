"use client";
import React, { useState } from "react";
const HamburgerMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className="fixed z-2000 md:hidden [&_li]:list-none [&_li]:w-fit [&_a]:text-xl [&_a]:text-[#f2f2f2] [&_a]:no-underline hover:[&_a]:bg-[#575757] hover:[&_a]:text-white">
      <div className="relative p-[1vh] bg-black rounded-[1.565vh] inline-block cursor-pointer [&>div]:w-8.75 [&>div]:h-1.25 [&>div]:bg-white [&>div]:my-1.5 [&>div]:mx-0 [&>div]:transition-all [&>div]:duration-400" onClick={toggleMenu}>
        <div className={`bar1 ${isOpen ? "-rotate-45 translate-y-2.75" : ""}`}></div>
        <div className={`bar2 ${isOpen ? "opacity-0" : ""}`}></div>
        <div className={`bar3 ${isOpen ? "rotate-45 -translate-y-2.5" : ""}`}></div>
      </div>
      <ul className={`absolute top-full left-0 flex flex-col w-max gap-4 bg-black rounded-[0.7825vh] p-[1.5649vh_0] shadow-[0_0.626vh_1.252vh_rgba(0,0,0,0.1)] transition-[opacity,visibility] duration-300 ease-out [&_a]:p-2 [&_a]:text-xl [&_a]:text-[#f2f2f2] [&_a]:no-underline [&_a]:text-left [&_a]:hover:bg-[#575757] [&_a]:hover:text-white ${isOpen ? "w-max px-0 py-[1.5649vh] animate-fade-in" : "animate-fade-out"}`}>
        <li>
          <a href="/" onClick={toggleMenu}>
            Home
          </a>
        </li>
        <li>
          <a href="/aboutus" onClick={toggleMenu}>
            About Us
          </a>
        </li>
        <li>
          <a href="/contactus" onClick={toggleMenu}>
            Contact Us
          </a>
        </li>
        <li>
          <a href="/whatsincluded" onClick={toggleMenu}>
            Whats Included
          </a>
        </li>
        <li>
          <a href="/subscriptionplans" onClick={toggleMenu}>
            Subscription Plans
          </a>
        </li>
        <li>
          <a href="/featuredcities" onClick={toggleMenu}>
            Featured Cities
          </a>
        </li>
        <li>
          <a href="/settings" onClick={toggleMenu}>
            Accessibility Settings
          </a>
        </li>
      </ul>
    </nav>
  );
};
export default HamburgerMenu;
