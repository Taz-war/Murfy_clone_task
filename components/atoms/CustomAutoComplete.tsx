// Correct import statements
"use client"
import { Fragment, useState, useRef, useEffect } from 'react';
import { Combobox, Transition } from '@headlessui/react';
import { CheckIcon, ChevronUpDownIcon, MapPinIcon } from '@heroicons/react/20/solid';
import "@/components/atoms/customCss.css";

interface Person {
    id: number;
    name: string;
}

const people: Person[] = [
    { id: 1, name: 'Wade Cooper' },
    { id: 2, name: 'Arlene Mccoy' },
    { id: 3, name: 'Devon Webb' },
    { id: 4, name: 'Tom Cook' },
    { id: 5, name: 'Tanya Fox' },
    { id: 6, name: 'Hellen Schmidt' },
];

interface CustomAutoCompleteProps {
    borderRadius?: string;
    label?: string;
    type?: "location" | "default";
}

export default function CustomAutoComplete(props: CustomAutoCompleteProps) {
    console.log(props.borderRadius); // Debugging output
    const [selected, setSelected] = useState<Person | null>(null);
    const [query, setQuery] = useState<string>('');
    const [isFocused, setIsFocused] = useState<boolean>(false);
    const inputRef = useRef<HTMLInputElement | null>(null);

    const filteredPeople: Person[] =
        query === ''
            ? people
            : people.filter((person) =>
                person.name.toLowerCase().replace(/\s+/g, '').includes(query.toLowerCase().replace(/\s+/g, ''))
            );

    useEffect(() => {
        if (!query && !isFocused && inputRef.current) {
            setSelected(null);
        }
    }, [query, isFocused]);

    const handleFocus = () => {
        setIsFocused(true);
    };

    const handleBlur = () => {
        setIsFocused(false);
    };

    return (
        <div className="w-full">
            <Combobox value={selected} onChange={setSelected}>
                <div className="relative mt-1">
                    <div className={`relative w-full cursor-default overflow-hidden text-left border border-gray-300 shadow-md focus-within:border-gray-300 focus-within:ring-1 focus-within:ring-gray-300 ${props.borderRadius === '50%' ? "rounded-full" : "rounded-lg"}`}>
                        <Combobox.Input
                            className="w-full py-3 pl-3 pr-10 text-sm leading-5 h-166 text-gray-500 focus:outline-none"
                            displayValue={(person: Person) => person?.name || ''}
                            onChange={(event) => setQuery(event.target.value)}
                            onFocus={handleFocus}
                            onBlur={handleBlur}
                            placeholder={!isFocused && !query ? props.label : ""}
                            ref={inputRef}
                        />
                        <label htmlFor="combobox-input" className={`absolute left-3 transition-all duration-200 ease-in-out text-sm pointer-events-none ${isFocused || query ? 'top-0 text-gray-400 text-xs' : 'top-1/2 -translate-y-1/2 text-gray-400'}`}>
                            {props.label}
                        </label>
                        <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
                            {props.type === "location" ?
                                <MapPinIcon
                                    className="h-5 w-5 text-gray-500"
                                    aria-hidden="true"
                                />
                                : <ChevronUpDownIcon
                                    className="h-5 w-5 text-gray-500"
                                    aria-hidden="true"
                                />}
                        </Combobox.Button>
                    </div>
                    <Transition
                        as={Fragment}
                        leave="transition ease-in duration-100"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                        afterLeave={() => setQuery('')}
                    >
                        <Combobox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                            {filteredPeople.length === 0 && query !== '' ? (
                                <div className="relative cursor-default select-none py-2 px-4 text-gray-700">
                                    Nothing found.
                                </div>
                            ) : (
                                filteredPeople.map((person: Person) => (
                                    <Combobox.Option
                                        key={person.id}
                                        className={({ active }) =>
                                            `relative cursor-default select-none py-2 pl-10 pr-4 ${active ? 'bg-gray-200 text-black' : 'text-gray-900'}`
                                        }
                                        value={person}
                                    >
                                        {({ selected, active }) => (
                                            <>
                                                <span className={`block truncate ${selected ? 'font-medium' : 'font-normal'}`}>
                                                    {person.name}
                                                </span>
                                                {selected ? (
                                                    <span className={`absolute inset-y-0 left-0 flex items-center pl-3 text-black`}>
                                                        <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                                    </span>
                                                ) : null}
                                            </>
                                        )}
                                    </Combobox.Option>
                                ))
                            )}
                        </Combobox.Options>
                    </Transition>
                </div>
            </Combobox>
        </div>
    );
}
