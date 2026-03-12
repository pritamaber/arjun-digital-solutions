import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

export default function TopBar() {
  return (
    <div className="w-full bg-gray-100 text-sm text-gray-600 border-b hidden md:block">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-2">
        {/* LEFT SIDE */}
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <FaMapMarkerAlt className="text-[#1E6FAF]" />
            <span>Kolkata</span>
          </div>

          <div className="flex items-center gap-2">
            <FaEnvelope className="text-[#1E6FAF]" />
            <span>info@arjundigital.com</span>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-6">
          {/* SOCIAL */}
          <div className="flex items-center gap-4 text-gray-500">
            <FaFacebookF className="hover:text-[#1E6FAF] cursor-pointer" />
            <FaTwitter className="hover:text-[#1E6FAF] cursor-pointer" />
            <FaInstagram className="hover:text-[#1E6FAF] cursor-pointer" />
            <FaYoutube className="hover:text-[#1E6FAF] cursor-pointer" />
          </div>

          {/* LINKS */}
          <div className="flex items-center gap-4 border-l pl-4">
            <a href="#" className="hover:text-[#1E6FAF]">
              About
            </a>
            <a href="#" className="hover:text-[#1E6FAF]">
              Contact
            </a>
            <a href="#" className="hover:text-[#1E6FAF]">
              Blog
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
