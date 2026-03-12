import Link from "next/link";
import ShinyButton from "./ShinyButton";

type Service = {
  title: string;
  price: string;
  slug: string;
  image: string;
};

export default function ServiceCard({ service }: { service: Service }) {
  return (
    <div className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 p-8 flex flex-col items-center text-center border border-gray-100 hover:-translate-y-1">
      {/* IMAGE */}

      <div className="w-16 h-16 flex items-center justify-center rounded-xl bg-blue-50 mb-6 group-hover:scale-110 transition">
        <img src={service.image} className="h-10 object-contain" />
      </div>

      {/* TITLE */}

      <h3 className="text-lg font-semibold text-gray-900 leading-snug">
        {service.title}
      </h3>

      {/* PRICE */}

      <p className="text-[var(--accent-orange)] font-semibold mt-3 text-sm">
        {service.price}
      </p>

      {/* BUTTON */}

      <Link href={`/services/${service.slug}`} className="mt-6">
        <ShinyButton>Book Now</ShinyButton>
      </Link>
    </div>
  );
}
