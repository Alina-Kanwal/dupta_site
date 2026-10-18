"use client";

import React, { useState } from "react";
import { ShoppingBag, Check } from "lucide-react";
import { useCart } from "@/context/CartContext";

interface AddToCartButtonProps {
  category: string;
  id: number | string;
  name: string;
  price: number | string;
  image: string;
  className?: string;
}

export function parseNumericPrice(price: number | string): number | null {
  if (typeof price === "number") {
    return price > 0 ? price : null;
  }
  if (typeof price === "string") {
    // If product indicates enquiry or price on request, do not parse as numeric price
    if (/contact|enquire/i.test(price)) {
      return null;
    }
    const clean = price.replace(/[^0-9]/g, "");
    if (!clean) return null;
    const val = parseInt(clean, 10);
    return isNaN(val) || val <= 0 ? null : val;
  }
  return null;
}

export default function AddToCartButton({
  category,
  id,
  name,
  price,
  image,
  className = "",
}: AddToCartButtonProps) {
  const { addItem } = useCart();
  const [justAdded, setJustAdded] = useState(false);

  const numericPrice = parseNumericPrice(price);

  // Any product that shows "Contact for Price" or "Enquire Now" gets NO button
  if (numericPrice === null) {
    return null;
  }

  const handleAddToCart = (e: React.MouseEvent<HTMLButtonElement>) => {
    // Crucial: prevent card's Link navigation and bubble up
    e.preventDefault();
    e.stopPropagation();

    addItem({
      category,
      id,
      name,
      price: numericPrice,
      image,
      quantity: 1,
    });

    setJustAdded(true);
    setTimeout(() => {
      setJustAdded(false);
    }, 1200);
  };

  return (
    <button
      type="button"
      onClick={handleAddToCart}
      aria-label={`Add ${name} to cart`}
      className={`w-full mt-2 py-2 px-3 rounded-xl font-body text-xs md:text-sm font-medium flex items-center justify-center gap-1.5 transition-all duration-200 shadow-sm ${
        justAdded
          ? "bg-[#C9A66B] text-[#2B2320]"
          : "bg-[#7A1F2B] text-[#FAF6F1] hover:bg-[#9B2B3A] active:scale-95"
      } ${className}`}
    >
      {justAdded ? (
        <>
          <Check className="w-4 h-4 shrink-0" />
          <span>Added</span>
        </>
      ) : (
        <>
          <ShoppingBag className="w-4 h-4 shrink-0" />
          <span>Add to Cart</span>
        </>
      )}
    </button>
  );
}
