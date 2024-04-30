"use client"
import React, { useState, useRef, useEffect } from 'react';

interface Option {
    id: number;
    label: string;
}

interface CustomSelectProps {
    options: Option[];
    placeholder?: string;
}

const CustomSelect: React.FC<CustomSelectProps> = ({ options, placeholder = "Select option" }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState<Option | null>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    // Handling clicking outside to close the dropdown
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div ref={containerRef} className="relative">
            <div
                className="bg-white border-2 border-green-500 w-full text-left h-12 px-4 rounded-lg shadow-md flex items-center justify-between cursor-pointer"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span className={`${selectedOption ? 'text-gray-800' : 'text-gray-400'} text-lg`}>
                    {selectedOption ? selectedOption.label : placeholder}
                </span>
                {selectedOption && (
                    <button
                        className="text-gray-500 hover:text-gray-700"
                        onClick={(e) => {
                            e.stopPropagation();
                            setSelectedOption(null);
                        }}
                    >
                        ×
                    </button>
                )}
                <span className="text-gray-500">
                    {isOpen ? '▲' : '▼'}
                </span>
            </div>
            {isOpen && (
                <ul className="absolute bg-white border border-green-500 w-full mt-1 rounded-lg z-10">
                    {options.map((option) => (
                        <li
                            key={option.id}
                            className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                            onClick={() => {
                                setSelectedOption(option);
                                setIsOpen(false);
                            }}
                        >
                            {option.label}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default CustomSelect;
