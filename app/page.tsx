'use client'
import CourseCarousel from "@/components/Courses/CourseCarusel";
import { StatusWork } from "@/components/StatusWork/StatusWork";
import { courses } from "@/data/courses";

export default function Home() {
  const isAvailable = true;
  return (
    <main className="mt-16 sm:mt-32 relative px-4 sm:px-8 lg:px-12">
      <div className="max-w-xl">
        <h1 className="sr-only">Fabian Romero</h1>
        <span className="text-2xl font-bold text-neutral-900 dark:text-white">
          Fabian Romero
        </span>
        <br />
        Software Engineer from Mexico
        <br />
        Working on 3PillarGlobal and as Freelance.
        <StatusWork isAvailable={isAvailable}></StatusWork>
      </div>
      <ol className="group/list">
        {/* Job Entries */}
        {/* 1. Software Engineer / Full Stack Developer - 3Pillar Global */}
        <li className="mb-2">
          <div className="group relative p-2 transition-all sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
            <div className="p-2 -inset-y-4 z-0 rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset-0_1px_0_0_rgba(148, 163, 184, 0.1)] lg:group-hover:drop-shadow-lg">
              <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500">
                2022 - Present
              </header>
              <div className="z-10 sm:col-span-6">
                <h3 className="font-medium leading-snug text-slate-200">
                  <div>
                    <div className="inline-flex items-baseline font-medium leading-light text-slate-200 hover:text-teal-300 text-base">
                      <span>
                        Software Engineer / Full Stack Developer
                        <span className="pl-2 inline-block">3Pillar Global</span>
                      </span>
                    </div>
                  </div>
                </h3>
                <p className="mt-2 text-sm leading-normal">
                  Architected and maintained scalable web solutions using modern Full Stack technologies. Focused on infrastructure automation, code quality, and enhancing backend performance for enterprise-level applications.
                </p>
                <ul className="mt-2 ml-4 list-disc list-inside text-sm text-slate-200 space-y-1">
                  <li>
                    Engineered high-performance backend services using NestJS with both RESTful architectures and GraphQL APIs.
                  </li>
                  <li>
                    Modernized legacy infrastructure by implementing Infrastructure as Code (IaC) using Terraform and AWS, significantly reducing deployment times and environmental inconsistencies.
                  </li>
                  <li>
                    Developed and standardized internal component libraries using React, ensuring UI consistency across multiple projects.
                  </li>
                  <li>
                    Optimized CI/CD workflows utilizing Docker, GitHub Actions, and Bitbucket Pipelines to streamline delivery.
                  </li>
                  <li>
                    Led code quality initiatives by integrating SonarQube and Checkmarx, improving test coverage and security standards.
                  </li>
                  <li>
                    Built data-driven dashboards using Next.js and MongoDB to visualize critical business metrics.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </li>

        {/* 2. Freelance Full Stack & IoT Engineer */}
        <li className="mb-2">
          <div className="group relative p-2 transition-all sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
            <div className="p-2 -inset-y-4 z-0 rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset-0_1px_0_0_rgba(148, 163, 184, 0.1)] lg:group-hover:drop-shadow-lg">
              <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500">
                2023 - Present
              </header>
              <div className="z-10 sm:col-span-6">
                <h3 className="font-medium leading-snug text-slate-200">
                  <div>
                    <div className="inline-flex items-baseline font-medium leading-light text-slate-200 hover:text-teal-300 text-base">
                      <span>
                        Freelance Full Stack & IoT Engineer
                        <span className="pl-2 inline-block">Independent Contractor</span>
                      </span>
                    </div>
                  </div>
                </h3>
                <p className="mt-2 text-sm leading-normal">
                  Design and development of end-to-end software solutions, specializing in the intersection of web technologies and Industrial IoT (IIoT).
                </p>
                <ul className="mt-2 ml-4 list-disc list-inside text-sm text-slate-200 space-y-1">
                  <li>
                    Delivering custom web applications for clients utilizing the MERN Stack (MongoDB, Express, React, Node.js) and Python ecosystems.
                  </li>
                  <li>
                    Designing architecture for IoT/IIoT integration, bridging hardware devices with cloud dashboards using protocols like MQTT and Modbus.
                  </li>
                  <li>
                    Deploying and managing personal servers and databases (MySQL, PostgreSQL, Neo4j) for data logging and specialized use cases.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </li>

        {/* 3. Apprentice Software Engineer - 3Pillar Global */}
        <li className="mb-2">
          <div className="group relative p-2 transition-all sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
            <div className="p-2 -inset-y-4 z-0 rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset-0_1px_0_0_rgba(148, 163, 184, 0.1)] lg:group-hover:drop-shadow-lg">
              <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500">
                2021 - 2022
              </header>
              <div className="z-10 sm:col-span-6">
                <h3 className="font-medium leading-snug text-slate-200">
                  <div>
                    <div className="inline-flex items-baseline font-medium leading-light text-slate-200 hover:text-teal-300 text-base">
                      <span>
                        Apprentice Software Engineer
                        <span className="pl-2 inline-block">3Pillar Global</span>
                      </span>
                    </div>
                  </div>
                </h3>
                <p className="mt-2 text-sm leading-normal">
                  Intensive professional development program focused on mastering enterprise-grade software development practices, Full Stack methodologies, and agile collaboration.
                </p>
                <ul className="mt-2 ml-4 list-disc list-inside text-sm text-slate-200 space-y-1">
                  <li>
                    Gained deep proficiency in relational databases (SQL), mastering complex queries, triggers, stored procedures, and transaction management.
                  </li>
                  <li>
                    Collaborated in Agile teams (Scrum) utilizing Jira and Git for version control, actively participating in code reviews and sprint planning.
                  </li>
                  <li>
                    Rapidly adapted to new technologies, delivering functional modules in React Native, Python, and Java within tight deadlines.
                  </li>
                  <li>
                    Built foundational knowledge in cloud services, containerization concepts, and software deployment lifecycles.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </li>

        {/* 4. Support Engineer (IoT Specialist) - Telemetic */}
        <li className="mb-2">
          <div className="group relative p-2 transition-all sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
            <div className="p-2 -inset-y-4 z-0 rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset-0_1px_0_0_rgba(148, 163, 184, 0.1)] lg:group-hover:drop-shadow-lg">
              <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500">
                2020 - 2021
              </header>
              <div className="z-10 sm:col-span-6">
                <h3 className="font-medium leading-snug text-slate-200">
                  <div>
                    <div className="inline-flex items-baseline font-medium leading-light text-slate-200 hover:text-teal-300 text-base">
                      <span>
                        Support Engineer (IoT Specialist)
                        <span className="pl-2 inline-block">Telemetic</span>
                      </span>
                    </div>
                  </div>
                </h3>
                <p className="mt-2 text-sm leading-normal">
                  Spearheaded the development of HMI/SCADA solutions and provided specialized technical support for Industrial IoT ecosystems, ensuring high availability for client operations.
                </p>
                <ul className="mt-2 ml-4 list-disc list-inside text-sm text-slate-200 space-y-1">
                  <li>
                    Developed a real-time web visualization platform (HMI) using PHP, JavaScript, and Node-RED, displaying critical sensor data (tank levels, temperature, gauges) in real-time.
                  </li>
                  <li>
                    Integrated diverse industrial hardware (PLCs, Industrial Radios, GSM Routers) using protocols like Modbus (RTU/TCP), MQTT, and RS-232/485.
                  </li>
                  <li>
                    Managed remote field installations and satellite telemetry connections, ensuring consistent uptime for remote monitoring systems.
                  </li>
                  <li>
                    Authored technical documentation and client guides to facilitate user adoption of new telemetry products and reduce support ticket volume.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </li>

        {/* 5. Technical Instructor (Applied Engineering) - Dartronics */}
        <li className="mb-6">
          <div className="group relative p-2 transition-all sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
            <div className="p-2 -inset-y-4 z-0 rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset-0_1px_0_0_rgba(148, 163, 184, 0.1)] lg:group-hover:drop-shadow-lg">
              <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500">
                2019 - 2022
              </header>
              <div className="z-10 sm:col-span-6">
                <h3 className="font-medium leading-snug text-slate-200">
                  <div>
                    <div className="inline-flex items-baseline font-medium leading-light text-slate-200 hover:text-teal-300 text-base">
                      <span>
                        Technical Instructor (Applied Engineering)
                        <span className="pl-2 inline-block">Dartronics</span>
                      </span>
                    </div>
                  </div>
                </h3>
                <p className="mt-2 text-sm leading-normal">
                  Translated complex engineering concepts into hands-on practical training for students and professionals in the automation field, bridging the gap between theory and industry application.
                </p>
                <ul className="mt-2 ml-4 list-disc list-inside text-sm text-slate-200 space-y-1">
                  <li>
                    <strong>Automation & Control:</strong> Taught advanced PLC programming (Siemens S7-1200, TIA Portal), covering PID control, Ladder Logic, SCL, and industrial simulation using FactoryIO.
                  </li>
                  <li>
                    <strong>Embedded Systems:</strong> Instructed on the design and programming of microcontrollers (Arduino, PIC, Raspberry Pi) for robotics and home automation projects.
                  </li>
                  <li>
                    <strong>Simulation & Design:</strong> Led workshops on MATLAB for mathematical modeling and control design, and SolidWorks for CAD design and prototyping.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </li>

        <CourseCarousel courses={courses} />
      </ol>
    </main>
  );
}
