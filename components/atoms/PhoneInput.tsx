"use client"
import React, { useState } from 'react';
import { Listbox } from '@headlessui/react';
import { Country, allCountries } from 'country-telephone-data';
// import { countries } from 'country-telephone-data';
import { CheckIcon, ChevronDownIcon } from '@heroicons/react/20/solid';

// Define the type for our enhanced country data, including the flag URL
interface CountryWithFlag extends Country {
    flagUrl: string;
}

// Filter and enhance countries by dial codes for specific countries
const filteredCountries: CountryWithFlag[] = allCountries.filter(
    country => ['33', '49', '352', '34', '41', '44'].includes(country.dialCode)
).map(country => ({
    ...country,
    flagUrl: `https://flagcdn.com/w20/${country.iso2.toLowerCase()}.png`
}));

const PhoneInput = () => {
    const [selectedCountry, setSelectedCountry] = useState(filteredCountries[0]);

    return (
        <div className="w-full my-auto ">
            <Listbox value={selectedCountry} onChange={setSelectedCountry}>
                {({ open }) => (
                    <div className='relative z-50'>
                        <Listbox.Button className="relative block h-16 w-full py-0 pl-3 border border-gray-300 focus:border-2 focus:border-[#005646] text-left bg-white rounded-xl  cursor-default focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white  focus-visible:ring-offset-2  sm:text-sm">
                            <span className="flex items-center">
                                <img src={selectedCountry.flagUrl} alt="" className="w-5 h-3 mr-3" />
                                <span className="block truncate"> (+{selectedCountry.dialCode})</span>
                            </span>
                            <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                                <ChevronDownIcon className="w-5 h-5 text-gray-400" aria-hidden="true" />
                            </span>
                        </Listbox.Button>
                        <Listbox.Options className="absolute w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                            {filteredCountries.map((country) => (
                                <Listbox.Option
                                    key={country.iso2}
                                    className={({ active }) =>
                                        `cursor-default select-none relative py-2 pl-3 pr-4 ${active ? 'text-amber-900 bg-gray-100' : 'text-gray-900'}`
                                    }
                                    value={country}
                                >
                                    {({ selected, active }) => (
                                        <div className={``}>
                                            <span className={`flex items-center ${selected ? 'font-medium ' : 'font-normal'}`}>
                                                <img src={country.flagUrl} alt="" className="w-5 h-3 mr-3" />
                                                (+{country.dialCode})
                                            </span>
                                            {/* {selected ? (
                                                <span className={`absolute inset-y-0 left-0 flex items-center pl-3 ${active ? 'text-amber-600' : 'text-amber-600'}`}>
                                                    <CheckIcon className="w-5 h-5" aria-hidden="true" />
                                                </span>
                                            ) : null} */}
                                        </div>
                                    )}
                                </Listbox.Option>
                            ))}
                        </Listbox.Options>
                    </div>
                )}
            </Listbox>
        </div>
    );
};

export default PhoneInput;