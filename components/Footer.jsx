"use client";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-black text-white px-6 py-10 mt-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Company Info */}
        <div>
          <h2 className="text-lg font-extrabold mb-4">Muvii</h2>
          <p className="text-sm leading-relaxed">
            Discover movies, anime & manga tailored to your mood, top ratings,
            or handpicked recommendations.
          </p>
        </div>

        {/* Products */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Learn More</h2>
          <ul className="space-y-2 text-sm  hover:cursor-pointer">
            <li>
              <Link
                href="learnmore/about"
                className="hover:underline hover:text-green-700"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="learnmore/privacy-policy"
                className="hover:underline  hover:text-green-700"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                href="learnmore/terms"
                className="hover:underline  hover:text-green-700"
              >
                Terms & Conditions
              </Link>
            </li>
            {/* <li>Bootstrap</li> */}
            {/* <li>Angular</li> */}
          </ul>
        </div>

        {/* Useful Links */}
        <div>
          <h2 className="text-lg font-semibold mb-4">USEFUL LINKS</h2>
          <ul className="space-y-2 text-sm hover:cursor-pointer">
            {/* <li className="hover:underline  hover:text-green-500">
              Join the Community
            </li> */}
            <li className="hover:underline  hover:text-green-700">
              <Link href="/rate-movie">Rate a Movie</Link>
            </li>
            {/* <li className="hover:underline  hover:text-gray-500">Contact Info</li> */}
            {/* <li className="hover:underline  hover:text-green-700">Help</li> */}
            <li><Link href="/contact" className="hover:underline  hover:text-green-700">Contact Us</Link></li>
            <li><Link href="/blog" className="hover:underline  hover:text-green-700">Blog</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h2 className="text-lg font-semibold mb-4">CONTACT</h2>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2">
              <span>🏠</span>
              <span>New Delhi, Delhi, India</span>
            </li>
            <li className="flex items-start gap-2 hover:scale-110 hover:cursor-pointer">
              <span>✉️</span>
              <span>muviiteam@gmail.com</span>
            </li>
            {/* <li className="flex items-start gap-2"> */}
            {/* <span>📞</span> */}
            {/* <span>+ 01 234 567 88</span> */}
            {/* </li> */}
            {/* <li className="flex items-start gap-2"> */}
            {/* <span>📠</span> */}
            {/* <span>+ 01 234 567 89</span> */}
            {/* </li> */}
          </ul>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-700 my-8"></div>

      {/* Bottom */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
        <p>© 2025 Muvii. All rights reserved.</p>
        <div className="flex items-center space-x-4 mt-4">
          <a
            href="https://discord.gg/vMeQDxks"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/icons/discord.png"
              alt="Discord"
              width={24}
              height={24}
              className="hover:scale-125"
            />
          </a>
          <a
            href="https://youtube.com/your-channel"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/icons/Insta.png"
              alt="Instagram"
              width={24}
              height={24}
              className="hover:scale-125"
            />
          </a>
          <a
            href="https://www.youtube.com/@watchwithmuvii"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/icons/youtube.png"
              alt="Youtube"
              width={24}
              height={24}
              className="hover:scale-125"
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
