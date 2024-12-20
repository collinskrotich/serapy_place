"use client";

import CTAButton from "@/app/components/navbar/CTAButton";
import Image from "next/image";

const Services = () => {
    const services = [
        {
            title: "Telehealth Sessions",
            description:
                "Our telehealth services make it easier for you to maintain consistency in therapy, regardless of your schedule or location.",
            image: "/images/telehealth-session.jpg",
        },
        {
            title: "Individual Psychotherapy",
            description:
                "Our core mission is to offer individualized psychotherapy sessions that cater to the unique needs of each client.",
            image: "/images/individual-therapy.jpg",
        },
        {
            title: "Group Sessions",
            description:
                "Group therapy can be an effective way to address specific issues, while also building a sense of community and belonging.",
            image: "/images/group-therapy.jpg",
        },
    ];

    return (
        <section className="py-24 px-4 md:px-8 lg:px-16 bg-gray-50">
            <div className="max-w-7xl mx-auto text-center">
                {/* Section Heading */}
                <h2 className="text-4xl font-extrabold text-gray-800 lg:text-5xl">
                    Explore Our Services
                </h2>
                <p className="mt-4 text-lg text-gray-600 lg:text-xl max-w-2xl mx-auto">
                    Whether you&apos;re looking for individual therapy, group support, or the flexibility of telehealth, we have options designed to meet your unique needs.
                </p>
            </div>

            <div className="mt-12 grid gap-8 md:grid-cols-3">
                {services.map((service, index) => (
                    <div
                        key={index}
                        className="group bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-transform duration-300 transform hover:-translate-y-2 cursor-pointer"
                    >
                        {/* Service Image */}
                        <div className="w-full h-72 relative mb-4 rounded-lg overflow-hidden">
                            <Image
                                src={service.image}
                                alt={`${service.title} image`}
                                fill
                                className="object-cover transition-all opacity-0 duration-700 group-hover:scale-105"
                                onLoad={(event) => {
                                    const image = event.target as HTMLImageElement; 
                                    if (image && image.classList) {
                                        image.classList.remove("opacity-0");
                                    }
                                }}
                            />
                        </div>

                        {/* Service Title */}
                        <h3 className="text-2xl font-semibold text-gray-800 group-hover:text-emerald-500 transition-colors">
                            {service.title}
                        </h3>

                        {/* Service Description */}
                        <p className="mt-4 text-gray-600 leading-relaxed">
                            {service.description}
                        </p>
                    </div>
                ))}
            </div>

            {/* View All Services Link */}
            <div className="mt-12 flex items-center justify-center">
                <CTAButton
                    text="View All Services"
                    href="/services"
                />
            </div>
        </section>
    );
};

export default Services;
