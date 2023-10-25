"use client";
import { Hero } from "@/components";
import { NextUIProvider } from "@nextui-org/react";

export default function Home() {
  return (
    <NextUIProvider>
      <main className="max-w-[1280px] mx-auto">
        <Hero />
      </main>
    </NextUIProvider>
  );
}
