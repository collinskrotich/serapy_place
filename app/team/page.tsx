"use client";

import Link from "next/link";

const JoinOurTeam = () => {
    return (
        <section className="py-12 px-6 lg:px-16 bg-gray-50">
            {/* Section Header */}
            <div className="max-w-7xl mx-auto text-center">
                <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-800">
                    Join Our Team
                </h1>
                <p className="mt-4 text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto">
                    At Serapy Place, we’re always looking for passionate and compassionate professionals to help us make a difference in the mental health space. If you’re ready to be part of a supportive and dynamic team, we want to hear from you.
                </p>
            </div>

            {/* Team Values Section */}
            <div className="mt-12 grid sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
                <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <h3 className="text-2xl font-semibold text-gray-800">Compassionate Care</h3>
                    <p className="mt-4 text-gray-600 text-center">
                        We prioritize empathy and support, fostering a positive and nurturing environment for both our clients and team members.
                    </p>
                </div>

                <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <h3 className="text-2xl font-semibold text-gray-800">Professional Growth</h3>
                    <p className="mt-4 text-gray-600 text-center">
                        We invest in our team’s growth by offering training, mentorship, and opportunities to develop new skills in the mental health field.
                    </p>
                </div>

                <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <h3 className="text-2xl font-semibold text-gray-800">Collaborative Environment</h3>
                    <p className="mt-4 text-gray-600 text-center">
                        We believe in teamwork and collaboration, where every voice is heard and valued, creating a thriving and inclusive workplace.
                    </p>
                </div>
            </div>

            {/* Job Openings Section */}
            <div className="mt-16 text-center">
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-800">
                    Current Job Openings
                </h2>
                <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                    We’re currently hiring for the following positions. If you’re passionate about making a difference in mental health, apply today!
                </p>

                {/* Available Positions */}
                <div className="mt-8 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <h3 className="text-xl font-semibold text-gray-800">Therapist (Remote)</h3>
                        <p className="mt-4 text-gray-600">
                            We are looking for licensed therapists to join our remote team and provide compassionate care to our clients.
                        </p>
                        <Link
                            href="/careers/therapist"
                            className="mt-4 text-emerald-500 font-semibold hover:underline"
                        >
                            Learn More
                        </Link>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <h3 className="text-xl font-semibold text-gray-800">Administrative Support</h3>
                        <p className="mt-4 text-gray-600">
                            Join our admin team to help manage day-to-day operations, scheduling, and client communications.
                        </p>
                        <Link
                            href="/careers/administrative-support"
                            className="mt-4 text-emerald-500 font-semibold hover:underline"
                        >
                            Learn More
                        </Link>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <h3 className="text-xl font-semibold text-gray-800">Psychiatrist</h3>
                        <p className="mt-4 text-gray-600">
                            We are seeking a compassionate psychiatrist to join our team and provide valuable care to our clients.
                        </p>
                        <Link
                            href="/careers/psychiatrist"
                            className="mt-4 text-emerald-500 font-semibold hover:underline"
                        >
                            Learn More
                        </Link>
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <div className="mt-16 text-center">
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-800">
                    Ready to Join Us?
                </h2>
                <p className="mt-4 text-lg text-gray-600">
                    If you’re passionate about mental health and ready to make an impact, we’d love to have you on our team. Apply now!
                </p>
                <div className="mt-6">
                    <Link
                        href="/careers"
                        className="px-6 py-3 bg-emerald-500 text-white font-semibold rounded-lg shadow-lg hover:bg-emerald-600 focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                    >
                        Apply Now
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default JoinOurTeam;
