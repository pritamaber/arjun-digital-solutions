export default function ClientSlider() {
  const clients = [
    "/images/ads-logo.png",
    "/images/ads-logo.png",
    "/images/ads-logo.png",
    "/images/ads-logo.png",
    "/images/ads-logo.png",
    "/images/ads-logo.png",
    "/images/ads-logo.png",
    "/images/ads-logo.png",
  ];

  return (
    <section className="bg-gray-100 py-10 overflow-hidden w-full">
      <div className="relative w-full overflow-hidden">
        <div className="flex items-center gap-24 animate-client-scroll hover:[animation-play-state:paused]">
          {[...clients, ...clients].map((logo, i) => (
            <div
              key={i}
              className="flex items-center justify-center min-w-[180px]"
            >
              <img
                src={logo}
                className="h-10 opacity-70 grayscale hover:grayscale-0 hover:opacity-100 transition"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
