import React from "react";
import navlogo from '../assets/images/car-logo.svg';
import { CustomButton } from "./CustomButton";
export const Navbar = () => {
  return (
    <header className="w-full z-10 ">
      <nav className="max-w-[1440px] mx-auto flex justify-between items-center px-6 sm:px-16 py-4">
        <img
          src={navlogo}
          width={65}
          height={14}
          className="object-containt"
          alt=""
        />
        <CustomButton
          title="Sign In"
          btnType="button"
          containerStyles="text-primary-blue  rounded-full bg-white min-w-[130px]"
        />
      </nav>
    </header>
  );
};
