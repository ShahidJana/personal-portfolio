import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer } from '../utils/animations';
import profileImg from '../assets/images/shahid.jpeg';

const About = () => {
    const { portfolioData } = usePortfolio();
    const { personal, skills, education } = portfolioData;
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const xText = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);

    return (
        <section
            id="about"
            ref={containerRef}
            className="relative min-h-screen py-32 flex flex-col items-center justify-center bg-[#020408] text-white overflow-hidden"
        >
            {/* AGGRESSIVE CYBER-SYSTEM BACKGROUND */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                {/* 1. Rolling Scanning Grid */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(34,211,238,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(34,211,238,0.05)_1px,transparent_1px)] bg-[size:60px_60px] opacity-20" />

                {/* 2. Massive Background Label Scroll */}
                <motion.div
                    style={{ x: xText }}
                    className="absolute top-1/2 -translate-y-1/2 left-0 whitespace-nowrap opacity-[0.03] select-none"
                >
                    <span className="text-[30rem] font-black font-archivo uppercase tracking-tighter leading-none stroke-text opacity-40">
                        DATA_ARCHITECT / CORE_DEVELOPER / NEURAL_ENGINEER /
                    </span>
                </motion.div>

                {/* 3. Falling Digital Streams (Matrix Style) */}
                <div className="absolute inset-0 flex justify-around opacity-20">
                    {[...Array(10)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="w-[1px] h-32 bg-gradient-to-b from-transparent via-cyan-400 to-transparent"
                            animate={{ y: ['-100%', '1000%'] }}
                            transition={{
                                duration: Math.random() * 5 + 3,
                                repeat: Infinity,
                                ease: "linear",
                                delay: Math.random() * 5
                            }}
                        />
                    ))}
                </div>

                {/* 4. Peripheral HUD Markers */}
                {[
                    { label: "USR_ID", val: "SH_99", pos: "top-10 left-10" },
                    { label: "MEM_LD", val: "84%", pos: "top-10 right-10" },
                    { label: "NET_ID", val: "LOCAL_HOST", pos: "bottom-10 left-10" },
                    { label: "VER_CF", val: "STABLE", pos: "bottom-10 right-10" }
                ].map((hud, i) => (
                    <motion.div
                        key={i}
                        className={`absolute ${hud.pos} flex flex-col items-center opacity-30`}
                        animate={{ opacity: [0.1, 0.4, 0.1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                    >
                        <div className="w-8 h-[1px] bg-cyan-400 mb-1" />
                        <span className="text-[8px] font-mono tracking-widest">{hud.label}: {hud.val}</span>
                    </motion.div>
                ))}
            </div>

            <div className="container mx-auto px-6 z-10 relative">
                {/* SECTION HEADER - HIGH IMPACT */}
                <motion.div
                    className="flex flex-col items-center mb-28 text-center"
                    variants={fadeInUp}
                    initial="initial"
                    whileInView="animate"
                >
                    <div className="inline-flex items-center gap-4 mb-2">
                        <div className="w-8 h-[1px] bg-cyan-400" />
                        <span className="text-cyan-400 font-mono text-xs tracking-[0.8em] uppercase">Identity Protocol</span>
                        <div className="w-8 h-[1px] bg-cyan-400" />
                    </div>
                    <h2 className="text-6xl sm:text-8xl md:text-[10rem] lg:text-[12rem] font-black font-archivo text-white leading-none tracking-tighter uppercase relative">
                        About Me
                        <motion.span
                            className="absolute -top-4 -right-8 text-xl font-mono text-cyan-400 opacity-50"
                            animate={{ opacity: [0.2, 0.8, 0.2] }}
                            transition={{ duration: 1, repeat: Infinity }}
                        >
                            [01]
                        </motion.span>
                    </h2>
                </motion.div>

                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-32 items-center">
                    {/* PROFILE VISUAL - THE CORE */}
                    <motion.div
                        className="lg:col-span-5 relative"
                        variants={fadeInLeft}
                    >
                        <div className="relative aspect-square group">
                            {/* Animated Crosshairs */}
                            <motion.div
                                className="absolute -inset-10 border border-white/5 rounded-full z-0"
                                animate={{ rotate: 360 }}
                                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                            >
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-[1px] bg-cyan-400" />
                                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-[1px] bg-cyan-400" />
                            </motion.div>

                            {/* Inner Box with Skew Effect */}
                            <motion.div
                                className="relative z-10 w-full h-full border border-white/10 group-hover:border-cyan-400 transition-all duration-500 overflow-hidden"
                                whileHover={{ scale: 1.05, rotateY: 10, skewX: 2 }}
                            >
                                <motion.img
                                    src={profileImg}
                                    alt="Shahid Hussain"
                                    className="w-full h-full object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-700"
                                />
                                {/* Data Glitch Overlay */}
                                <div className="absolute inset-0 bg-cyan-400/10 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                            </motion.div>

                            {/* Floating Metadata Labels */}
                            <div className="absolute -right-16 top-1/4 flex flex-col gap-4 text-[10px] font-mono text-cyan-400/80">
                                <span>POS_Z: 404</span>
                                <span>TYPE: DEV</span>
                                <span>STAT: READY</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* CONTENT - MISSION DATA */}
                    <motion.div
                        className="lg:col-span-7 flex flex-col gap-12"
                        variants={fadeInRight}
                    >
                        <div className="space-y-4">
                            <h3 className="text-3xl sm:text-4xl md:text-6xl font-black font-archivo text-white leading-[1.1]">
                                Engineering the <br />
                                <span className="text-[#06B6D4] stroke-text-cyan">Digital Frontier</span>
                            </h3>
                            <div className="flex flex-wrap gap-4 mt-6">
                                {skills.technical && skills.technical.map((skill, idx) => (
                                    <div key={idx} className="group relative flex items-center gap-2 px-3 py-1.5 bg-white/5 border border-white/10 rounded-sm hover:border-cyan-400/50 transition-all">
                                        <span className={`text-xl ${skill.name === 'JavaScript' ? 'text-yellow-400' : 'text-cyan-400'}`}>
                                            {skill.icons[0]}
                                        </span>
                                        <span className="text-[10px] font-mono uppercase tracking-tighter text-gray-400 group-hover:text-white">
                                            {skill.name}
                                        </span>
                                    </div>
                                ))}
                            </div>
                            <div className="w-1/2 h-[2px] bg-gradient-to-r from-cyan-400/40 to-transparent" />
                        </div>

                        <div className="space-y-8 text-gray-400 text-lg md:text-2xl leading-relaxed font-medium">
                            <p className="border-l-4 border-cyan-400 pl-6 md:pl-8 py-2 bg-cyan-400/5 italic">
                                {personal.about}
                            </p>
                            <p className="opacity-80">
                                Focused on the intersection of <span className="text-white font-bold">logic and aesthetics</span>, I architect redundant, performance-optimized systems that push the boundaries of modern web standards.
                            </p>
                        </div>

                        {/* SUB-SECTIONS: EDUCATION & LINGUISTICS & INTERESTS */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                            {/* EDUCATION */}
                            <div className="space-y-6">
                                <div className="flex items-center gap-3">
                                    <div className="w-2 h-2 bg-cyan-400 rotate-45" />
                                    <h4 className="text-sm font-black font-archivo tracking-[0.3em] uppercase text-cyan-400">Educations</h4>
                                </div>
                                <div className="space-y-6 border-l border-white/5 pl-4">
                                    {education.map((edu, idx) => (
                                        <div key={idx} className="relative group">
                                            <div className="absolute -left-[17px] top-2 w-2 h-2 rounded-full bg-white/10 group-hover:bg-cyan-400 transition-colors" />
                                            <h5 className="text-white font-black font-archivo text-lg leading-tight uppercase tracking-tight">
                                                {edu.degree}
                                            </h5>
                                            <p className="text-cyan-400/60 font-mono text-[10px] mt-1 uppercase tracking-widest">{edu.institution}</p>
                                            <p className="text-gray-500 font-mono text-[10px] mt-0.5">{edu.period} || {edu.status}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="space-y-10">
                                {/* LANGUAGES */}
                                <div className="space-y-6">
                                    <div className="flex items-center gap-3">
                                        <div className="w-2 h-2 bg-yellow-500 rotate-45" />
                                        <h4 className="text-sm font-black font-archivo tracking-[0.3em] uppercase text-yellow-500">Languages</h4>
                                    </div>
                                    <div className="flex flex-wrap gap-3">
                                        {skills.languages.map((lang, idx) => (
                                            <div key={idx} className="px-4 py-1.5 bg-yellow-500/5 border border-yellow-500/20 text-yellow-500 font-mono text-[10px] uppercase tracking-widest hover:bg-yellow-500/10 transition-colors">
                                                {lang}
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* INTERESTS */}
                                <div className="space-y-6">
                                    <div className="flex items-center gap-3">
                                        <div className="w-2 h-2 bg-emerald-400 rotate-45" />
                                        <h4 className="text-sm font-black font-archivo tracking-[0.3em] uppercase text-emerald-400">Interests</h4>
                                    </div>
                                    <div className="flex flex-wrap gap-3">
                                        {skills.interests.map((interest, idx) => (
                                            <div key={idx} className="px-4 py-1.5 bg-emerald-400/5 border border-emerald-400/20 text-emerald-400 font-mono text-[10px] uppercase tracking-widest hover:bg-emerald-400/10 transition-colors">
                                                {interest}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Branded Skill Nodes */}
                        {/* <div className="flex flex-wrap gap-4 pt-10 border-t border-white/5">
                            {skills.additional.slice(0, 8).map((skill, idx) => (
                                <motion.div
                                    key={idx}
                                    className="px-6 py-3 bg-white/[0.02] border border-white/5 relative group cursor-default"
                                    whileHover={{ y: -5, backgroundColor: "rgba(34,211,238,0.05)" }}
                                >
                                    <div className="absolute top-0 left-0 w-1 h-1 bg-cyan-400 opacity-0 group-hover:opacity-100" />
                                    <span className="text-xs font-black font-archivo tracking-[0.2em] text-white">
                                        {skill.toUpperCase()}
                                    </span>
                                </motion.div>
                            ))}
                        </div> */}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
