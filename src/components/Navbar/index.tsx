"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiMenu, FiX } from "react-icons/fi";
import { isActivePath } from "@/utils/navbarHelper";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const navigationItems = [
    { name: "Solutions", href: "/solutions" },
    { name: "Learn", href: "/learn" },
    { name: "About", href: "/about" },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const buttonProps = {
    type: "button",
    onClick: toggleMenu,
    className:
      "inline-flex items-center justify-center p-2 rounded-md text-white hover:text-gray-300 focus:outline-none",
    "aria-expanded": isMenuOpen ? "true" : "false",
  } as const;

  return (
    <nav className="bg-black border-b-[0.5px] border-[#3D3D3D] text-white w-full fixed top-0 z-50">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link href="/">
                <div className="">
                  <Image
                    src="/fliq-logo.svg"
                    alt="FLIQ Logo"
                    width={100}
                    height={100}
                    className=""
                  />
                  <p className="text-[7px] hidden md:block text-right">
                    by Blend
                  </p>
                </div>
              </Link>
            </div>
          </div>

          {/* Desktop navigation */}
          <div className="hidden md:block text-[#BDBDBD]">
            <div className="flex items-center space-x-8">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`${
                    isActivePath(pathname, item.href) ? "text-blue-400" : ""
                  } px-2 py-1 font-medium transition-colors duration-200`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
          <div className="hidden md:block">
            <Link
              href="/waitlist"
              className="bg-[#6A5ACD] text-white py-2 px-4 rounded-full text-sm font-medium transition-colors duration-200"
            >
              Join the waitlist
            </Link>
          </div>

          {/* Mobile menu buttons */}
          <div className="md:hidden">
            <button {...buttonProps}>
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <FiX className="h-6 w-6" aria-hidden="true" />
              ) : (
                <FiMenu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden text-[#BDBDBD]">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black border-t border-gray-700">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`${
                  isActivePath(pathname, item.href) ? "text-blue-400" : ""
                } block px-3 py-2 text-base font-medium transition-colors duration-200`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/waitlist"
              className="block bg-[#6A5ACD] text-white py-2 px-4 rounded-full text-base font-medium my-2 text-center transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              Join the waitlist
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
