import { FiInstagram, FiFacebook } from "react-icons/fi";
import { FaTiktok } from "react-icons/fa";
export default function Footer() {
  return (
    <footer className="w-full bg-white border-t border-[#EBC0A8] py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Brand */}
        <div>
          <h3 className="text-xl font-semibold text-black mb-4">LUMORA</h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            Skincare made gentle, simple, and beautiful — created to nourish
            your natural glow.
          </p>
        </div>

        {/* Shop */}
        <div>
          <h4 className="text-lg font-medium text-black mb-4">Shop</h4>
          <ul className="space-y-2 text-gray-600 text-sm">
            <li>
              <a href="#" className="hover:text-[#FF6F61] transition">
                Glow Serum
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#FF6F61] transition">
                Bundle Offers
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#FF6F61] transition">
                Shipping & Delivery
              </a>
            </li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h4 className="text-lg font-medium text-black mb-4">Support</h4>
          <ul className="space-y-2 text-gray-600 text-sm">
            <li>
              <a href="#" className="hover:text-[#FF6F61] transition">
                Contact Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#FF6F61] transition">
                FAQ
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#FF6F61] transition">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#FF6F61] transition">
                Terms & Conditions
              </a>
            </li>
          </ul>
        </div>

        {/* Socials */}
        <div>
          <h4 className="text-lg font-medium text-black mb-4">Follow Us</h4>
          <div className="flex items-center gap-4 text-2xl">
            <a href="#" className="text-[#FF6F61] hover:opacity-80 transition">
              <FiInstagram />
            </a>
            <a href="#" className="text-[#FF6F61] hover:opacity-80 transition">
              <FiFacebook />
            </a>
            <a href="#" className="text-[#FF6F61] hover:opacity-80 transition">
              <FaTiktok />
            </a>
          </div>
        </div>
      </div>

      <div className="text-center text-gray-500 text-xs mt-12">
        © {new Date().getFullYear()} LUMORA Skincare. All rights reserved.
      </div>
    </footer>
  );
}
