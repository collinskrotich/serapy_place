"use client";

const OurMission = () => {
    return (
        <section className="py-24 px-6 lg:px-16 bg-emerald-50">
            <div className="max-w-7xl mx-auto text-center">
                <h2 className="text-4xl font-extrabold text-gray-800 lg:text-5xl">
                    Our Mission
                </h2>
                <p className="mt-4 text-lg lg:text-xl text-gray-700 max-w-3xl mx-auto">
                    At Serapy Place, we are dedicated to fostering growth, healing, and self-discovery through personalized and compassionate care.
                    Our mission is to create a safe space where every individual feels valued and supported on their mental health journey.
                </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mt-12 max-w-7xl mx-auto">
                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                    <h3 className="text-xl font-semibold text-gray-800">
                        Compassionate Care
                    </h3>
                    <p className="mt-4 text-gray-600">
                        We prioritize empathy and understanding in every interaction, ensuring a nurturing environment for healing.
                    </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                    <h3 className="text-xl font-semibold text-gray-800">
                        Evidence-Based Practices
                    </h3>
                    <p className="mt-4 text-gray-600">
                        Our therapeutic methods are rooted in proven techniques to promote lasting change and well-being.
                    </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                    <h3 className="text-xl font-semibold text-gray-800">
                        Community Support
                    </h3>
                    <p className="mt-4 text-gray-600">
                        We foster a sense of belonging by encouraging connections and mutual support through group therapy and resources.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default OurMission;
