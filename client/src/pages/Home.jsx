import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { SiHtml5, SiCss3, SiFigma, SiJavascript, SiGit, SiReact, SiNodedotjs, SiMongodb } from 'react-icons/si';
import { FiGithub, FiLinkedin, FiInstagram, FiArrowUpRight, FiMail } from 'react-icons/fi';
import { usePortfolio } from '../context/PortfolioContext';
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer } from '../utils/animations';
import profileImg from '../assets/images/shahid-pic.jpeg';

const Home = () => {
    const { portfolioData } = usePortfolio();
    const { personal, keywords, socialLinks } = portfolioData;
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const xText = useTransform(scrollYProgress, [0, 1], ["0%", "-40%"]);

    return (
        <section
            id="home"
            ref={containerRef}
            className="relative min-h-screen flex flex-col items-center justify-center bg-[#020408] text-white overflow-hidden"
        >
            {/* GLOBAL COMMAND CENTER BACKGROUND */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                {/* 1. Massive Background Scroll */}
                <motion.div
                    style={{ x: xText }}
                    className="absolute top-1/2 -translate-y-1/2 left-0 whitespace-nowrap opacity-[0.03] select-none"
                >
                    <span className="text-[35rem] font-black font-archivo uppercase tracking-tighter leading-none stroke-text opacity-40">
                        SHAHID_HUSSAIN / SYSTEM_ONLINE / ARCHITECT /
                    </span>
                </motion.div>

                {/* 2. Digital Rainfall */}
                <div className="absolute inset-0 flex justify-around opacity-15">
                    {[...Array(12)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="w-[1px] h-48 bg-gradient-to-b from-transparent via-cyan-400 to-transparent"
                            animate={{ y: ['-100%', '800%'] }}
                            transition={{
                                duration: Math.random() * 4 + 4,
                                repeat: Infinity,
                                ease: "linear",
                                delay: Math.random() * 5
                            }}
                        />
                    ))}
                </div>

                {/* 3. Global HUD Elements */}
                {[
                    { label: "SYS_STATUS", val: "ACTIVE", pos: "top-24 left-10" },
                    { label: "NET_LOC", val: "N:40.7 / W:74.0", pos: "top-24 right-10" },
                    { label: "CORE_PWR", val: "98.4%", pos: "bottom-48 left-10" }
                ].map((hud, i) => (
                    <motion.div
                        key={i}
                        className={`absolute ${hud.pos} hidden lg:flex flex-col border-l border-cyan-400/20 pl-4 py-1`}
                        animate={{ opacity: [0.1, 0.4, 0.1] }}
                        transition={{ duration: 3, repeat: Infinity }}
                    >
                        <span className="text-[9px] font-mono text-cyan-400/60 tracking-widest uppercase">{hud.label}</span>
                        <span className="text-xs font-black font-archivo text-white uppercase">{hud.val}</span>
                    </motion.div>
                ))}

                {/* 4. Deep Atmosphere Glows */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-cyan-400/5 rounded-full blur-[200px]" />
            </div>

            <div className="container mx-auto px-6 z-10 flex-grow flex items-center pt-20">
                <motion.div
                    className="w-full grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center"
                    variants={staggerContainer}
                    initial="initial"
                    animate="animate"
                >
                    {/* PROFILE CORE (Col 1-5) */}
                    <motion.div
                        className="lg:col-span-5 flex justify-center perspective-[2000px]"
                        variants={fadeInLeft}
                    >
                        <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-96 md:h-96 group">
                            {/* Rotating HUD Brackets */}
                            <motion.div
                                className="absolute -inset-8 border border-white/5 rounded-full"
                                animate={{ rotate: 360 }}
                                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                            >
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-[2px] bg-cyan-400" />
                                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-[2px] bg-cyan-400" />
                            </motion.div>

                            {/* Main Frame */}
                            <motion.div
                                className="relative z-10 w-full h-full border border-white/10 group-hover:border-cyan-400/50 transition-all duration-500 overflow-hidden bg-[#050810]"
                                whileHover={{ rotateY: 10, rotateX: -5, scale: 1.05 }}
                            >
                                <motion.img
                                    src={profileImg}
                                    alt="Shahid Hussain"
                                    className="w-full h-full object-cover object-top contrast-105 group-hover:contrast-110 transition-all duration-1000"
                                    initial={{ scale: 1.2 }}
                                    animate={{ scale: 1 }}
                                    transition={{ duration: 2 }}
                                />
                                {/* Internal Scan Line */}
                                <motion.div
                                    className="absolute left-0 w-full h-[1px] bg-cyan-400/50 shadow-[0_0_15px_#22d3ee] z-20"
                                    animate={{ top: ['0%', '100%'] }}
                                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                                />
                            </motion.div>

                            {/* ID Protocol Badge */}
                            <div className="absolute italic -bottom-6 -right-6 md:-bottom-10 md:-right-10 bg-cyan-400 text-[#020408] px-6 py-3 font-black font-archivo text-xl md:text-2xl z-20 shadow-[0_0_30px_rgba(34,211,238,0.5)]">
                                SHAHID JANA
                            </div>
                        </div>
                    </motion.div>

                    {/* CONTENT ARCHITECTURE (Col 6-12) */}
                    <motion.div
                        className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left"
                        variants={fadeInRight}
                    >
                        <div className="flex items-center gap-4 mb-4">
                            <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse" />
                            <span className="text-cyan-400 font-mono text-xs tracking-[0.6em] uppercase">Status: Online</span>
                        </div>

                        <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-[10rem]  font-black font-archivo text-white leading-[0.85] tracking-tighter mb-6 uppercase">
                            Shahid<br />
                            <span className="text-[#06B6D4] stroke-text-cyan">Hussain</span>
                        </h1>

                        <h2 className="text-xl sm:text-2xl md:text-4xl bg-white font-bold text-black font-archivo tracking-[0.2em] md:tracking-[0.3em] uppercase mb-8">
                            {personal.title}
                        </h2>

                        <p className="text-gray-500 text-xs md:text-base italic leading-relaxed max-w-2xl mb-12">
                            {personal.summary}
                        </p>

                        {/* HIGH-TECH CTA & SOCIALS */}
                        <div className="w-full flex flex-col md:flex-row items-center gap-8 border-t border-white/5 pt-12">
                            <div className="flex flex-col md:flex-row gap-4 w-full md:w-auto">
                                <motion.a
                                    href="/contact"
                                    className="px-10 py-5 bg-cyan-400 text-[#020408] font-black font-archivo uppercase tracking-widest text-sm shadow-[0_0_20px_rgba(34,211,238,0.4)] hover:shadow-[0_0_40px_rgba(34,211,238,0.6)] transition-all flex items-center justify-center gap-3 group"
                                    whileHover={{ y: -5 }}
                                >
                                    Inquire Now
                                    <FiArrowUpRight className="text-xl group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform" />
                                </motion.a>
                                <motion.a
                                    href="/projects"
                                    className="px-10 py-5 bg-white/5 border border-white/10 text-white font-black font-archivo uppercase tracking-widest text-sm hover:bg-white/10 transition-all flex items-center justify-center"
                                    whileHover={{ y: -5 }}
                                >
                                    Review Projects
                                </motion.a>
                            </div>

                            <div className="flex-grow h-[1px] bg-white/5 hidden md:block" />

                            <div className="flex gap-6">
                                {socialLinks.map((social, i) => (
                                    <motion.a
                                        key={i}
                                        title={social.label}
                                        href={social.path}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-2xl text-gray-600 hover:text-cyan-400 transition-colors"
                                        whileHover={{ y: -5, scale: 1.2 }}
                                    >
                                        {social.icon}
                                    </motion.a>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>

            {/* SYMBOL STRIP */}
            <div className="w-full border-y border-white/5 bg-[#020408]/80 backdrop-blur-md py-8 relative z-20">
                <div className="max-w-[1920px] mx-auto overflow-hidden whitespace-nowrap">
                    <motion.div
                        className="flex items-center gap-16 px-12"
                        animate={{ x: [0, -1000] }}
                        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                    >
                        {[...keywords, ...keywords, ...keywords].map((word, idx) => (
                            <div key={idx} className="flex items-center gap-16">
                                <span className="text-xs font-black font-archivo tracking-[0.6em] text-white/20 hover:text-cyan-400 transition-colors cursor-default uppercase">
                                    {word}
                                </span>
                                <div className="w-2 h-2 bg-cyan-400/20 rotate-45" />
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Home;
