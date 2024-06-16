import React from 'react';
import Image from "next/image";
import Profile from '../../public/profile.jpg'
function AboutPage() {
    return (
        <div className="container mx-auto px-4 py-8">
            <div className="flex flex-col md:flex-row items-center gap-8">
                <Image src={Profile} alt="Profile" className="w-48 h-48 rounded-full border-4 border-blue-500" width={0} height={0}/>
                <div>
                    <h1 className="text-2xl font-bold text-blue-800">About Me</h1>
                    <p className="mt-4 text-gray-700">
                        Hi, I'm Fabian, a dedicated software engineer with a background in control and automation engineering. I'm passionate about developing innovative applications, exploring new technologies, and diving into areas like IoT, machine learning, and data structures.
                    </p>
                    <p className="mt-2 text-gray-700">
                        Beyond programming, my interests are diverse. I am an avid reader, nature enthusiast, and enjoy activities such as hiking, bird watching, and origami. I find great joy in capturing the beauty of nature through photography during my hikes.
                    </p>
                    <div className="mt-4">
                        <h2 className="text-xl font-semibold text-blue-700">Skills</h2>
                        <ul className="list-disc list-inside">
                            <li>JavaScript & Python</li>
                            <li>React, Next.js</li>
                            <li>IoT and Automation Systems</li>
                            <li>Web Scraping & API Development</li>
                            <li>User Interface Design and UX Principles</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutPage;
