"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ShoppingBag, Search, Menu, ChevronRight } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { useCart } from "@/context/CartContext";

const NAV_LINKS = [
  { label: "Home",     href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Contact",  href: "/contact" },
];

export default function Navbar() {
  const { totalItems, isLoaded } = useCart();
  const cartCount = isLoaded ? totalItems : 0;
  const [scrolled, setScrolled]     = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  /* Add shadow on scroll */
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* Close mobile drawer on desktop resize */
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  /* Close on Escape key */
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMobileOpen(false);
      }
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full bg-[#FAF6F1] transition-shadow duration-300",
        scrolled
          ? "shadow-[0_2px_20px_rgba(43,35,32,0.10)]"
          : "border-b border-[#E8D9D3]"
      )}
    >
      <div className="mx-auto max-w-7xl px-3 sm:px-6 lg:px-8">
        <div className="flex h-16 md:h-20 items-center justify-between gap-2 sm:gap-4">

          {/* ── Logo ─────────────────────────────────────────── */}
          <Link
            href="/"
            className="flex-shrink-0 flex flex-col leading-none group py-1"
            aria-label="Wahi — Home"
          >
            <span
              className="font-heading text-2xl sm:text-3xl md:text-4xl text-[#7A1F2B] tracking-tight
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
          </nav>

          {/* ── Right-side Icons ──────────────────────────────── */}
          <div className="flex items-center gap-0.5 sm:gap-2">

            {/* Search */}
            <button
              id="navbar-search-btn"
              type="button"
              aria-label="Search"
              className="p-2 sm:p-2.5 rounded-lg text-[#2B2320] hover:text-[#7A1F2B]
                         hover:bg-[#E8C4C4]/30 active:bg-[#E8C4C4]/50 transition-all duration-200"
            >
              <Search className="w-5 h-5" strokeWidth={1.75} />
            </button>

            {/* Cart */}
            <Link
              href="/cart"
              id="navbar-cart-btn"
              aria-label={`Cart — ${cartCount} item${cartCount !== 1 ? "s" : ""}`}
              className="relative p-2 sm:p-2.5 rounded-lg text-[#2B2320] hover:text-[#7A1F2B]
                         hover:bg-[#E8C4C4]/30 active:bg-[#E8C4C4]/50 transition-all duration-200"
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
                  className="p-2 sm:p-2.5 rounded-lg text-[#2B2320] hover:text-[#7A1F2B]
                             hover:bg-[#E8C4C4]/30 active:bg-[#E8C4C4]/50 transition-all duration-200"
                >
                  <Menu className="w-5 h-5" strokeWidth={1.75} />
                </SheetTrigger>

                <SheetContent
                  side="right"
                  className="w-[85vw] max-w-[320px] bg-[#FAF6F1] border-l border-[#E8D9D3] p-0 flex flex-col h-full overflow-hidden text-[#2B2320]"
                >
                  {/* Sheet header */}
                  <SheetHeader className="px-5 pt-5 pb-4 pr-12 border-b border-[#E8D9D3] flex-shrink-0 text-left">
                    <SheetTitle className="text-left">
                      <Link
                        href="/"
                        onClick={() => setMobileOpen(false)}
                        className="font-heading text-2xl sm:text-3xl text-[#7A1F2B] leading-none block hover:text-[#9B2B3A] transition-colors"
                      >
                        Wahi
                      </Link>
                    </SheetTitle>
                    <p className="font-body text-[10px] tracking-[0.18em] uppercase text-[#C9A66B] font-medium mt-1">
                      Nikkah Dupattas
                    </p>
                  </SheetHeader>

                  {/* Scrollable nav container */}
                  <div className="flex-1 overflow-y-auto px-4 py-4 flex flex-col justify-between overscroll-contain">
                    <nav className="flex flex-col gap-1" aria-label="Mobile navigation">
                      {NAV_LINKS.map(({ label, href }) => (
                        <Link
                          key={href}
                          href={href}
                          onClick={() => setMobileOpen(false)}
                          className="flex items-center justify-between px-3.5 py-3 rounded-xl font-body
                                     text-[15px] font-medium text-[#2B2320] hover:text-[#7A1F2B]
                                     hover:bg-[#E8C4C4]/30 active:bg-[#E8C4C4]/50 transition-all duration-200 group"
                        >
                          <span>{label}</span>
                          <ChevronRight className="w-4 h-4 text-[#2B2320]/30 group-hover:text-[#7A1F2B] transition-colors" />
                        </Link>
                      ))}

                    </nav>

                    {/* Divider + tagline footer */}
                    <div className="pt-6 mt-4 border-t border-[#E8D9D3]">
                      <p className="font-body text-xs text-[#2B2320]/60 leading-relaxed">
                        Customize your Nikkah dupatta and make your wedding day special.
                      </p>
                    </div>
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
