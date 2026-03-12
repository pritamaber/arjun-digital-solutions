"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

export default function QuantitySelector() {
  const [qty, setQty] = useState(1);

  const increase = () => setQty((q) => q + 1);
  const decrease = () => setQty((q) => (q > 1 ? q - 1 : 1));

  return (
    <div className="flex items-center gap-4 mt-2">
      <button
        onClick={decrease}
        className="w-10 h-10 flex items-center justify-center border rounded-lg hover:bg-gray-100 transition"
      >
        <Minus size={18} />
      </button>

      <div className="w-12 text-center font-semibold text-lg">{qty}</div>

      <button
        onClick={increase}
        className="w-10 h-10 flex items-center justify-center border rounded-lg hover:bg-gray-100 transition"
      >
        <Plus size={18} />
      </button>
    </div>
  );
}
