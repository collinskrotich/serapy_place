"use client";

import { useState } from "react";
import { CgClose } from "react-icons/cg";

const BookSessionModal = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        sessionType: "",
        preferredDate: "",
        message: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log(formData);
        // Add form submission logic (e.g., API call)
        setIsOpen(false); // Close modal after submission
    };

    return (
        <div>
            {/* Button to open the modal */}
            <button
                onClick={() => setIsOpen(true)}
                className="px-6 py-2 bg-emerald-500 text-white text-lg font-semibold rounded-lg shadow-lg hover:bg-emerald-600 focus:ring-2 focus:ring-emerald-500 focus:outline-none"
            >
                book a session
            </button>

            {/* Modal */}
            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
                    <div className="bg-white rounded-lg shadow-lg w-[90%] max-w-lg p-8 relative animate-fadeIn">
                        {/* Close Button */}
                        <CgClose  onClick={() => setIsOpen(false)}
                            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 focus:outline-none"/>
                       

                        {/* Modal Heading */}
                        <h2 className="text-2xl font-bold text-gray-800 text-center">
                            Book a Session
                        </h2>
                        <p className="mt-2 text-gray-600 text-center">
                            Take the first step toward better mental health by scheduling a session with us.
                        </p>

                        <form onSubmit={handleSubmit} className="mt-6">
                            {/* Name Field */}
                            <div className="mb-4">
                                <label htmlFor="name" className="block text-gray-700 font-medium mb-1">
                                    Full Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    placeholder="Enter your full name"
                                    className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                                />
                            </div>

                            {/* Email Field */}
                            <div className="mb-4">
                                <label htmlFor="email" className="block text-gray-700 font-medium mb-1">
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    placeholder="Enter your email"
                                    className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                                />
                            </div>

                            {/* Phone Field */}
                            <div className="mb-4">
                                <label htmlFor="phone" className="block text-gray-700 font-medium mb-1">
                                    Phone Number
                                </label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    required
                                    placeholder="Enter your phone number"
                                    className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                                />
                            </div>

                            {/* Session Type Field */}
                            <div className="mb-4">
                                <label htmlFor="sessionType" className="block text-gray-700 font-medium mb-1">
                                    Session Type
                                </label>
                                <select
                                    id="sessionType"
                                    name="sessionType"
                                    value={formData.sessionType}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                                >
                                    <option value="">Select session type</option>
                                    <option value="telehealth">Telehealth Session</option>
                                    <option value="individual">Individual Psychotherapy</option>
                                    <option value="group">Group Session</option>
                                </select>
                            </div>

                            {/* Preferred Date Field */}
                            <div className="mb-4">
                                <label htmlFor="preferredDate" className="block text-gray-700 font-medium mb-1">
                                    Preferred Date
                                </label>
                                <input
                                    type="date"
                                    id="preferredDate"
                                    name="preferredDate"
                                    value={formData.preferredDate}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                                />
                            </div>

                            {/* Message Field */}
                            <div className="mb-6">
                                <label htmlFor="message" className="block text-gray-700 font-medium mb-1">
                                    Additional Message (Optional)
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Let us know anything you’d like us to consider before your session."
                                    className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                                />
                            </div>

                            {/* Submit Button */}
                            <div className="text-center">
                                <button
                                    type="submit"
                                    className="px-6 py-3 bg-emerald-500 text-white text-lg font-semibold rounded-lg shadow-lg hover:bg-emerald-600 focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                                >
                                    Schedule Now
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default BookSessionModal;
