'use client'
import React from "react";
import Image from "next/image";
import Profile from "../../public/profile.jpg";
import ChangingText from "@/components/utils/ChangingText";
import phrases from '../../data/phrases.json'
import SkillsSection from "@/components/Skills";
function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div>
        <h2 className="text-2xl font-bold text-blue-800">G&apos;day, I&apos;m Fabian!</h2>
        <h2 className="text-2xl font-bold text-blue-800">I&apos;m a control and automation engineer, turned Developer</h2>
        <h2 className="text-2xl font-bold text-blue-800  flex">and a &nbsp;<ChangingText phrases={phrases} /></h2>
      </div>
      <div className="flex flex-col md:flex-row items-center gap-8">
        <Image
          src={Profile}
          alt="Profile"
          className="w-48 h-48 rounded-full "
          width={0}
          height={0}
        />
        <div>
          <h1 className="text-2xl font-bold text-blue-800">Who is Fabian?</h1>
          <p className="mt-4 text-gray-700">
            I&apos;m a  software engineer with a background in
            control and automation engineering. I&apos;m passionate about developing
            innovative applications, exploring new technologies, and diving into
            areas like IoT, machine learning, and data structures.
          </p>
          <p className="mt-2 text-gray-700">
            Beyond programming, my interests are diverse. I am an avid reader,
            nature enthusiast, and enjoy activities such as hiking, bird
            watching, and origami. I find great joy in capturing the beauty of
            nature through photography during my hikes.
          </p>
          <div className="mt-4">
            <h2 className="text-2xl font-semibold text-blue-700">Skills & toolbox</h2>
            <SkillsSection />
          </div>
          <div className="mt-4"><h2 className="text-2xl font-semibold text-blue-700">Currently learning:</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
