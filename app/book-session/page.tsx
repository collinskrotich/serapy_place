"use client";

import { useState } from "react";
import Image from "next/image";
import Modal from "../components/Modal";

const BookSessionPage = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <div className="bg-gradient-to-br from-emerald-100 to-emerald-50 min-h-screen flex items-center justify-center py-12">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 px-4 lg:px-8">
                {/* Text Content */}
                <div className="text-center lg:text-left flex-1">
                    <h1 className="text-5xl lg:text-6xl font-extrabold text-gray-800 leading-tight mb-6">
                        Transform Your Life<br />
                        <span className="text-emerald-600">Book Your Session</span>
                    </h1>
                    <p className="text-lg lg:text-xl text-gray-600 mb-8">
                        Begin your journey toward better mental health. With options for individual
                        therapy, group support, and telehealth sessions, we&apos;re here to guide you.
                        Book today and take the first step.
                    </p>
                    <button
                        onClick={openModal}
                        className="px-8 py-3 bg-emerald-600 text-white font-semibold text-lg rounded-full shadow-lg hover:bg-emerald-500 transition-transform transform hover:scale-105 duration-300"
                    >
                        Book a Session
                    </button>
                </div>

                {/* Image */}
                <div className="relative w-full lg:w-1/2 h-80 lg:h-[500px] overflow-hidden rounded-xl shadow-lg">
                    <Image
                        src="/images/book-session.jpg" 
                        alt="Therapy Session"
                        layout="fill"
                        className="object-cover scale-105 hover:scale-100 transition-all duration-700 opacity-0"
                        onLoad={(event) => {
                            const image = event.target as HTMLImageElement; 
                            if (image && image.classList) {
                                image.classList.remove("opacity-0");
                            }
                        }}
                    />
                </div>
            </div>

            {/* Modal Component */}
            {isModalOpen && (
                <Modal onClose={closeModal}>
                    <div className="p-6">
                        <h2 className="text-3xl font-bold text-gray-800 mb-4">Schedule Your Session</h2>
                        <p className="text-gray-600 mb-4">
                            Fill out the form below to book your session with us. We look forward to supporting you.
                        </p>
                        <form className="grid gap-6">
                            <div>
                                <label htmlFor="name" className="block text-gray-700 font-medium">
                                    Full Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    className="mt-1 w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                                    placeholder="Enter your name"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-gray-700 font-medium">
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    className="mt-1 w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                                    placeholder="Enter your email"
                                />
                            </div>
                            <div>
                                <label htmlFor="service" className="block text-gray-700 font-medium">
                                    Select Service
                                </label>
                                <select
                                    id="service"
                                    className="mt-1 w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                                >
                                    <option value="">Choose a service</option>
                                    <option value="individual">Individual Psychotherapy</option>
                                    <option value="group">Group Therapy</option>
                                    <option value="telehealth">Telehealth Sessions</option>
                                    <option value="couples">Couples Therapy</option>
                                </select>
                            </div>
                            <div>
                                <label htmlFor="date" className="block text-gray-700 font-medium">
                                    Preferred Date & Time
                                </label>
                                <input
                                    type="datetime-local"
                                    id="date"
                                    className="mt-1 w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                                />
                            </div>
                            <button
                                type="submit"
                                className="px-6 py-3 bg-emerald-600 text-white font-semibold text-lg rounded-full shadow-lg hover:bg-emerald-500 transition-transform transform hover:scale-105 duration-300"
                            >
                                Confirm Booking
                            </button>
                        </form>
                    </div>
                </Modal>
            )}
        </div>
    );
};

export default BookSessionPage;
