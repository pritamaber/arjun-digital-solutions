import ServiceSidebar from "./ServiceSidebar";
import QuantitySelector from "./QuantitySelector";
import { services } from "../data/services";
import SectionDivider from "./SectionDivider";
import FadeIn from "./FadeIn";
import Link from "next/link";

type Props = {
  slug: string;
};

export default function ServiceLayout({ slug }: Props) {
  const service = services[slug];

  if (!service) {
    return (
      <div className="bg-gray-50 py-28">
        <div className="max-w-xl mx-auto text-center bg-white p-10 rounded-2xl shadow-sm">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Service Not Found
          </h1>

          <p className="text-gray-600 mb-8">
            The service you are looking for does not exist or may have been
            removed.
          </p>

          <Link
            href="/"
            className="inline-block bg-[var(--primary)] text-white px-6 py-3 rounded-lg hover:opacity-90 transition"
          >
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div>
      <SectionDivider />

      <div className="bg-gray-50 py-16">
        <section className="max-w-7xl mx-auto grid md:grid-cols-3 gap-14 px-6 items-start">
          {/* LEFT IMAGE */}

          <FadeIn>
            <div className="bg-white rounded-xl shadow-sm p-8 flex items-center justify-center">
              <img
                src={service.image || "/images/ads-logo.png"}
                className="max-h-[160px] max-w-[200px] object-contain"
              />
            </div>
          </FadeIn>

          {/* CENTER DETAILS */}

          <FadeIn>
            <div className="flex flex-col gap-5">
              <h1 className="text-4xl font-bold leading-tight text-gray-900">
                {service.title}
              </h1>

              <p className="text-lg text-blue-600 font-medium">
                Get it at Just
              </p>

              <p className="text-3xl font-bold text-red-500">{service.price}</p>

              <p className="text-gray-600 leading-relaxed max-w-lg">
                {service.description}
              </p>

              {/* QUANTITY */}

              <div className="pt-6">
                <p className="font-semibold mb-3">Quantity</p>
                <QuantitySelector />
              </div>
            </div>
          </FadeIn>

          {/* RIGHT SIDEBAR */}

          <FadeIn>
            <div>
              <ServiceSidebar price={service.price} />
            </div>
          </FadeIn>
        </section>
      </div>

      <SectionDivider />
    </div>
  );
}
