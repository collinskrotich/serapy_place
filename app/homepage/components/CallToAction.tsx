"use client";

import Link from "next/link";

const CallToAction = () => {
    return (
        <section className="bg-emerald-50 py-24 px-6 lg:px-16">
            <div className="max-w-7xl mx-auto text-center">
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 leading-tight">
                    Don&apos;t let mental health challenges hold you back from living your best life.
                </h2>
                <p className="mt-4 text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto">
                    Whether you&apos;re struggling with anxiety, depression, trauma, or relationship issues, we&apos;re here to support you every step of the way.
                </p>
                <p className="mt-4 text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto">
                    Take the first step towards healing and schedule an appointment with us today.
                </p>
                <div className="mt-8">
                    <Link href="/contact">
                        <span className="bg-emerald-500 text-white font-semibold text-lg px-6 py-3 rounded-lg shadow-lg hover:bg-emerald-600 transition-all duration-300">
                            Start Your Journey
                        </span>
                    </Link>
                </div>
                <p className="mt-6 text-sm text-gray-500">
                    Your journey to better mental health starts here.
                </p>
            </div>
        </section>
    );
};

export default CallToAction;
