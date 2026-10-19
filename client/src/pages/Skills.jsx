import { motion } from 'framer-motion';
import { usePortfolio } from '../context/PortfolioContext';
import { fadeInUp, staggerContainer } from '../utils/animations';

/* ── Infinite Marquee Strip ── */
const MarqueeStrip = ({ skills, direction = 1, speed = 35 }) => {
    // duplicate for seamless loop
    const doubled = [...skills, ...skills, ...skills];

    return (
        <div className="relative overflow-hidden py-3 group">
            {/* fade edges */}
            <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#020408] to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#020408] to-transparent z-10 pointer-events-none" />

            <motion.div
                className="flex gap-4 w-max"
                animate={{ x: direction > 0 ? ['0%', '-33.33%'] : ['-33.33%', '0%'] }}
                transition={{ duration: speed, repeat: Infinity, ease: 'linear' }}
            >
                {doubled.map((skill, i) => (
                    <div
                        key={i}
                        className="flex items-center gap-3 px-5 py-3 border border-white/[0.06] bg-[#07111e]/50 rounded-lg shrink-0 hover:border-cyan-400/40 hover:bg-cyan-400/5 transition-all duration-300 group/item cursor-default"
                    >
                        <span className={`text-xl ${skill.color} w-6 h-6 rounded-sm flex items-center justify-center text-black shrink-0 group-hover/item:scale-110 transition-transform`}>
                            {skill.icons[0]}
                        </span>
                        <span className="text-sm font-bold font-archivo text-gray-400 group-hover/item:text-white transition-colors uppercase tracking-wide whitespace-nowrap">
                            {skill.name}
                        </span>
                    </div>
                ))}
            </motion.div>
        </div>
    );
};

/* ── Featured Skill Card ── */
const FeaturedCard = ({ skill, idx }) => (
    <motion.div
        className="group relative border border-white/[0.06] hover:border-cyan-400/35 bg-[#07111e]/60 backdrop-blur-xl rounded-2xl p-6 flex flex-col gap-4 transition-all duration-500 overflow-hidden"
        variants={fadeInUp}
        whileHover={{ y: -6 }}
        transition={{ type: 'spring', stiffness: 200, damping: 18 }}
    >
        {/* glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/[0.04] via-transparent to-violet-400/[0.03] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

        {/* top row */}
        <div className="flex items-start justify-between">
            <div className={`w-14 h-14 ${skill.color} rounded-xl flex items-center justify-center text-black text-3xl shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500`}>
                {skill.icons[0]}
            </div>
            <div className="text-right">
                <span className="text-[8px] font-mono text-cyan-400/40 uppercase tracking-widest block">
                    {String(idx + 1).padStart(2, '0')}
                </span>
                <span className={`text-[9px] font-mono uppercase tracking-widest mt-1 block
                    ${skill.level === 'Expert' ? 'text-cyan-400' :
                        skill.level === 'Advanced' ? 'text-violet-400' :
                            skill.level === 'Intermediate' ? 'text-blue-400' : 'text-gray-500'}`}>
                    {skill.level}
                </span>
            </div>
        </div>

        {/* info */}
        <div className="space-y-1 relative z-10">
            <h3 className="text-lg font-black font-archivo text-white group-hover:text-cyan-400 transition-colors uppercase tracking-wide leading-tight">
                {skill.name}
            </h3>
            <p className="text-gray-600 text-xs leading-relaxed">
                {skill.description}
            </p>
        </div>

        {/* category tag */}
        <div className="flex items-center gap-2 mt-auto pt-3 border-t border-white/[0.05] relative z-10">
            <div className="w-1 h-1 bg-cyan-400/40 rounded-full group-hover:bg-cyan-400 transition-colors" />
            <span className="text-[9px] font-mono text-gray-700 uppercase tracking-widest group-hover:text-gray-400 transition-colors">
                {skill.category}
            </span>
        </div>

        {/* corner accents */}
        <div className="absolute top-3 right-3 w-4 h-4 border-t border-r border-white/[0.08] group-hover:border-cyan-400/40 transition-all" />
        <div className="absolute bottom-3 left-3 w-4 h-4 border-b border-l border-white/[0.08] group-hover:border-cyan-400/40 transition-all" />
    </motion.div>
);

