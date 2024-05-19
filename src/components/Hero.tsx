import React from "react";
import { CustomButton } from "./CustomButton";
import hero from "../assets/images/hero.png";
import herobg from "../assets/images/hero-bg.png";
export const Hero = () => {
  const handleScroll = () => {};
  return (
    <section className="flex lg:flex-row flex-col gap-5 relative z-0 max-w-[1440px] mx-auto">
      <div className="flex-1 pt-36 padding-x">
        <h2 className="xl:text-[72px] sm:text-[50px] text-[42px] font-extrabold">
        Find, book, rent a car—quick and super easy!
        </h2>
        <p className="text-[20px] text-black-100  font-light mt-5">
          Streamline your car rental expreience with our effortless booking
          process
        </p>
        <CustomButton
          title="Explore cars"
          containerStyles="bg-primary-blue text-white rounded-full mt-10"
          handleClick={handleScroll}
        />
      </div>
      <div className=" lg:flex-[1.5] flex justify-end items-end w-full">
        <div className=" relative lg:w-full w-[70%]  h-[490px] z-0">
          <img src={hero} alt="hero" className="object-contain" />
        </div>
        <div className="absolute lg:-top-36 lg:-right-[46%] bg-hero-bg -right-1/4  bg-repeat-round -z-10 w-full lg:h-[90vh]  h-[590px] overflow-hidden" />
      </div>
    </section>
  );
};
