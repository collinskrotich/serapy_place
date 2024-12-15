"use client";

import Image from "next/image";
import OurMission from "./Mission";

const teamMembers = [
    {
        name: "Dr. Emily Carter",
        role: "Clinical Psychologist",
        bio: "Dr. Carter specializes in cognitive-behavioral therapy and has over 10 years of experience helping clients overcome anxiety and depression.",
        image: "/images/dr-emily-carter.jpg", 
    },
    {
        name: "Mr. James O'Neill",
        role: "Licensed Psychotherapist",
        bio: "James is passionate about guiding individuals through trauma recovery and fostering personal growth.",
        image: "/images/james-oneill.jpg", 
    },
    {
        name: "Ms. Sophia Harris",
        role: "Family Therapist",
        bio: "Sophia works closely with families to improve communication and build stronger, healthier relationships.",
        image: "/images/sophia-harris.jpg", 
    },
    {
        name: "Dr. Rachel Nguyen",
        role: "Child and Adolescent Therapist",
        bio: "Rachel is dedicated to helping children and teens navigate life’s challenges with compassion and care.",
        image: "/images/rachel-nguyen.jpg", 
    },
];

const OurTeam = () => {
    return (
        <>
            <section className="py-12 px-6 lg:px-16 bg-gray-50">
                <div className="text-center max-w-4xl mx-auto mb-12">
                    <h2 className="text-4xl font-extrabold text-gray-800 lg:text-5xl">
                        Meet Our Team
                    </h2>
                    <p className="mt-4 text-lg lg:text-xl text-gray-600">
                        At Serapy Place, our team of experienced psychologists and
                        psychotherapists is committed to providing the highest standard of care.
                    </p>
                </div>
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto">
                    {teamMembers.map((member) => (
                        <div
                            key={member.name}
                            className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
                        >
                            <Image
                                src={member.image}
                                alt={`${member.name} photo`}
                                width={300}
                                height={300}
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-6 text-center">
                                <h3 className="text-xl font-semibold text-gray-800">{member.name}</h3>
                                <p className="text-sm text-emerald-500 font-medium">{member.role}</p>
                                <p className="mt-4 text-sm text-gray-600">{member.bio}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
            <OurMission />
        </>
    );
};

export default OurTeam;