/* ── Main ── */
const Skills = () => {
    const { portfolioData } = usePortfolio();
    const { skills } = portfolioData;

    const half = Math.ceil(skills.technical.length / 2);
    const row1 = skills.technical.slice(0, half);
    const row2 = skills.technical.slice(half);

    return (
        <section
            id="skills"
            className="relative min-h-screen py-28 md:py-36 bg-[#020408] text-white overflow-hidden"
        >
            {/* ── Background ── */}
            <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.015)_1px,transparent_1px)] bg-[size:44px_44px]" />
                <div className="absolute top-1/3 -left-32 w-[700px] h-[700px] bg-cyan-500/[0.06] rounded-full blur-[180px]" />
                <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-violet-600/[0.05] rounded-full blur-[140px]" />
            </div>

            <div className="z-10 relative">

                {/* ── Header ── */}
                <div className="container mx-auto px-5 sm:px-8">
                    <motion.div
                        className="flex flex-col items-center mb-16 md:mb-20 text-center"
                        variants={fadeInUp}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                    >
                        <div className="flex items-center gap-4 mb-5">
                            <div className="h-px w-12 bg-gradient-to-r from-transparent to-cyan-400/60" />
                            <span className="text-cyan-400 font-mono text-[10px] tracking-[0.6em] uppercase">Core Modules</span>
                            <div className="h-px w-12 bg-gradient-to-l from-transparent to-cyan-400/60" />
                        </div>
                        <h2 className="text-5xl sm:text-7xl md:text-8xl lg:text-[10rem] font-black font-archivo text-white leading-none tracking-tighter uppercase">
                            Arsenal<span className="text-cyan-400">.</span>
                        </h2>
                        <p className="mt-6 text-gray-500 text-sm md:text-base tracking-widest uppercase max-w-xl">
                            Technologies and tools I work with daily.
                        </p>
                    </motion.div>
                </div>

                {/* ── Marquee Strips (full width) ── */}
                <motion.div
                    className="mb-20 md:mb-28 space-y-3"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <MarqueeStrip skills={row1} direction={1} speed={40} />
                    <MarqueeStrip skills={row2} direction={-1} speed={35} />
                </motion.div>

                {/* ── Featured Cards ── */}
                <div className="container mx-auto px-5 sm:px-8">
                    <motion.div
                        className="flex items-center gap-5 mb-10"
                        variants={fadeInUp}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                    >
                        <div className="h-px flex-grow bg-gradient-to-r from-transparent to-white/10" />
                        <span className="text-xs font-black font-archivo tracking-[0.4em] uppercase text-gray-500">
                            Detailed Breakdown of Technologies
                        </span>
                        <div className="h-px flex-grow bg-gradient-to-l from-transparent to-white/10" />
                    </motion.div>

                    <motion.div
                        className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
                        variants={staggerContainer}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true, margin: '-60px' }}
                    >
                        {skills.technical.map((skill, i) => (
                            <FeaturedCard key={skill.name} skill={skill} idx={i} />
                        ))}
                    </motion.div>

                    {/* ── Additional Tools ── */}
                    <motion.div
                        className="mt-14 max-w-4xl mx-auto"
                        variants={fadeInUp}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                    >
                        <div className="flex items-center gap-5 mb-7">
                            <div className="h-px flex-grow bg-gradient-to-r from-transparent to-white/10" />
                            <span className="text-xs font-black font-archivo tracking-[0.4em] uppercase text-gray-500">
                                Additional Tools & Technologies
                            </span>
                            <div className="h-px flex-grow bg-gradient-to-l from-transparent to-white/10" />
                        </div>
                        <div className="flex flex-wrap justify-center gap-3">
                            {skills.additional.map((tool, i) => (
                                <motion.span
                                    key={i}
                                    className="relative overflow-hidden px-5 py-2 bg-white/[0.02] border border-white/[0.07]
                                               text-[10px] font-mono text-gray-500 hover:text-white hover:border-cyan-400/40
                                               transition-all duration-300 cursor-default group rounded-full"
                                    whileHover={{ y: -3 }}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.05 }}
                                    viewport={{ once: true }}
                                >
                                    <span className="relative z-10 uppercase tracking-widest">{tool}</span>
                                    <div className="absolute inset-0 bg-cyan-400/[0.07] translate-y-full group-hover:translate-y-0 transition-transform duration-300 rounded-full" />
                                </motion.span>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
