"use client";
import React from "react";
import Image from "next/image";
import { FaApple, FaGooglePlay } from "react-icons/fa";

export default function Footer() {
  const linkData = [
    { title: "About us", links: ["Our company", "Careers", "Press kits"] },
    { title: "Legal", links: ["Terms of use", "Privacy policy", "About us"] },
    { title: "Support", links: ["Contact us", "FAQ"] },
  ];

  const renderLinks = (isMobile: boolean) => (
    <div
      className={
        isMobile
          ? "grid grid-cols-2"
          : "flex space-x-20 w-[85%] justify-between"
      }
    >
      {linkData.map(({ title, links }) => (
        <div key={title} className={isMobile ? "mb-6" : ""}>
          <h3 className="font-semibold mb-4">{title}</h3>
          <ul className="space-y-2 text-sm text-[#EFEFEF]">
            {links.map((link) => (
              <li key={link}>
                <a href="#">{link}</a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );

  return (
    <div className="lg:mt-48 py-12">
      <div className="container mx-auto px-6">
        <div className="mb-8">
          <div className="flex items-center">
            <Image
              src="/FLIQ.svg"
              alt="Fliq Logo"
              width={120}
              height={120}
              className="h-full w-auto"
            />
          </div>
        </div>

        <div className="border-t border-[#3D3D3D] lg:my-14 my-12"></div>

        <div className="lg:flex lg:justify-between">
          <div className="w-full lg:w-[70%]">
            <div className="border-2 border-dashed rounded-xl p-4 inline-block">
              <div className="flex space-x-3">
                <Image
                  src="/QR-code.svg"
                  alt="QR Code"
                  width={100}
                  height={100}
                  className="w-24 h-24"
                />
                <div>
                  <p className="text-sm mb-3">Hope your test is going well.</p>
                  <div className="flex space-x-4">
                    <FaGooglePlay className="text-white text-xl" />
                    <FaApple className="text-white text-xl" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="hidden lg:flex lg:space-x-20 lg:w-[85%] lg:justify-between">
            {renderLinks(false)}
          </div>

          <div className="lg:hidden mt-12">{renderLinks(true)}</div>
        </div>

        <div className="mt-8 lg:text-right">
          <p className="text-sm lg:text-base">© Fliq co, LLC.</p>
        </div>
      </div>
    </div>
  );
}
