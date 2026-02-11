import { motion } from 'framer-motion';
import { usePortfolio } from '../context/PortfolioContext';
import { fadeInUp, staggerContainer } from '../utils/animations';


const Skills = () => {
    const { portfolioData } = usePortfolio();
    const { skills } = portfolioData;

    // const technicalSkills = [];

    return (
        <section
            id="skills"
            className="relative min-h-screen py-32 flex flex-col items-center justify-center bg-[#020408] text-white overflow-hidden"
        >
            {/* NEURAL MATRIX BACKGROUND */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                {/* 1. Logic Lattice */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.05)_1px,transparent_1px)] bg-[size:40px_40px]" />

                {/* 2. Pulsing Neural Nodes */}
                {[...Array(15)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-cyan-400 rounded-full"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                        }}
                        animate={{
                            scale: [1, 2, 1],
                            opacity: [0.1, 0.5, 0.1],
                            boxShadow: ["0 0 0px #22d3ee", "0 0 20px #22d3ee", "0 0 0px #22d3ee"]
                        }}
                        transition={{
                            duration: Math.random() * 4 + 2,
                            repeat: Infinity,
                            delay: Math.random() * 5
                        }}
                    />
                ))}

                {/* 3. Data Streams */}
                <svg className="absolute inset-0 w-full h-full opacity-10">
                    <motion.path
                        d="M -100 500 Q 400 300 900 600 T 1900 500"
                        stroke="cyan"
                        fill="none"
                        strokeWidth="1"
                        animate={{ d: ["M -100 500 Q 400 300 900 600 T 1900 500", "M -100 600 Q 400 800 900 400 T 1900 600"] }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    />
                </svg>
            </div>

            <div className="container mx-auto px-6 z-10 box-border">
                {/* PROTOCOL HEADER */}
                <motion.div
                    className="flex flex-col items-center mb-24 md:mb-32 text-center"
                    variants={fadeInUp}
                    initial="initial"
                    whileInView="animate"
                >
                    <div className="flex items-center gap-4 mb-4">
                        <span className="text-cyan-400 font-mono text-[10px] tracking-[0.5em] uppercase">System_Version: 2.0.4</span>
                        <div className="w-12 h-[1px] bg-cyan-400/30" />
                        <span className="text-cyan-400 font-mono text-[10px] tracking-[0.5em] uppercase">Core_Modules</span>
                    </div>
                    <h2 className="text-6xl sm:text-8xl md:text-[11rem] font-black font-archivo text-white leading-none tracking-tighter uppercase relative">
                        Arsenal<span className="text-cyan-400">.</span>
                        <motion.div
                            className="absolute -bottom-4 right-0 text-xs font-mono text-cyan-400/50"
                            animate={{ opacity: [0.2, 0.8, 0.2] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                        >
                            DATA_SET: LOADED
                        </motion.div>
                    </h2>
                </motion.div>

                {/* SKILLS ARCHITECTURE */}
                <motion.div
                    className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8"
                    variants={staggerContainer}
                    initial="initial"
                    whileInView="animate"
                >
                    {skills.technical.map((skill, idx) => (
                        <motion.div
                            key={idx}
                            className="group relative bg-white/[0.01] border border-white/5 p-8 md:p-10 flex flex-col gap-6 hover:border-cyan-400/30 transition-all duration-500 rounded-sm overflow-hidden"
                            variants={fadeInUp}
                        >
                            {/* Scanning Beam */}
                            <motion.div
                                className="absolute left-0 top-0 w-1 h-full bg-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity"
                                animate={{ y: ['-100%', '100%'] }}
                                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                            />

                            <div className="flex items-start justify-between">
                                <div className="flex items-center gap-6">
                                    <div className={`w-14 h-14 md:w-20 md:h-20 ${skill.color} rounded-sm flex items-center justify-center text-black shadow-[0_0_30px_rgba(0,0,0,0.5)] transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-6`}>
                                        <div className="text-3xl md:text-5xl">{skill.icons}</div>
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-cyan-400 font-mono text-[10px] tracking-widest uppercase mb-1">Module_{String(idx + 1).padStart(2, '0')}</span>
                                        <h3 className="text-xl sm:text-2xl md:text-4xl font-black font-archivo text-white group-hover:text-cyan-400 transition-colors uppercase">
                                            {skill.name}
                                        </h3>
                                    </div>
                                </div>
                                <div className="hidden md:flex flex-col items-end opacity-40 group-hover:opacity-100 transition-opacity">
                                    <span className="text-[10px] font-mono tracking-tighter text-gray-500">STAT: ACTIVE</span>
                                    <span className="text-[10px] font-mono tracking-tighter text-cyan-400">{skill.level}</span>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <p className="text-gray-400 text-xs md:text-xs font-medium leading-relaxed uppercase tracking-wide">
                                    {skill.description}
                                </p>
                                <div className="flex items-center gap-4">
                                    <div className="h-[1px] flex-grow bg-white/5" />
                                    <span className="text-[12px] font-mono text-cyan-400/50 uppercase tracking-[0.2em]">{skill.category}</span>
                                </div>
                            </div>

                            {/* Corner Tech Decor */}
                            <div className="absolute top-2 right-2 w-4 h-4 border-t border-r border-white/10" />
                            <div className="absolute bottom-2 left-2 w-4 h-4 border-b border-l border-white/10" />
                        </motion.div>
                    ))}
                </motion.div>

                {/* OTHER TOOLS - HUD STRIP */}
                <motion.div
                    className="mt-24 md:mt-36 max-w-5xl mx-auto"
                    variants={fadeInUp}
                    initial="initial"
                    whileInView="animate"
                >
                    <div className="flex items-center gap-6 mb-12">
                        <div className="h-[1px] flex-grow bg-gradient-to-r from-transparent to-white/10" />
                        <h3 className="text-xl md:text-2xl text-cyan-400 font-black font-archivo tracking-[0.4em] uppercase">Auxiliary_<span className="text-white">Skills</span></h3>
                        <div className="h-[1px] flex-grow bg-gradient-to-l from-transparent to-white/10" />
                    </div>

                    <div className="flex flex-wrap justify-center gap-6">
                        {skills.additional.map((tool, idx) => (
                            <motion.span
                                key={idx}
                                className="px-8 py-3 bg-white/[0.02] border border-white/5 text-[10px] md:text-xs font-black font-archivo tracking-[0.3em] text-gray-500 hover:text-white hover:border-cyan-400/40 hover:bg-cyan-400/5 transition-all cursor-default relative overflow-hidden group"
                                whileHover={{ y: -5 }}
                            >
                                <span className="relative z-10">{tool.toUpperCase()}</span>
                                <div className="absolute inset-0 bg-cyan-400/10 translate-y-full group-hover:translate-y-0 transition-transform" />
                            </motion.span>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;
