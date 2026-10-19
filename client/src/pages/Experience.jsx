import { motion } from 'framer-motion';
import { usePortfolio } from '../context/PortfolioContext';
import { fadeInUp, staggerContainer } from '../utils/animations';

const Experience = () => {
    const { portfolioData } = usePortfolio();
    const { experience } = portfolioData;

    return (
        <section
            id="experience"
            className="relative min-h-screen py-28 md:py-36 bg-[#020408] text-white overflow-hidden"
        >
            {/* ── Background ── */}
            <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(34,211,238,0.018)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.018)_1px,transparent_1px)] bg-[size:60px_60px]" />
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-cyan-500/[0.05] rounded-full blur-[180px]" />
                <div className="absolute bottom-0 right-0 w-[500px] h-[400px] bg-blue-600/[0.06] rounded-full blur-[140px]" />
            </div>

            <div className="container mx-auto px-5 sm:px-8 z-10 relative">

                {/* ── Header ── */}
                <motion.div
                    className="flex flex-col items-center mb-20 md:mb-28 text-center"
                    variants={fadeInUp}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                >
                    <div className="flex items-center gap-4 mb-5">
                        <div className="h-px w-12 bg-gradient-to-r from-transparent to-cyan-400/60" />
                        <span className="text-cyan-400 font-mono text-[10px] tracking-[0.6em] uppercase">Occupational History</span>
                        <div className="h-px w-12 bg-gradient-to-l from-transparent to-cyan-400/60" />
                    </div>
                    <h2 className="text-5xl sm:text-7xl md:text-8xl lg:text-[10rem] font-black font-archivo text-white leading-none tracking-tighter uppercase">
                        Career<span className="text-cyan-400">.</span>
                    </h2>
                    <p className="mt-6 text-gray-500 text-sm md:text-base tracking-widest uppercase max-w-xl">
                        My professional journey and work experience.
                    </p>
                </motion.div>

                {/* ── Timeline ── */}
                <motion.div
                    className="relative max-w-7xl mx-auto"
                    variants={staggerContainer}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true, margin: '-60px' }}
                >
                    {/* Center vertical line */}
                    <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-cyan-400/20 to-transparent md:-translate-x-px" />

                    {/* Animated glow pulse on line */}
                    <motion.div
                        className="absolute left-4 md:left-1/2 w-px md:-translate-x-px bg-gradient-to-b from-cyan-400/60 via-cyan-400/20 to-transparent"
                        style={{ height: '30%' }}
                        animate={{ top: ['-30%', '130%'] }}
                        transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
                    />

                    <div className="flex flex-col gap-12 md:gap-16">
                        {experience.map((exp, idx) => {
                            const isLeft = idx % 2 === 0;
                            return (
                                <motion.div
                                    key={exp.id}
                                    className={`group relative flex items-start gap-6 md:gap-0 ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                                    variants={fadeInUp}
                                >
                                    {/* ── Card ── */}
                                    <div className={`w-full md:w-[calc(50%-2.5rem)] ${isLeft ? 'md:pr-10' : 'md:pl-10'} pl-10 md:pl-0`}>
                                        <motion.div
                                            className="relative border border-white/[0.06] hover:border-cyan-400/30 bg-[#07111e]/70 backdrop-blur-xl rounded-sm p-6 md:p-8 lg:p-10 transition-all duration-500 overflow-hidden"
                                            whileHover={{ y: -3 }}
                                            transition={{ type: 'spring', stiffness: 200, damping: 20 }}
                                        >
                                            {/* left accent bar */}
                                            <div className={`absolute top-0 ${isLeft ? 'right-0' : 'left-0'} w-[2px] h-0 group-hover:h-full bg-cyan-400 transition-all duration-500`} />

                                            {/* Period badge */}
                                            <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 bg-cyan-400/[0.06] border border-cyan-400/20 rounded-sm">
                                                <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse" />
                                                <span className="text-cyan-400 font-mono text-[10px] tracking-widest uppercase">
                                                    {exp.period}
                                                </span>
                                            </div>

                                            {/* Title & Company */}
                                            <div className="mb-4 space-y-1.5">
                                                <h3 className="text-2xl md:text-3xl lg:text-4xl font-black font-archivo text-white group-hover:text-cyan-400 transition-colors uppercase leading-tight">
                                                    {exp.title}
                                                </h3>
                                                <p className="text-sm font-mono text-gray-400">
                                                    {exp.company}
                                                    {exp.location && exp.location !== exp.company && (
                                                        <span className="text-gray-600"> · {exp.location}</span>
                                                    )}
                                                </p>
                                            </div>

                                            {/* Description */}
                                            <p className="text-gray-500 text-sm md:text-base leading-relaxed mb-5 border-b border-white/[0.05] pb-5">
                                                {exp.description}
                                            </p>

                                            {/* Achievements */}
                                            <ul className="space-y-2.5">
                                                {exp.achievements.map((item, i) => (
                                                    <li key={i} className="flex items-start gap-3 group/item">
                                                        <span className="mt-1.5 w-1 h-1 bg-cyan-400/40 group-hover/item:bg-cyan-400 shrink-0 transition-colors" />
                                                        <span className="text-xs md:text-sm text-gray-500 group-hover/item:text-gray-300 transition-colors leading-relaxed">
                                                            {item}
                                                        </span>
                                                    </li>
                                                ))}
                                            </ul>

                                            {/* corner accents */}
                                            <div className="absolute top-3 right-3 w-4 h-4 border-t border-r border-white/10 group-hover:border-cyan-400/50 transition-all" />
                                            <div className="absolute bottom-3 left-3 w-4 h-4 border-b border-l border-white/10 group-hover:border-cyan-400/50 transition-all" />
                                        </motion.div>
                                    </div>

                                    {/* ── Timeline Dot ── */}
                                    <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-7 flex flex-col items-center">
                                        <motion.div
                                            className="relative w-4 h-4 rounded-full border-2 border-cyan-400 bg-[#020408] z-10"
                                            whileInView={{ scale: [0, 1.3, 1] }}
                                            transition={{ duration: 0.5, delay: idx * 0.15 }}
                                            viewport={{ once: true }}
                                        >
                                            <span className="absolute inset-0 rounded-full bg-cyan-400/30 animate-ping" />
                                        </motion.div>
                                    </div>

                                    {/* ── Empty side spacer (desktop only) ── */}
                                    <div className="hidden md:block md:w-[calc(50%-2.5rem)]" />
                                </motion.div>
                            );
                        })}
                    </div>

                    {/* Timeline end dot */}
                    <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 bottom-0 w-2 h-2 rounded-full bg-cyan-400/30 border border-cyan-400/40" />
                </motion.div>
            </div>
        </section>
    );
};

export default Experience;
