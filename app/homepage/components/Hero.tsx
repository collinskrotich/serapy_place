"use client";

import CTAButton from "@/app/components/navbar/CTAButton";
import { useEffect } from "react";

const Hero = () => {
    // Scroll effect handler
    useEffect(() => {
        const handleScroll = () => {
            document.documentElement.style.setProperty("--scroll", `${window.scrollY}px`);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div className="relative flex flex-col items-center justify-center lg:h-[90vh] h-screen overflow-hidden">
            {/* Parallax Background Image */}
            <div
                className="absolute inset-0 bg-fixed bg-cover bg-center will-change-transform"
                style={{
                    backgroundImage: `url('/images/hero.jpg')`,
                    transform: "translateY(calc(var(--scroll) * 0.3))",
                }}
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/20" />

            {/* Hero Content */}
            <div className="relative z-10 text-center px-4 lg:px-8">
                <h1 className="text-4xl lg:text-6xl font-extrabold text-white leading-tight max-w-3xl mx-auto">
                    A compassionate space for <br />
                    <span className="text-emerald-400">growth</span>, <span className="text-emerald-400">healing</span>, <br />
                    and <span className="text-emerald-400">self-discovery</span>.
                </h1>
                <p className="mt-6 text-lg lg:text-xl text-gray-200 max-w-lg mx-auto">
                    Empowering you to embrace your best self in a supportive environment.
                </p>
            </div>

            {/* Call-to-Action Button */}
            <div className="relative z-10 mt-8">
                <CTAButton href="/about" text="Learn More" />
            </div>
        </div>
    );
};

export default Hero;
