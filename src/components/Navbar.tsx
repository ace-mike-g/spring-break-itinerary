"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Zap } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/house", label: "House" },
  { href: "/quotes", label: "Guestbook" },
  { href: "/recommendations", label: "Recs" },
  { href: "/itinerary", label: "Itinerary" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-warm-200 bg-dark-bg/90 backdrop-blur-sm">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
        <Link href="/" className="flex items-center gap-2 text-lg font-bold text-hot-pink">
          <Zap className="h-5 w-5" />
          Spring Break 2026
        </Link>

        {/* Desktop nav */}
        <div className="hidden gap-1 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-lg px-3 py-2 text-sm font-semibold text-white/70 transition-colors hover:bg-warm-100 hover:text-cyan-blue"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-lg p-2 text-white/70 transition-colors hover:bg-warm-100 md:hidden"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="border-t border-warm-200 bg-dark-bg px-4 pb-4 md:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block rounded-lg px-3 py-2.5 text-sm font-semibold text-white/70 transition-colors hover:bg-warm-100 hover:text-cyan-blue"
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
