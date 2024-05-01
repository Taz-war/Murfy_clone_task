import React, { ReactNode, ButtonHTMLAttributes } from 'react';

// Extend button attributes to allow all standard button properties (like 'type', 'onClick', 'disabled', etc.)
interface AtomButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode; // Using ReactNode to allow anything that can be rendered, including strings, elements, and more.
}

const Button: React.FC<AtomButtonProps> = ({ children, ...props }) => {
    return (
        <button
            {...props} // Spread all other props to the button element, handling events, disabled state, etc.
            className="bg-white border-2 mb-3 border-gray-100  w-full text-left h-16 text-gray-800 text-lg font-medium px-6 py-2 rounded-[10px] shadow-sm hover:bg-[#e6e6e6] hover:border-[#1A8E96] focus:outline-none focus:border-[#D1D1D1] focus:ring focus:ring-gray-200 focus:ring-opacity-50">
            {children}
        </button>
    );
}

export default Button;
