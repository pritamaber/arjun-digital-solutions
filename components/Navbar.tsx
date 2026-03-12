export default function Navbar() {
  return (
    <header className="w-full bg-white border-b">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <div className="flex items-center gap-3">
          <img src="/images/ads-logo.png" className="h-10" />
          <span className="font-semibold text-lg text-gray-800">
            Arjun Digital Solutions
          </span>
        </div>

        <nav className="hidden md:flex gap-8 text-gray-700 font-medium">
          <a href="#">Home</a>
          <a href="#">Services</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </nav>

        <button className="bg-[#1E6FAF] text-white px-4 py-2 rounded-lg hover:opacity-90">
          Get Quote
        </button>
      </div>
    </header>
  );
}
