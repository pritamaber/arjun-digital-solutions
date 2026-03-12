import Image from "next/image";

type Props = {
  title: string;
  icon?: string;
  badge?: string;
};

export default function ServiceItem({ title, icon, badge }: Props) {
  return (
    <div className="relative bg-blue-50 rounded-xl p-8 flex flex-col items-center text-center hover:shadow-md transition">
      {badge && (
        <span className="absolute top-3 right-3 text-xs font-semibold bg-orange-400 text-white px-2 py-1 rounded-full">
          {badge}
        </span>
      )}

      <Image
        src={icon || "/images/ads-logo.png"}
        alt={title}
        width={36}
        height={36}
        className="mb-4"
      />

      <p className="text-sm font-semibold text-gray-800 max-w-[150px]">
        {title}
      </p>
    </div>
  );
}
