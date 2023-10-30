"use client";
import {
  Advantages,
  Contacts,
  Hero,
  HeroAfter,
  Industries,
  Service,
} from "@/components";
import { NextUIProvider } from "@nextui-org/react";

export default function Home() {
  return (
    <NextUIProvider>
      <main className="max-w-[1280px] mx-auto px-4 overflow-hidden">
        <Hero />
        <HeroAfter />
        <Advantages />
        <Industries />
        <Contacts />
        <Service />
      </main>
    </NextUIProvider>
  );
}
