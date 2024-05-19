import React, { Fragment } from "react";
import { serachsetManufacturer } from "../types";
import {
  Combobox,
  ComboboxButton,
  ComboboxInput,
  ComboboxOption,
  ComboboxOptions,
  Transition,
} from "@headlessui/react";
import { useState } from "react";
import carLogo from "../assets/images/car-logo.svg";
import { manufacturers } from "../constans";
export const SerachManufacturer = ({
  manufacturer,
  setManufacturer,
}: serachsetManufacturer) => {
  const [query, setQuery] = useState("");
  const filteredManufacturers =
    query === ""
      ? manufacturers
      : manufacturers.filter((item) =>(
          item.toLowerCase().replace(/\s+/g, "")
.includes(query.toLowerCase().replace(/\s+/g, ""))
      ));
  return (
    <div className="search-manufacturer">
      <Combobox value={manufacturer} onChange={setManufacturer}>
        <div className="relative w-full">
          <ComboboxButton className="absolute top-[14px]">
            <img width={20} height={20} className="ml-4" src={carLogo} alt="" />
          </ComboboxButton>
          <ComboboxInput
            className="search-manufacturer__input"
            placeholder="Volkswagen"
            displayValue={(manufacturer: string) => manufacturer}
            onChange={(e) => setQuery(e.target.value)}
          />
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => setQuery("")}
          >
            <ComboboxOptions className="search-manufacturer__options">
              {filteredManufacturers.map((item) => (
                <ComboboxOption
                  value={item}
                  key={item}
                  className={({ active }) =>
                    `relative search-manufacturer__option ${
                      active ? "bg-primary-blue text-white" : "text-gray-900"
                    }`
                  }
                >
                  {item}
                </ComboboxOption>
              ))}
            </ComboboxOptions>
          </Transition>
        </div>
      </Combobox>
    </div>
  );
};
