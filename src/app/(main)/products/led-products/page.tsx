'use client';
import React from 'react';
import { LedProductsHero } from '@/components/led-products-hero';

interface LedProduct {
  id: string;
  name: string;
}

export default function LedProductsPage() {
  // Placeholder for LED products data
  const LED_PRODUCTS: LedProduct[] = [];

  return (
    <div>
      <LedProductsHero />
      <div className="w-full min-h-[50vh] flex flex-col items-center justify-center py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full gap-6">
          {LED_PRODUCTS.length > 0 ? (
            LED_PRODUCTS.map((led) => (
              <div className="p-8 border rounded bg-white" key={led.id}>
                {led.name}
              </div>
            ))
          ) : (
            <div className="col-span-3 text-center text-lg py-12">
              No LED products available yet.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
