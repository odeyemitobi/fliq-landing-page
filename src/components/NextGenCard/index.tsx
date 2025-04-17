"use client";
import React from "react";
import Image from "next/image";
import {
  HiDocumentDuplicate,
  HiLockClosed,
  HiMiniIdentification,
} from "react-icons/hi2";

const features = [
  {
    icon: HiDocumentDuplicate,
    title: "Contactless Technology",
    text: "Our new cards come equipped with contactless technology, allowing you to make swift, secure payments with a simple tap.",
  },
  {
    icon: HiMiniIdentification,
    title: "Personalization",
    text: "Customize your card to reflect your unique style. Choose from a range of designs that suit your personality.",
  },
  {
    icon: HiLockClosed,
    title: "Enhanced Security",
    text: "Your peace of mind is our priority. Our cards feature advanced security measures to protect your transactions and data.",
  },
];

export default function NextGenCard() {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <p className="text-[#6A5ACD] text-sm uppercase tracking-wider">
            INTRODUCING
          </p>
          <h2 className="lg:text-[76px] text-4xl mt-4 lg:mt-8 mb-6">
            Introducing Fliq&apos;s Next-Gen
            <br className="hidden lg:block" /> Cards
          </h2>
          <p className="max-w-2xl text-sm lg:text-base mx-auto text-[#BDBDBD] lg:px-0 px-4">
            Discover Fliq&apos;s latest innovation – our new cards. Elevate your
            banking experience with cutting-edge features, security, and
            unprecedented convenience.
          </p>
        </div>

        <div className="flex justify-center lg:my-24 my-16">
          <Image
            src="/card.svg"
            alt="Fliq Next-Gen Card"
            width={300}
            height={450}
            className="lg:w-64 w-48 h-auto"
          />
        </div>

        <div className="lg:flex lg:justify-between lg:space-y-0 space-y-10">
          {features.map(({ icon: Icon, title, text }, index) => (
            <div
              key={index}
              className="lg:w-1/3 lg:px-4 flex items-start space-x-4"
            >
              <div>
                <div className="flex items-center space-x-2 mb-2">
                  <Icon className="text-white text-2xl" />
                  <h3 className="font-semibold text-lg">{title}</h3>
                </div>
                <p className="text-gray-300 text-sm">{text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
