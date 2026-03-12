const services = [
  "Digital Signature (DSC)",
  "USB Token",
  "GEM Registration",
  "Startup India Registration",
  "MSME Registration",
  "ISO Certification",
  "Tender Consultancy",
  "Bulk WhatsApp Service",
];

export default function Services() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>

        <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-6">
          {services.map((service, i) => (
            <div
              key={i}
              className="bg-white shadow-md p-6 rounded-xl hover:shadow-xl transition"
            >
              <h3 className="font-semibold text-lg text-gray-800">{service}</h3>

              <p className="text-gray-500 mt-2 text-sm">
                Professional assistance with fast processing.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
