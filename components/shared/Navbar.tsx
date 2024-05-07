"use client";
import Head from "next/head";
import React, { useEffect, useState } from "react";
import Stepper from "../Example";
import CustomMenu from "../atoms/CustomMenu";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

const Navbar: React.FC = () => {
  const [showCustomMenu, setShowCustomMenu] = useState<boolean>(false);

  return (
    <>
      <Head>
        <title>Device Repair Service</title>
        <link href="/path-to-your/favicon.ico" rel="icon" />
      </Head>
      <header className="flex justify-between items-center p-6 bg-pink-100">
        <div className="text-green-600">Logo</div>

        <button
          className="flex md:hidden text-[#005646] focus:outline-none text-xl font-bold"
          aria-label="Menu"
          onClick={() => setShowCustomMenu(!showCustomMenu)}
        >
          See more details
          <ChevronDownIcon className=" w-8 h-8 ml-1 -mt-1" />
        </button>
      </header>
      {showCustomMenu && <CustomMenu />}
    </>
  );
};

export default Navbar;
