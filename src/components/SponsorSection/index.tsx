"use client";
import React from "react";
import Image from "next/image";

export default function SponsorSection() {
  const sponsors = [
    { name: "Forbes", image: "/sponsor-logos/forbes.svg", width: 140 },
    { name: "CNBC", image: "/sponsor-logos/cnbc.svg", width: 120 },
    { name: "Bloomberg", image: "/sponsor-logos/bloomberg.svg", width: 160 },
    { name: "Reuters", image: "/sponsor-logos/reuters.svg", width: 140 },
    { name: "CNN", image: "/sponsor-logos/cnn.svg", width: 100 },
  ];

  return (
    <div className="py-12">
      <div className="container mx-auto">
        <h3 className="text-center text-[#BDBDBD] text-sm uppercase tracking-wider mb-8 lg:mb-14">
          Featured and seen in
        </h3>

        <div className="flex overflow-x-auto pb-4 md:pb-0 md:justify-center md:flex-wrap gap-12 md:gap-16 no-scrollbar">
          {sponsors.map((sponsor) => (
            <div key={sponsor.name} className="flex-shrink-0">
              <div className="w-full flex items-center justify-center">
                <Image
                  src={sponsor.image}
                  alt={`${sponsor.name} logo`}
                  width={sponsor.width}
                  height={40}
                  className="h-8 md:h-10 w-auto"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
