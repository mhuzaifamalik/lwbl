import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import Logo from "../image/logo-footer.png";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-white border-t border-gray-200">
      {/* floating gradient glow in the background */}
      <div className="pointer-events-none absolute -right-32 -bottom-32 h-72 w-72 rounded-full bg-gradient-to-tr from-cyan-400/40 via-sky-300/20 to-transparent blur-3xl animate-[spin_18s_linear_infinite]" />
      <div className="pointer-events-none absolute -left-32 -top-20 h-64 w-64 rounded-full bg-gradient-to-br from-sky-300/30 via-cyan-200/20 to-transparent blur-3xl animate-[spin_22s_linear_infinite]" />

      <div className="relative max-w-6xl mx-auto px-4 lg:px-0 py-10">
        {/* Top section */}
        <div className="grid gap-10 md:grid-cols-4">
          {/* Logo + description */}
          <div className="transition-transform duration-500 hover:-translate-y-1">
            <div className="flex items-center gap-2">
              <img
                src={Logo}
                alt="Lightweave Beacon Legacy"
                className="h-24 object-contain drop-shadow-sm transition-transform duration-500 hover:scale-105"
              />
            </div>

            <p className="mb-3 mt-3 max-w-md text-sm leading-7 font-outfit text-neutral-700 text-start">
              Lightweave Beacon Legacy (LWBL) exists to empower artists and
              visionaries-especially those from under-represented backgrounds
              who’s been shut out of traditional spaces-by giving them the
              tools, opportunities, and community support they need to grow.
            </p>

            <div className="mt-6 border-b border-gray-300" />
          </div>

          {/* Main Links */}
          <div className="transition-transform duration-500 hover:-translate-y-1">
            <h4 className="text-start text-[24px] font-medium tracking-[0.18em] font-cinzel uppercase text-gray-800">
              Main Links
            </h4>
            <ul className="mt-4 space-y-2 text-xs text-gray-700">
              {["Home", "Galleries", "Quest & Challenges", "Education", "Community", "Shop"].map(
                (item) => (
                  <li
                    key={item}
                    className="relative group text-start font-outfit text-[18px] pt-2"
                  >
                    <a
                      href="#"
                      className="inline-block transition-all duration-300 group-hover:translate-x-1 group-hover:text-gray-900"
                    >
                      {item}
                    </a>
                    {/* animated underline */}
                    <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-gradient-to-r from-sky-400 via-cyan-400 to-sky-500 transition-all duration-500 group-hover:w-full" />
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Quick Links */}
          <div className="transition-transform duration-500 hover:-translate-y-1">
            <h4 className="text-start text-[24px] font-medium tracking-[0.18em] font-cinzel uppercase text-gray-800">
              Quick Links
            </h4>
            <ul className="mt-4 space-y-2 text-xs text-gray-700">
              {["Terms & Conditions", "Privacy Policy", "About", "Contact", "Donate Now"].map(
                (item) => (
                  <li
                    key={item}
                    className="relative group text-start font-outfit text-[18px] pt-2"
                  >
                    <span className="inline-block transition-all duration-300 group-hover:translate-x-1 group-hover:text-gray-900">
                      {item}
                    </span>
                    <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-gradient-to-r from-sky-400 via-cyan-400 to-sky-500 transition-all duration-500 group-hover:w-full" />
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Reach Us Out */}
          <div className="transition-transform duration-500 hover:-translate-y-1">
            <h4 className="text-start text-[24px] font-medium tracking-[0.18em] font-cinzel uppercase text-gray-800">
              Reach Us Out
            </h4>
            <ul className="mt-4 space-y-3 text-xs text-gray-700">
              <li className="flex items-start gap-3 group ">
                <span className="mt-[2px] text-sm">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-sky-50 text-sky-500 shadow-sm transition-all duration-300 group-hover:bg-sky-100 group-hover:shadow-md group-hover:-translate-y-[2px]">
                    <FaLocationDot />
                  </span>
                </span>
                <span className="text-start font-outfit text-[18px] pb-5 leading-relaxed">
                  <a
                    href="#"
                    className="transition-colors duration-300 group-hover:text-gray-900"
                  >
                    216 Lemmon Dr., STE 388, Reno, Nevada, 89506
                  </a>
                </span>
              </li>

              <li className="flex items-center  gap-3 group">
                <span className="text-sm">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-sky-50 text-sky-500 shadow-sm transition-all duration-300 group-hover:bg-sky-100 group-hover:shadow-md group-hover:-translate-y-[2px]">
                    <MdEmail />
                  </span>
                </span>
                <span className=" text-start font-outfit text-[18px]">
                  <a
                    href="mailto:info@lwbl.org"
                    className="transition-colors duration-300 group-hover:text-gray-900"
                  >
                    info@lwbl.org
                  </a>
                </span>
              </li>

              <li className="flex mt-5 items-center  gap-3 group">
                <span className="text-sm">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-sky-50 text-sky-500 shadow-sm transition-all duration-300 group-hover:bg-sky-100 group-hover:shadow-md group-hover:-translate-y-[2px]">
                    <FaPhoneAlt />
                  </span>
                </span>
                <span className=" text-start font-outfit text-[18px]">
                  <a
                    href="tel:11234567890"
                    className="transition-colors duration-300 group-hover:text-gray-900 "
                  >
                    (1) 123-456-7890
                  </a>
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 border-t font-outfit text-[18px] border-gray-300 pt-3 flex flex-col md:flex-row items-center justify-between  text-gray-500 gap-2">
          <p>© 2025 Copyright | Lightweave Beacon Legacy | All Rights Reserved</p>
          <p>
            Powered By{" "}
            <span className="font-medium font-outfit text-[18px] bg-gradient-to-r from-sky-500 via-cyan-500 to-sky-500 bg-clip-text text-transparent transition-all duration-500 hover:brightness-110 hover:drop-shadow">
              Design Verse Studios
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
