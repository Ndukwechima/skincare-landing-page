import { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";

const faqs = [
  {
    q: "Is it safe for sensitive skin?",
    a: "Yes. LUMORA Glow Serum is dermatologist-tested, fragrance-free, and formulated to be gentle on all skin types — including sensitive skin.",
  },
  {
    q: "How soon will I see results?",
    a: "Most people begin to notice a healthier glow within the first 7 days. Full brightening and evening of skin tone typically appear between Week 3 and Week 6 with consistent use.",
  },
  {
    q: "Can I use it with my current skincare products?",
    a: "Absolutely. It layers well under moisturizer and sunscreen. If using strong exfoliants or retinol, apply those at night and use LUMORA in the morning.",
  },
  {
    q: "Will it make my skin lighter?",
    a: "No, it does not bleach. It gently brightens dull or uneven areas to reveal your natural, healthy tone.",
  },
  {
    q: "Is it suitable for men too?",
    a: "Yes! Skin is skin. Men and women can both benefit from hydration, antioxidant protection, and improved glow.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section className="w-full bg-white py-20 px-6 md:px-12">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold text-[#FF6F61] text-center mb-10">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {faqs.map((item, i) => (
            <div
              key={i}
              className="border border-[#EBC0A8] rounded-2xl p-5 cursor-pointer transition"
              onClick={() => toggle(i)}
            >
              <div className="flex justify-between items-center">
                <h3 className="text-base md:text-lg font-medium text-black">
                  {item.q}
                </h3>

                {openIndex === i ? (
                  <FiMinus className="text-[#FF6F61] text-xl" />
                ) : (
                  <FiPlus className="text-[#FF6F61] text-xl" />
                )}
              </div>

              {openIndex === i && (
                <p className="text-gray-600 mt-3 text-sm md:text-base leading-relaxed">
                  {item.a}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
