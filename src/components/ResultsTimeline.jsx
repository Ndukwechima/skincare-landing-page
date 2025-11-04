import { motion } from "framer-motion";

const timeline = [
  {
    week: "Week 1",
    result: "Skin feels softer & more hydrated",
    detail:
      "The serum begins repairing your moisture barrier and calming irritation.",
  },
  {
    week: "Week 2",
    result: "Complexion looks brighter & more even",
    detail: "Vitamin C + Niacinamide start reducing dullness and dark spots.",
  },
  {
    week: "Week 3",
    result: "Texture becomes smoother; pores appear tighter",
    detail: "Skin cell turnover improves and hydration stays locked in longer.",
  },
  {
    week: "Week 4+",
    result: "Visible glow, reduced spots & radiant tone",
    detail: "Consistent use builds long-lasting glow and barrier protection.",
  },
];

// export default function ResultsTimeline() {
//   return (
//     <section className="w-full bg-[#F7EFE9] py-16 px-6">
//       <div className="max-w-5xl mx-auto text-center">
//         <h2 className="text-3xl md:text-4xl font-semibold text-black">
//           Real Results — Without the Guesswork
//         </h2>
//         <p className="text-gray-600 mt-3 mb-12">
//           Your glow builds gradually — and beautifully.
//         </p>

//         <div className="grid md:grid-cols-4 gap-8">
//           {timeline.map((item, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: index * 0.2 }}
//               viewport={{ once: true }}
//               className="bg-white rounded-2xl shadow-md p-6 border border-[#EBC0A8]"
//             >
//               <span className="text-[#FF6F61] font-semibold text-lg">
//                 {item.week}
//               </span>
//               <h3 className="mt-2 text-black font-medium text-base">
//                 {item.result}
//               </h3>
//               <p className="text-gray-600 text-sm mt-3 leading-relaxed">
//                 {item.detail}
//               </p>

//               {/* Timeline Dot */}
//               <div className="w-3 h-3 bg-[#FF6F61] rounded-full mx-auto mt-6"></div>
//             </motion.div>
//           ))}
//         </div>

//         <p className="mt-12 text-gray-700 italic">
//           Consistency is your glow. ✨
//         </p>
//       </div>
//     </section>
//   );
// }


export default function ResultsTimeline() {
  return (
    <section className="w-full bg-white py-16 px-6 md:px-12">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold text-[#FF6F61] text-center">
          Real Results — Without the Guesswork
        </h2>
        <p className="text-gray-600 text-center mt-3 mb-12">
          What to expect when you stay consistent.
        </p>

        <div className="border-l-2 border-[#EBC0A8] pl-6 space-y-10">
          {/* Week 1 */}
          <div className="relative">
            <div className="absolute -left-3.5  w-3 h-3 rounded-full bg-[#FF6F61]"></div>
            <h3 className="text-lg font-semibold text-black">Week 1</h3>
            <p className="text-gray-700 font-medium mt-1">
              Skin feels softer & more hydrated
            </p>
            <p className="text-gray-500 text-sm mt-1">
              Serum starts repairing moisture barrier + soothing skin.
            </p>
          </div>

          {/* Week 2 */}
          <div className="relative">
            <div className="absolute -left-3.5 w-3 h-3 rounded-full bg-[#FF6F61]"></div>
            <h3 className="text-lg font-semibold text-black">Week 2</h3>
            <p className="text-gray-700 font-medium mt-1">
              Complexion looks brighter & more even
            </p>
            <p className="text-gray-500 text-sm mt-1">
              Vitamin C & Niacinamide reduce dullness & fade dark spots.
            </p>
          </div>

          {/* Week 3 */}
          <div className="relative">
            <div className="absolute -left-3.5 w-3 h-3 rounded-full bg-[#FF6F61]"></div>
            <h3 className="text-lg font-semibold text-black">Week 3</h3>
            <p className="text-gray-700 font-medium mt-1">
              Texture becomes smoother; pores appear tighter
            </p>
            <p className="text-gray-500 text-sm mt-1">
              Skin cell turnover improves + hydration lasts longer.
            </p>
          </div>

          {/* Week 4+ */}
          <div className="relative">
            <div className="absolute -left-3.5 w-3 h-3 rounded-full bg-[#FF6F61]"></div>
            <h3 className="text-lg font-semibold text-black">Week 4+</h3>
            <p className="text-gray-700 font-medium mt-1">
              Radiant glow, reduced spots, healthier tone
            </p>
            <p className="text-gray-500 text-sm mt-1">
              Consistency reveals long-lasting brightness + skin strength.
            </p>
          </div>
        </div>

        <p className="text-center mt-12 italic text-gray-700">
          Your glow is building — keep going ✨
        </p>
      </div>
    </section>
  );
}
