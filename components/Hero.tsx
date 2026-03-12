"use client";

import { useEffect, useState } from "react";
import ShinyButton from "./ShinyButton";

export default function Hero() {
  const images = [
    "/images/hero-img-1.jpg",
    "/images/hero-img-2.jpg",
    "/images/hero-img-3.jpg",
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const slider = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3500);

    return () => clearInterval(slider);
  }, []);

  return (
    <section className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 px-6 items-center">
        {/* LEFT CONTENT */}

        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            ARJUN DIGITAL SOLUTION
          </h1>

          <p className="mt-6 text-gray-600 text-lg">
            Fast and reliable digital registration services across India. Get
            your certificates, registrations and tender support completed with
            professional assistance.
          </p>

          {/* SERVICES LIST */}

          <div className="mt-6 grid grid-cols-2 gap-2 text-sm text-gray-700">
            <p>👉 Digital Signature Certificate</p>
            <p>👉 GeM Registration</p>
            <p>👉 E-Tender Participation</p>
            <p>👉 Tender Bid Submission</p>
            <p>👉 GST Registration / Return</p>
            <p>👉 MSME (Udhyam) Certificate</p>
            <p>👉 Trade License</p>
            <p>👉 ISO Certificate</p>
          </div>

          {/* CTA BUTTONS */}

          <div className="flex items-center gap-4 mt-8">
            <ShinyButton>Get Started</ShinyButton>

            {/* CALL EXPERT */}

            <div className="flex items-center gap-3 bg-white px-4 py-3 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-50">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 text-[var(--primary)]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h2.28a2 2 0 011.9 1.37l.7 2.1a2 2 0 01-.45 2.11l-1.27 1.27a16.06 16.06 0 006.59 6.59l1.27-1.27a2 2 0 012.11-.45l2.1.7A2 2 0 0121 16.72V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </div>

              <div className="leading-tight">
                <p className="text-xs text-gray-500 uppercase tracking-wide">
                  Call Our Experts
                </p>

                <a
                  href="tel:+918617753202"
                  className="font-semibold text-gray-900 hover:text-[var(--primary)] transition"
                >
                  +91 86177 53202
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* IMAGE SLIDER */}

        <div className="relative">
          <img
            src={images[index]}
            className="w-full rounded-xl shadow-md transition-all duration-700"
          />

          {/* DOT INDICATORS */}

          <div className="flex justify-center gap-2 mt-4">
            {images.map((_, i) => (
              <div
                key={i}
                className={`h-2 w-2 rounded-full ${
                  i === index ? "bg-blue-600" : "bg-gray-300"
                }`}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
