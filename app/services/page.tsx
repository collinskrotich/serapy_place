"use client";

import Link from "next/link";
import ServicesCTA from "./ServicesCTA";
import Image from "next/image";

const services = [
    {
        title: "Telehealth Sessions",
        description: `Understanding the need for flexible and accessible mental health care, Serapy Place offers secure and confidential telehealth sessions. With the convenience of receiving therapy from home or any private space, our virtual sessions ensure that you have the support you need, whenever you need it.`,
        buttonText: "Book Now",
        link: "/book-session",
        image: "/images/telehealth-session.jpg",
    },
    {
        title: "Individual Psychotherapy",
        description: `Our core mission is to offer individualized psychotherapy sessions that cater to the unique needs of each client.

        With a compassionate and understanding approach, our therapists work closely with you to explore underlying issues, develop coping strategies, and foster resilience.`,
        buttonText: "Book Now",
        link: "/book-session",
        image: "/images/individual-therapy.jpg",
    },
    {
        title: "Group Therapy",
        description: `We provide a variety of therapeutic groups. These groups offer a safe and supportive environment for individuals to share experiences, learn from others, and develop new skills.`,
        buttonText: "Book Now",
        link: "/book-session",
        image: "/images/group-therapy.jpg",
    },
    {
        title: "Couples Therapy",
        description: `Couples Therapy creates a secure environment where partners can freely express themselves, strengthen bonds, and resolve conflicts effectively.`,
        buttonText: "Book Now",
        link: "/book-session",
        image: "/images/couple-therapy.jpg",
    },
];

const ServicesPage = () => {
    return (
        <>
            <section className="py-12 px-6 lg:px-16 bg-gray-50">
                <div className="max-w-7xl mx-auto text-center">
                    {/* Section Heading */}
                    <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-800">
                        Our Services
                    </h1>
                    <p className="mt-4 text-lg text-gray-600 lg:text-xl max-w-2xl mx-auto">
                        Explore our range of mental health services designed to support your unique journey.
                    </p>
                </div>

                {/* Services Grid */}
                <div className="mt-12 grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 max-w-7xl mx-auto">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="group cursor-pointer relative flex flex-col bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                        >
                            {/* Service Image */}
                            <div className="relative w-full h-56 overflow-hidden rounded-md">
                                <Image
                                    src={service.image}
                                    alt={service.title}
                                    fill
                                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>

                            {/* Service Content */}
                            <div className="flex-1 flex flex-col mt-4">
                                {/* Service Title */}
                                <h2 className="text-lg font-semibold text-gray-800 group-hover:text-emerald-500 transition-colors duration-300">
                                    {service.title}
                                </h2>

                                {/* Service Description */}
                                <p className="mt-2 text-sm text-gray-600 leading-relaxed line-clamp-3">
                                    {service.description}
                                </p>
                            </div>

                            {/* Call-to-Action Button */}
                            <div className="mt-4">
                                <Link
                                    href={service.link}
                                    className="block w-full text-center bg-emerald-500 text-white text-sm font-medium px-4 py-2 rounded-md shadow hover:bg-emerald-600 focus:ring-2 focus:ring-emerald-500 focus:outline-none transition-all duration-300"
                                >
                                    {service.buttonText}
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
            <ServicesCTA />
        </>
    );
};

export default ServicesPage;
