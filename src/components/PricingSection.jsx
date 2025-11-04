import Img from "../assets/images/heroImg.png"

// export default function PricingSection() {
//   return (
//     <section className="w-full bg-[#F7EFE9] py-20 px-6 md:px-12">
//       <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
//         {/* LEFT: Product Image */}
//         <div className="w-full md:w-1/2 flex justify-center">
//           <img
//             src={Img}
//             alt="Lumora Glow Serum"
//             className="w-full md:w-96 drop-shadow-md object-cover rounded-lg"
//           />
//         </div>

//         {/* RIGHT: Pricing Card */}
//         <div className="bg-white border border-[#EBC0A8] rounded-3xl p-10 shadow-sm w-full md:w-1/2">
//           <h2 className="text-3xl md:text-4xl font-semibold text-black mb-2">
//             Your Glow Starts Here
//           </h2>
//           <p className="text-gray-600 mb-6 text-sm md:text-base">
//             A daily ritual for radiant, confident skin.
//           </p>

//           <h3 className="text-xl font-semibold text-black mb-4">
//             LUMORA Glow Serum — 30ml
//           </h3>

//           <div className="flex items-center gap-3 mb-6">
//             <span className="text-gray-400 line-through text-lg">₦18,500</span>
//             <span className="text-3xl text-[#FF6F61] font-bold">₦14,900</span>
//           </div>

//           <p className="text-gray-600 text-sm mb-6">
//             First-time order discount applied. Use code:{" "}
//             <span className="font-semibold text-black">GLOWFIRST</span>
//           </p>

//           <button className="w-full bg-[#FF6F61] text-white py-3 rounded-full text-base font-medium hover:opacity-90 transition cursor-pointer">
//             Get Your Glow Serum
//           </button>

//           <p className="text-gray-500 text-xs mt-4 text-center">
//             Guaranteed results or your money back.
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// }


export default function PricingSection() {
  return (
    <section className="w-full bg-[#F7EFE9] py-20 px-6 md:px-12">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* LEFT: Product Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={Img}
            alt="Lumora Glow Serum"
            className="w-full md:w-96 drop-shadow-md object-contain rounded-lg"
          />
        </div>

        {/* RIGHT: Pricing Card */}
        <div className="bg-white border border-[#EBC0A8] rounded-3xl p-10 
        shadow-sm w-full md:w-1/2">
          <h2 className="text-3xl md:text-4xl font-semibold text-black mb-2">
            Your Glow Starts Here
          </h2>
          <p className="text-gray-600 mb-6 text-sm md:text-base">
            A daily ritual for radiant, confident skin.
          </p>

          <h3 className="text-xl font-semibold text-black mb-4">
            LUMORA Glow Serum — 30ml
          </h3>

          <div className="flex items-center gap-3 mb-6">
            <span className="text-gray-400 line-through text-lg">₦18,500</span>
            <span className="text-3xl text-[#FF6F61] font-bold">₦14,900</span>
          </div>

          <p className="text-gray-600 text-sm mb-6">
            First-time discount applied. Use code:{" "}
            <span className="font-semibold text-black">GLOWFIRST</span>
          </p>

          {/* CTA Buttons */}
          <div className="space-y-3">
            {/* <button
              className="w-full bg-[#FF6F61] text-white py-3 
            rounded-full text-base font-medium hover:opacity-90 transition cursor-pointer"
            >
              Add to Cart / Checkout
            </button> */}

            <a
              href="https://wa.me/2349012345678?text=Hi%20I%20would%20love%20to%20order%20the%20LUMORA%20Glow%20Serum.%20Please%20assist%20me%20😊"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full block text-center border border-[#FF6F61] text-[#FF6F61] py-3 rounded-full text-base font-medium hover:bg-[#FF6F61]/10 transition"
            >
              Order via WhatsApp
            </a>
          </div>

          <p className="text-gray-500 text-xs mt-4 text-center">
            Guaranteed results or your money back.
          </p>
        </div>
      </div>
    </section>
  );
}
