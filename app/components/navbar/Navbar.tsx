"use client";

import { navData } from "@/data";
import { cn } from "@/utils/cn";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import BookSessionModal from "@/app/Modals/BookSessionModal";

const Navbar = () => {
    const pathname = usePathname();
    const [navbarBackground, setNavbarBackground] = useState(false);

    // Navbar changes color on scroll
    useEffect(() => {
        const handleScroll = () => {
            setNavbarBackground(window.scrollY > 0);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);


    return (
        <section
            className={cn(
                "lg:flex hidden items-center z-50 fixed top-0 left-0 justify-evenly px-4 w-full py-[2px] transition-colors duration-1000",
                navbarBackground ? "bg-white/80 backdrop-blur-md" : "bg-bgColor"
            )}
        >
            {/* Site logo */}
            <Link href={"/"} className="relative h-28 w-28">
                <Image
                    src={"/logo.png"}
                    alt="site logo"
                    fill
                    sizes="100%"
                    quality={100}
                    priority
                />
            </Link>

            {/* Menu links */}
            <div className="flex items-center gap-4 font-normal">
                {navData.map(({ id, title, link }) => {
                    const isActive = pathname === link || pathname.startsWith(`${link}/`);
                    return (
                        <Link
                            href={link}
                            key={id}
                            className={cn(
                                "text-textColor hover:scale-105 duration-700 ease-in-out hover:text-primary",
                                { "text-primary font-semibold": isActive }
                            )}
                        >
                            {title}
                        </Link>
                    );
                })}
            </div>

            {/* book session button */}
            <BookSessionModal />
        </section>
    );
};

export default Navbar;
