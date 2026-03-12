import { services } from "../data/services";
import ServiceCard from "./ServiceCard";

export default function ServiceGrid() {
  const serviceEntries = Object.entries(services);

  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-center text-blue-600 font-medium">
          Our Top Services
        </p>

        <h2 className="text-center text-4xl font-bold mt-2">
          Empowering your future.
        </h2>

        <p className="text-center text-gray-500 max-w-3xl mx-auto mt-4">
          We provide top-notch digital solutions to simplify your financial and
          business tasks.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {serviceEntries.map(([slug, service]) => (
            <ServiceCard
              key={slug}
              service={{
                title: service.title,
                price: service.price,
                slug: slug,
                image: "/images/ads-logo.png",
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
