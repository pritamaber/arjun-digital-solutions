"use client";

import { useEffect, useState } from "react";

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

          <div className="flex gap-4 mt-8">
            <button className="bg-[#1E6FAF] hover:bg-blue-700 text-white px-7 py-3 rounded-lg font-medium transition">
              Get Started
            </button>

            <a
              href="tel:+919051855666"
              className="border border-gray-300 px-7 py-3 rounded-lg hover:bg-gray-100 transition"
            >
              Call Now
            </a>
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
