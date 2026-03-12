import {
  MapPin,
  Mail,
  Phone,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
} from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#1b2d4a] text-white">
      {/* TOP CONTACT BAR */}

      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-8 py-10 grid md:grid-cols-4 gap-8 items-center">
          <div className="flex items-center gap-4">
            <div className="bg-blue-600 p-3 rounded-lg">
              <MapPin size={20} />
            </div>

            <div>
              <p className="font-semibold">Address</p>
              <p className="text-sm text-gray-300">
                2b/2 AdyaNath Saha Road,
                <br /> S K Dev Rd, Shree Bhumi,
                <br /> Lake Town, Kolkata, West Bengal 700048
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="bg-blue-600 p-3 rounded-lg">
              <Mail size={20} />
            </div>

            <div>
              <p className="font-semibold">Mail Us</p>
              <p className="text-sm text-gray-300">
                arjundigitalsolutions@gmail.com
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="bg-blue-600 p-3 rounded-lg">
              <Phone size={20} />
            </div>

            <div>
              <p className="font-semibold">Telephone</p>
              <p className="text-sm text-gray-300">+91 8617753202</p>
            </div>
          </div>

          {/* SOCIAL ICONS */}

          <div className="flex md:justify-end gap-4">
            <div className="bg-white/10 p-3 rounded-full hover:bg-blue-600 transition">
              <Facebook size={18} />
            </div>

            <div className="bg-white/10 p-3 rounded-full hover:bg-blue-600 transition">
              <Twitter size={18} />
            </div>

            <div className="bg-white/10 p-3 rounded-full hover:bg-blue-600 transition">
              <Instagram size={18} />
            </div>

            <div className="bg-white/10 p-3 rounded-full hover:bg-blue-600 transition">
              <Youtube size={18} />
            </div>
          </div>
        </div>
      </div>

      {/* MAIN FOOTER */}

      <div className="max-w-7xl mx-auto px-8 py-16 grid md:grid-cols-5 gap-12">
        {/* LOGO */}

        <div>
          <img src="/images/ads-logo.png" className="h-12 mb-4" />

          <p className="text-gray-300 text-sm leading-relaxed">
            A Licensed RA Authorize By CA. India's most trusted provider of DSC,
            PKI, IoT and signing solutions since 2012.
          </p>
        </div>

        {/* FIND DSC */}

        <div>
          <h4 className="font-semibold mb-4">Find Dsc By Use</h4>

          <ul className="space-y-2 text-gray-300 text-sm">
            <li>Find DSC in Kolkata</li>
            <li>Find DSC in Bhubaneswar</li>
            <li>Find DSC in India</li>
            <li>Find DSC in Noida</li>
            <li>Find DSC in Delhi</li>
            <li>Find DSC in Gurugram</li>
          </ul>
        </div>

        {/* USEFUL LINKS */}

        <div>
          <h4 className="font-semibold mb-4">Useful Links</h4>

          <ul className="space-y-2 text-gray-300 text-sm">
            <li>All Services</li>
            <li>SignX Dealorship</li>
            <li>DSC Franchise</li>
            <li>DSC Price List</li>
            <li>DSC use case list</li>
            <li>Buy DSC Token</li>
          </ul>
        </div>

        {/* POLICY */}

        <div>
          <h4 className="font-semibold mb-4">Policy Page</h4>

          <ul className="space-y-2 text-gray-300 text-sm">
            <li>Blogs</li>
            <li>Contact</li>
            <li>About Us</li>
            <li>Knowledge Center</li>
            <li>Privacy Policy</li>
            <li>Refund Policy</li>
          </ul>
        </div>

        {/* TOP PRODUCTS */}

        <div>
          <h4 className="font-semibold mb-4">Top Product</h4>

          <ul className="space-y-2 text-gray-300 text-sm">
            <li>Class 3 Individual Signing DSC</li>
            <li>HYP2003 USB Token</li>
            <li>Proxkey USB Token</li>
            <li>Class 2 Document Signer Certificate</li>
            <li>Class 3 Individual Combo DSC</li>
          </ul>
        </div>
      </div>

      {/* COPYRIGHT */}

      <div className="border-t border-white/10 text-center text-sm text-gray-400 py-6">
        © Arjun Digital Solutions. All rights reserved.
      </div>
      <div className="border-t border-white/10 text-center text-sm text-gray-400 py-6 space-x-3">
        <span>Designed and developed by Pritam Das</span>

        <Link
          href="https://impritam.com"
          className="text-blue-400 hover:text-blue-300 transition"
          target="_blank"
        >
          impritam.com
        </Link>

        <span>|</span>

        <Link
          href="mailto:pritam.aber@gmail.com"
          className="text-blue-400 hover:text-blue-300 transition"
        >
          pritam.aber@gmail.com
        </Link>

        <span>|</span>

        <Link
          href="https://wa.me/916291616198"
          className="text-green-400 hover:text-green-300 transition"
          target="_blank"
        >
          WhatsApp
        </Link>
      </div>
    </footer>
  );
}
