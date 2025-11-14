import React, { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import Logo from "../image/logo.png";

const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Refs for animating elements
  const headerRef = useRef(null);
  const navRef = useRef(null);
  const buttonRef = useRef(null);
  const mobileMenuRef = useRef(null);

  // Array of navigation items – eliminates duplicates and keeps things tidy
  const menuItems = [
    { label: "Home", href: "#" },
    { label: "About", href: "#" },
    { label: "Galleries", href: "#" },
    { label: "Quests & Challenges", href: "#" },
    { label: "Education", href: "#" },
    { label: "Community", href: "#" },
    { label: "Shop", href: "#" },
    { label: "Contact", href: "#" },
  ];

  // Animate header and desktop items on mount
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      // Slide the entire header down
      tl.from(headerRef.current, { y: -80, opacity: 0, duration: 1 });
      // Fade & slide in nav links one after another
      if (navRef.current) {
        const links = navRef.current.querySelectorAll("a");
        tl.from(links, { y: 20, opacity: 0, stagger: 0.08, duration: 0.5 }, "-=0.7");
      }
      // Fade & slide in the button
      if (buttonRef.current) {
        tl.from(buttonRef.current, { y: 20, opacity: 0, duration: 0.5 }, "-=0.4");
      }
    }, headerRef);

    return () => ctx.revert();
  }, []);

  // Animate mobile menu open/close
  useEffect(() => {
    if (mobileMenuRef.current) {
      if (isOpen) {
      gsap.fromTo(
          mobileMenuRef.current,
          { height: 0, opacity: 0 },
          { height: "auto", opacity: 1, duration: 0.4, ease: "power2.out" }
        );
      } else {
        gsap.to(mobileMenuRef.current, { height: 0, opacity: 0, duration: 0.3, ease: "power2.in" });
      }
    }
  }, [isOpen]);

  return (
    <header ref={headerRef} className="absolute top-0 left-0 w-full z-20">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img src={Logo} alt="Company Logo" className="w-50 h-25 object-contain" />
        </div>

        {/* Desktop Nav */}
        <nav ref={navRef} className="hidden md:flex space-x-8 pt-5">
          {menuItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-white font-outfit hover:text-[#B6FCFF] transition-colors duration-300"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Desktop Button */}
        <button
          ref={buttonRef}
          className="hidden md:inline-block px-6 py-2 rounded-full bg-gradient-to-r from-[#B6FCFF] to-[#00C3FF] text-black font-semibold font-outfit transition-transform duration-300 hover:scale-105"
        >
          Login
        </button>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white focus:outline-none"
          aria-label="Toggle menu"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <span className="text-2xl">{isOpen ? "✖" : "☰"}</span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        ref={mobileMenuRef}
        className="overflow-hidden md:hidden bg-gray-50 px-6 space-y-3 text-gray-700"
        style={{ height: 0, opacity: 0 }}
      >
        {menuItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="block py-2 hover:text-blue-500 transition-colors duration-300"
            onClick={() => setIsOpen(false)}
          >
            {item.label}
          </a>
        ))}
        <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300">
          Get Started
        </button>
      </div>
    </header>
  );
};

export default Hero;
