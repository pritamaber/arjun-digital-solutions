export default function Hero() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 px-6 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Fast Digital Registration Services
          </h1>

          <p className="mt-6 text-gray-600 text-lg">
            Get DSC, GEM Registration, MSME, Startup India and other digital
            services completed quickly with professional assistance.
          </p>

          <div className="flex gap-4 mt-8">
            <button className="bg-[#1E6FAF] text-white px-6 py-3 rounded-lg">
              Get Started
            </button>

            <button className="border px-6 py-3 rounded-lg">Call Now</button>
          </div>
        </div>

        <div>
          <img src="/images/hero.png" className="w-full" />
        </div>
      </div>
    </section>
  );
}
