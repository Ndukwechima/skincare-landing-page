// export default function ClosingMessage() {
//   return (
//     <section className="w-full bg-[#FFF9F6] py-20 px-6 md:px-12">
//       <div className="max-w-3xl mx-auto text-center">
//         <h2 className="text-3xl md:text-4xl font-semibold text-black mb-6">
//           Because Your Glow Is Personal
//         </h2>

//         <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-8">
//           Your skin tells your story — where you’ve been, what you’ve felt, how
//           you show up in the world. You deserve products that honor that story.
//           Not harsh. Not complicated. Just nourishing.
//         </p>

//         <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-10">
//           LUMORA Glow Serum isn’t just skincare — it’s a gentle daily reminder
//           that you are worth slow, intentional care, every single day.
//         </p>

//         <button className="bg-[#FF6F61] text-white py-3 px-8 rounded-full text-base font-medium hover:opacity-90 transition cursor-pointer">
//           Start Your Glow Journey
//         </button>

//         <p className="text-gray-500 text-sm mt-6">You deserve to shine ✨</p>
//       </div>
//     </section>
//   );
// }

import { useState } from "react";

export default function ClosingMessage() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email submitted:", email);
    setEmail("");
    // later: connect to backend, Mailchimp, Brevo, Klaviyo, etc.
  };

  return (
    <section className="w-full bg-[#FFF9F6] py-20 px-6 md:px-12">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-semibold text-black mb-6">
          Because Your Glow Is Personal
        </h2>

        <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-8">
          Your glow is a journey—soft, intentional, and uniquely yours. If
          you're not ready to start today, that's okay. We'll walk with you.
        </p>

        <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-10">
          Join our <span className="font-medium text-black">Glow Circle</span>{" "}
          to receive weekly tips, rituals, and gentle reminders to take care of
          your skin — and yourself.
        </p>

        {/* Email Form */}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto"
        >
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-4 py-3 rounded-full border border-[#EBC0A8] focus:outline-none text-gray-800"
          />
          <button
            type="submit"
            className="w-full md:w-2/3 bg-[#FF6F61] text-white px-6 py-3 rounded-full 
            text-base font-medium hover:opacity-90 transition"
          >
            Join Glow Circle
          </button>
        </form>

        <p className="text-gray-500 text-xs mt-6">
          No spam. No pressure. Just gentle glow support ✨
        </p>
      </div>
    </section>
  );
}

