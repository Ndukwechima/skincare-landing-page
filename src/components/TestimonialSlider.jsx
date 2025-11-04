import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    name: "Amara O.",
    text: "My skin hasn’t felt this smooth in years. The glow is real — I don’t even wear foundation every day now.",
  },
  {
    name: "Michelle A.",
    text: "I was struggling with uneven tone and dullness. By Week 2, I started noticing a natural brightness. It looks like I drink more water than I actually do.",
  },
  {
    name: "Zainab T.",
    text: "Lightweight, no greasy feel, and it actually absorbs. My dark spots are noticeably lighter. I’m impressed.",
  },
  {
    name: "Chinwe K.",
    text: "This serum feels luxurious — but simple. I look healthier and more awake every morning.",
  },
];

export default function TestimonialSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="w-full bg-[#F7EFE9] py-20 px-6 md:px-12">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-semibold text-black mb-6">
          Loved by Real People
        </h2>
        <p className="text-gray-600 mb-12">
          Over 3,000+ glowing customers and counting.
        </p>

        <div className="relative h-40 md:h-36 flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-2xl mx-auto"
            >
              <p className="text-black text-lg md:text-xl leading-relaxed italic">
                “{testimonials[index].text}”
              </p>
              <h4 className="mt-4 text-[#8A0707] font-medium">
                — {testimonials[index].name}
              </h4>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
