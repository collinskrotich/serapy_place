"use client";

import Image from "next/image";

const About = () => {
    return (
        <section className="bg-gray-50 py-12 px-6 lg:px-16">
            {/* Hero Section */}
            <div className="max-w-7xl mx-auto text-center">
                <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-800">
                    About Serapy Place
                </h1>
                <p className="mt-4 text-lg lg:text-xl text-gray-600">
                    Dedicated to empowering individuals to live their best lives, one session at a time.
                </p>
            </div>

            {/* Content Section */}
            <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
                {/* Text Section */}
                <div className="flex flex-col justify-center">
                    <h2 className="text-3xl font-bold text-gray-800">
                        Our Mission
                    </h2>
                    <p className="mt-4 text-gray-600 leading-relaxed">
                        At Serapy Place, we believe in fostering a compassionate and supportive environment where individuals can embark on a transformative journey to mental well-being.
                    </p>
                    <p className="mt-4 text-gray-600 leading-relaxed">
                        Our team of experienced professionals is dedicated to providing personalized care using evidence-based therapeutic practices. Whether it&apos;s individual sessions, group therapy, or telehealth services, we aim to meet you where you are and guide you toward healing and growth.
                    </p>
                    <div className="mt-8">
                        <a
                            href="/services"
                            className="px-6 py-3 bg-emerald-500 text-white font-semibold rounded-lg shadow-lg hover:bg-emerald-600 focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                        >
                            Explore Our Services
                        </a>
                    </div>
                </div>

                {/* Image Section */}
                <div className="relative w-96 h-96 lg:h-[400px]">
                    <Image
                        src="/images/about.png" 
                        alt="About Serapy Place"
                        fill
                        className="object-cover transition-opacity opacity-0 duration-700"
                        onLoad={(event) => {
                            const image = event.target as HTMLImageElement; 
                            if (image && image.classList) {
                                image.classList.remove("opacity-0");
                            }
                        }}
                    />
                </div>
            </div>

            {/* Core Values Section */}
            <div className="mt-16 max-w-7xl mx-auto">
                <h2 className="text-3xl font-bold text-gray-800 text-center">
                    Our Core Values
                </h2>
                <p className="mt-4 text-lg text-gray-600 text-center">
                    What drives us to deliver exceptional care.
                </p>
                <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {[
                        {
                            title: "Personalized Care",
                            description:
                                "We tailor every session to meet the unique needs and goals of our clients.",
                            icon: "/images/personalized.png",
                        },
                        {
                            title: "Compassionate Support",
                            description:
                                "Empathy and understanding are at the heart of every interaction.",
                            icon: "/images/emotional.png", 
                        },
                        {
                            title: "Evidence-Based Practices",
                            description:
                                "We use proven techniques to ensure effective and lasting outcomes.",
                            icon: "/images/evidence.png", 
                        },
                        {
                            title: "Holistic Approach",
                            description:
                                "We focus on the mind, body, and soul to promote comprehensive healing.",
                            icon: "/images/holistic-approach.png", 
                        },
                        {
                            title: "Inclusivity",
                            description:
                                "We create a safe space for everyone, regardless of background or identity.",
                            icon: "/images/team.png", 
                        },
                        {
                            title: "Accessibility",
                            description:
                                "Our telehealth options make therapy convenient and flexible for all.",
                            icon: "/images/accesibility.png",
                        },
                    ].map((value, index) => (
                        <div
                            key={index}
                            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center"
                        >
                            <div className="relative w-16 h-16 mb-4">
                                <Image
                                    src={value.icon}
                                    alt={value.title}
                                    fill
                                    className="object-contain transition-opacity opacity-0 duration-700"
                                    onLoad={(event) => {
                                        const image = event.target as HTMLImageElement; 
                                        if (image && image.classList) {
                                            image.classList.remove("opacity-0");
                                        }
                                    }}
                                />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-800">
                                {value.title}
                            </h3>
                            <p className="mt-2 text-gray-600">{value.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default About;
