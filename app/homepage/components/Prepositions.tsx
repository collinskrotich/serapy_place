"use client";

import Image from "next/image";

const WhyUs = () => {
    const reasons = [
        {
            title: "Personalized Approach",
            description: "We tailor our therapy sessions to address your specific concerns and goals.",
            image: "/images/personalized.png", // Replace with your image path
        },
        {
            title: "Compassionate Care",
            description: "Our team prioritizes empathy and understanding in every interaction.",
            image: "/images/compassion.png", // Replace with your image path
        },
        {
            title: "Evidence-Based Practice",
            description: "We utilize proven therapeutic techniques to promote lasting change and well-being.",
            image: "/images/evidence.png", // Replace with your image path
        },
        {
            title: "Convenient Telehealth Options",
            description: "Access quality care from the comfort of your own home with our secure telehealth services.",
            image: "/images/telehealth.png", // Replace with your image path
        },
        {
            title: "Supportive Group Environment",
            description: "Connect with others facing similar challenges and gain valuable insights through our group therapy sessions.",
            image: "/images/group.png", // Replace with your image path
        },
    ];

    return (
        <section className="py-12 px-4 md:px-8 lg:px-16 bg-gray-50">
            <div className="max-w-7xl mx-auto text-center">
                {/* Section Heading */}
                <h2 className="text-3xl font-extrabold text-gray-800 lg:text-4xl">
                    Why Choose Serapy Place?
                </h2>
                <p className="mt-4 text-base text-gray-600 lg:text-lg max-w-2xl mx-auto">
                    Discover the difference in care that puts you and your well-being first.
                </p>
            </div>

            {/* Reasons Grid */}
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
                {reasons.map((reason, index) => (
                    <div
                        key={index}
                        className="group bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-transform duration-300 transform hover:-translate-y-1 flex flex-col items-center text-center"
                    >
                        {/* Reason Image */}
                        <div className="relative h-16 w-16 mb-4">
                            <Image
                                src={reason.image}
                                alt={reason.title}
                                fill
                                className="object-cover rounded-full transition-transform duration-500 group-hover:scale-110"
                            />
                        </div>

                        {/* Reason Title */}
                        <h3 className="text-lg font-semibold text-gray-800 group-hover:text-emerald-500 transition-colors">
                            {reason.title}
                        </h3>

                        {/* Reason Description */}
                        <p className="mt-2 text-sm text-gray-600">
                            {reason.description}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default WhyUs;
