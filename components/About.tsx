export default function About() {
  return (
    <section className="bg-white py-28">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        {/* LEFT CONTENT */}

        <div>
          <p className="text-blue-600 font-semibold mb-3">
            About Arjun Digital Solution
          </p>

          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Trusted Digital Registration Services 🇮🇳
          </h2>

          <p className="text-gray-600 leading-relaxed mb-6">
            Arjun Digital Solution provides professional assistance for digital
            registrations, compliance, and tender participation across India. We
            help businesses and individuals complete government registrations
            quickly and efficiently.
          </p>

          <p className="text-gray-600 leading-relaxed mb-8">
            Our services cover Digital Signature Certificates, GeM registration,
            GST registration, tender participation, MSME certification and more.
          </p>

          {/* SERVICES LIST */}

          <div className="grid grid-cols-2 gap-3 text-gray-700 text-sm">
            <p>👉 Digital Signature Certificate</p>
            <p>👉 GeM Registration</p>
            <p>👉 E-Tender Participation</p>
            <p>👉 Tender Bid Submission</p>
            <p>👉 GST Registration / Return</p>
            <p>👉 Trade License</p>
            <p>👉 MSME Certificate</p>
            <p>👉 Professional Tax</p>
            <p>👉 FSSAI Certificate</p>
            <p>👉 ISO Certification</p>
          </div>

          {/* CTA */}

          <button className="mt-8 bg-[#1E6FAF] text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
            Learn More
          </button>
        </div>

        {/* RIGHT IMAGE */}

        <div>
          <img
            src="/images/ads-logo.png"
            alt="About Arjun Digital Solution"
            className="rounded-xl shadow-md w-full"
          />
        </div>
      </div>
    </section>
  );
}
