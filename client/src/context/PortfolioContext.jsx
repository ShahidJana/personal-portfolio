import { createContext, useContext, useState, useEffect } from 'react';
import { FiGithub, FiMail, FiLinkedin, FiPhone } from 'react-icons/fi';
import {
    SiReact,
    SiNodedotjs,
    SiNextdotjs,
    SiExpress,
    SiMongodb,
    SiJavascript,
    SiTypescript,
    SiHtml5,
    SiCss3,
    SiTailwindcss,
    SiGit
} from 'react-icons/si';
import profileImg from '../assets/images/hero-bg.png';


const PortfolioContext = createContext();

export const usePortfolio = () => {
    const context = useContext(PortfolioContext);
    if (!context) {
        throw new Error('usePortfolio must be used within PortfolioProvider');
    }
    return context;
};

export const PortfolioProvider = ({ children }) => {
    const [theme, setTheme] = useState('dark');
    const [isLoading, setIsLoading] = useState(false);
    const [activeSection, setActiveSection] = useState('home');
    const [title, setTitle] = useState('Full');
    const [isDeleting, setIsDeleting] = useState(false);
    const [loopNum, setLoopNum] = useState(0);
    const [typingSpeed, setTypingSpeed] = useState(100);

    useEffect(() => {
        const phrases = ['Full Stack Dev', 'MERN Stack Dev'];
        const i = loopNum % phrases.length;
        const fullText = phrases[i];

        const handleTyping = () => {
            if (!isDeleting && title === fullText) {
                setTypingSpeed(2000);
                setIsDeleting(true);
            } else if (isDeleting && title === '') {
                setIsDeleting(false);
                setLoopNum(loopNum + 1);
                setTypingSpeed(1000);
            } else {
                setTitle(fullText.substring(0, isDeleting ? title.length - 1 : title.length + 1));
                setTypingSpeed(isDeleting ? 50 : 200);
            }
        };

        const timer = setTimeout(handleTyping, typingSpeed);
        return () => clearTimeout(timer);
    }, [title, isDeleting, loopNum, typingSpeed]);

    // Portfolio Data
    const portfolioData = {
        personal: {
            name: 'Shahid Hussain',
            title: title,
            github: 'https://github.com/shahidjana',
            email: "janashahid999@gmail.com",
            phone: '+92 3339571763',
            summary: 'MERN Stack Developer with over a year of hands-on experience designing, building, and deploying full-stack web applications. Proficient in React.js, Next.js, Node.js, Express.js, and MongoDB, with strong skills in RESTful API design, authentication, state management, and responsive UI development. Experienced in working independently in remote settings, delivering production features, and collaborating through Git-based workflows. Focused on writing clean, maintainable code and building scalable, user-focused applications.',
            about: 'I build modern, responsive web applications with a strong focus on clean code and real-world usability. With over a year of hands-on experience in the MERN stack, I\'ve developed skills in creating user-friendly interfaces and implementing efficient backend logic. I\'m driven to turn ideas into scalable solutions and continuously grow as a full-stack software developer.'

        },

        stats: [
            { label: 'PROJECTS', value: '3+' },
            { label: 'TECHNOLOGIES', value: '10+' },
            { label: 'COMMITMENTS', value: '100%' }
        ],

        socialLinks: [
            { icon: <FiLinkedin />, path: "https://www.linkedin.com/in/shahid-hussain-0953012a6", label: 'Linkedin', color: 'text-[#0077B5]' },
            { icon: <FiGithub />, path: "https://github.com/shahidjana", label: 'GitHub', color: 'text-white' },
            { icon: <FiMail />, path: "mailto:janashahid999@gmail.com", label: 'Email', color: 'text-[#EA4335]' },
            { icon: <FiPhone />, path: "tel:+923339571763", label: 'Phone', color: 'text-[#25D366]' }

        ],

        keywords: [
            "WEB", "DEVELOPMENT", "PROGRAMMING", "HTML", "CSS", "JAVASCRIPT", "REACT", "NEXTJS", "NODEJS", "EXPRESSJS", "MONGODB", "TYPESCRIPT", "GIT", "GITHUB", "POSTMAN"
        ],

        skills: {
            showCase: [
                { name: 'HTML5', icons: [<SiHtml5 />], color: 'bg-[#E34F26]' },
                { name: 'CSS3', icons: [<SiCss3 />], color: 'bg-[#E34F26]' },
                { name: 'JavaScript', icons: [<SiJavascript />], color: 'bg-[#F7DF1E]' },
                { name: 'Git', icons: [<SiGit />], color: 'bg-[#06B6D4]' },


            ],
            technical: [
                // { name: 'Next.js', description: 'React framework for production-ready applications', icon: 'nextjs' },
                // { name: 'Tailwind CSS', description: 'Utility-first CSS framework for rapid UI development', icon: 'tailwind' },
                // { name: 'JavaScript', description: 'Versatile language for web development', icon: 'js' },
                // { name: 'REST APIs', description: 'Architectural style for designing networked applications', icon: 'api' }


                { name: 'Next.js', description: 'React framework for production-ready full-stack applications', level: 'Intermediate', category: 'Frontend', icons: [<SiNextdotjs />], color: 'bg-white' },
                { name: 'React', description: 'Frontend library for building user interfaces', level: 'Intermediate', category: 'Frontend', icons: [<SiReact />], color: 'bg-[#61DAFB]' },
                { name: 'Node.js', description: 'JavaScript runtime for server-side applications', level: 'Intermediate', category: 'Backend', icons: [<SiNodedotjs />], color: 'bg-[#339933]' },
                { name: 'Express.js', description: 'Web application framework for Node.js', level: 'Intermediate', category: 'Backend', icons: [<SiExpress />], color: 'bg-[#339933]' },
                { name: 'MongoDB', description: 'NoSQL database for scalable applications', level: 'Intermediate', category: 'Database', icons: [<SiMongodb />], color: 'bg-[#47A248]' },

                { name: 'JavaScript', description: 'High-level programming language for dynamic web applications', level: 'Advanced', category: 'Language', icons: [<SiJavascript />], color: 'bg-[#F7DF1E]' },
                { name: 'HTML5', description: 'Standard markup language for creating web content', level: 'Expert', category: 'Web Basics', icons: [<SiHtml5 />], color: 'bg-[#E34F26]' },
                { name: 'CSS3', description: 'Style sheet language for designing responsive web layouts', level: 'Expert', category: 'Web Basics', icons: [<SiCss3 />], color: 'bg-[#E34F26]' },
                { name: 'TypeScript', description: 'Typed superset of JavaScript for scalable applications', level: 'Beginner', category: 'Language', icons: [<SiTypescript />], color: 'bg-[#3178C6]' },
                { name: 'Tailwind CSS', description: 'Utility-first CSS framework for rapid UI development', level: 'Intermediate', category: 'Styling', icons: [<SiTailwindcss />], color: 'bg-[#06B6D4]' },
                { name: 'Git', description: 'Version control system for collaborative software development', level: 'Intermediate', category: 'Version Control', icons: [<SiGit />], color: 'bg-[#06B6D4]' },
            ],

            additional: [
                'REST API', 'Github', 'Postman', 'Context API'
            ],
            languages: ['Balti', 'Urdu', 'English'],
            interests: ['Horse Riding', 'Cricket']
        },

        experience: [
            {
                id: 1,
                title: 'Full Stack Developer',
                company: 'Remote',
                location: 'Remote',
                period: 'Mar 2026 - Jun 2026',
                description: 'Built and maintained a remote client\'s multi-page business website working primarily in Next.js',
                achievements: [
                    'Built and maintained a remote client\'s multi-page business website, working primarily in Next.js',
                    'Developed responsive, reusable interfaces with Next.js, React, and Tailwind CSS and managed shared state with Context API',
                    'Supported backend work with Node.js, Express.js, and MongoDB where the project required it',
                    'Worked directly with the client to scope tasks, share progress, and deliver features by agreed deadlines'
                ]
            },

            {
                id: 2,
                title: 'MERN Stack Intern',
                company: 'HH Tech Hub',
                location: 'Rawalpindi',
                period: 'Dec 2025 - Jan 2026',
                description: 'Built a full-stack Home Appliances Web Portal from database to user interface using the MERN stack',
                achievements: [
                    'Built a full-stack Home Appliances Web Portal from database to user interface using the MERN stack',
                    'Created reusable React components and used Context API to manage application state',
                    'Developed and tested Express.js REST API endpoints with Postman',
                    'Followed Agile development practices and maintained code using GitHub-based version control'
                ]
            }
        ],

        education: [
            {
                id: 1,
                degree: 'Bachelor of Science in Computer Science (BSCS)',
                institution: 'Federal Urdu University of Arts, Science & Technology, Islamabad',
                period: 'Nov 2021 - Jul 2025',
                status: 'Completed'
            },
            {
                id: 2,
                degree: 'Intermediate of Computer Science (ICS)',
                institution: 'Steps College, Rawalpindi',
                period: 'Sep 2018 - Aug 2020',
                status: 'Completed'
            }
        ],

        projects: [

            {
                id: 1,
                title: 'Personal Portfolio Website',
                description: 'Responsive personal portfolio website showcasing projects, skills, and experience',
                technologies: ['React', 'Tailwind CSS', 'Node.js', 'Express.js', 'MongoDB'],
                features: [
                    'Designed and built a responsive personal portfolio website showcasing my projects, skills, and experience',
                    'Deployed the site on Vercel so it is publicly accessible online'
                ],
                github: 'https://github.com/ShahidJana/personal-portfolio',
                live: 'https://shahid-hussain-portfolio.vercel.app',
                image: null,
            },
            {
                id: 2,
                title: 'Car Sale & Rental Platform (FYP)',
                description: 'Full-stack car sale and rental marketplace built as Final Year Project at FUUAST University, Islamabad',
                technologies: ['React', 'Tailwind CSS', 'Node.js', 'Express.js', 'MongoDB'],
                features: [
                    'Built a full-stack car sale and rental marketplace using React, Tailwind CSS, Node.js, Express.js, and MongoDB',
                    'Implemented secure user authentication, a multi-step listing form, and an inventory management module',
                    'Added a user review system so customers can review vehicles and sellers'
                ],
                github: 'https://github.com/ShahidJana/car-sale-rental-frontend',
                live: 'https://car-sale-rental-frontend.vercel.app/',
                image: null,
            },
            {
                id: 3,
                title: 'Home Appliances Web Portal',
                description: 'Full-stack home appliances web portal built during internship at HH Tech Hub',
                technologies: ['React.js', 'Tailwind CSS', 'Node.js', 'Express.js', 'MongoDB', 'Context API'],
                features: [
                    'Built a full-stack home appliances web portal using React.js, Tailwind CSS, Node.js, Express.js, and MongoDB',
                    'Developed responsive interfaces and managed application state with Context API',
                    'Built RESTful APIs to store and retrieve application data in MongoDB'
                ],
                github: 'https://github.com/ShahidJana/Home-Appliances-Management-System--Frontend',
                live: 'https://home-appliances-frontend.vercel.app/',
                image: null
            },

            {
                id: 4,
                title: 'Project Task Management Application',
                description: 'Designed and developed a full-stack Project Task Management Application using the MERN stack',
                technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS', 'Context API', 'JWT', 'Bcrypt', 'React Router', "REST API"],
                features: ["Responsive user interface built with React.js, Context API, and Tailwind CSS",
                    "RESTful API integration using Node.js and Express.js",
                    "JWT- based authentication with role - based access control",
                    "Source code management using GitHub version control"],
                github: 'https://github.com/ShahidJana/PMS-frontend',
                live: 'https://home-appliances-frontend.vercel.app/',
                image: null
            },
        ]
    };

    // Toggle theme
    const toggleTheme = () => {
        setTheme(prev => prev === 'dark' ? 'light' : 'dark');
    };

    // Apply theme to document
    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
    }, [theme]);

    // Listen for section changes from intersection observer
    useEffect(() => {
        const handleSectionChange = (e) => {
            setActiveSection(e.detail);
        };

        window.addEventListener('sectionChange', handleSectionChange);
        return () => window.removeEventListener('sectionChange', handleSectionChange);
    }, []);

    const value = {
        theme,
        toggleTheme,
        isLoading,
        setIsLoading,
        activeSection,
        setActiveSection,
        portfolioData
    };

    return (
        <PortfolioContext.Provider value={value}>
            {children}
        </PortfolioContext.Provider>
    );
};
