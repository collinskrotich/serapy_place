"use client";

import Link from "next/link";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* About Section */}
                    <div>
                        <h3 className="text-xl font-semibold text-emerald-400 mb-4">Serapy Place</h3>
                        <p className="text-sm leading-relaxed">
                            At Serapy Place, we prioritize compassion and evidence-based practices to support your journey toward healing and self-discovery.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold text-emerald-400 mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link
                                    href={"/about"}
                                    className="hover:text-emerald-400 transition-colors duration-300"
                                >
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href={"/services"}
                                    className="hover:text-emerald-400 transition-colors duration-300"
                                >
                                    Our Services
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href={"/contact"}
                                    className="hover:text-emerald-400 transition-colors duration-300"
                                >
                                    Contact
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href={"/"}
                                    className="hover:text-emerald-400 transition-colors duration-300"
                                >
                                    Privacy Policy
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Section */}
                    <div>
                        <h3 className="text-lg font-semibold text-emerald-400 mb-4">Contact Us</h3>
                        <ul className="space-y-2 text-sm">
                            <li>Phone: <a href="tel:+1234567890" className="hover:text-emerald-400">020 200 4444</a></li>
                            <li>Email: <a href="mailto:info@serapyplace.com" className="hover:text-emerald-400">help@serapy.co.ke</a></li>
                            <li>Address: Fair Acres, Lang&apos;ata Road</li>
                        </ul>
                    </div>

                    {/* Social Media */}
                    <div>
                        <h3 className="text-lg font-semibold text-emerald-400 mb-4">Follow Us</h3>
                        <div className="flex space-x-4 text-xl">
                            <a
                                href="https://facebook.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-emerald-400 transition-colors duration-300"
                            >
                                <FaFacebook />
                            </a>
                            <a
                                href="https://twitter.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-emerald-400 transition-colors duration-300"
                            >
                                <FaTwitter />
                            </a>
                            <a
                                href="https://instagram.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-emerald-400 transition-colors duration-300"
                            >
                                <FaInstagram />
                            </a>
                            <a
                                href="https://linkedin.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-emerald-400 transition-colors duration-300"
                            >
                                <FaLinkedin />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-gray-700 mt-12"></div>

                {/* Footer Bottom */}
                <div className="mt-6 flex flex-col lg:flex-row items-center justify-between text-sm">
                    <p className="text-gray-400">&copy; {new Date().getFullYear()} Serapy Place. All rights reserved.</p>
                    <p className="mt-4 lg:mt-0">
                        Designed with <span className="text-emerald-400">&hearts;</span> by <Link href={"https://craftduka.com/"}>CraftDuka Digital</Link>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
