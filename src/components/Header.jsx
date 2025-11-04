import { useState } from "react";
import { motion } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <motion.header
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="w-full bg-white/70 backdrop-blur-lg border-b border-[#EDE8E4] fixed top-0 left-0 z-50"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <h1 className="text-2xl font-[Playfair Display] italic tracking-wider text-[#FF6F61]">
          LUMORA
        </h1>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10 text-[#6F6F6F] font-inter text-sm">
          <a href="#about" className="hover:text-[#1A1A1A] transition">
            About
          </a>
          <a href="#ingredients" className="hover:text-[#1A1A1A] transition">
            Ingredients
          </a>
          <a href="#reviews" className="hover:text-[#1A1A1A] transition">
            Reviews
          </a>
          <a href="#shop" className="hover:text-[#1A1A1A] transition">
            Shop
          </a>
        </nav>

        {/* CTA Button */}
        <a
          href="#shop"
          className="hidden md:inline-block bg-[#FF6F61] hover:bg-[#E85B4F] text-white px-5 py-2 rounded-full text-sm transition"
        >
          Order Now
        </a>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-2xl text-[#1A1A1A]"
        >
          {open ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="md:hidden bg-white border-t border-[#E5E1DD] px-6 py-4 space-y-4 text-[#6F6F6F] font-inter"
        >
          <a href="#about" className="block hover:text-[#1A1A1A] transition">
            About
          </a>
          <a
            href="#ingredients"
            className="block hover:text-[#1A1A1A] transition"
          >
            Ingredients
          </a>
          <a href="#reviews" className="block hover:text-[#1A1A1A] transition">
            Reviews
          </a>
          <a href="#shop" className="block hover:text-[#1A1A1A] transition">
            Shop
          </a>

          <a
            href="#shop"
            className="inline-block bg-[#FF6F61] hover:bg-[#E85B4F] text-white px-5 py-2 rounded-full text-sm transition"
          >
            Order Now
          </a>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Header;
