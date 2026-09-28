"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ShoppingBag } from "lucide-react";

const ITEM = {
  name: "Winter Collection 1",
  color: "",
  details: "",
  images: [
    "/images/dress/dress_1/0.jpg",
    "/images/dress/dress_1/1.jpg",
    "/images/dress/dress_1/2.jpg",
    "/images/dress/dress_1/3.jpg",
    "/images/dress/dress_1/4.jpg",
    "/images/dress/dress_1/5.jpg",
    "/images/dress/dress_1/6.jpg",
  ],
};

export default function WinterOneDetailPage() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="min-h-screen bg-[#FAF6F1] py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        {/* Breadcrumb */}
        <nav className="mb-6 text-sm">
          <Link href="/" className="text-[#2B2320]/60 hover:text-[#7A1F2B]">Home</Link>
          <span className="mx-2 text-[#2B2320]/40">/</span>
          <span className="text-[#2B2320] font-medium">{ITEM.name}</span>
        </nav>

        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">

          {/* ── Gallery ── */}
          <div className="w-full lg:w-1/2 lg:sticky lg:top-24 self-start flex flex-col gap-4">
            {/* Main Image */}
            <div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden bg-[#E8C4C4]/20 shadow-sm">
              {ITEM.images[activeIndex] && (
                <Image
                  src={ITEM.images[activeIndex]}
                  alt={`${ITEM.name} view ${activeIndex + 1}`}
                  fill
                  className="object-cover"
                  priority
                />
              )}
            </div>
            {/* Thumbnail Row */}
            <div className="flex gap-2 overflow-x-auto pb-1 hide-scrollbar">
              {ITEM.images.map((src, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  className={`relative flex-shrink-0 w-16 h-20 rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                    activeIndex === i
                      ? "border-[#7A1F2B] shadow-[0_0_0_2px_rgba(122,31,43,0.15)]"
                      : "border-[#E8D9D3] hover:border-[#C9A66B]"
                  }`}
                >
                  <Image src={src} alt={`Thumbnail ${i + 1}`} fill className="object-cover" sizes="64px" />
                </button>
              ))}
            </div>
          </div>

          {/* ── Details ── */}
          <div className="w-full lg:w-1/2 space-y-7">

            {/* Title */}
            <h1 className="font-heading text-3xl md:text-4xl text-[#7A1F2B] leading-tight">{ITEM.name}</h1>

            {/* CTA */}
            <Button
              type="button"
              className="w-full bg-[#7A1F2B] text-[#FAF6F1] hover:bg-[#9B2B3A] font-body font-semibold h-12 rounded-xl shadow-md transition-all duration-200 hover:shadow-lg"
            >
              <ShoppingBag className="mr-2 w-4 h-4" />
              Enquire Now
            </Button>

          </div>
        </div>
      </div>
    </div>
  );
}
