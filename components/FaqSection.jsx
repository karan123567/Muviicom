"use client"

import { useState } from "react";

const faqs = [
  {
    question: "How does Muvii recommend movies based on my mood?",
    answer:
      "Muvii uses a smart mood-matching system that suggests movies aligned with how you're feeling — happy, sad, romantic, chill, or adventurous!",
  },
  {
    question: "Do I need to sign up to use Muvii?",
    answer:
      "No sign-up is needed for basic recommendations. But joining our community unlocks special features like saving favorites, personal history, and mood trends.",
  },
  {
    question: "Is Muvii completely free to use?",
    answer:
      "Yes! Muvii is absolutely free. We just want you to discover the perfect movie for every mood — no cost, no fuss.",
  },
  {
    question: "Can I suggest movies or genres to be added?",
    answer:
      "Totally! Our community is open to suggestions. You can submit ideas via the 'Suggest a Movie' form or through our community page.",
  },
  {
    question: "Is there a mobile version of Muvii?",
    answer:
      "Yes! Muvii is fully responsive and works smoothly across all screen sizes — mobile, tablet, and desktop.",
  },
];

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="max-w-4xl mx-auto px-4 py-16" id="faq">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10 text-white">
        Frequently Asked Questions
      </h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-gray-700 rounded-xl overflow-hidden"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full text-left px-6 py-4 flex justify-between items-center bg-gray-900 hover:bg-gray-800 transition"
            >
              <span className="text-lg font-medium text-white">{faq.question}</span>
              <span className="text-white text-2xl">
                {openIndex === index ? "−" : "+"}
              </span>
            </button>
            {openIndex === index && (
              <div className="px-6 py-4 bg-gray-800 text-gray-300">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FaqSection;
