import React from "react";
import carLogo from "../assets/images/car-logo.svg";
import { footerLinks } from "../constans";
export const Footer = () => {
  return (
    <footer className="flex flex-col text-black-100 mt-32 border-t border-gray-100">
      <div className="flex max-md:flex-col flex-wrap justify-between  gap-5 sm:px-16 px-6 py-10 ">
        <div className="flex flex-col justify-start items-start  gap-2">
          <img
            src={carLogo}
            width={100}
            height={18}
            className="object-contain"
            alt="log"
          />
          <p className="text-base text-gray-700">
            Carhub 2024 <br /> All rights reserved &copy;{" "}
          </p>
        </div>
        <div className="flex-1 w-full flex md:justify-end flex-wrap max-md:mt-10 gap-20">
          {footerLinks.map((link) => (
            <div className="flex flex-col gap-6 text-base min-w-[170px]" key={link.title}>
              <h3 className="font-bold">{link.title}</h3>
              {link.links.map((item) => (
                <a key={item.title} href={item.url} className="text-gray-600">
                  {item.title}
                </a>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-between items-center flex-wrap mt-10 border-t border-gray-300 px-6 sm:px-16 py-10">
        <p>@2024 CarHub. All Rights Reserved</p>
        <div className="flex-1 flex sm:justify-end justify-center max-sm:mt-4 gap-10">
          <a href="/" className="text-gray-500">
            Privacy Policy
          </a>
          <a href="/" className="text-gray-500">
            Terms of Use
          </a>
        </div>
      </div>
    </footer>
  );
};
