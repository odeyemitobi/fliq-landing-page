"use client";
import React from "react";
import Image from "next/image";
import HeroSection from "@/components/HeroSection";
import SponsorsSection from "@/components/SponsorSection";

export default function Home() {
  return (
    <div className="lg:px-8 px-5">
      <div>
        <HeroSection />
      </div>
      <div className="relative lg:mx-8 mx-5 lg:my-10 my-4">
        <Image
          src="/smiling.jpeg" 
          alt="Two friends laughing while using a laptop on a yellow couch"
          width={1000}
          height={1000}
          className="object-cover rounded-2xl w-full lg:h-[1000px] h-[400px]"
          priority
        />
      </div>
      <div>
        <SponsorsSection />
      </div>
      <div>
        
      </div>
    </div>
  );
}