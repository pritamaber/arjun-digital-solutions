export default function Loading() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white z-[9999]">
      <div className="flex flex-col items-center gap-4">
        {/* LOGO */}

        <img src="/images/ads-logo.png" className="w-16 animate-spin-slow" />

        {/* LOADING BAR */}

        <div className="w-48 h-1 bg-gray-200 rounded-full overflow-hidden">
          <div className="h-full bg-[var(--primary)] animate-loading-bar"></div>
        </div>
      </div>
    </div>
  );
}
