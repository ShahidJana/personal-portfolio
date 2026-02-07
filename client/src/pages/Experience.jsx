import { motion } from 'framer-motion';
import { FiArrowUpRight } from 'react-icons/fi';
import { usePortfolio } from '../context/PortfolioContext';
import { fadeInUp, fadeInLeft, staggerContainer } from '../utils/animations';

const Experience = () => {
    const { portfolioData } = usePortfolio();
    const { experience } = portfolioData;

    return (
        <section
            id="experience"
            className="relative min-h-screen py-32 flex flex-col items-center justify-center bg-[#020408] text-white overflow-hidden"
        >
            {/* CHRONO-NEXUS BACKGROUND */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                {/* 1. Rolling Logic Grid */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(34,211,238,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(34,211,238,0.03)_1px,transparent_1px)] bg-[size:100px_100px]" />

                {/* 2. Vertical Time Streams */}
                <div className="absolute inset-0 flex justify-around">
                    {[...Array(6)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="w-[1px] h-full bg-gradient-to-b from-transparent via-cyan-500/10 to-transparent"
                            animate={{ opacity: [0.1, 0.3, 0.1], x: [0, 20, 0] }}
                            transition={{ duration: 10, repeat: Infinity, delay: i * 2 }}
                        />
                    ))}
                </div>

                {/* 3. Massive Background Scroll */}
                <div className="absolute top-1/2 -translate-y-1/2 left-0 whitespace-nowrap opacity-[0.02] select-none rotate-90 origin-left">
                    <span className="text-[20rem] font-black font-archivo uppercase tracking-tighter leading-none stroke-text">
                        TIMELINE_SYSTEM / CHRONO_LOG /
                    </span>
                </div>
            </div>

            <div className="container mx-auto px-6 z-10">
                {/* HIGH-IMPACT HEADER */}
                <motion.div
                    className="flex flex-col items-center mb-24 md:mb-32"
                    variants={fadeInUp}
                    initial="initial"
                    whileInView="animate"
                >
                    <div className="flex items-center gap-4 mb-4">
                        <span className="w-12 h-[1px] bg-cyan-400" />
                        <span className="text-cyan-400 font-mono text-xs tracking-[0.6em] uppercase">Occupational History</span>
                        <span className="w-12 h-[1px] bg-cyan-400" />
                    </div>
                    <h2 className="text-5xl sm:text-7xl md:text-9xl lg:text-[11rem] font-black font-archivo text-white leading-none tracking-tighter">
                        Career<span className="text-cyan-400">.</span>
                    </h2>
                </motion.div>

                {/* EXPERIENCE GRID */}
                <motion.div
                    className="max-w-6xl mx-auto flex flex-col gap-20"
                    variants={staggerContainer}
                    initial="initial"
                    whileInView="animate"
                >
                    {experience.map((exp, idx) => (
                        <motion.div
                            key={exp.id}
                            className="group relative grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-8 lg:gap-20 items-start"
                            variants={fadeInUp}
                        >
                            {/* Time Hub */}
                            <div className="relative">
                                <div className="flex flex-col lg:items-end">
                                    <span className="text-cyan-400 font-mono text-xs tracking-widest uppercase mb-1 opacity-60">Phase_{idx + 1}</span>
                                    <span className="text-2xl md:text-3xl font-black font-archivo text-white tracking-widest uppercase">
                                        {exp.period}
                                    </span>
                                    <div className="hidden lg:block w-full h-[1px] bg-gradient-to-l from-cyan-400/50 to-transparent mt-4" />
                                </div>
                                {/* Vertical Pulse Line */}
                                <div className="absolute -left-8 top-0 bottom-0 w-[2px] bg-white/5 overflow-hidden">
                                    <motion.div
                                        className="w-full h-1/2 bg-cyan-400 shadow-[0_0_15px_rgba(34,211,238,1)]"
                                        animate={{ y: ['-100%', '200%'] }}
                                        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                                    />
                                </div>
                            </div>

                            {/* Core Data Card */}
                            <div className="relative p-8 md:p-12 bg-white/[0.02] border border-white/[0.05] group-hover:border-cyan-400/30 transition-all duration-500 rounded-sm">
                                {/* Interactive Scanner Beam */}
                                <div className="absolute top-0 left-0 w-[2px] h-full bg-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity" />

                                <div className="flex flex-col gap-6">
                                    <div className="space-y-2">
                                        <div className="flex flex-wrap items-center gap-3">
                                            <h3 className="text-2xl sm:text-3xl md:text-5xl font-black font-archivo text-white group-hover:text-cyan-400 transition-colors">
                                                {exp.title}
                                            </h3>
                                            <FiArrowUpRight className="text-2xl md:text-3xl text-cyan-400 opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all" />
                                        </div>
                                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-cyan-400/10 border border-cyan-400/20 rounded-sm">
                                            <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
                                            <span className="text-xs font-bold font-mono text-cyan-400 tracking-widest">{exp.company}</span>
                                        </div>
                                    </div>

                                    <div className="space-y-8">
                                        <p className="text-gray-400 text-base md:text-2xl leading-relaxed font-medium">
                                            {exp.description}
                                        </p>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t border-white/5">
                                            {exp.achievements.map((item, i) => (
                                                <div key={i} className="flex items-start gap-4 group/item">
                                                    <span className="text-cyan-400/40 font-mono text-xs mt-1">[{String(i + 1).padStart(2, '0')}]</span>
                                                    <p className="text-sm md:text-base text-gray-500 group-hover/item:text-gray-300 transition-colors leading-relaxed uppercase tracking-wider font-archivo font-bold">
                                                        {item}
                                                    </p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Floating HUD Decoration */}
                                <div className="absolute -top-3 -right-3 w-6 h-6 border-t-2 border-r-2 border-cyan-400/40" />
                                <div className="absolute -bottom-3 -left-3 w-6 h-6 border-b-2 border-l-2 border-emerald-400/40" />
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Experience;
