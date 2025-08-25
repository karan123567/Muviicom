// 'use client';
// import React from 'react';
// import ContactForm from '@/components/ui/ContactForm';

// const ContactPage = () => {
//   return (
//     <section className='bg-bannerImg bg-repeat bg-cover w-full h-screen'>

//     <div className="min-h-screen text-white flex items-center justify-center px-4 py-12">
//       <div className="max-w-6xl w-max grid grid-cols-1  gap-8 backdrop-blur-md rounded-2xl border border-white/10 shadow-2xl p-8">
        
//         {/* Left - Vertical Image Stack */}
//         {/* <div className="flex flex-col gap-4">
//           {/* {[1, 2, 3].map((num) => ( */}
//             {/* <img
//               // key={num}
//               //   src={`/images/cu.png`} // ← replace with your real images
//               //   alt='/'
//               //   className="rounded-xl w-full h-max object-cover transition-all duration-300"
//               // /> */}
//           {/* ))} */}
//          {/* </div> */} 

//         {/* Right - Contact Form */}
//         <ContactForm />
//       </div>
//     </div>
//               </section>
//   );
// };

// export default ContactPage;


'use client';
import React from 'react';
import Image from 'next/image';
import ContactForm from '@/components/ui/ContactForm';
import bgImage from '@/public/546694.jpg'; // your image

const ContactPage = () => {
  return (
    <div className="relative min-h-screen">
      {/* Background Image */}
      <div className="fixed inset-0 -z-10">
        <Image
          src={bgImage}
          alt="Iron Man Background"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Contact Form Container */}
      <div className="relative z-10 flex items-center justify-start min-h-screen px-8 md:px-16">
        <div className="max-w-lg w-full backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-8 shadow-[0_0_30px_rgba(255,255,255,0.2)]">
          <h2 className="text-3xl font-bold text-white mb-6">Contact Us</h2>
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default ContactPage;

