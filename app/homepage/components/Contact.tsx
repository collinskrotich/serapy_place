"use client";

import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
    return (
        <section className="bg-gray-50 py-24 px-6 lg:px-16">
            <div className="max-w-7xl mx-auto text-center">
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-800">
                    Get in Touch
                </h2>
                <p className="mt-4 text-lg text-gray-600">
                    We&apos;re here to answer your questions, provide support, and help you take the next step in your journey.
                </p>
            </div>

            <div className="mt-12 grid gap-8 md:grid-cols-3">
                {/* Contact Item: Email */}
                <div className="bg-white p-6 cursor-pointer rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
                    <Mail className="text-emerald-500 w-12 h-12 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-gray-800">Email Us</h3>
                    <p className="mt-2 text-gray-600">info@serapyplace.com</p>
                </div>

                {/* Contact Item: Phone */}
                <div className="bg-white p-6 cursor-pointer rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
                    <Phone className="text-emerald-500 w-12 h-12 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-gray-800">Call Us</h3>
                    <p className="mt-2 text-gray-600">+123 456 7890</p>
                </div>

                {/* Contact Item: Location */}
                <div className="bg-white p-6 cursor-pointer rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
                    <MapPin className="text-emerald-500 w-12 h-12 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-gray-800">Visit Us</h3>
                    <p className="mt-2 text-gray-600">123 Wellness Lane, Mind City</p>
                </div>
            </div>

            {/* Contact Form Button */}
            <div className="mt-12 text-center">
                <a
                    href="/contact"
                    className="inline-block bg-emerald-500 text-white font-semibold text-lg px-6 py-3 rounded-lg shadow-lg hover:bg-emerald-600 transition-all duration-300"
                >
                    Contact Us
                </a>
            </div>
        </section>
    );
};

export default Contact;
