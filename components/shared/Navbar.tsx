import Head from 'next/head';
import React from 'react';

const Navbar: React.FC = () => {
    return (
        <>
        <Head>
            <title>Device Repair Service</title>
            <link href="/path-to-your/favicon.ico" rel="icon" />
        </Head>
            <header className="flex justify-between items-center p-6 bg-pink-100">
                <div className="text-green-600">Logo</div>
                <h1 className="text-2xl font-bold">Repair</h1>
            </header>
        </>
    );
};

export default Navbar;
