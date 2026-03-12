type Item = {
  title: string;
  desc: string;
};

export default function MegaMenu({ items }: { items: Item[] }) {
  return (
    <div className="absolute left-0 top-10 w-[850px] bg-white shadow-xl rounded-xl p-6 grid grid-cols-2 gap-6 border">
      {items.map((item, index) => (
        <div
          key={index}
          className="flex gap-3 hover:bg-gray-50 p-3 rounded-lg cursor-pointer"
        >
          <img src="/images/ads-logo.png" className="w-8 h-8 object-contain" />

          <div>
            <p className="font-semibold text-sm">{item.title}</p>
            <p className="text-xs text-gray-500">{item.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
