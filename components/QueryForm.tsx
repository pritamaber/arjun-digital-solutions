export default function QueryForm() {
  return (
    <div className="bg-white rounded-xl shadow-md p-10">
      <h3 className="text-lg font-semibold text-gray-900 mb-2">
        Raise a Query
      </h3>

      <p className="text-sm text-gray-500 mb-8">
        Fill in your details and our expert will contact you shortly.
      </p>

      <form className="space-y-6">
        {/* Name */}

        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-gray-700">Full Name</label>

          <input
            type="text"
            className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent outline-none transition"
          />
        </div>

        {/* Phone */}

        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-gray-700">
            Mobile Number
          </label>

          <input
            type="tel"
            className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent outline-none transition"
          />
        </div>

        {/* Email */}

        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-gray-700">
            Email Address
          </label>

          <input
            type="email"
            className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent outline-none transition"
          />
        </div>

        {/* Address */}

        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-gray-700">
            City / Address
          </label>

          <textarea
            rows={3}
            className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent outline-none resize-none transition"
          />
        </div>

        {/* Button */}

        <button
          type="submit"
          className="w-full mt-4 bg-[var(--primary)] text-white font-semibold py-4 rounded-lg hover:opacity-90 transition"
        >
          Raise a Query
        </button>
      </form>
    </div>
  );
}
