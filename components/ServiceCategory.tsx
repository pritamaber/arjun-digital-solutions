import ServiceItem from "./ServiceItem";

type Service = {
  title: string;
  icon?: string;
  badge?: string;
};

type Props = {
  title: string;
  services: Service[];
};

export default function ServiceCategory({ title, services }: Props) {
  return (
    <div className="mb-24">
      {/* Heading */}

      <div className="flex justify-between items-center mb-10">
        <h3 className="text-2xl font-semibold text-gray-900">{title}</h3>

        <button className="text-blue-600 text-sm font-medium hover:underline">
          View All →
        </button>
      </div>

      {/* Cards */}

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
        {services.map((service, i) => (
          <ServiceItem key={i} {...service} />
        ))}
      </div>
    </div>
  );
}
