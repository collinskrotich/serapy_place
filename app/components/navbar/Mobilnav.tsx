"use client";

import { navData } from "@/data";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import BookSessionModal from "@/app/Modals/BookSessionModal";

const Mobilenav = () => {
    const [showMobileNav, setShowMobileNav] = useState(false);
    const [navbarBackground, setNavbarBackground] = useState(false);

    // hide/show navbar on click
    const handleClick = () => {
        setShowMobileNav(!showMobileNav);
    };

    // handle link click to close the menu
    const handleLinkClick = () => {
        setShowMobileNav(false);
    };

    // navbar changes color on scroll
    useEffect(() => {
        const handleScroll = () => {
            setNavbarBackground(window.scrollY > 0);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);


    return (
        <section
            className={`lg:hidden md:flex flex items-center justify-between fixed top-0 z-50 w-full py-[1px] transition-colors duration-1000 
                ${navbarBackground ? "bg-bgColor/80 backdrop-blur-md" : "bg-transparent"
                }`}
        >
            <Link href={"/"} className="relative h-16 w-16">
                <Image
                    src={"/logo.png"}
                    alt="site logo"
                    fill
                    sizes="100%"
                    quality={100}
                    priority
                />
            </Link>

            <div
                className={`z-50 transition-all px-2 duration-500 ease-in-out ${showMobileNav ? "text-bgColor" : "text-textColor"
                    }`}
            >
                {!showMobileNav ? (
                    <FaBars size={25} onClick={handleClick} />
                ) : (
                    <IoMdClose size={25} onClick={handleClick} />
                )}
            </div>

            <div
                className={`fixed inset-y-0 right-0 w-full h-screen z-40 bg-textColor/90 flex items-center justify-start px-20 md:px-40 gap-8 transition-transform duration-1000 ease-in-out ${showMobileNav ? "translate-x-0" : "translate-x-full"
                    }`}
            >
                <div className="flex flex-col gap-12 items-start z-20">
                    <div className="flex flex-col gap-4">
                        {navData.map(({ id, title, link }) => (
                            <Link
                                href={link}
                                key={id}
                                className="flex items-center gap-2 text-white hover:text-onHover transition-colors duration-500 ease-in-out"
                                onClick={handleLinkClick}
                            >
                                <h1 className="md:text-xl text-lg">{title}</h1>
                                <IoArrowForwardCircleOutline size={30} />
                            </Link>
                        ))}
                    </div>

                    {/* session button  */}
                    <BookSessionModal />
                </div>
            </div>
        </section>
    );
};

export default Mobilenav;
