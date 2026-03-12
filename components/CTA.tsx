export default function CTA() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-2xl p-12 text-center border border-blue-50">
        <h2 className="text-3xl font-bold text-gray-900">
          Need Help With Registration?
        </h2>

        <p className="mt-4 text-gray-600 max-w-xl mx-auto">
          Speak with our expert and get your registration or compliance process
          started quickly and smoothly.
        </p>

        {/* FORM */}

        <div className="grid md:grid-cols-3 gap-5 mt-10">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full px-5 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[var(--primary)] focus:border-[var(--primary)] outline-none"
          />

          <input
            type="text"
            placeholder="Phone Number"
            className="w-full px-5 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[var(--primary)] focus:border-[var(--primary)] outline-none"
          />

          <button className="bg-[#FF6A00] hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-lg transition">
            Request Call
          </button>
        </div>
      </div>
    </section>
  );
}
