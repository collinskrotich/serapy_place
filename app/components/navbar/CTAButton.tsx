import { ArrowBigRight } from "lucide-react";
import Link from "next/link";

interface CTAButtonProps {
    text: string;
    href: string;
}

const CTAButton: React.FC<CTAButtonProps> = ({ text, href }) => {
    return (
        <Link
            href={href}
            className="flex items-center gap-1 group bg-ctaButtons  hover:drop-shadow-lg text-white font-medium hover:rounded-[8px] rounded-[5px] transition-colors duration-300 ease-in-out py-2 px-4"
        >
            <span>{text}</span>
            <ArrowBigRight className="font-medium group-hover:translate-x-1 transition-transform ease-linear duration-300" />
        </Link>
    );
};

export default CTAButton;
