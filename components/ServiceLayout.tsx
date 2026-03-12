import ServiceSidebar from "./ServiceSidebar";
import QuantitySelector from "./QuantitySelector";
import { services } from "../data/services";

type Props = {
  slug: string;
};

export default function ServiceLayout({ slug }: Props) {
  const service = services[slug];

  if (!service) {
    return (
      <div className="max-w-7xl mx-auto py-20 text-center">
        <h1 className="text-3xl font-bold">Service Not Found</h1>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 py-24">
      <section className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12 px-6 items-start">
        {/* LEFT IMAGE */}
        <div className="bg-white rounded-xl shadow-sm p-6 flex items-start justify-center">
          <img
            src={service.image || "/images/ads-logo.png"}
            className="max-h-[160px] max-w-[200px] object-contain"
          />
        </div>

        {/* CENTER DETAILS */}
        <div className="flex flex-col gap-5">
          <h1 className="text-4xl font-bold leading-tight">{service.title}</h1>

          <p className="text-lg text-blue-600 font-medium">Get it at Just</p>

          <p className="text-3xl font-bold text-red-500">{service.price}</p>

          <p className="text-gray-600 leading-relaxed max-w-lg">
            {service.description}
          </p>

          {/* QUANTITY */}
          <div className="pt-4">
            <p className="font-semibold mb-3">Quantity</p>
            <QuantitySelector />
          </div>
        </div>

        {/* RIGHT SIDEBAR */}
        <div>
          <ServiceSidebar price={service.price} />
        </div>
      </section>
    </div>
  );
}
