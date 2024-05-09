/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useState, forwardRef } from "react";
import { Listbox, Transition } from "@headlessui/react";

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

type IInputProps = {
  label: string;
  placeholder: string;
  options: { id: number | string; name: string }[];
  value: { id: number | string; name: string } | null;
  isDisabled: boolean;
  isError: string;
  handleSelectedOption: (value: { id: number | string; name: string }) => void;
};

const Menu = ({
  label,
  placeholder,
  options,
  value,
  isDisabled,
  isError,
  handleSelectedOption,
}: IInputProps) => (
  <>
    <Listbox
      disabled={isDisabled}
      value={value}
      onChange={handleSelectedOption}
    >
      {({ open }) => (
        <>
          <div className="mt-1 relative">
            <Listbox.Button
              className={`disabled:bg-gray-200 bg-white relative w-full border ${
                isError && !isDisabled ? "border-red-400" : "border-gray-300"
              } rounded-sm shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none  sm:text-sm`}
            >
              <span className="block truncate">{value?.name}</span>
              <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-3 h-3"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </span>
            </Listbox.Button>

            <Transition
              show={open}
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
                {options.length == 0 ? (
                  <Listbox.Option
                    disabled
                    value={null}
                    className={({ active }) =>
                      classNames(
                        active ? "text-white bg-[#042434]" : "text-gray-900",
                        "cursor-default select-none relative py-2 pl-3 pr-9"
                      )
                    }
                  >
                    Nothing Found
                  </Listbox.Option>
                ) : (
                  options.map((itm, index) => (
                    <Listbox.Option
                      key={index}
                      className={({ active }) =>
                        classNames(
                          active ? "text-white bg-[#042434]" : "text-gray-900",
                          "cursor-default select-none relative py-2 pl-3 pr-9"
                        )
                      }
                      value={itm}
                    >
                      {({ selected, active }) => (
                        <>
                          <span
                            className={classNames(
                              selected ? "font-bold" : "font-normal",
                              "block truncate"
                            )}
                          >
                            {itm.name}
                          </span>

                          {selected ? (
                            <span
                              className={classNames(
                                active ? "text-white" : "text-[#042434]",
                                "absolute inset-y-0 right-0 flex items-center pr-4"
                              )}
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                className="w-5 h-5"
                              >
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  d="M4.5 12.75l6 6 9-13.5"
                                />
                              </svg>
                            </span>
                          ) : null}
                        </>
                      )}
                    </Listbox.Option>
                  ))
                )}
              </Listbox.Options>
            </Transition>
          </div>

          <p className="mt-2 text-sm text-red-600" id="email-error">
            {isError}
          </p>
        </>
      )}
    </Listbox>
  </>
);

export default Menu;
