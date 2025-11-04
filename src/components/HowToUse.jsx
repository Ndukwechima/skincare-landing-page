import { motion } from "framer-motion";

export default function HowToUse() {
  const steps = [
    {
      title: "Cleanse",
      desc: "Start with a gentle face wash to remove impurities.",
    },
    {
      title: "Apply 2–3 Drops",
      desc: "Warm it between your fingertips and press evenly into skin.",
    },
    {
      title: "Massage In",
      desc: "Use upward circular motions to boost absorption and circulation.",
    },
    {
      title: "Seal with Moisturizer",
      desc: "Lock in the hydration and nutrients.",
    },
    {
      title: "SPF in the Morning",
      desc: "Protects your glow and prevents dark spots.",
    },
  ];

  return (
    // <section className="w-full bg-white py-20" id="how-to-use">
    //   <div className="max-w-6xl mx-auto px-6 text-center">
    //     <motion.h2
    //       className="text-3xl md:text-4xl font-bold text-cinnamon mb-4"
    //       initial={{ opacity: 0, y: 20 }}
    //       whileInView={{ opacity: 1, y: 0 }}
    //       transition={{ duration: 0.5 }}
    //     >
    //       How to Use
    //     </motion.h2>

    //     <motion.p
    //       className="text-gray-600 max-w-2xl mx-auto mb-12"
    //       initial={{ opacity: 0 }}
    //       whileInView={{ opacity: 1 }}
    //       transition={{ delay: 0.2, duration: 0.5 }}
    //     >
    //       Your daily glow ritual — takes less than 60 seconds ✨
    //     </motion.p>

    //     <div className="grid md:grid-cols-3 gap-8">
    //       {steps.map((step, index) => (
    //         <motion.div
    //           key={index}
    //           className="bg-peach/30 border border-peach/40 rounded-xl p-6 shadow-sm"
    //           initial={{ opacity: 0, y: 20 }}
    //           whileInView={{ opacity: 1, y: 0 }}
    //           transition={{ delay: index * 0.15, duration: 0.5 }}
    //         >
    //           <h3 className="text-lg font-semibold text-cinnamon mb-2">
    //             {index + 1}. {step.title}
    //           </h3>
    //           <p className="text-gray-600 text-sm leading-relaxed">
    //             {step.desc}
    //           </p>
    //         </motion.div>
    //       ))}
    //     </div>

    //     <motion.p
    //       className="text-cinnamon/80 font-medium mt-10"
    //       initial={{ opacity: 0 }}
    //       whileInView={{ opacity: 1 }}
    //       transition={{ delay: 1, duration: 0.6 }}
    //     >
    //       Use <span className="font-semibold">morning & night</span>{" "}
    //       consistently for best results.
    //     </motion.p>
    //   </div>
    // </section>
    <section className="w-full bg-[#ece4dd] py-16 px-6 md:px-12">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-semibold text-[#5C2D17] mb-4">
          How to Use <span className="text-[#FF6F61]">LUMORA Glow Serum</span>
        </h2>
        <p className="text-gray-600 mb-12">
          Simple daily routine for visible results.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Step 1 */}
          <div className="flex flex-col items-center text-center bg-[#FAF5F5] p-6 rounded-2xl shadow-sm hover:shadow-md transition">
            <span className="w-14 h-14 flex items-center justify-center rounded-full bg-[#FF6F61] text-white text-xl font-bold mb-4">
              1
            </span>
            <h3 className="text-lg font-medium text-black mb-2">Cleanse</h3>
            <p className="text-gray-600 text-sm">
              Wash your face with a gentle cleanser to remove dirt and oil.
            </p>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col items-center text-center bg-[#FAF5F5] p-6 rounded-2xl shadow-sm hover:shadow-md transition">
            <span className="w-14 h-14 flex items-center justify-center rounded-full bg-[#FF6F61] text-white text-xl font-bold mb-4">
              2
            </span>
            <h3 className="text-lg font-medium text-black mb-2">Apply Serum</h3>
            <p className="text-gray-600 text-sm">
              Add 2–3 drops to fingertips and massage gently into skin.
            </p>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col items-center text-center bg-[#FAF5F5] p-6 rounded-2xl shadow-sm hover:shadow-md transition">
            <span className="w-14 h-14 flex items-center justify-center rounded-full bg-[#FF6F61] text-white text-xl font-bold mb-4">
              3
            </span>
            <h3 className="text-lg font-medium text-black mb-2">
              Moisturize + Protect
            </h3>
            <p className="text-gray-600 text-sm">
              Follow with moisturizer and SPF (morning) for best results.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
