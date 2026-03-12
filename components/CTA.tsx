export default function CTA() {
  return (
    <section className="py-20">
      <div className="max-w-4xl mx-auto bg-[#1E6FAF] text-white p-10 rounded-xl text-center">
        <h2 className="text-3xl font-bold">Need Help With Registration?</h2>

        <p className="mt-4">
          Speak with our expert and get your process started today.
        </p>

        <div className="flex flex-col md:flex-row gap-4 justify-center mt-8">
          <input
            placeholder="Name"
            className="px-4 py-3 rounded-lg text-black"
          />

          <input
            placeholder="Phone"
            className="px-4 py-3 rounded-lg text-black"
          />

          <button className="bg-[#FF6A00] px-6 py-3 rounded-lg font-semibold">
            Request Call
          </button>
        </div>
      </div>
    </section>
  );
}
