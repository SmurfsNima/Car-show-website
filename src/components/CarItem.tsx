import React from "react";
import { useState } from "react";
import { CarProps } from "../types";
import { CustomButton } from "./CustomButton";
import { calculateCarRent, generateCarImageUrl } from "../utils";
import carImg from "../assets/images/hero.png";
import steeringWheel from "../assets/images/steering-wheel.svg";
import tire from "../assets/images/tire.svg";
import gas from "../assets/images/gas.svg";
import rightIcon from '../assets/images/right-arrow.svg'
import { CarDetails } from "./CarDetails";
interface carCardProps {
  car: CarProps;
}
export const CarItem = ({ car }: carCardProps) => {
  const { city_mpg, year, make, model, transmission, drive } = car;
  const carRent = calculateCarRent(city_mpg, year);
  const [isOpen, setisOpen] = useState(false)
  return (
    <div className="car-card  group">
      <div className="car-card__content">
        <h2 className="car-card__content-title">
          {make} {model}
        </h2>
      </div>
      <p className="flex mt-6 text-[32px] font-extrabold">
        <span className="self-start text-[14px] font-semibold">$</span>
        {carRent}
        <span className="self-end text-[14px] font-medium">/day</span>
      </p>
      <div className="relative w-full h-30 my-3">
        <img className="object-contain" src={generateCarImageUrl(car)} alt="" />
      </div>
      <div className="relative flex w-full mt-2">
        <div className="flex group-hover:invisible w-full justify-between text-gray-500">
          <div className="flex flex-col justify-center items-center gap-2">
            <img width={20} height={20} src={steeringWheel} alt="" />
            <p className="text-[14px] ">
              {transmission === "a" ? "Automatic" : "Manual"}
            </p>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <img width={20} height={20} src={tire} alt="" />
            <p className="text-[14px] ">{drive.toUpperCase()}</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <img width={20} height={20} src={gas} alt="" />
            <p className="text-[14px] ">{city_mpg} MPG</p>
          </div>
        </div>
        <div className="car-card__btn-container">
            <CustomButton title="View More" containerStyles="w-full py-[16px] rounded-full bg-primary-blue" textStyles = "text-white text-[14px] leading-[17px] font-bold" rightIcon= {rightIcon} handleClick={()=>setisOpen(true)}/>
        </div>
      </div>
      <CarDetails isOpen ={isOpen} closeModal={()=>setisOpen(false)} car={car} />
    </div>
  );
};
