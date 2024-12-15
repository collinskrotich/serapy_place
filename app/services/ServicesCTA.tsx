"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";

const ServicesCTA = () => {
    return (
        <section className="py-12 px-6 lg:px-16 bg-gray-50 text-center">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-4xl font-extrabold text-gray-800 lg:text-5xl">
                    Take the First Step Towards Healing
                </h2>
                <p className="mt-6 text-lg lg:text-xl text-gray-600">
                    At Serapy Place, we believe in empowering you to overcome life’s
                    challenges with compassionate care and proven therapeutic practices.
                    Don’t wait to start your journey to a healthier, happier you.
                </p>
                <div className="mt-8">
                    <Link
                        href="/book-session"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-500 text-white font-semibold rounded-md shadow-md hover:bg-emerald-600 hover:shadow-lg transition-all duration-300"
                    >
                        Book a Session
                        <ArrowRight />
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default ServicesCTA;
