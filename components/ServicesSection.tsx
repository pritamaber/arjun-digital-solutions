import ServiceCategory from "./ServiceCategory";

export default function ServicesSection() {
  return (
    <section className="bg-white py-36">
      <div className="max-w-7xl mx-auto px-8">
        <h2 className="text-4xl font-bold text-center mb-8">
          We Provide Best Services
        </h2>

        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-24 leading-relaxed">
          We provide the best services tailored to meet your business needs. Our
          expert team ensures seamless e-filing, accurate reporting, and
          reliable support for your continued success.
        </p>

        {/* Categories */}

        <div className="space-y-28">
          <ServiceCategory
            title="Digital Signature (DSC)"
            services={[
              { title: "Class 3 Individual Signing DSC", badge: "Popular" },
              { title: "Class 2 Document Signer Certificate" },
              { title: "Class 3 Individual Combo DSC", badge: "Well liked" },
              { title: "Class 3 Document Signer Certificate" },
              { title: "Class 3 Organisation Combo DSC" },
            ]}
          />

          <ServiceCategory
            title="DSC Token & Dealership"
            services={[
              { title: "HYP2003 USB Token" },
              { title: "Proxkey USB Token" },
              { title: "mToken USB Token" },
              { title: "DSC Franchise" },
              { title: "SingX Dealership" },
            ]}
          />

          <ServiceCategory
            title="Business Services"
            services={[
              { title: "ISO Certification" },
              { title: "GEM / eTender Consultancy" },
              { title: "Startup India Registration", badge: "Fast-paced" },
              { title: "GEM Registration", badge: "Popular" },
              { title: "Tally On Cloud" },
            ]}
          />
        </div>
      </div>
    </section>
  );
}
