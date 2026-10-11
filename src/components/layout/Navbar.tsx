"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ShoppingBag, Search, Menu, X } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { label: "Home",     href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Contact",  href: "/contact" },
];

const COLLECTIONS = [
  { label: "Winter Collection", href: "/winter-collection" },
  { label: "Bridal Lehnga",     href: "/bridal-lehenga" },
  { label: "Nikkah Dupatta",    href: "/nikkah-dupatta" },
];

export default function Navbar() {
  const [cartCount, setCartCount]   = useState(0);
  const [scrolled, setScrolled]     = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [collectionsOpen, setCollectionsOpen] = useState(false);

  /* Add shadow on scroll */
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* Handle clicks outside dropdown */
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (collectionsOpen) {
        const target = event.target as HTMLElement;
        if (
          target &&
          !target.closest('#collections-dropdown-btn') &&
          !target.closest('#collections-dropdown-panel')
        ) {
          setCollectionsOpen(false);
        }
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [collectionsOpen]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full bg-[#FAF6F1] transition-shadow duration-300",
        scrolled
          ? "shadow-[0_2px_20px_rgba(43,35,32,0.10)]"
          : "border-b border-[#E8D9D3]"
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 md:h-20 items-center justify-between gap-4">

          {/* ── Logo ─────────────────────────────────────────── */}
          <Link
            href="/"
            className="flex-shrink-0 flex flex-col leading-none group"
            aria-label="Wahi — Home"
          >
            <span
              className="font-heading text-3xl md:text-4xl text-[#7A1F2B] tracking-tight
                         group-hover:text-[#9B2B3A] transition-colors duration-200"
            >
              Wahi
            </span>
            <span className="hidden sm:block font-body text-[10px] tracking-[0.18em] uppercase text-[#C9A66B] font-medium -mt-0.5">
              Nikkah Dupattas
            </span>
          </Link>

          {/* ── Desktop Nav Links ─────────────────────────────── */}
          <nav
            className="hidden md:flex items-center gap-1"
            aria-label="Main navigation"
          >
            {NAV_LINKS.map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                className="relative px-4 py-2 font-body text-sm font-medium text-[#2B2320]
                           hover:text-[#7A1F2B] transition-colors duration-200
                           after:absolute after:bottom-0 after:left-4 after:right-4 after:h-px
                           after:bg-[#C9A66B] after:scale-x-0 hover:after:scale-x-100
                           after:transition-transform after:duration-300 after:origin-left"
              >
                {label}
              </Link>
            ))}
            {/* Collections Dropdown */}
            <div className="relative">
              <button
                id="collections-dropdown-btn"
                onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                  e.stopPropagation();
                  setCollectionsOpen(!collectionsOpen);
                }}
                className="relative flex items-center px-4 py-2 font-body text-sm font-medium text-[#2B2320]
                           hover:text-[#7A1F2B] transition-colors duration-200
                           after:absolute after:bottom-0 after:left-4 after:right-4 after:h-px
                           after:bg-[#C9A66B] after:scale-x-0 hover:after:scale-x-100
                           after:transition-transform after:duration-300 after:origin-left"
                aria-label="Collections dropdown"
                aria-haspopup="true"
                aria-expanded={collectionsOpen}
              >
                Collections
                <svg className="ml-2 h-3 w-3 transition-transform duration-200"
                     fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5"
                     style={{ transform: collectionsOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
              </button>
              <div id="collections-dropdown-panel" className={`absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg border border-[#E8D9D3] z-20 ${collectionsOpen ? 'block' : 'hidden'}`}>
                {COLLECTIONS.map(({ label, href }) => (
                  <Link
                    key={href}
                    href={href}
                    onClick={() => setCollectionsOpen(false)}
                    className="block px-4 py-2 text-sm text-[#2B2320] hover:bg-[#E8C4C4]/50 hover:text-[#7A1F2B]"
                  >
                    {label}
                  </Link>
                ))}
              </div>
            </div>
          </nav>

          {/* ── Right-side Icons ──────────────────────────────── */}
          <div className="flex items-center gap-1 sm:gap-2">

            {/* Search */}
            <button
              id="navbar-search-btn"
              aria-label="Search"
              className="p-2.5 rounded-lg text-[#2B2320] hover:text-[#7A1F2B]
                         hover:bg-[#E8C4C4]/30 transition-all duration-200"
            >
              <Search className="w-5 h-5" strokeWidth={1.75} />
            </button>

            {/* Cart */}
            <Link
              href="/cart"
              id="navbar-cart-btn"
              aria-label={`Cart — ${cartCount} item${cartCount !== 1 ? "s" : ""}`}
              className="relative p-2.5 rounded-lg text-[#2B2320] hover:text-[#7A1F2B]
                         hover:bg-[#E8C4C4]/30 transition-all duration-200"
            >
              <ShoppingBag className="w-5 h-5" strokeWidth={1.75} />
              {cartCount > 0 && (
                <span
                  className="absolute -top-0.5 -right-0.5 min-w-[18px] h-[18px] px-1
                             bg-[#7A1F2B] text-[#FAF6F1] text-[10px] font-body font-semibold
                             rounded-full flex items-center justify-center leading-none"
                >
                  {cartCount > 99 ? "99+" : cartCount}
                </span>
              )}
            </Link>

            {/* Mobile hamburger — hidden on md+ */}
            <div className="md:hidden">
              <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
                <SheetTrigger
                  id="navbar-mobile-menu-btn"
                  aria-label="Open menu"
                  className="p-2.5 rounded-lg text-[#2B2320] hover:text-[#7A1F2B]
                             hover:bg-[#E8C4C4]/30 transition-all duration-200"
                >
                  <Menu className="w-5 h-5" strokeWidth={1.75} />
                </SheetTrigger>

                <SheetContent
                  side="right"
                  className="w-[280px] bg-[#FAF6F1] border-l border-[#E8D9D3] p-0"
                >
                  {/* Sheet header */}
                  <SheetHeader className="px-6 pt-6 pb-4 border-b border-[#E8D9D3]">
                    <SheetTitle>
                      <Link
                        href="/"
                        onClick={() => setMobileOpen(false)}
                        className="font-heading text-3xl text-[#7A1F2B] leading-none"
                      >
                        Wahi
                      </Link>
                    </SheetTitle>
                    <p className="font-body text-[10px] tracking-[0.18em] uppercase text-[#C9A66B] font-medium mt-1">
                      Nikkah Dupattas
                    </p>
                  </SheetHeader>

                  {/* Mobile nav links */}
                  <nav
                    className="flex flex-col px-4 py-6 gap-1"
                    aria-label="Mobile navigation"
                  >
                    {NAV_LINKS.map(({ label, href }) => (
                      <Link
                        key={href}
                        href={href}
                        onClick={() => setMobileOpen(false)}
                        className="flex items-center gap-3 px-4 py-3.5 rounded-xl font-body
                                   text-base font-medium text-[#2B2320] hover:text-[#7A1F2B]
                                   hover:bg-[#E8C4C4]/40 transition-all duration-200"
                      >
                        {label}
                      </Link>
                    ))}
                    {/* Mobile Collections Dropdown */}
                    <div className="border-t border-[#E8D9D3] pt-4">
                      <button
                        onClick={(e: React.MouseEvent<HTMLButtonElement>) => setCollectionsOpen(!collectionsOpen)}
                        className="w-full flex items-center justify-between px-4 py-3.5 rounded-xl font-body
                                   text-base font-medium text-[#2B2320] hover:text-[#7A1F2B]
                                   hover:bg-[#E8C4C4]/40 transition-all duration-200"
                      >
                        <span>Collections</span>
                        <svg className="ml-2 h-3 w-3 transition-transform duration-200"
                             fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5"
                             style={{ transform: collectionsOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                        </svg>
                      </button>
                      {collectionsOpen && (
                        <div className="mt-2 space-y-1">
                          {COLLECTIONS.map(({ label, href }) => (
                            <Link
                              key={href}
                              href={href}
                              onClick={() => setMobileOpen(false)}
                              className="px-4 py-3 text-base font-medium text-[#2B2320] hover:text-[#7A1F2B]
                                         hover:bg-[#E8C4C4]/40 transition-all duration-200"
                            >
                              {label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  </nav>

                  {/* Divider + tagline */}
                  <div className="px-6 mt-auto pb-8">
                    <div className="h-px bg-[#E8D9D3] mb-6" />
                    <p className="font-body text-xs text-[#2B2320]/50 leading-relaxed">
                      Customize your Nikkah dupatta and make your wedding day special.
                    </p>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
