export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-semibold mb-3">
            Arjun Digital Solutions
          </h3>

          <p className="text-gray-400">
            Professional digital registration and compliance services across
            India.
          </p>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Services</h4>
          <ul className="text-gray-400 space-y-2">
            <li>Digital Signature</li>
            <li>GEM Registration</li>
            <li>Startup India</li>
            <li>MSME</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Contact</h4>
          <p className="text-gray-400">Phone: +91 XXXXXXXX</p>
          <p className="text-gray-400">Email: info@arjundigital.in</p>
        </div>
      </div>
    </footer>
  );
}
