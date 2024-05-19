import React, { Fragment } from "react";
import { CustomFilterProps } from "../types";
import { useState } from "react";
import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
  Transition,
} from "@headlessui/react";
import chevron from "../assets/images/chevron-up-down.svg";
import { updateSearchParams } from "../utils";
import { useNavigate } from "react-router-dom";
export const CustomFilter = ({ title, options }: CustomFilterProps) => {
  const [selected, setSelected] = useState(options[0]);
  const navigate = useNavigate()
  const handleUpdateParams = (e: {
    title: string;
    value: string;
  }) => {
    const newPathname = updateSearchParams(title, e.value.toLowerCase());
    navigate(newPathname)
  };
  return (
    <div className=" ">
      <Listbox
        value={selected}
        onChange={(e) => {
          setSelected(e);
          handleUpdateParams(e);
        }}
      >
        <div className="relative  z-10">
          <ListboxButton className="custom-filter__btn">
            <span className="block truncate">{selected.title}</span>
            <img
              width={20}
              height={20}
              className="ml-4 object-contain"
              src={chevron}
              alt=""
            />
          </ListboxButton>
        </div>

        <Transition
          as={Fragment}
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <ListboxOptions className="custom-filter__options ">
            {options.map((option) => (
              <ListboxOption
                key={option.title}
                value={option}
                className={({ active }) =>
                  `relative cursor-default select-none py-2 px-4 ${
                    active ? "bg-primary-blue text-white" : "text-gray-900"
                  }`
                }
              >
                {({ selected }) => (
                  <span
                    className={`block truncate ${
                      selected ? "font-medium" : "font-normal"
                    }`}
                  >
                    {option.title}
                  </span>
                )}
              </ListboxOption>
            ))}
          </ListboxOptions>
        </Transition>
      </Listbox>
    </div>
  );
};
