"use client";

import Image from "next/image";

const Health = () => {
    return (
        <section className="flex flex-col items-center justify-center mx-auto py-24 px-4 md:px-8 lg:px-16">
            <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-8 max-w-7xl">
                {/* Text Content */}
                <div className="flex flex-col items-start gap-6 text-left md:w-1/2">
                    <h2 className="text-4xl font-extrabold leading-tight text-gray-800 lg:text-5xl">
                        Compassionate Care for Your Healing Journey
                    </h2>
                    <p className="text-gray-600 leading-relaxed lg:text-lg text-base">
                        At <span className="font-semibold text-emerald-500">Serapy Place</span>, we believe in creating a safe and nurturing environment where your healing journey begins.
                        Our range of <span className="font-semibold">personalized psychotherapy services</span> is thoughtfully crafted to meet your unique needs and aspirations.
                        <br /><br />
                        With a team of experienced psychologists and psychotherapists, we combine compassionate care with evidence-based practices to help you navigate life’s challenges. Together, we’ll work towards fostering resilience, personal growth, and a deeper sense of well-being.
                    </p>
                </div>

                {/* Image */}
                <div className="relative h-72 w-[80vw] md:w-1/3 lg:h-96">
                    <Image
                        src="/images/health.png"
                        alt="Mental health illustration"
                        fill
                        className="object-cover transition-opacity opacity-0 duration-1000"
                        priority
                        onLoad={(event) => {
                            const image = event.target as HTMLImageElement; 
                            if (image && image.classList) {
                                image.classList.remove("opacity-0");
                            }
                        }}
                    />
                </div>
            </div>
        </section>
    );
};

export default Health;
