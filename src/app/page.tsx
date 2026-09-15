"use client";

import Image from "next/image";
import Link from "next/link";
import { Star, Truck, Scissors, Sparkles, Medal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { products } from "@/lib/products";


const FEATURES = [
  { icon: Scissors, title: "Fully Customizable", desc: "Choose your fabric, border, and intricate details." },
  { icon: Sparkles, title: "Premium Fabric", desc: "Only the finest organza, net, and silk." },
  { icon: Medal, title: "Handcrafted Work", desc: "Exquisite sitara and zardozi by expert artisans." },
  { icon: Truck, title: "Nationwide Delivery", desc: "Safe and secure shipping across Pakistan." },
];

const TESTIMONIALS = [
  { id: 1, name: "Fatima A.", review: "My customized dupatta was exactly how I envisioned it. The gold work was stunning and it made my Nikkah day perfect!", rating: 5 },
  { id: 2, name: "Zainab S.", review: "Incredible quality and attention to detail. The team at Wahi was so helpful in guiding my customization choices.", rating: 5 },
  { id: 3, name: "Sara M.", review: "The fabric felt so premium and the delivery was right on time. Highly recommended for every bride to be.", rating: 5 },
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. Hero Section */}
      <section className="relative w-full h-[85vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1583391733958-d259779383e5?w=1600&auto=format&fit=crop&q=80"
            alt="Bride wearing a beautifully crafted Nikkah dupatta"
            fill
            className="object-cover object-top"
            priority
          />
          {/* Dark Overlay for readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#2B2320]/40 via-[#2B2320]/50 to-[#2B2320]/80" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-4xl mx-auto space-y-6 mt-16 md:mt-0">
          <h1 className="font-heading text-6xl md:text-8xl lg:text-9xl text-[#FAF6F1] leading-none drop-shadow-lg">
            Wahi
          </h1>
          <p className="font-body text-lg md:text-xl text-[#FAF6F1]/90 max-w-2xl leading-relaxed drop-shadow-md font-light">
            Customize your Nikkah dupatta and make your wedding day special
          </p>
          <div className="pt-4">
            <Link href="/">
              <Button
                size="lg"
                className="bg-[#C9A66B] text-[#2B2320] hover:bg-[#D9BC8F] font-body font-semibold rounded-xl px-10 h-14 text-lg transition-all duration-300 shadow-[0_4px_14px_rgba(201,166,107,0.4)] hover:shadow-[0_6px_20px_rgba(201,166,107,0.6)] hover:-translate-y-0.5"
              >
                Shop Now
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* 2. Featured/New Arrivals Section */}
      <section className="py-20 md:py-32 bg-[#FAF6F1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center mb-12 md:mb-16 text-center">
            <h2 className="font-heading text-4xl md:text-5xl text-[#7A1F2B] mb-4">New Arrivals</h2>
            <div className="h-px w-24 bg-[#C9A66B]" />
          </div>

          <div className="relative group/arrows">
            <button
              className="absolute left-2 top-1/2 -translate-y-1/2 z-20 bg-white/90 rounded-full p-2 shadow-md opacity-100 group-hover/arrows:opacity-100 transition-opacity duration-300 hover:bg-white"
              onClick={() => {
                const container = document.querySelector('.products-row');
                if (container) container.scrollTo({ left: container.scrollLeft - container.clientWidth / 1.5, behavior: 'smooth' });
              }}
              aria-label="Scroll left"
            >
              <svg className="w-5 h-5 text-[#7A1F2B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <div className="products-row flex gap-4 md:gap-6 lg:gap-8 overflow-x-auto hide-scrollbar">
              {/* Card 1: product id 1 */}
              {(() => {
                const product = products.find((p) => p.id === 1);
                if (!product) return null;
                return (
                  <div key={1} className="flex-shrink-0">
                    <Link href="/nikkah-dupatta/1" className="group block">
                      <div className="relative flex flex-col bg-white rounded-2xl overflow-hidden shadow-[0_2px_10px_rgba(43,35,32,0.05)] hover:shadow-[0_10px_30px_rgba(122,31,43,0.1)] transition-all duration-300 w-[280px]">
                        {product.images[0] && (
                          <div className="relative aspect-[9/16] w-full overflow-hidden bg-[#E8C4C4]/20">
                            <Image
                              src={product.images[0]}
                              alt={product.name}
                              fill
                              className="object-cover"
                            />
                          </div>
                        )}
                        <div className="p-4 md:p-5 flex flex-col gap-1.5">
                          <h3 className="font-heading text-lg md:text-xl text-[#2B2320] group-hover:text-[#7A1F2B] transition-colors line-clamp-1">{product.name}</h3>
                          <p className="font-body text-sm md:text-base text-[#C9A66B] font-semibold">Rs. {product.price.toLocaleString()}</p>
                        </div>
                      </div>
                    </Link>
                  </div>
                );
              })()}
              {/* Card 2: product id 2 */}
              {(() => {
                const product = products.find((p) => p.id === 2);
                if (!product) return null;
                return (
                  <div key={2} className="flex-shrink-0">
                    <Link href="/nikkah-dupatta/2" className="group block">
                      <div className="relative flex flex-col bg-white rounded-2xl overflow-hidden shadow-[0_2px_10px_rgba(43,35,32,0.05)] hover:shadow-[0_10px_30px_rgba(122,31,43,0.1)] transition-all duration-300 w-[280px]">
                        {product.images[0] && (
                          <div className="relative aspect-[9/16] w-full overflow-hidden bg-[#E8C4C4]/20">
                            <Image
                              src={product.images[0]}
                              alt={product.name}
                              fill
                              className="object-cover"
                            />
                          </div>
                        )}
                        <div className="p-4 md:p-5 flex flex-col gap-1.5">
                          <h3 className="font-heading text-lg md:text-xl text-[#2B2320] group-hover:text-[#7A1F2B] transition-colors line-clamp-1">{product.name}</h3>
                          <p className="font-body text-sm md:text-base text-[#C9A66B] font-semibold">Rs. {product.price.toLocaleString()}</p>
                        </div>
                      </div>
                    </Link>
                  </div>
                );
              })()}
              {/* Card 3: product id 3 */}
              {(() => {
                const product = products.find((p) => p.id === 3);
                if (!product) return null;
                return (
                  <div key={3} className="flex-shrink-0">
                    <Link href="/nikkah-dupatta/3" className="group block">
                      <div className="relative flex flex-col bg-white rounded-2xl overflow-hidden shadow-[0_2px_10px_rgba(43,35,32,0.05)] hover:shadow-[0_10px_30px_rgba(122,31,43,0.1)] transition-all duration-300 w-[280px]">
                        {product.images[0] && (
                          <div className="relative aspect-[9/16] w-full overflow-hidden bg-[#E8C4C4]/20">
                            <Image
                              src={product.images[0]}
                              alt={product.name}
                              fill
                              className="object-cover"
                            />
                          </div>
                        )}
                        <div className="p-4 md:p-5 flex flex-col gap-1.5">
                          <h3 className="font-heading text-lg md:text-xl text-[#2B2320] group-hover:text-[#7A1F2B] transition-colors line-clamp-1">{product.name}</h3>
                          <p className="font-body text-sm md:text-base text-[#C9A66B] font-semibold">Rs. {product.price.toLocaleString()}</p>
                        </div>
                      </div>
                    </Link>
                  </div>
                );
              })()}
              {/* Card 4: product id 999 */}
              {(() => {
                const product = products.find((p) => p.id === 999);
                if (!product) return null;
                return (
                  <div key={999} className="flex-shrink-0">
                    <Link href="/nikkah-dupatta/999" className="group block">
                      <div className="relative flex flex-col bg-white rounded-2xl overflow-hidden shadow-[0_2px_10px_rgba(43,35,32,0.05)] hover:shadow-[0_10px_30px_rgba(122,31,43,0.1)] transition-all duration-300 w-[280px]">
                        {product.images[0] && (
                          <div className="relative aspect-[9/16] w-full overflow-hidden bg-[#E8C4C4]/20">
                            <Image
                              src={product.images[0]}
                              alt={product.name}
                              fill
                              className="object-cover"
                            />
                          </div>
                        )}
                        <div className="p-4 md:p-5 flex flex-col gap-1.5">
                          <h3 className="font-heading text-lg md:text-xl text-[#2B2320] group-hover:text-[#7A1F2B] transition-colors line-clamp-1">{product.name}</h3>
                          <p className="font-body text-sm md:text-base text-[#C9A66B] font-semibold">Rs. {product.price.toLocaleString()}</p>
                        </div>
                      </div>
                    </Link>
                  </div>
                );
              })()}
              {/* Previous Card 4: product id 4 */}
              {(() => {
                const product = products.find((p) => p.id === 4);
                if (!product) return null;
                return (
                  <div key={4} className="flex-shrink-0">
                    <Link href="/nikkah-dupatta/4" className="group block">
                      <div className="relative flex flex-col bg-white rounded-2xl overflow-hidden shadow-[0_2px_10px_rgba(43,35,32,0.05)] hover:shadow-[0_10px_30px_rgba(122,31,43,0.1)] transition-all duration-300 w-[280px]">
                        {product.images[0] && (
                          <div className="relative aspect-[9/16] w-full overflow-hidden bg-[#E8C4C4]/20">
                            <Image
                              src={product.images[0]}
                              alt={product.name}
                              fill
                              className="object-cover"
                            />
                          </div>
                        )}
                        <div className="p-4 md:p-5 flex flex-col gap-1.5">
                          <h3 className="font-heading text-lg md:text-xl text-[#2B2320] group-hover:text-[#7A1F2B] transition-colors line-clamp-1">{product.name}</h3>
                          <p className="font-body text-sm md:text-base text-[#C9A66B] font-semibold">Rs. {product.price.toLocaleString()}</p>
                        </div>
                      </div>
                    </Link>
                  </div>
                );
              })()}
              {/* Previous Card 5: product id 5 */}
              {(() => {
                const product = products.find((p) => p.id === 5);
                if (!product) return null;
                return (
                  <div key={5} className="flex-shrink-0">
                    <Link href="/nikkah-dupatta/5" className="group block">
                      <div className="relative flex flex-col bg-white rounded-2xl overflow-hidden shadow-[0_2px_10px_rgba(43,35,32,0.05)] hover:shadow-[0_10px_30px_rgba(122,31,43,0.1)] transition-all duration-300 w-[280px]">
                        {product.images[0] && (
                          <div className="relative aspect-[9/16] w-full overflow-hidden bg-[#E8C4C4]/20">
                            <Image
                              src={product.images[0]}
                              alt={product.name}
                              fill
                              className="object-cover"
                            />
                          </div>
                        )}
                        <div className="p-4 md:p-5 flex flex-col gap-1.5">
                          <h3 className="font-heading text-lg md:text-xl text-[#2B2320] group-hover:text-[#7A1F2B] transition-colors line-clamp-1">{product.name}</h3>
                          <p className="font-body text-sm md:text-base text-[#C9A66B] font-semibold">Rs. {product.price.toLocaleString()}</p>
                        </div>
                      </div>
                    </Link>
                  </div>
                );
              })()}
              {/* Card 6: product id 6 */}
              {(() => {
                const product = products.find((p) => p.id === 6);
                if (!product) return null;
                return (
                  <div key={6} className="flex-shrink-0">
                    <Link href="/nikkah-dupatta/6" className="group block">
                      <div className="relative flex flex-col bg-white rounded-2xl overflow-hidden shadow-[0_2px_10px_rgba(43,35,32,0.05)] hover:shadow-[0_10px_30px_rgba(122,31,43,0.1)] transition-all duration-300 w-[280px]">
                        {product.images[0] && (
                          <div className="relative aspect-[9/16] w-full overflow-hidden bg-[#E8C4C4]/20">
                            <Image
                              src={product.images[0]}
                              alt={product.name}
                              fill
                              className="object-cover"
                            />
                          </div>
                        )}
                        <div className="p-4 md:p-5 flex flex-col gap-1.5">
                          <h3 className="font-heading text-lg md:text-xl text-[#2B2320] group-hover:text-[#7A1F2B] transition-colors line-clamp-1">{product.name}</h3>
                          <p className="font-body text-sm md:text-base text-[#C9A66B] font-semibold">Rs. {product.price.toLocaleString()}</p>
                        </div>
                      </div>
                    </Link>
                  </div>
                );
              })()}
              {/* Card 7: product id 7 */}
              {(() => {
                const product = products.find((p) => p.id === 7);
                if (!product) return null;
                return (
                  <div key={7} className="flex-shrink-0">
                    <Link href="/nikkah-dupatta/7" className="group block">
                      <div className="relative flex flex-col bg-white rounded-2xl overflow-hidden shadow-[0_2px_10px_rgba(43,35,32,0.05)] hover:shadow-[0_10px_30px_rgba(122,31,43,0.1)] transition-all duration-300 w-[280px]">
                        {product.images[0] && (
                          <div className="relative aspect-[9/16] w-full overflow-hidden bg-[#E8C4C4]/20">
                            <Image
                              src={product.images[0]}
                              alt={product.name}
                              fill
                              className="object-cover"
                            />
                          </div>
                        )}
                        <div className="p-4 md:p-5 flex flex-col gap-1.5">
                          <h3 className="font-heading text-lg md:text-xl text-[#2B2320] group-hover:text-[#7A1F2B] transition-colors line-clamp-1">{product.name}</h3>
                          <p className="font-body text-sm md:text-base text-[#C9A66B] font-semibold">Rs. {product.price.toLocaleString()}</p>
                        </div>
                      </div>
                    </Link>
                  </div>
                );
              })()}
              {/* Card 8: product id 8 */}
              {(() => {
                const product = products.find((p) => p.id === 8);
                if (!product) return null;
                return (
                  <div key={8} className="flex-shrink-0">
                    <Link href="/nikkah-dupatta/8" className="group block">
                      <div className="relative flex flex-col bg-white rounded-2xl overflow-hidden shadow-[0_2px_10px_rgba(43,35,32,0.05)] hover:shadow-[0_10px_30px_rgba(122,31,43,0.1)] transition-all duration-300 w-[280px]">
                        {product.images[0] && (
                          <div className="relative aspect-[9/16] w-full overflow-hidden bg-[#E8C4C4]/20">
                            <Image
                              src={product.images[0]}
                              alt={product.name}
                              fill
                              className="object-cover"
                            />
                          </div>
                        )}
                        <div className="p-4 md:p-5 flex flex-col gap-1.5">
                          <h3 className="font-heading text-lg md:text-xl text-[#2B2320] group-hover:text-[#7A1F2B] transition-colors line-clamp-1">{product.name}</h3>
                          <p className="font-body text-sm md:text-base text-[#C9A66B] font-semibold">Rs. {product.price.toLocaleString()}</p>
                        </div>
                      </div>
                    </Link>
                  </div>
                );
              })()}
            </div>

            <button
              className="absolute right-2 top-1/2 -translate-y-1/2 z-20 bg-white/90 rounded-full p-2 shadow-md opacity-100 group-hover/arrows:opacity-100 transition-opacity duration-300 hover:bg-white"
              onClick={() => {
                const container = document.querySelector('.products-row');
                if (container) container.scrollTo({ left: container.scrollLeft + container.clientWidth / 1.5, behavior: 'smooth' });
              }}
              aria-label="Scroll right"
            >
              <svg className="w-5 h-5 text-[#7A1F2B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* 3. Bride Lehnga Section */}
      <section className="-mt-12 pb-0 bg-[#FAF6F1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center mb-12 md:mb-16 text-center">
            <h2 className="font-heading text-4xl md:text-5xl text-[#7A1F2B] mb-4">Bride Lehnga</h2>
            <div className="h-px w-24 bg-[#C9A66B]" />
          </div>
        </div>
      </section>

      {/* Why Choose Wahi Section */}
      <section className="py-20 bg-[#7A1F2B] text-[#FAF6F1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8">
            {FEATURES.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="flex flex-col items-center text-center space-y-5">
                  <div className="w-16 h-16 rounded-2xl bg-[#FAF6F1]/10 flex items-center justify-center mb-2 shadow-inner">
                    <Icon className="w-8 h-8 text-[#C9A66B]" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-heading text-2xl text-[#C9A66B] leading-tight">{feature.title}</h3>
                  <p className="font-body text-[#FAF6F1]/80 leading-relaxed max-w-[16rem]">
                    {feature.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. Testimonials Section */}
      <section className="py-20 md:py-32 bg-[#E8C4C4]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center mb-16">
            <span className="font-body text-sm text-[#C9A66B] uppercase tracking-widest font-medium mb-3">Customer Stories</span>
            <h2 className="font-heading text-4xl md:text-5xl text-[#2B2320] mb-4">What Our Brides Say</h2>
            <div className="h-px w-24 bg-[#C9A66B]" />
          </div>

          {/* Grid layout serving as a simple scrollable row on mobile and grid on desktop */}
          <div className="flex overflow-x-auto md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 pb-8 md:pb-0 snap-x snap-mandatory hide-scrollbar">
            {TESTIMONIALS.map((testimonial) => (
              <div key={testimonial.id} className="min-w-[85vw] sm:min-w-[300px] md:min-w-0 snap-center bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-[#E8D9D3]/50 flex flex-col h-full">
                <div className="flex gap-1.5 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#C9A66B] text-[#C9A66B]" />
                  ))}
                </div>
                <p className="font-body text-[#2B2320]/80 leading-relaxed italic mb-10 flex-grow text-[15px]">
                  "{testimonial.review}"
                </p>
                <div className="flex items-center gap-4 mt-auto pt-4 border-t border-[#E8D9D3]/40">
                  <div className="w-12 h-12 rounded-full bg-[#7A1F2B] text-[#FAF6F1] flex items-center justify-center font-heading text-xl shadow-sm">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div className="text-left">
                    <h4 className="font-heading text-lg text-[#2B2320] leading-none mb-1">{testimonial.name}</h4>
                    <span className="font-body text-[11px] uppercase tracking-wider text-[#C9A66B] font-semibold">Verified Bride</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Newsletter Signup Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#E8C4C4] to-transparent opacity-50" />

        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center relative z-10">
          <h2 className="font-heading text-4xl md:text-5xl text-[#7A1F2B] mb-5">Stay Updated</h2>
          <p className="font-body text-base md:text-lg text-[#2B2320]/70 mb-10 max-w-md mx-auto leading-relaxed">
            Subscribe to our newsletter for exclusive offers, new arrivals, and bridal inspiration.
          </p>
          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              required
              aria-label="Email address for newsletter"
              className="flex-1 px-5 py-4 rounded-xl border border-[#E8D9D3] bg-[#FAF6F1]/50 font-body text-sm text-[#2B2320] focus:outline-none focus:border-[#C9A66B] focus:ring-1 focus:ring-[#C9A66B] transition-all shadow-inner"
            />
            <Button type="button" className="bg-[#2B2320] text-[#FAF6F1] hover:bg-[#2B2320]/90 h-[54px] px-8 rounded-xl font-body font-semibold shadow-md shrink-0 transition-transform active:scale-95">
              Subscribe
            </Button>
          </form>
        </div>
      </section>
    </div>
  );
}