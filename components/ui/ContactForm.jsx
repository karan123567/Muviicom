import React from "react";

const ContactForm = () => {
  return (
    <div className="flex flex-col justify-center w-full">
      <h2 className="text-3xl font-bold mb-6 text-white drop-shadow-lg">
        Need to contact us?
      </h2>

      <form className="space-y-5">
        <input
          type="text"
          placeholder="Full Name"
          className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 placeholder-white/60 text-white focus:outline-none focus:ring-2 focus:ring-[#00f2fe]"
        />

        <select className="w-full px-3 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-[#00f2fe]">
          <option value="" disabled selected className="text-black">
            Reason for Contact
          </option>
          <option className="text-black">Support</option>
          <option className="text-black">Feedback</option>
          <option className="text-black">Partnership</option>
        </select>

        <input
          type="email"
          placeholder="Contact Email"
          className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 placeholder-white/60 text-white focus:outline-none focus:ring-2 focus:ring-[#00f2fe]"
        />

        <textarea
          placeholder="Write your message..."
          rows={5}
          className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 placeholder-white/60 text-white focus:outline-none focus:ring-2 focus:ring-[#00f2fe]"
        />

        <button
          type="submit"
          className="w-full py-3 bg-gradient-to-r from-[#00f2fe] via-[#4facfe] to-[#00f2fe] text-black font-semibold rounded-lg hover:scale-105 transition-transform duration-300 shadow-lg relative overflow-hidden"
        >
          <span className="absolute -inset-1 animate-neon rounded-lg blur-md opacity-70 bg-gradient-to-r from-[#00f2fe] via-[#4facfe] to-[#00f2fe] z-0"></span>
          <span className="relative z-10">Send Message</span>
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
