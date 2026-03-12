import Link from "next/link";

type Service = {
  title: string;
  price: string;
  slug: string;
  image: string;
};

export default function ServiceCard({ service }: { service: Service }) {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">
      <img src={service.image} className="h-16 mb-4" />

      <h3 className="text-xl font-semibold">{service.title}</h3>

      <p className="text-red-500 font-semibold mt-2">{service.price}</p>

      {/* <p className="text-gray-500 text-sm mt-3">{service.description}</p> */}

      <Link href={`/services/${service.slug}`}>
        <button className="mt-6 bg-[var(--primary)] text-white px-5 py-2 rounded-full">
          Book Now
        </button>
      </Link>
    </div>
  );
}
