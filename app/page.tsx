'use client'
import CourseCarousel from "@/components/Courses/CourseCarusel";
import { type Course } from "@/components/Courses/CourseItem";
import { StatusWork } from "@/components/StatusWork/StatusWork";
const courses: Course[] = [
  {
    id: 4,
    title: "Introduction to Git and GitHub",
    platform: "Google",
    link: "https://coursera.org",
    description: "Grade Achieved: 100%"
  },
  {
    id: 5,
    title: "Node.js Backend Basics with Best Practices",
    platform: "Deprecated Guided Projects",
    link: "https://coursera.org",
    description: "Grade Achieved: 100%"
  },
  {
    id: 7,
    title: "Fundamentos de React Hooks",
    platform: "Coursera Project Network",
    link: "https://coursera.org",
    description: "Grade Achieved: 87.50%"
  },
  {
    id: 8,
    title: "Git for Developers Using Github",
    platform: "Coursera Project Network",
    link: "https://coursera.org",
    description: "Grade Achieved: 90%"
  },
  {
    id: 10,
    title: "Server-side Development with NodeJS, Express and MongoDB",
    platform: "The Hong Kong University of Science and Technology",
    link: "https://coursera.org",
    description: "Grade Achieved: 100%"
  },
  {
    id: 12,
    title: "Front-End Web Development with React",
    platform: "The Hong Kong University of Science and Technology",
    link: "https://coursera.org",
    description: "Grade Achieved: 100%"
  },
  {
    id: 14,
    title: "HTML, CSS, and Javascript for Web Developers",
    platform: "Johns Hopkins University",
    link: "https://coursera.org",
    description: "Grade Achieved: 97.91%"
  },
  {
    id: 15,
    title: "React: Operaciones Básicas CRUD",
    platform: "Coursera Project Network",
    link: "https://coursera.org",
    description: "Grade Achieved: 87.50%"
  },
  {
    id: 16,
    title: "Cómo entrenar a tus electrones 2: Diodos y Transistores",
    platform: "Pontificia Universidad Católica de Chile",
    link: "https://coursera.org",
    description: "Grade Achieved: 96.22%"
  },
  {
    id: 17,
    title: "Build Your First React Website",
    platform: "Coursera Project Network",
    link: "https://coursera.org",
    description: "Grade Achieved: 90%"
  },
  {
    id: 18,
    title: "Front-End Web UI Frameworks and Tools: Bootstrap 4",
    platform: "The Hong Kong University of Science and Technology",
    link: "https://coursera.org",
    description: "Grade Achieved: 100%"
  },
  {
    id: 19,
    title: "Cómo entrenar a tus electrones 1: Fundamentos de la electrónica analógica",
    platform: "Pontificia Universidad Católica de Chile",
    link: "https://coursera.org",
    description: "Grade Achieved: 91.40%"
  },
  {
    "id": 101,
    "title": "Full-Stack Web Development with React",
    "platform": "The Hong Kong University of Science and Technology",
    "link": "https://coursera.org/specialization/fullstack-react",
    "description": "Specialization in full-stack development using React."
  },
  {
    "id": 102,
    "title": "An Introduction to Programming the Internet of Things (IOT)",
    "platform": "University of California, Irvine",
    "link": "https://coursera.org/specialization/iot",
    "description": "Learn to develop and apply IOT solutions in real-world scenarios."
  },

  {
    "id": 104,
    "title": "Introduction to Embedded Machine Learning",
    "platform": "Edge Impulse",
    "link": "https://edgeimpulse.com/course/embedded-ml",
    "description": "Introduction to machine learning techniques on embedded systems."
  },
  {
    "id": 105,
    "title": "Advanced Styling with Responsive Design",
    "platform": "University of Michigan",
    "link": "https://coursera.org/course/advanced-css",
    "description": "Master advanced CSS styling techniques including responsive design."
  },
  {
    "id": 106,
    "title": "Aprendiendo a hacer API con Node.JS",
    "platform": "Deprecated Guided Projects",
    "link": "https://coursera.org/project/nodejs-api",
    "description": "Learn to develop APIs using Node.JS."
  },
  {
    "id": 107,
    "title": "Fundamentos de TypeScript",
    "platform": "Universidad de los Andes",
    "link": "https://coursera.org/course/typescript",
    "description": "Fundamentals of TypeScript for scalable web applications."
  },
  {
    "id": 108,
    "title": "Introduction to Architecting Smart IoT Devices",
    "platform": "EIT Digital",
    "link": "https://coursera.org/course/smart-iot",
    "description": "Learn to design and implement smart IoT devices."
  },
  {
    "id": 1012,
    "title": "Mountains 101",
    "platform": "University of Alberta",
    "link": "https://coursera.org/course/mountains-101",
    "description": "Comprehensive overview of mountain environments and their role in the ecosystem."
  }
]
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
        {/* Other Job Entries */}
        <li className="mb-2">
          <div className="group relative p-2 transition-all sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
            <div className="p-2 -inset-y-4 z-0  rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset-0_1px_0_0_rgba(148, 163, 184, 0.1)] lg:group-hover:drop-shadow-lg">
              <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500">
                2022 - Present
              </header>
              <div className="z-10 sm:col-span-6">
                <h3 className="font-medium leading-snug text-slate-200">
                  <div>
                    <div className="inline-flex items-baseline font-medium leading-light text-slate-200 hover:text-teal-300 text-base">
                      <span>
                        Software Engineer, Fullstack Developer
                        <span className="pl-2 inline-block">3PillarGlobal</span>
                      </span>
                    </div>
                  </div>
                </h3>
                <p className="mt-2 text-sm leading-normal">
                  I have worked on various web development projects, focusing on both frontend and backend technologies, as well as infrastructure and DevOps.
                </p>
                <ul className="mt-2 ml-4 list-disc list-inside text-sm text-slate-200 space-y-1">
                  <li>
                    Developed an internal project management system using Next.js, Tailwind, Node.js, Express, and MongoDB.
                  </li>
                  <li>
                    Integrated SonarQube for continuous code quality checks.
                  </li>
                  <li>
                    Worked on a Python and Django-based project, utilizing Swagger for API documentation.
                  </li>
                  <li>
                    Contributed to the app infrastructure using AWS and Terraform, handling DevOps tasks with Docker, GitHub Actions, and Bitbucket Pipelines.
                  </li>
                  <li>
                    Gained experience with Linux, Apache, and Nginx servers.
                  </li>
                  <li>
                    Re-engaged with React, writing tests for both frontend and backend, and used Checkmarx for code analysis.
                  </li>
                  <li>
                    Developed backend services using NestJS with GraphQL and frontend applications using React, SQL (PostgreSQL), CSS, and Material-UI.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </li>

        <li className="mb-2">
          <div className="group relative p-2 transition-all sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
            <div className="p-2 -inset-y-4 z-0 rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset-0_1px_0_0_rgba(148, 163, 184, 0.1)] lg:group-hover:drop-shadow-lg">
              <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500">
                2021 - 2023
              </header>
              <div className="z-10 sm:col-span-6">
                <h3 className="font-medium leading-snug text-slate-200">
                  <div>
                    <div className="inline-flex items-baseline font-medium leading-light text-slate-200 hover:text-teal-300 text-base">
                      <span>
                        Apprentice Software Engineer
                        <span className="pl-2 inline-block">3PillarGlobal</span>
                      </span>
                    </div>
                  </div>
                </h3>
                <p className="mt-2 text-sm leading-normal">
                  During my time as an Apprentice Software Engineer, I was focused on
                  building a solid foundation in SQL and various technologies to
                  prepare for a full-fledged software engineering role.
                </p>
                <ul className="mt-2 ml-4 list-disc list-inside text-sm text-slate-200 space-y-1">
                  <li>
                    Gained proficiency in SQL, including basic queries, joins,
                    triggers, table views, transactions, and functions.
                  </li>
                  <li>
                    Completed introductory courses in React, Node.js, Java, Git, React
                    Native, and Python, expanding my understanding of full-stack
                    development.
                  </li>
                  <li>
                    Learned team collaboration tools and methodologies, including
                    Git for version control and Jira for project management.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </li>

        <li className="mb-2">
          <div className="group relative p-2 transition-all sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
            <div className="p-2 -inset-y-4 z-0  rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset-0_1px_0_0_rgba(148, 163, 184, 0.1)] lg:group-hover:drop-shadow-lg">
              <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500">
                2020 - 2021
              </header>
              <div className="z-10 sm:col-span-6">
                <h3 className="font-medium leading-snug text-slate-200">
                  <div>
                    <div className="inline-flex items-baseline font-medium leading-light text-slate-200 hover:text-teal-300 text-base">
                      <span>
                        Support Engineer
                        <span className="pl-2 inline-block">Telemetic</span>
                      </span>
                    </div>
                  </div>
                </h3>
                <p className="mt-2 text-sm leading-normal">
                  As a Support Engineer, I focused on telematics and IoT/IIoT
                  solutions. My responsibilities included developing an HMI/SCADA
                  application, where I integrated various devices through technologies
                  such as Node-RED, MQTT, Webserver, TCP/IP, RS-232, and Modbus.
                </p>
                <ul className="mt-2 ml-4 list-disc list-inside text-sm text-slate-200 space-y-1">
                  <li>
                    Connected IoT devices including industrial radios, Exemys GRD,
                    FreeWave radios, and GSM routers.
                  </li>
                  <li>
                    Supported remote installations, including satellite connection
                    antennas and other field equipment.
                  </li>
                  <li>
                    Developed a web application using HTML, CSS, JavaScript, and PHP,
                    displaying connection status, animations (e.g., tank levels,
                    thermometers, gauges), graphs, and allowed for sensor data download.
                  </li>
                  <li>
                    Conducted equipment testing, provided technical documentation for
                    clients, and offered product information to aid in sales.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </li>
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
                        Applied Engineering Instructor
                        <span className="pl-2 inline-block">Dartronics</span>
                      </span>
                    </div>
                  </div>
                </h3>
                <p className="mt-2 text-sm leading-normal">
                  As a Technical Instructor, I specialized in delivering
                  hands-on courses focused on practical applications of
                  engineering principles. My teaching portfolio includes:
                </p>
                <ul className="mt-2 ml-4 list-disc list-inside text-sm text-slate-200 space-y-1">
                  <li>
                    <strong>PLC Programming and Automation:</strong> Provided
                    comprehensive training on Siemens S7-1200 with TIA Portal,
                    covering basic configuration, PID control, ladder logic,
                    block diagram programming, and an introduction to Structured
                    Control Language (SCL). I also utilized FactoryIO for
                    simulating industrial automation scenarios.
                  </li>
                  <li>
                    <strong>Microcontrollers and Embedded Systems:</strong> Taught
                    the use of PIC microcontrollers, Arduino, and Raspberry Pi
                    for various automation and control projects, guiding students
                    through the process of designing and implementing embedded
                    systems.
                  </li>
                  <li>
                    <strong>Simulation and Design Software:</strong> Conducted
                    courses in MATLAB for system modeling and control design, and
                    SolidWorks for CAD, enhancing students&apos; ability to simulate
                    and visualize engineering projects.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </li>

        <CourseCarousel courses={courses} />
        {/* Other Job Entries */}
      </ol>
    </main>
  );
}
