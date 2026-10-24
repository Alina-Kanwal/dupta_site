"use client";

import Link from "next/link";
import Image from "next/image";
import { ShoppingBag, Trash2, Plus, Minus, ArrowLeft } from "lucide-react";
import { useCart } from "@/context/CartContext";

export default function CartPage() {
  const { items, removeItem, updateQuantity, clearCart, totalItems, totalPrice, isLoaded } = useCart();

  if (!isLoaded) {
    return (
      <div className="min-h-[60vh] bg-[#FAF6F1] flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-[#7A1F2B] border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FAF6F1] py-12 md:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col items-center mb-10 text-center">
          <h1 className="font-heading text-4xl md:text-5xl text-[#7A1F2B] mb-3">
            Shopping Cart
          </h1>
          <div className="h-px w-20 bg-[#C9A66B]" />
        </div>

        {items.length === 0 ? (
          <div className="bg-white rounded-2xl p-8 md:p-12 text-center shadow-[0_2px_10px_rgba(43,35,32,0.05)] border border-[#E8D9D3] max-w-lg mx-auto">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#E8C4C4]/30 flex items-center justify-center text-[#7A1F2B]">
              <ShoppingBag className="w-8 h-8" />
            </div>
            <h2 className="font-heading text-2xl text-[#2B2320] mb-2">
              Your cart is empty
            </h2>
            <p className="font-body text-sm text-[#2B2320]/70 mb-6">
              Looks like you haven&apos;t added any items to your cart yet.
            </p>
            <Link
              href="/shop"
              className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-[#7A1F2B] text-[#FAF6F1] font-body text-sm font-semibold hover:bg-[#9B2B3A] transition-colors shadow-sm"
            >
              Explore Shop
            </Link>
          </div>
        ) : (
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-[0_2px_10px_rgba(43,35,32,0.05)] border border-[#E8D9D3]">
              <div className="flex items-center justify-between pb-4 border-b border-[#E8D9D3]">
                <span className="font-body text-sm text-[#2B2320]/70">
                  {totalItems} {totalItems === 1 ? "item" : "items"} in cart
                </span>
                <button
                  type="button"
                  onClick={clearCart}
                  className="font-body text-xs text-[#7A1F2B] hover:text-[#9B2B3A] font-medium transition-colors"
                >
                  Clear Cart
                </button>
              </div>

              {/* Items List */}
              <div className="divide-y divide-[#E8D9D3]/60">
                {items.map((item, index) => (
                  <div key={item.key || `cart-item-${item.id ?? index}-${index}`} className="py-4 sm:py-6 flex gap-4 items-center">
                    {/* Thumbnail */}
                    <div className="relative w-16 h-20 sm:w-20 sm:h-24 rounded-lg overflow-hidden bg-[#E8C4C4]/20 flex-shrink-0">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover"
                      />
                    </div>

                    {/* Details */}
                    <div className="flex-1 min-w-0">
                      <h3 className="font-heading text-base sm:text-lg text-[#2B2320] line-clamp-1">
                        {item.name}
                      </h3>
                      <p className="font-body text-xs text-[#2B2320]/60 mt-0.5">
                        Rs. {(Number(item.price) || 0).toLocaleString()} each
                      </p>
                      <p className="font-body text-sm font-semibold text-[#C9A66B] mt-1 sm:hidden">
                        Total: Rs. {((Number(item.price) || 0) * item.quantity).toLocaleString()}
                      </p>
                    </div>

                    {/* Quantity controls */}
                    <div className="flex items-center gap-2 border border-[#E8D9D3] rounded-lg p-1 bg-[#FAF6F1]">
                      <button
                        type="button"
                        onClick={() => updateQuantity(item.key, item.quantity - 1)}
                        className="w-7 h-7 flex items-center justify-center rounded text-[#2B2320] hover:bg-white transition-colors"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="w-3.5 h-3.5" />
                      </button>
                      <span className="w-8 text-center font-body text-sm font-medium text-[#2B2320]">
                        {item.quantity}
                      </span>
                      <button
                        type="button"
                        onClick={() => updateQuantity(item.key, item.quantity + 1)}
                        className="w-7 h-7 flex items-center justify-center rounded text-[#2B2320] hover:bg-white transition-colors"
                        aria-label="Increase quantity"
                      >
                        <Plus className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    {/* Line total for desktop */}
                    <div className="hidden sm:block text-right min-w-[100px]">
                      <span className="font-body text-base font-semibold text-[#7A1F2B]">
                        Rs. {((Number(item.price) || 0) * item.quantity).toLocaleString()}
                      </span>
                    </div>

                    {/* Remove button */}
                    <button
                      type="button"
                      onClick={() => removeItem(item.key)}
                      aria-label={`Remove ${item.name}`}
                      className="p-2 text-[#2B2320]/40 hover:text-[#7A1F2B] transition-colors rounded-lg hover:bg-[#E8C4C4]/20"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>

              {/* Total Summary */}
              <div className="mt-6 pt-6 border-t border-[#E8D9D3] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <Link
                  href="/shop"
                  className="inline-flex items-center gap-2 font-body text-sm text-[#7A1F2B] hover:text-[#9B2B3A] font-medium transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Continue Shopping
                </Link>

                <div className="flex items-center justify-between sm:justify-end gap-6">
                  <span className="font-heading text-lg text-[#2B2320]">
                    Total Price:
                  </span>
                  <span className="font-heading text-2xl text-[#7A1F2B]">
                    Rs. {(Number(totalPrice) || 0).toLocaleString()}
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
