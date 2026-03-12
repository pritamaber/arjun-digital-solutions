import { Store, Globe, LayoutList } from "lucide-react";

type Props = {
  price: string;
};

export default function PricingSummary({ price }: Props) {
  const numericPrice = Number(price.replace(/[^\d]/g, ""));
  const marketPrice = Math.round(numericPrice * 1.3);
  const saving = marketPrice - numericPrice;

  return (
    <div className="bg-white rounded-xl shadow-md p-10">
      <h3 className="text-lg font-semibold text-gray-900 mb-10">
        Pricing Summary
      </h3>

      <div className="space-y-8 text-sm">
        {/* Market Price */}
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3 text-gray-600">
            <Store size={18} />
            <span>Market Price</span>
          </div>

          <span className="text-red-500 font-semibold text-base">
            ₹{marketPrice}
          </span>
        </div>

        {/* Savings */}
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3 text-gray-600">
            <Globe size={18} />
            <span>You Save</span>
          </div>

          <span className="text-green-600 font-semibold text-base">
            ₹{saving}
          </span>
        </div>

        {/* Final Price */}
        <div className="flex justify-between items-center pt-6 border-t">
          <div className="flex items-center gap-3 font-medium text-gray-800">
            <LayoutList size={18} />
            <span>Final Price</span>
          </div>

          <span className="text-2xl font-bold text-[var(--primary)]">
            {price}
          </span>
        </div>
      </div>
    </div>
  );
}
