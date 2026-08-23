import Link from "next/link";
import Image from "next/image";
import { products } from "@/lib/products";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nikkah Dupatta Collection — Wahi",
  description:
    "Browse our full collection of customizable Nikkah dupattas. Handcrafted, bespoke dupattas for your most cherished moments.",
};

export default function NikkahDupattaCollectionPage() {
  return (
    <div className="min-h-screen bg-[#FAF6F1]">
      <section className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center mb-12 md:mb-16 text-center">
            <h1 className="font-heading text-4xl md:text-5xl text-[#7A1F2B] mb-4">
              Nikkah Dupatta Collection
            </h1>
            <div className="h-px w-24 bg-[#C9A66B]" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
            {products.map((product) => {
              if (!product.name || !product.images || product.images.length === 0) {
                return null;
              }
              return (
                <Link key={product.id} href={`/nikkah-dupatta/${product.id}`} className="group block">
                  <div className="relative flex flex-col bg-white rounded-2xl overflow-hidden shadow-[0_2px_10px_rgba(43,35,32,0.05)] hover:shadow-[0_10px_30px_rgba(122,31,43,0.1)] transition-all duration-300">
                    {(product.id === 1 || product.id === 2) && product.images[0] && (
                      <div className="relative aspect-[9/16] w-full overflow-hidden bg-[#E8C4C4]/20">
                        <Image
                          src={product.images[0]}
                          alt={product.name}
                          fill
                          className="object-cover scale-110 origin-center"
                        />
                      </div>
                    )}
                    <div className="p-4 md:p-5 flex flex-col gap-1.5">
                      <h3 className="font-heading text-lg md:text-xl text-[#2B2320] group-hover:text-[#7A1F2B] transition-colors line-clamp-1">{product.name}</h3>
                      <p className="font-body text-sm md:text-base text-[#C9A66B] font-semibold">Rs. {product.price.toLocaleString()}</p>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
