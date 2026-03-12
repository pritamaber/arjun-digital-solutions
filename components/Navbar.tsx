"use client";

import { useState } from "react";
import { FaPhoneAlt, FaBars } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import Link from "next/link";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white shadow-sm text-gray-800">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* LOGO */}
        <div className="flex items-center gap-2">
          <Link href="/">
            <img src="/images/ads-logo.png" className="h-10 cursor-pointer" />
          </Link>
        </div>
        {/* DESKTOP MENU */}
        <nav className="hidden lg:flex items-center gap-8 text-gray-700 font-medium">
          <div className="flex items-center gap-1 cursor-pointer hover:text-[#1E6FAF]">
            Digital Signature (DSC)
            <IoIosArrowDown />
          </div>

          <div className="flex items-center gap-1 cursor-pointer hover:text-[#1E6FAF]">
            DSC Token & Dealership
            <IoIosArrowDown />
          </div>

          <div className="flex items-center gap-1 cursor-pointer hover:text-[#1E6FAF]">
            Business Services
            <IoIosArrowDown />
          </div>

          <div className="flex items-center gap-1 cursor-pointer hover:text-[#1E6FAF]">
            PKI IoT Services
            <IoIosArrowDown />
          </div>
        </nav>

        {/* RIGHT SIDE */}
        <div className="hidden lg:flex items-center gap-6">
          {/* SHINY BUTTON */}
          <button className="relative overflow-hidden bg-[#1E6FAF] text-white px-6 py-2 rounded-full font-medium">
            <span className="relative z-10">Get Quote</span>

            <span className="absolute top-0 left-[-75%] w-[50%] h-full bg-white/30 rotate-12 animate-shine"></span>
          </button>

          {/* PHONE */}
          <div className="flex items-center gap-3">
            <div className="bg-gray-100 p-3 rounded-full">
              <FaPhoneAlt className="text-[#1E6FAF]" />
            </div>

            <div className="text-sm">
              <div className="text-gray-500">Call to Our Experts</div>
              <div className="font-semibold text-gray-800">+91 8617753202</div>
            </div>
          </div>
        </div>

        {/* MOBILE MENU BUTTON */}
        <div
          className="lg:hidden cursor-pointer bg-gray-100 p-3 rounded-lg text-[#1E6FAF]"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <FaBars size={24} />
        </div>
      </div>

      {/* MOBILE MENU */}

      {menuOpen && (
        <div className="lg:hidden bg-gray-100 mx-6 mb-6 rounded-xl p-6 space-y-5 text-gray-800 font-medium">
          <div className="flex justify-between hover:text-[#1E6FAF]">
            Digital Signature (DSC)
            <IoIosArrowDown />
          </div>

          <div className="flex justify-between hover:text-[#1E6FAF]">
            DSC Token & Dealership
            <IoIosArrowDown />
          </div>

          <div className="flex justify-between hover:text-[#1E6FAF]">
            Business Services
            <IoIosArrowDown />
          </div>

          <div className="flex justify-between hover:text-[#1E6FAF]">
            PKI IoT Services
            <IoIosArrowDown />
          </div>

          {/* MOBILE BUTTONS */}
          <div className="flex gap-3 flex-wrap pt-4">
            <button className="bg-[#1E6FAF] text-white px-4 py-2 rounded-full">
              Get Quote
            </button>

            <button className="bg-blue-500 text-white px-4 py-2 rounded-full">
              About
            </button>

            <button className="bg-gray-800 text-white px-4 py-2 rounded-full">
              Contact
            </button>

            <button className="bg-blue-600 text-white px-4 py-2 rounded-full">
              Blogs
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
