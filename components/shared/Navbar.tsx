"use client";
import Head from 'next/head';
import React, { useEffect, useState } from 'react';
import Stepper from '../Example';
import CustomMenu from '../atoms/CustomMenu';
import { ChevronDownIcon } from '@heroicons/react/20/solid';

const Navbar: React.FC = () => {
    const [showSteps, setShowSteps] = useState<boolean>(false);
    const [showCustomMenu,setShowCustomMenu] = useState<boolean>(false)

    // Custom function to update the visibility of the Steps
    const handleResize = () => {
        const shouldShow = window.innerWidth >= 950; // Custom screen width (950px as an example)
        setShowSteps(shouldShow);
    };

    useEffect(() => {
        handleResize(); // Set initial state
        window.addEventListener("resize", handleResize); // Add resize listener
        return () => window.removeEventListener("resize", handleResize); // Cleanup listener
    }, []);

    return (
        <>
            <Head>
                <title>Device Repair Service</title>
                <link href="/path-to-your/favicon.ico" rel="icon" />
            </Head>
            <header className="flex justify-between items-center p-6 bg-pink-100">
                <div className="text-green-600">Logo</div> 
                {!showSteps && (
                    <button
                        className="text-[#005646] focus:outline-none flex text-xl font-bold"
                        aria-label="Menu"
                        onClick={() => setShowCustomMenu(!showCustomMenu)}
                    >
                        See more details 
                        <ChevronDownIcon className=' w-8 h-8 ml-1 -mt-1'/>
                    </button>
                    // <CustomMenu />
                )}
            </header>
            {showCustomMenu && (
                <CustomMenu />
            )}
        </>
    );
};

export default Navbar;
