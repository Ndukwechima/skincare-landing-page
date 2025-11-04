import { motion } from "framer-motion";

const IngredientsSection = () => {
  const ingredients = [
    {
      name: "Vitamin C 🍊",
      benefit: "Brightens and reduces dark spots",
    },
    {
      name: "Kakadu Plum 🌿",
      benefit: "World’s richest source of antioxidants for glow and protection",
    },
    {
      name: "Hyaluronic Acid 💧",
      benefit: "Locks in hydration for soft, smooth skin",
    },
    {
      name: "Niacinamide ✨",
      benefit: "Minimizes pores and improves texture",
    },
  ];

  return (
    <section className="w-full bg-[#ffffff] py-24 px-6">
      <div className="max-w-6xl mx-auto text-center space-y-12">
        {/* Section Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-semibold text-[#FF6F61]"
        >
          Powered by Nature — Backed by Science
        </motion.h2>

        {/* Ingredients List */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto"
        >
          {ingredients.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm p-6 text-left border border-[#EDE8E4]"
            >
              <h3 className="text-lg font-medium text-[#5C2D17] mb-2">
                {item.name}
              </h3>
              <p className="text-[#524c4c] leading-relaxed">{item.benefit}</p>
            </div>
          ))}
        </motion.div>

        {/* Purity Line */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="text-[#8B4E32] text-lg font-medium max-w-2xl mx-auto pt-1 md:pt-8"
        >
          No parabens. No sulfates. No synthetic fragrance. <br />
          Just pure skin nourishment.
        </motion.p>
      </div>
    </section>
  );
};

export default IngredientsSection;


// import { motion } from "framer-motion";

// const IngredientsSection = () => {
//   const ingredients = [
//     {
//       ingredient: "Vitamin C 🍊",
//       effect: "Brightens complexion and fades dark spots for a more even glow.",
//     },
//     {
//       ingredient: "Kakadu Plum 🌿",
//       effect: "Packed with antioxidants to defend skin and boost radiance.",
//     },
//     {
//       ingredient: "Hyaluronic Acid 💧",
//       effect:
//         "Draws moisture in and helps skin stay soft, plump, and hydrated.",
//     },
//     {
//       ingredient: "Niacinamide ✨",
//       effect:
//         "Smooths texture, reduces redness, and minimizes the look of pores.",
//     },
//   ];

//   return (
//     <section className="w-full bg-[#ffffff] py-24 px-6">
//       <div className="max-w-5xl mx-auto space-y-12 text-center">
//         {/* Title */}
//         <motion.h2
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.7 }}
//           viewport={{ once: true }}
//           className="text-3xl md:text-4xl font-semibold text-[#5C2D17]"
//         >
//           Powered by Nature, Backed by Science
//         </motion.h2>

//         {/* Table */}
//         <motion.div
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           transition={{ duration: 1 }}
//           viewport={{ once: true }}
//           className="overflow-hidden rounded-xl border border-[#EDE8E4] bg-white"
//         >
//           <table className="w-full text-left">
//             <thead className="bg-[#FFF7F3] text-[#5C2D17]">
//               <tr>
//                 <th className="py-4 px-6 text-sm font-medium">Ingredient</th>
//                 <th className="py-4 px-6 text-sm font-medium">What It Does</th>
//               </tr>
//             </thead>

//             <tbody className="divide-y divide-[#EDE8E4] text-[#6F6F6F]">
//               {ingredients.map((item, i) => (
//                 <tr key={i}>
//                   <td className="py-4 px-6 font-medium text-[#5C2D17]">
//                     {item.ingredient}
//                   </td>
//                   <td className="py-4 px-6 leading-relaxed">{item.effect}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </motion.div>

//         {/* Purity Statement */}
//         <motion.p
//           initial={{ opacity: 0, y: 15 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.9 }}
//           viewport={{ once: true }}
//           className="text-[#8B4E32] text-lg font-medium pt-4"
//         >
//           No parabens. No sulfates. No synthetic fragrance. <br />
//           Just pure skin nourishment.
//         </motion.p>
//       </div>
//     </section>
//   );
// };

// export default IngredientsSection;
