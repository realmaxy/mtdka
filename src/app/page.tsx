"use client";
import {
  Advantages,
  CustomModal,
  CustomTitle,
  Hero,
  HeroAfter,
  Industries,
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
      </main>
    </NextUIProvider>
  );
}
