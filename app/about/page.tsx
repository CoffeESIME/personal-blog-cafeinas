'use client'
import React from "react";
import Image from "next/image";
import Profile from "../../public/profile.jpg";
import ChangingText from "@/components/utils/ChangingText";
import phrases from '../../data/phrases.json'
import Balancer from "react-wrap-balancer";
import { Reviews } from "@/components/Reviews/Reviews";
function AboutPage() {
  return (
    <div className="sm:px-8 mt-16 sm:mt-32">
      <div className="mx-auto max-w-7xl lg:px-8">
        <div className="relative px-4 sm:px-8 lg:px-12">
          <div className="max-w-full mx-auto">
            <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
              <div className="lg:pl-20">
                <div className="max-w-xs px-2.5 lg:max-w-none">
                  <div className="relative overflow-hidden group">
                    <Image
                      src={Profile}
                      alt="Profile"
                      className="object-cover aspect-square rounded-2xl bg-zinc-100 dark:bg-zinc-800 "
                      width={0}
                      height={0}
                    />
                  </div>
                </div>

              </div>
              <div className="lg:order-first lg:row-span-2">
                <h1 className="title-primary">
                  <Balancer>
                    G&apos;day, I&apos;m Fabian!
                  </Balancer>
                </h1>
                <div className="mt-6 text-base space-y-7 body-secondary">
                  <p>
                    I&apos;m a Control and Automation engineer, turned Developer
                  </p>
                  <div className="flex">
                    and a &nbsp; &nbsp;<ChangingText phrases={phrases} />
                  </div>
                  <p>
                    I&apos;m a  software engineer with a background in
                    control and automation engineering. I&apos;m passionate about developing
                    innovative applications, exploring new technologies, and diving into
                    areas like IoT, machine learning, and data structures.
                  </p>
                  <p className="mt-2">
                    Beyond programming, my interests are diverse. I am an avid reader,
                    nature enthusiast, and enjoy activities such as hiking, bird
                    watching, and origami. I find great joy in capturing the beauty of
                    nature through photography during my hikes.
                  </p>
                </div>
              </div>
            </div>
            <Reviews/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
