'use client'

import Image from 'next/image'
import React, { useState, useEffect } from 'react'
import Link from "next/link"
import { NAV_LINKS } from "../utils/data"
import Hamburger from "../../components/Hamburger"
import Close from "../../components/Close"
import { usePathname } from "next/navigation"

function Header() {
  const [nav, setNav] = useState(false)
  const [activeLink, setActiveLink] = useState("/")
  const router = usePathname()

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setNav(false)
      }
    }
    window.addEventListener("resize", handleResize)
    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  useEffect(() => {
    // Ensure activeLink updates correctly based on current route
    if (router === "/") {
      setActiveLink("/");
    } else {
      setActiveLink(router);
    }
  }, [router]);

  const handleClick = () => {
    setNav(!nav);
  };

  return (
    <header className="w-full  px-6 lg:px-12 flex items-center justify-between bg-[#f9fafb] shadow-md z-50">
      {/* Logo */}
      <Link href="/" className="flex items-center">
        <Image
          src="https://tinypic.host/images/2024/10/09/quema-4.png"
          width={120}
          height={120}
          alt="logo"
          className="rounded-full w-[100px] h-[100px]"
        />
      </Link>

      {/* Navigation Links for Desktop */}
      <nav className="hidden lg:flex items-center space-x-8">
        {NAV_LINKS.map((link) => (
          <Link
            href={link.href}
            key={link.key}
            className={`text-[15px] font-medium transition-all duration-300 ease-in-out px-2 py-1 rounded-md ${
              activeLink === link.href
                ? "text-[#4a90e2] border-b-2 border-[#4a90e2]"
                : "text-gray-700 hover:text-[#4a90e2] hover:border-b-2 hover:border-[#4a90e2]"
            }`}
          >
            {link.label}
          </Link>
        ))}
      </nav>

      {/* Contact Us Button */}
      <Link href="/contact" className="hidden lg:block">
        <button className="bg-[#4a90e2] text-white py-2 px-6 rounded-lg font-medium hover:bg-[#3b7cc4] transition-all duration-300 ease-in-out">
          Contact Us
        </button>
      </Link>

      {/* Hamburger Menu Icon for Mobile */}
      <div className="lg:hidden">
        {!nav ? <Hamburger onClick={handleClick} /> : <Close onClick={handleClick} />}
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={`absolute top-[100px] left-0 w-full bg-white shadow-md z-50 transform transition-all duration-500 ease-in-out ${
          !nav ? "opacity-0 translate-y-full" : "opacity-100 translate-y-0"
        }`}
      >
        <nav className="flex flex-col items-center py-4 space-y-4">
          {NAV_LINKS.map((link) => (
            <Link
              href={link.href}
              key={link.key}
              className={`text-lg font-medium w-full text-center py-2 ${
                activeLink === link.href
                  ? "text-[#4a90e2] border-b-2 border-[#4a90e2]"
                  : "text-gray-700 hover:text-[#4a90e2] hover:border-b-2 hover:border-[#4a90e2]"
              }`}
              onClick={() => {
                setNav(false); // Close mobile menu after click
              }}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default Header;
