"use client";

import Link from "next/link";
import Image from "next/image";

const navItems = [
  { href: "#brand", label: "Brand" },
  { href: "#colors", label: "Colors" },
  { href: "#typography", label: "Typography" },
  { href: "#logo", label: "Logo" },
  { href: "#surfaces", label: "Surfaces" },
  { href: "#imagery", label: "Imagery" },
];

export function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-brand-black">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo/full-logo-white.svg"
            alt="Bat & Barrel"
            width={120}
            height={40}
            className="h-8 w-auto"
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
