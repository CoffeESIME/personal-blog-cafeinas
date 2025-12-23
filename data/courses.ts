// types.ts

export interface Course {
    id: string;
    title: string;
    provider: string; // Plataforma (Coursera, Credly, etc.)
    institution: string; // Universidad o Empresa (Google, AWS, Michigan, etc.)
    description: string;
    skills: string[];
    category: 'AI & Data Science' | 'IoT & Hardware' | 'Full Stack & Web' | 'Cloud & DevOps' | 'Fundamentals' | 'Soft Skills & Others';
    cert_link: string;
    featured: boolean; // true para mostrar en la página de inicio
}

export const courses: Course[] = [
    // ===========================================================================
    // TIER 1: ARTIFICIAL INTELLIGENCE & DATA SCIENCE (Most Valuable Currently)
    // ===========================================================================
    {
        id: "BHTFIL29LPEX",
        title: "Neural Networks and Deep Learning",
        provider: "Coursera",
        institution: "DeepLearning.AI",
        description: "Andrew Ng's foundational course. Mastery of deep neural network architecture, backpropagation, and hyperparameter tuning.",
        skills: ["Deep Learning", "Neural Networks", "Python", "Backpropagation", "Hyperparameter Tuning"],
        category: "AI & Data Science",
        cert_link: "https://www.coursera.org/verify/BHTFIL29LPEX",
        featured: true
    },
    {
        id: "5KWID5UT0W21",
        title: "AI Enhancement with Knowledge Graphs - Mastering RAG Systems",
        provider: "Coursera",
        institution: "Packt",
        description: "Implementation of RAG architectures powered by Knowledge Graphs (Neo4j) and vector databases to improve LLM precision.",
        skills: ["RAG Systems", "Neo4j", "Knowledge Graphs", "GenAI", "Vector Databases"],
        category: "AI & Data Science",
        cert_link: "https://www.coursera.org/account/accomplishments/verify/5KWID5UT0W21",
        featured: true
    },
    {
        id: "UDY2KZFHUFDT",
        title: "Mathematics for Machine Learning: Linear Algebra",
        provider: "Coursera",
        institution: "Imperial College London",
        description: "Applied mathematics for ML: vectors, matrices, eigenvalues, and mapping data to vector spaces.",
        skills: ["Linear Algebra", "Eigenvectors", "Python/Numpy", "ML Mathematics"],
        category: "AI & Data Science",
        cert_link: "https://www.coursera.org/verify/UDY2KZFHUFDT",
        featured: true
    },
    {
        id: "5VFIKR0L6MD",
        title: "Introduction to Data Science in Python",
        provider: "Coursera",
        institution: "University of Michigan",
        description: "Advanced data manipulation with Pandas and NumPy. Data cleaning and statistical analysis of datasets.",
        skills: ["Pandas", "NumPy", "Data Cleaning", "Statistical Analysis"],
        category: "AI & Data Science",
        cert_link: "https://www.coursera.org/verify/5VFIKR0L6MD",
        featured: true
    },
    {
        id: "3Z3LK2328FGV",
        title: "SQL for Data Science",
        provider: "Coursera",
        institution: "University of California, Davis",
        description: "Advanced SQL for filtering, complex joins, and preparing data for analysis.",
        skills: ["SQL", "Data Analysis", "Relational Databases", "Data Science"],
        category: "AI & Data Science",
        cert_link: "https://www.coursera.org/verify/3Z3LK2328FGV",
        featured: true
    },
    {
        id: "EP7STUN6EYR8",
        title: "AI For Everyone",
        provider: "Coursera",
        institution: "DeepLearning.AI",
        description: "Strategic vision of AI, Data Science workflows, and ethics in implementation.",
        skills: ["AI Strategy", "Machine Learning Concepts", "Data Science Workflow"],
        category: "AI & Data Science",
        cert_link: "https://www.coursera.org/verify/EP7STUN6EYR8",
        featured: false
    },
    {
        id: "SYU43U4MUCU7",
        title: "Data Science Math Skills",
        provider: "Coursera",
        institution: "Duke University",
        description: "Mathematical foundations: Set theory, algebra, and Bayesian statistics.",
        skills: ["Bayesian Statistics", "Algebra", "Probability", "Math for ML"],
        category: "AI & Data Science",
        cert_link: "https://www.coursera.org/verify/SYU43U4MUCU7",
        featured: false
    },
    {
        id: "VE4LNDDL5JHE",
        title: "Sixty Years of Artificial Intelligence",
        provider: "Coursera",
        institution: "Universidad Nacional Autónoma de México",
        description: "Historical, ethical, and cognitive perspective on the evolution of AI.",
        skills: ["AI History", "AI Ethics", "Cognitive Science"],
        category: "AI & Data Science",
        cert_link: "https://www.coursera.org/verify/VE4LNDDL5JHE",
        featured: false
    },

    // ===========================================================================
    // TIER 2: IoT, HARDWARE & MANUFACTURING (Physical Differentiator)
    // ===========================================================================
    {
        id: "iot-specialization-uci",
        title: "Introduction to Programming the Internet of Things (IOT) Specialization",
        provider: "Coursera",
        institution: "University of California, Irvine",
        description: "Complete specialization in IoT solution design, from Arduino/C to Raspberry Pi/Python and connectivity.",
        skills: ["IoT Architecture", "Arduino", "Raspberry Pi", "C Programming", "Python"],
        category: "IoT & Hardware",
        cert_link: "https://www.coursera.org/verify/specialization/RNY6GP9LPLC6",
        featured: true
    },
    {
        id: "URKKW6PG7B2R",
        title: "Electrons in Action: Electronics and Arduinos",
        provider: "Coursera",
        institution: "Pontificia Universidad Católica de Chile",
        description: "Practical implementation of circuits and microcontrollers for personal inventions.",
        skills: ["Arduino", "Electronics", "Embedded C", "Prototyping"],
        category: "IoT & Hardware",
        cert_link: "https://www.coursera.org/verify/URKKW6PG7B2R",
        featured: true
    },
    {
        id: "CVWDW3B9DY2G",
        title: "Intro to Digital Manufacturing with Autodesk Fusion 360",
        provider: "Coursera",
        institution: "Autodesk",
        description: "CAD/CAM design for digital manufacturing and casing/part prototyping.",
        skills: ["CAD", "3D Modeling", "Fusion 360", "Digital Manufacturing"],
        category: "IoT & Hardware",
        cert_link: "https://www.coursera.org/verify/CVWDW3B9DY2G",
        featured: true
    },
    {
        id: "Y3DY4GHZGTBH",
        title: "Intelligent Machining",
        provider: "Coursera",
        institution: "University at Buffalo",
        description: "Use of sensors and signal analysis for industrial process monitoring (IIoT).",
        skills: ["Industrial IoT", "Sensors", "Data Acquisition", "Manufacturing Processes"],
        category: "IoT & Hardware",
        cert_link: "https://www.coursera.org/verify/Y3DY4GHZGTBH",
        featured: false
    },
    {
        id: "Y9M8XHBKZ7TK",
        title: "IoT Wireless & Cloud Computing Emerging Technologies",
        provider: "Coursera",
        institution: "Yonsei University",
        description: "Wireless technologies and network protocols for IoT and integration with AWS.",
        skills: ["IoT Protocols", "Wireless Networks", "Cloud Computing", "Network Architecture"],
        category: "IoT & Hardware",
        cert_link: "https://www.coursera.org/verify/Y9M8XHBKZ7TK",
        featured: false
    },
    {
        id: "UPG82FXQ2W7L",
        title: "Introduction to Architecting Smart IoT Devices",
        provider: "Coursera",
        institution: "EIT Digital",
        description: "Hardware and software architecture for smart embedded systems.",
        skills: ["Embedded Systems", "System Architecture", "Smart Devices"],
        category: "IoT & Hardware",
        cert_link: "https://www.coursera.org/verify/UPG82FXQ2W7L",
        featured: false
    },
    {
        id: "5WPKLZRA9REU",
        title: "Automatic Control: The Invisible Technology",
        provider: "Coursera",
        institution: "Universidad Nacional Autónoma de México",
        description: "Mathematical modeling and controller design (PID) for dynamic systems.",
        skills: ["Control Systems", "Automation", "Mathematical Modeling", "PID"],
        category: "IoT & Hardware",
        cert_link: "https://www.coursera.org/verify/5WPKLZRA9REU",
        featured: false
    },

    // ===========================================================================
    // TIER 3: CLOUD & DEVOPS
    // ===========================================================================
    {
        id: "aws-ccp",
        title: "AWS Certified Cloud Practitioner",
        provider: "Credly",
        institution: "Amazon Web Services",
        description: "Foundational certification in cloud computing, security, and architecture on AWS.",
        skills: ["Cloud Computing", "AWS Services", "Cloud Security", "Deployment"],
        category: "Cloud & DevOps",
        cert_link: "https://www.credly.com/badges/0e9ab13a-ad65-4530-8fb5-4a4285027d57/linked_in_profile",
        featured: true
    },
    {
        id: "MF4FGHPKAWSX",
        title: "Introduction to Git and GitHub",
        provider: "Coursera",
        institution: "Google",
        description: "Version control, repository management, and team collaboration.",
        skills: ["Git", "GitHub", "Version Control", "CI/CD Basics"],
        category: "Cloud & DevOps",
        cert_link: "https://www.coursera.org/verify/MF4FGHPKAWSX",
        featured: true
    },

    // ===========================================================================
    // TIER 4: FULL STACK & WEB DEVELOPMENT
    // ===========================================================================
    {
        id: "TBKT66HBN3ZE",
        title: "Server-side Development with NodeJS, Express and MongoDB",
        provider: "Coursera",
        institution: "The Hong Kong University of Science and Technology",
        description: "Robust backend: RESTful APIs, authentication, and NoSQL databases.",
        skills: ["Node.js", "Express", "MongoDB", "REST API", "Authentication"],
        category: "Full Stack & Web",
        cert_link: "https://www.coursera.org/verify/TBKT66HBN3ZE",
        featured: true
    },
    {
        id: "MF4FGHPKAWSX_REACT",
        title: "Front-End Web Development with React",
        provider: "Coursera",
        institution: "The Hong Kong University of Science and Technology",
        description: "Development of reactive SPAs and state management with components.",
        skills: ["React", "JavaScript", "SPA", "UI Components"],
        category: "Full Stack & Web",
        cert_link: "https://www.coursera.org/verify/MF4FGHPKAWSX",
        featured: true
    },
    {
        id: "3B6HPUQCANL6",
        title: "TypeScript Fundamentals",
        provider: "Coursera",
        institution: "Universidad de los Andes",
        description: "Static typing for JavaScript, interfaces, and generics.",
        skills: ["TypeScript", "JavaScript", "Type Safety"],
        category: "Full Stack & Web",
        cert_link: "https://www.coursera.org/verify/3B6HPUQCANL6",
        featured: true
    },
    {
        id: "QYB8MCK9DJH8",
        title: "Using Python to Access Web Data",
        provider: "Coursera",
        institution: "University of Michigan",
        description: "Web Scraping, APIs, and JSON/XML format handling. Vital for RAG.",
        skills: ["Web Scraping", "Python", "REST APIs", "JSON/XML"],
        category: "Full Stack & Web",
        cert_link: "https://www.coursera.org/verify/QYB8MCK9DJH8",
        featured: true
    },
    {
        id: "HM6Q8HXKX6GB",
        title: "Using Databases with Python",
        provider: "Coursera",
        institution: "University of Michigan",
        description: "Data modeling, OOP, and SQL integrated with Python.",
        skills: ["SQL", "Database Design", "Python", "OOP"],
        category: "Full Stack & Web",
        cert_link: "https://www.coursera.org/verify/HM6Q8HXKX6GB",
        featured: false
    },
    {
        id: "UG43YCFDDS8H",
        title: "Front-End Web UI Frameworks and Tools: Bootstrap 4",
        provider: "Coursera",
        institution: "The Hong Kong University of Science and Technology",
        description: "Responsive interface design and grid systems.",
        skills: ["Bootstrap", "Responsive Design", "UI Frameworks", "CSS Grid"],
        category: "Full Stack & Web",
        cert_link: "https://www.coursera.org/verify/UG43YCFDDS8H",
        featured: false
    },
    {
        id: "AEJPGYWFSVA5",
        title: "Advanced Styling with Responsive Design",
        provider: "Coursera",
        institution: "University of Michigan",
        description: "Mobile-First design, Media Queries, and web accessibility.",
        skills: ["CSS3", "Responsive Design", "Accessibility", "UX"],
        category: "Full Stack & Web",
        cert_link: "https://www.coursera.org/verify/AEJPGYWFSVA5",
        featured: false
    },
    {
        id: "F96G8SHDSN5J",
        title: "HTML, CSS, and Javascript for Web Developers",
        provider: "Coursera",
        institution: "Johns Hopkins University",
        description: "Implementation of dynamic web pages from scratch.",
        skills: ["HTML5", "CSS3", "JavaScript", "DOM"],
        category: "Full Stack & Web",
        cert_link: "https://www.coursera.org/verify/F96G8SHDSN5J",
        featured: false
    },
    {
        id: "YVK7HLRS4T9B",
        title: "JavaScript Basics",
        provider: "Coursera",
        institution: "University of California, Davis",
        description: "Language fundamentals: loops, flow control, and logic.",
        skills: ["JavaScript", "Programming Logic", "Web Development"],
        category: "Full Stack & Web",
        cert_link: "https://www.coursera.org/verify/YVK7HLRS4T9B",
        featured: false
    },

    // ===========================================================================
    // TIER 5: ENGINEERING & PROGRAMMING FUNDAMENTALS
    // ===========================================================================
    {
        id: "ZTHHA73PZC35",
        title: "Python Data Structures",
        provider: "Coursera",
        institution: "University of Michigan",
        description: "Essential algorithms: lists, dictionaries, and tuples.",
        skills: ["Data Structures", "Python", "Algorithms"],
        category: "Fundamentals",
        cert_link: "https://www.coursera.org/verify/ZTHHA73PZC35",
        featured: false
    },
    {
        id: "WMGS2NR4SAXP",
        title: "Programming for Everybody (Getting Started with Python)",
        provider: "Coursera",
        institution: "University of Michigan",
        description: "Introduction to programming and Python syntax.",
        skills: ["Python", "Programming Basics", "Computational Thinking"],
        category: "Fundamentals",
        cert_link: "https://www.coursera.org/verify/WMGS2NR4SAXP",
        featured: false
    },
    {
        id: "ME622ZU9WPR2",
        title: "Programming Fundamentals",
        provider: "Coursera",
        institution: "Duke University",
        description: "Algorithmic problem solving and programming in C.",
        skills: ["C Programming", "Algorithms", "Problem Solving"],
        category: "Fundamentals",
        cert_link: "https://www.coursera.org/verify/ME622ZU9WPR2",
        featured: false
    },
    {
        id: "VSNDCBBF8G5K",
        title: "Introduction to Programming with MATLAB",
        provider: "Coursera",
        institution: "Vanderbilt University",
        description: "Scientific programming and signal processing.",
        skills: ["MATLAB", "Scientific Computing", "Data Visualization"],
        category: "Fundamentals",
        cert_link: "https://www.coursera.org/verify/VSNDCBBF8G5K",
        featured: false
    },
    {
        id: "SG4895CEUDD3",
        title: "Exploratory Data Analysis with MATLAB",
        provider: "Coursera",
        institution: "MathWorks",
        description: "Visualization and analysis of large datasets.",
        skills: ["MATLAB", "Data Analysis", "Visualization"],
        category: "Fundamentals",
        cert_link: "https://www.coursera.org/verify/SG4895CEUDD3",
        featured: false
    },
    {
        id: "YDDZUKCT6RBW",
        title: "How to Train Your Electrons 1: Fundamentals",
        provider: "Coursera",
        institution: "Pontificia Universidad Católica de Chile",
        description: "Analog circuits, voltage, current, and passive components.",
        skills: ["Analog Circuits", "Electronics", "Schematics"],
        category: "Fundamentals",
        cert_link: "https://www.coursera.org/verify/YDDZUKCT6RBW",
        featured: false
    },
    {
        id: "DUDBYBTUJ8DW",
        title: "How to Train Your Electrons 2: Diodos y Transistores",
        provider: "Coursera",
        institution: "Pontificia Universidad Católica de Chile",
        description: "Active semiconductors: Diodes and Transistors.",
        skills: ["Semiconductors", "Transistors", "Electronics"],
        category: "Fundamentals",
        cert_link: "https://www.coursera.org/verify/DUDBYBTUJ8DW",
        featured: false
    },
    {
        id: "BZWJJMDQZXUT",
        title: "Introduction to CSS3",
        provider: "Coursera",
        institution: "University of Michigan",
        description: "Web styling and design standards.",
        skills: ["CSS3", "Web Design"],
        category: "Fundamentals",
        cert_link: "https://www.coursera.org/verify/BZWJJMDQZXUT",
        featured: false
    },
    {
        id: "VB5UFSK6JV3W",
        title: "Introduction to HTML5",
        provider: "Coursera",
        institution: "University of Michigan",
        description: "Semantic structure and web accessibility.",
        skills: ["HTML5", "Semantic Web"],
        category: "Fundamentals",
        cert_link: "https://www.coursera.org/verify/VB5UFSK6JV3W",
        featured: false
    },

    // ===========================================================================
    // TIER 6: SOFT SKILLS, HUMANITIES & OTHERS
    // ===========================================================================
    {
        id: "WHFF54NRL8ZR",
        title: "Big History: Connecting Knowledge",
        provider: "Coursera",
        institution: "Macquarie University",
        description: "Systems thinking and multidisciplinary approach.",
        skills: ["Critical Thinking", "Systems Thinking"],
        category: "Soft Skills & Others",
        cert_link: "https://www.coursera.org/verify/WHFF54NRL8ZR",
        featured: false
    },
    {
        id: "DLK6YVYWN7RC",
        title: "Mountains 101",
        provider: "Coursera",
        institution: "University of Alberta",
        description: "Environmental science and geography.",
        skills: ["Environmental Science", "Geography"],
        category: "Soft Skills & Others",
        cert_link: "https://www.coursera.org/verify/DLK6YVYWN7RC",
        featured: false
    },
    {
        id: "3PXD63FS599H",
        title: "The Arts and Science of Relationships",
        provider: "Coursera",
        institution: "University of Toronto",
        description: "Emotional intelligence and understanding of human needs.",
        skills: ["Emotional Intelligence", "Communication", "Teamwork"],
        category: "Soft Skills & Others",
        cert_link: "https://www.coursera.org/verify/3PXD63FS599H",
        featured: false
    },
    {
        id: "XGHR3CDGSPNE",
        title: "Introduction to Sustainability",
        provider: "Coursera",
        institution: "University of Illinois at Urbana-Champaign",
        description: "Sustainable development and resource management.",
        skills: ["Sustainability", "Resource Management"],
        category: "Soft Skills & Others",
        cert_link: "https://www.coursera.org/verify/XGHR3CDGSPNE",
        featured: false
    },
    {
        id: "JTYEYF9U6YGJ",
        title: "The Challenge of Innovation in Higher Education",
        provider: "Coursera",
        institution: "Universidad de Chile",
        description: "Pedagogical innovation strategies.",
        skills: ["Innovation", "Education Strategy"],
        category: "Soft Skills & Others",
        cert_link: "https://www.coursera.org/verify/JTYEYF9U6YGJ",
        featured: false
    }
];