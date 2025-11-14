import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Logo + Description */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            {/* Replace with your logo image if available */}
            <Image src="/logo.svg" alt="ALX Logo" width={40} height={40} />
            <span className="text-xl font-bold text-white">alx</span>
          </div>
          <p className="text-sm leading-relaxed">
            ALX is a platform where travelers can discover and book unique,
            comfortable, and affordable lodging options worldwide. From cozy
            city apartments and tranquil countryside retreats to exotic
            beachside villas, ALX connects you with the perfect place to stay
            for any trip.
          </p>
        </div>

        {/* Explore */}
        <div>
          <h3 className="text-white font-semibold mb-4">Explore</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="#">Apartments in Dubai</Link></li>
            <li><Link href="#">Hotels in New York</Link></li>
            <li><Link href="#">Villa in Spain</Link></li>
            <li><Link href="#">Mansion in Indonesia</Link></li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-white font-semibold mb-4">Company</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="#">About us</Link></li>
            <li><Link href="#">Blog</Link></li>
            <li><Link href="#">Career</Link></li>
            <li><Link href="#">Customers</Link></li>
            <li><Link href="#">Brand</Link></li>
          </ul>
        </div>

        {/* Help */}
        <div>
          <h3 className="text-white font-semibold mb-4">Help</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="#">Support</Link></li>
            <li><Link href="#">Cancel booking</Link></li>
            <li><Link href="#">Refunds Process</Link></li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 py-4 px-6 text-sm flex flex-col md:flex-row justify-between items-center">
        <p className="mb-2 md:mb-0">
          Some hotel requires you to cancel more than 24 hours before check-in.{" "}
          <Link href="#" className="text-green-400 hover:underline">Details here</Link>
        </p>
        <div className="flex gap-6">
          <Link href="#">Terms of Service</Link>
          <Link href="#">Policy service</Link>
          <Link href="#">Cookies Policy</Link>
          <Link href="#">Partners</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
