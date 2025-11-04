import { motion } from "framer-motion";
import { FiAlertCircle } from "react-icons/fi";

const ProblemSection = () => {
  const problems = [
    "Uneven skin tone that makes your complexion appear dull.",
    "Dry patches that never stay moisturized.",
    "Hyperpigmentation that takes too long to fade.",
    "Breakouts that return the moment you stop using a product.",
    "Products that feel greasy or heavy on the skin.",
    "Harsh formulas that burn, irritate, or strip your moisture barrier.",
    "Spending money on skincare that over-promises and under-delivers.",
  ];

  return (
    <section className="w-full bg-white py-20 px-6">
      <div className="max-w-6xl mx-auto text-center space-y-8">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-semibold text-[#FF6F61]"
        >
          Your Skin Deserves Better.
        </motion.h2>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-lg text-gray-800 max-w-2xl mx-auto"
        >
          Because no glow should come with irritation, dryness, or constant
          trial-and-error.
        </motion.p>

        {/* List */}
        <motion.ul
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-5 max-w-3xl mx-auto text-left"
        >
          {problems.map((text, index) => (
            <li key={index} className="flex items-start gap-3 text-[#6F6F6F]">
              <FiAlertCircle className="text-[#FF6F61] mt-1" size={20} />
              <span className="leading-relaxed">{text}</span>
            </li>
          ))}
        </motion.ul>

        {/* Closing Line */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="text-lg text-gray-800 max-w-xl mx-auto pt-6"
        >
          Your skin doesn’t need more products — just the right one, made to
          enhance your natural glow.
        </motion.p>
      </div>
    </section>
  );
};

export default ProblemSection;
