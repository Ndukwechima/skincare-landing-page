import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import heroImg from "../assets/images/heroImg.png"

const HeroSection = () => {
  return (
    <section className="w-full bg-[#ece4dd] min-h-screen flex items-center justify-center px-6 py-12">
      <div
        className="max-w-7xl w-full grid md:grid-cols-2 gap-12
       items-center mt-14 sm:mt-0 px-2 md:px-6 py-12"
      >
        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="space-y-6"
        >
          <h1 className="text-3xl md:text-5xl font-semibold text-[#FF6F61] leading-tight">
            Reveal Your Skin’s Natural Glow
          </h1>

          <p className="text-lg text-cinnamon-700 leading-relaxed">
            A lightweight, plant-powered serum that brightens, <br /> evens
            tone, and deeply hydrates — for skin that looks alive
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="mt-4 inline-flex items-center gap-2 bg-[#FF6F61]
             text-white px-6 py-3 rounded-full text-lg font-medium 
             shadow-md hover:bg-coral-600 transition"
          >
            Order Now
            <FiArrowRight size={20} />
          </motion.button>
        </motion.div>

        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          className="flex justify-center"
        >
          <img
            src={heroImg}
            alt="Lumora Glow Serum Model"
            className="max-w-full rounded-2xl shadow-lg"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
