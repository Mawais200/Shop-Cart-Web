import React from "react";
import footerLogo from "../assets/logo.png";
import Banner from "../assets/website/footer-pattern.jpg";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div
      className="text-white bg-cover bg-no-repeat bg-bottom popin"
      style={{ backgroundImage: `url(${Banner})` }}
    >
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Company Details */}
          <div className="space-y-4">
            <h1 className="text-3xl font-bold flex items-center gap-3">
              <img src={footerLogo} alt="Logo" className="w-12" />
              Shopsy
            </h1>
            <p className="text-gray-300">
              Elevate your shopping experience with the best deals and latest
              trends.
            </p>
          </div>

          {/* Footer Links */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
            <div>
              <h1 className="text-xl font-bold mb-4">Important Links</h1>
              <ul className="space-y-3">
                {[
                  { title: "Home", link: "/#" },
                  { title: "About", link: "/#about" },
                  { title: "Contact", link: "/#contact" },
                  { title: "Blog", link: "/#blog" },
                ].map((link) => (
                  <li
                    key={link.title}
                    className="cursor-pointer text-gray-300 hover:text-primary transform hover:translate-x-1 transition-all"
                  >
                    {link.title}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h1 className="text-xl font-bold mb-4">Quick Links</h1>
              <ul className="space-y-3">
                {[
                  { title: "Services", link: "/#services" },
                  { title: "Pricing", link: "/#pricing" },
                  { title: "Support", link: "/#support" },
                  { title: "FAQs", link: "/#faqs" },
                ].map((link) => (
                  <li
                    key={link.title}
                    className="cursor-pointer text-gray-300 hover:text-primary transform hover:translate-x-1 transition-all"
                  >
                    {link.title}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact & Social Links */}
          <div>
            <h1 className="text-xl font-bold mb-4">Contact Us</h1>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-center gap-3">
                <FaLocationArrow className="text-primary" />
                <p>Noida, Uttar Pradesh</p>
              </div>
              <div className="flex items-center gap-3">
                <FaMobileAlt className="text-primary" />
                <p>+91 123456789</p>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 mt-6">
              <a href="#" className="text-2xl text-gray-300 hover:text-primary">
                <FaInstagram />
              </a>
              <a href="#" className="text-2xl text-gray-300 hover:text-primary">
                <FaFacebook />
              </a>
              <a href="#" className="text-2xl text-gray-300 hover:text-primary">
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-gray-400 mt-12 border-t border-gray-600 pt-6">
          <p>&copy; {new Date().getFullYear()} Shopsy. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;