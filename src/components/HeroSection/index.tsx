"use client";

import React from "react";
import Link from "next/link";
import { HiArrowRight } from "react-icons/hi";

export default function HeroSection() {
  return (
    <section className="relative text-center lg:mt-20 mt-2 py-16 md:py-2 flex flex-col items-center justify-center">
      <div className="absolute inset-0 z-0 flex items-center justify-center">
        <div
          className="lg:w-[60%] w-[90%] h-[120%] lg:h-[60rem] bg-[url('/Grid.svg')]"
          style={{
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      </div>

      {/* Introducing Button */}
      <div className="relative z-10 mb-4">
        <Link
          href="/mobile-banking"
          className="inline-flex lg:hidden items-center bg-[#98989862] border-[0.2px] border-[#989898] text-white text-sm py-2 px-4 rounded-full"
        >
          Introducing Fliq Cards
          <HiArrowRight className="ml-2 h-4 w-4" />
        </Link>
        <Link
          href="/mobile-banking"
          className="hidden lg:inline-flex items-center bg-[#98989862] border-[0.2px] border-[#989898] text-white text-sm py-2 px-4 rounded-full"
        >
          Introducing Fliq Mobile banking App
          <HiArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4">
        <h1 className="text-white font-normal text-[35px] md:text-6xl lg:text-[96px] lg:mb-8 mb-4 lg:leading-[120px] leading-normal">
          Building the future of
          <br />
          banking.
        </h1>

        <p className="text-[#BDBDBD] text-base md:text-2xl max-w-2xl mx-auto mb-10">
          Experience the future of banking with Fliq. We&apos;re here to empower your
          financial journey.
        </p>

        <Link
          href="/get-started"
          className="inline-block bg-[#6A5ACD] text-white py-3 px-8 rounded-full text-lg transition-colors"
        >
          Get Started
        </Link>
      </div>
    </section>
  );
}
