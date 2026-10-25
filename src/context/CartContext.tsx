"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

export interface CartItemCustomization {
  size?: string;
  color?: string;
  nameOption?: string;
  customName?: string;
}

export interface CartItem {
  key: string;
  id: number | string;
  name: string;
  price: number;
  image: string;
  quantity: number;
  category?: string;
  customization?: CartItemCustomization;
}

export interface AddItemInput {
  category: string;
  id: number | string;
  name: string;
  price: number;
  image: string;
  quantity?: number;
  key?: string;
  customization?: CartItemCustomization;
}

export interface CartContextType {
  items: CartItem[];
  addItem: (item: AddItemInput) => void;
  removeItem: (key: string) => void;
  updateQuantity: (key: string, quantity: number) => void;
  clearCart: () => void;
  totalItems: number;
  totalPrice: number;
  isLoaded: boolean;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  // Hydration-safe initial load from localStorage
  useEffect(() => {
    try {
      const saved = localStorage.getItem("wahi_cart");
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed)) {
          const deduplicated: CartItem[] = [];
          parsed.forEach((raw, idx) => {
            if (!raw || typeof raw !== "object") return;
            const key = String(raw.key || `${raw.category || "item"}-${raw.id ?? idx}`);
            const price =
              typeof raw.price === "number" && !isNaN(raw.price)
                ? raw.price
                : Number(raw.price) || 0;
            const quantity =
              typeof raw.quantity === "number" && raw.quantity > 0
                ? raw.quantity
                : 1;

            const existingIndex = deduplicated.findIndex((i) => i.key === key);
            if (existingIndex > -1) {
              deduplicated[existingIndex].quantity += quantity;
            } else {
              deduplicated.push({
                ...raw,
                key,
                price,
                quantity,
                customization: raw.customization,
              });
            }
          });
          // eslint-disable-next-line react-hooks/set-state-in-effect
          setItems(deduplicated);
        }
      }
    } catch (e) {
      console.error("Failed to load cart from localStorage", e);
    } finally {
      setIsLoaded(true);
    }
  }, []);

  // Save to localStorage whenever items change, only after initial hydration load
  useEffect(() => {
    if (!isLoaded) return;
    try {
      localStorage.setItem("wahi_cart", JSON.stringify(items));
    } catch (e) {
      console.error("Failed to save cart to localStorage", e);
    }
  }, [items, isLoaded]);

  const addItem = (input: AddItemInput) => {
    const key = input.key || `${input.category}-${input.id}`;
    const qtyToAdd = input.quantity && input.quantity > 0 ? input.quantity : 1;
    const numericPrice =
      typeof input.price === "number" && !isNaN(input.price)
        ? input.price
        : Number(input.price) || 0;

    setItems((prevItems) => {
      const existingIndex = prevItems.findIndex((item) => item.key === key);
      if (existingIndex > -1) {
        const updated = [...prevItems];
        updated[existingIndex] = {
          ...updated[existingIndex],
          quantity: updated[existingIndex].quantity + qtyToAdd,
        };
        return updated;
      }
      return [
        ...prevItems,
        {
          key,
          id: input.id,
          name: input.name,
          price: numericPrice,
          image: input.image,
          quantity: qtyToAdd,
          category: input.category,
          customization: input.customization,
        },
      ];
    });
  };

  const removeItem = (key: string) => {
    setItems((prevItems) => prevItems.filter((item) => item.key !== key));
  };

  const updateQuantity = (key: string, quantity: number) => {
    setItems((prevItems) =>
      prevItems
        .map((item) => (item.key === key ? { ...item, quantity } : item))
        .filter((item) => item.quantity > 0)
    );
  };

  const clearCart = () => {
    setItems([]);
  };

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = items.reduce(
    (sum, item) => sum + (Number(item.price) || 0) * item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        items,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        totalItems,
        totalPrice,
        isLoaded,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
