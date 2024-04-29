"use client"
import type { NextPage } from 'next';
import Head from 'next/head';
import { useState } from 'react';

const Home: NextPage = () => {
    const [device, setDevice] = useState('');
    const [address, setAddress] = useState('');

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        // handle the submission logic
    };

    return (
        <>

            <div className="flex flex-col h-screen justify-between">
                <header className="flex justify-between items-center p-6 bg-pink-100">
                    <div className="text-green-600">Logo</div>
                    <h1 className="text-2xl font-bold">Repair</h1>
                </header>

                <main className="px-6 py-4">
                    <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white p-6 shadow rounded">
                        <div className="mb-4">
                            <label htmlFor="device" className="block text-sm font-medium text-gray-700">
                                Device to be repaired
                            </label>
                            <select
                                id="device"
                                value={device}
                                onChange={(e) => setDevice(e.target.value)}
                                className="mt-1 block w-full pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                            >
                                <option>Select a device...</option>
                                <option value="smartphone">Smartphone</option>
                                <option value="laptop">Laptop</option>
                                <option value="tablet">Tablet</option>
                            </select>
                        </div>

                        <div className="mb-4">
                            <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                                Enter your address
                            </label>
                            <input
                                type="text"
                                id="address"
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                                className="mt-1 block w-full shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 border border-gray-300 rounded-md"
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition-colors duration-200"
                        >
                            Make an appointment
                        </button>

                        <div className="mt-4 p-4 border-dashed border-2 border-gray-200 rounded text-center">
                            <p className="text-sm text-gray-600">Up to €50 per device repaired with the Repair Bonus!</p>
                        </div>
                    </form>
                </main>

            </div>
        </>
    );
};

export default Home;
