import { motion } from "framer-motion";
import { FiCheckCircle } from "react-icons/fi";
import introImg from "../assets/images/introImg.png"

const ValueSection = () => {
  const benefits = [
    "Brighten dull complexion",
    "Even skin tone and texture",
    "Hydrate deeply without greasiness",
    "Protect the skin barrier from damage",
  ];

  return (
    <section className="w-full bg-[#f4f4f0] py-6 md:py-24 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-[#FF6F61]">
            Meet LUMORA Glow Serum
          </h2>

          <p className="text-lg text-[#8B4E32]">
            Your Daily Ritual for Radiant Skin
          </p>

          <p className="text-[#6F6F6F] leading-relaxed max-w-md">
            This silky, fast-absorbing serum works with your skin to:
          </p>

          <ul className="space-y-4">
            {benefits.map((benefit, i) => (
              <li key={i} className="flex items-start gap-3 text-[#6F6F6F]">
                <FiCheckCircle className="text-[#FF6F61] mt-1" size={20} />
                <span>{benefit}</span>
              </li>
            ))}
          </ul>

          <p className="text-lg text-[#8B4E32] font-medium pt-4">
            Simple. Effective. Beautiful.
          </p>
        </motion.div>

        {/* Product Image */}
        <motion.div
          initial={{ opacity: 0, x: 35 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <img
            src={introImg}
            alt="Lumora Glow Serum Bottle"
            className="max-w-full md:max-w-sm rounded-xl"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default ValueSection;
