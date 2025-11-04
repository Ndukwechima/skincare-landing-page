export default function TrustGuarantee() {
  return (
    <section className="w-full bg-white py-16 px-6 md:px-12">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-semibold text-black mb-4">
          You Can Trust What Touches Your Skin
        </h2>
        <p className="text-gray-600 mb-12">Safe. Gentle. Backed by science.</p>

        <div className="grid md:grid-cols-3 gap-10">
          {/* Item 1 */}
          <div className="space-y-3">
            <div className="w-12 h-12 mx-auto bg-[#F7EFE9] border border-[#FF6F61] rounded-full flex items-center justify-center text-[#8A0707] text-xl font-bold">
              ✓
            </div>
            <h3 className="text-lg font-semibold text-black">
              Dermatologist Tested
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Formulated & reviewed by certified skincare professionals.
            </p>
          </div>

          {/* Item 2 */}
          <div className="space-y-3">
            <div className="w-12 h-12 mx-auto bg-[#F7EFE9] border border-[#FF6F61] rounded-full flex items-center justify-center text-[#8A0707] text-xl font-bold">
              ✓
            </div>
            <h3 className="text-lg font-semibold text-black">
              Suitable for All Skin Types
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Lightweight, non-comedogenic, gentle enough for sensitive skin.
            </p>
          </div>

          {/* Item 3 */}
          <div className="space-y-3">
            <div className="w-12 h-12 mx-auto bg-[#F7EFE9] border border-[#FF6F61] rounded-full flex items-center justify-center text-[#8A0707] text-xl font-bold">
              ✓
            </div>
            <h3 className="text-lg font-semibold text-black">
              30-Day Glow Guarantee
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Don’t love your results? Return it within 30 days. No stress.
            </p>
          </div>
        </div>

        <p className="mt-12 text-gray-700 italic">
          Your skin deserves peace of mind.
        </p>
      </div>
    </section>
  );
}
