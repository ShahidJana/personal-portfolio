import { motion } from 'framer-motion';
import { usePortfolio } from '../context/PortfolioContext';
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer } from '../utils/animations';
import profileImg from '../assets/images/shahid.jpeg';

const About = () => {
    const { portfolioData } = usePortfolio();
    const { personal, skills, education } = portfolioData;

    return (
        <section
            id="about"
            className="relative min-h-screen py-28 md:py-36 bg-[#020408] text-white overflow-hidden"
        >
            {/* ── Background ── */}
            <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(34,211,238,0.018)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.018)_1px,transparent_1px)] bg-[size:60px_60px]" />
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-cyan-500/[0.05] rounded-full blur-[160px]" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/[0.06] rounded-full blur-[140px]" />
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
                        <span className="text-cyan-400 font-mono text-[10px] tracking-[0.6em] uppercase">Identity Protocol</span>
                        <div className="h-px w-12 bg-gradient-to-l from-transparent to-cyan-400/60" />
                    </div>
                    <h2 className="text-5xl sm:text-7xl md:text-8xl lg:text-[10rem] font-black font-archivo text-white leading-none tracking-tighter uppercase">
                        About<span className="text-cyan-400">.</span>
                    </h2>
                </motion.div>

                {/* ── Main Grid: Photo + Bio ── */}
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start mb-16 md:mb-24">

                    {/* Photo */}
                    <motion.div
                        className="relative"
                        variants={fadeInLeft}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                    >
                        <div className="group relative aspect-[4/5] max-w-sm mx-auto lg:mx-0">
                            {/* rotating ring */}
                            <motion.div
                                className="absolute -inset-4 border border-cyan-400/10 rounded-sm"
                                animate={{ rotate: 360 }}
                                transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
                            >
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-[1px] bg-cyan-400/60" />
                                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3 h-[1px] bg-cyan-400/60" />
                            </motion.div>

                            {/* image */}
                            <div className="relative z-10 w-full h-full border border-white/[0.08] group-hover:border-cyan-400/40 transition-all duration-500 overflow-hidden">
                                <img
                                    src={profileImg}
                                    alt="Shahid Hussain"
                                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                                />
                                {/* cyan tint overlay on hover */}
                                <div className="absolute inset-0 bg-cyan-400/10 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                {/* gradient bottom */}
                                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#020408]/80 to-transparent" />
                            </div>

                            {/* corner accents */}
                            <div className="absolute top-3 left-3 w-5 h-5 border-t-2 border-l-2 border-cyan-400/40 z-20" />
                            <div className="absolute bottom-3 right-3 w-5 h-5 border-b-2 border-r-2 border-cyan-400/40 z-20" />

                            {/* floating tag */}
                            <div className="absolute -bottom-4 -right-4 z-20 px-4 py-2 bg-[#07111e] border border-cyan-400/30 font-mono text-[10px] text-cyan-400 tracking-widest uppercase">
                                MERN Stack Dev
                            </div>
                        </div>
                    </motion.div>

                    {/* Bio */}
                    <motion.div
                        className="flex flex-col gap-8"
                        variants={fadeInRight}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                    >
                        <div className="space-y-4">
                            <h3 className="text-3xl md:text-4xl font-black font-archivo text-white leading-tight uppercase">
                                Building the <span className="text-cyan-400">Digital</span> Future
                            </h3>
                            <p className="text-gray-400 text-base leading-relaxed border-l-2 border-cyan-400/50 pl-4">
                                {personal.about}
                            </p>
                            <p className="text-gray-500 text-sm leading-relaxed">
                                Focused on the intersection of <span className="text-white font-semibold">logic and aesthetics</span>, I build responsive, performance-optimized applications that push the boundaries of modern web standards.
                            </p>
                        </div>

                        {/* Quick info */}
                        <div className="grid grid-cols-2 gap-4">
                            {[
                                { label: 'Location', value: 'Rawalpindi, Pakistan' },
                                { label: 'Email', value: personal.email },
                                { label: 'Phone', value: personal.phone },
                                { label: 'Status', value: 'Open to Work' },
                            ].map(({ label, value }) => (
                                <div key={label} className="space-y-0.5">
                                    <span className="text-[9px] font-mono text-cyan-400/60 uppercase tracking-widest">{label}</span>
                                    <p className="text-xs text-gray-300 font-medium truncate">{value}</p>
                                </div>
                            ))}
                        </div>

                        {/* Tech stack pills */}
                        <div className="space-y-2">
                            <span className="text-[9px] font-mono text-gray-600 uppercase tracking-widest">Tech Stack</span>
                            <div className="flex flex-wrap gap-2">
                                {skills.technical.map((skill, i) => (
                                    <div key={i} className="group flex items-center gap-1.5 px-2.5 py-1 bg-white/[0.03] border border-white/[0.07] hover:border-cyan-400/40 hover:bg-cyan-400/5 transition-all duration-200 rounded-sm">
                                        <span className={`text-base ${skill.name === 'JavaScript' ? 'text-yellow-400' : 'text-cyan-400'}`}>
                                            {skill.icons[0]}
                                        </span>
                                        <span className="text-[9px] font-mono text-gray-500 group-hover:text-white transition-colors uppercase tracking-wide">
                                            {skill.name}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* ── Education + Languages + Interests ── */}
                <motion.div
                    className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6"
                    variants={staggerContainer}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true, margin: '-40px' }}
                >
                    {/* Education */}
                    <motion.div
                        className="md:col-span-2 border border-white/[0.06] bg-[#07111e]/60 backdrop-blur-xl rounded-sm p-6 md:p-8 space-y-6 group hover:border-cyan-400/25 transition-all duration-500"
                        variants={fadeInUp}
                    >
                        <div className="flex items-center gap-3">
                            <div className="w-1.5 h-1.5 bg-cyan-400 rotate-45" />
                            <h4 className="text-xs font-black font-archivo tracking-[0.3em] uppercase text-cyan-400">Education</h4>
                        </div>
                        <div className="space-y-6 border-l border-white/[0.06] pl-5">
                            {education.map((edu, i) => (
                                <motion.div
                                    key={i}
                                    className="relative group/edu"
                                    variants={fadeInUp}
                                >
                                    <div className="absolute -left-[21px] top-1.5 w-2 h-2 rounded-full bg-white/10 group-hover/edu:bg-cyan-400 transition-colors duration-300" />
                                    <h5 className="text-white font-black font-archivo text-sm md:text-base leading-tight uppercase">
                                        {edu.degree}
                                    </h5>
                                    <p className="text-cyan-400/60 font-mono text-[10px] mt-1 leading-relaxed">
                                        {edu.institution}
                                    </p>
                                    <div className="flex items-center gap-3 mt-1.5">
                                        <span className="text-gray-600 font-mono text-[9px]">{edu.period}</span>
                                        <span className="w-1 h-1 bg-white/20 rounded-full" />
                                        <span className="text-emerald-400/70 font-mono text-[9px] uppercase">{edu.status}</span>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Languages + Interests */}
                    <motion.div className="space-y-5" variants={fadeInUp}>

                        {/* Languages */}
                        <div className="border border-white/[0.06] bg-[#07111e]/60 backdrop-blur-xl rounded-sm p-6 space-y-4 hover:border-yellow-500/20 transition-all duration-500">
                            <div className="flex items-center gap-3">
                                <div className="w-1.5 h-1.5 bg-yellow-500 rotate-45" />
                                <h4 className="text-xs font-black font-archivo tracking-[0.3em] uppercase text-yellow-500">Languages</h4>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {skills.languages.map((lang, i) => (
                                    <span key={i} className="px-3 py-1 bg-yellow-500/[0.06] border border-yellow-500/20 text-yellow-500 font-mono text-[9px] uppercase tracking-widest hover:bg-yellow-500/10 transition-colors rounded-sm">
                                        {lang}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Interests */}
                        <div className="border border-white/[0.06] bg-[#07111e]/60 backdrop-blur-xl rounded-sm p-6 space-y-4 hover:border-emerald-400/20 transition-all duration-500">
                            <div className="flex items-center gap-3">
                                <div className="w-1.5 h-1.5 bg-emerald-400 rotate-45" />
                                <h4 className="text-xs font-black font-archivo tracking-[0.3em] uppercase text-emerald-400">Interests</h4>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {skills.interests.map((item, i) => (
                                    <span key={i} className="px-3 py-1 bg-emerald-400/[0.06] border border-emerald-400/20 text-emerald-400 font-mono text-[9px] uppercase tracking-widest hover:bg-emerald-400/10 transition-colors rounded-sm">
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
