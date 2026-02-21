"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

const navItems = [
  { href: "#brand", label: "Brand" },
  { href: "#colors", label: "Colors" },
  { href: "#typography", label: "Typography" },
  { href: "#logo", label: "Logo" },
  { href: "#surfaces", label: "Surfaces" },
  { href: "#imagery", label: "Imagery" },
];

export function Navigation() {
  const [showLogo, setShowLogo] = useState(false);

  useEffect(() => {
    function handleScroll() {
      const heroHeight = window.innerHeight;
      setShowLogo(window.scrollY > heroHeight * 0.6);
    }
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-brand-black">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link
          href="#"
          className={`flex items-center transition-opacity duration-300 ${showLogo ? "opacity-100" : "opacity-0 pointer-events-none"}`}
        >
          <Image
            src="/logo/bnb-logo-white.svg"
            alt="Bat & Barrel"
            width={216}
            height={72}
            className="h-10 w-auto"
            priority
          />
        </Link>
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-infield-tan hover:text-white transition-colors text-sm tracking-wider uppercase"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
