import React from "react";

function Footer() {
  return (
    <footer className="w-full h-auto px-8 md:px-12 lg:px-16 xl:px-28 border-t border-[#D9D9D9]">
      <div className="flex flex-col md:flex-row items-start justify-between gap-10 py-14">
        <div className="flex flex-col gap-6 md:gap-14">
          <p className="text-2xl font-bold">Furniro.</p>
          <p className="text-[#9F9F9F] text-sm xl:text-base">
            400 University Drive Suite 200 Coral <br /> Gables, <br />
            FL 33134 USA
          </p>
        </div>

        <div className="flex flex-col gap-6 md:gap-14">
          <h3 className="text-[#9F9F9F]">Links</h3>
          <ul className="flex flex-col text-sm xl:text-base font-medium gap-4 md:gap-10">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Shop</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-6 md:gap-14">
          <h3 className="text-[#9F9F9F]">Help</h3>
          <ul className="flex flex-col text-sm xl:text-base font-medium gap-4 md:gap-10">
            <a href="#">
              <li>Payment Options</li>
            </a>
            <a href="#">
              <li>Returns</li>
            </a>
            <a href="#">
              <li>Privacy Policies</li>
            </a>
          </ul>
        </div>

        <div className="flex flex-col gap-6 md:gap-14">
          <h3 className="text-[#9F9F9F]">Newsletter</h3>
          <div className="flex gap-3">
            <input
              type="text"
              placeholder="Enter Your Email Address"
              className="border-b border-black text-[#9F9F9F] outline-none text-sm"
            />
            <button className="border-b border-black font-medium cursor-pointer text-sm xl:text-base">SUBSCRIBE</button>
          </div>
        </div>
      </div>

      <div className="w-full border-t border-[#D9D9D9]"></div>

      <div className="flex flex-wrap flex-col md:flex-row items-center justify-center md:justify-between gap-3 py-5 md:py-10 text-sm xl:text-base">
        <p>©2025 Furniro. All rights reverved</p>
        <p>
          Build with ❤️ by{" "}
          <a
            href="https://github.com/amehtacc"
            target="_blank"
            className="underline"
          >
            Aryan Mehta
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
