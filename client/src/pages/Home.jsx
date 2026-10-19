import { motion } from 'framer-motion';
import { FiArrowUpRight } from 'react-icons/fi';
import { usePortfolio } from '../context/PortfolioContext';
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer } from '../utils/animations';
import profileImg from '../assets/images/shahid-pic.jpeg';

const Home = () => {
    const { portfolioData } = usePortfolio();
    const { personal, keywords, socialLinks } = portfolioData;

    return (
        <section
            id="home"
            className="relative min-h-screen flex flex-col items-center justify-center bg-[#020408] text-white overflow-hidden"
        >
            {/* ── Background ── */}
            <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(34,211,238,0.018)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.018)_1px,transparent_1px)] bg-[size:60px_60px]" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-cyan-500/[0.05] rounded-full blur-[200px]" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/[0.04] rounded-full blur-[160px]" />

                {/* HUD labels */}
                {[
                    { label: 'SYS_STATUS', val: 'ACTIVE', pos: 'top-24 left-10' },
                    { label: 'NET_LOC', val: 'RAWALPINDI', pos: 'top-24 right-10' },
                    { label: 'CORE_PWR', val: '98.4%', pos: 'bottom-48 left-10' }
                ].map((hud, i) => (
                    <motion.div
                        key={i}
                        className={`absolute ${hud.pos} hidden lg:flex flex-col border-l border-cyan-400/20 pl-4 py-1`}
                        animate={{ opacity: [0.1, 0.4, 0.1] }}
                        transition={{ duration: 3, repeat: Infinity, delay: i * 0.8 }}
                    >
                        <span className="text-[9px] font-mono text-cyan-400/60 tracking-widest uppercase">{hud.label}</span>
                        <span className="text-xs font-black font-archivo text-white uppercase">{hud.val}</span>
                    </motion.div>
                ))}
            </div>

            {/* ── Main Content ── */}
            <div className="container mx-auto px-5 sm:px-8 z-10 flex-grow flex items-center pt-20">
                <motion.div
                    className="w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center"
                    variants={staggerContainer}
                    initial="initial"
                    animate="animate"
                >
                    {/* ── Profile Image (Col 1-5) ── */}
                    <motion.div
                        className="lg:col-span-5 flex justify-center lg:order-2"
                        variants={fadeInLeft}
                    >
                        <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-96 md:h-96 group">
                            {/* rotating ring */}
                            <motion.div
                                className="absolute -inset-6 border border-white/[0.06] rounded-full"
                                animate={{ rotate: 360 }}
                                transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
                            >
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-6 h-[2px] bg-cyan-400" />
                                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-6 h-[2px] bg-cyan-400" />
                            </motion.div>

                            {/* image frame */}
                            <motion.div
                                className="relative z-10 w-full h-full border border-white/10 group-hover:border-cyan-400/50 transition-all duration-500 overflow-hidden bg-[#050810]"
                                whileHover={{ rotateY: 8, rotateX: -4, scale: 1.03 }}
                                transition={{ type: 'spring', stiffness: 150, damping: 18 }}
                            >
                                <motion.img
                                    src={profileImg}
                                    alt="Shahid Hussain"
                                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                                    initial={{ scale: 1.15 }}
                                    animate={{ scale: 1 }}
                                    transition={{ duration: 2 }}
                                />
                                {/* scan line */}
                                <motion.div
                                    className="absolute left-0 w-full h-px bg-cyan-400/40 shadow-[0_0_12px_#22d3ee] z-20"
                                    animate={{ top: ['0%', '100%'] }}
                                    transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
                                />
                                {/* cyan tint hover */}
                                <div className="absolute inset-0 bg-cyan-400/10 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            </motion.div>

                            {/* name badge */}
                            <div className="absolute italic -bottom-5 -right-5 md:-bottom-8 md:-right-8 bg-cyan-400 text-[#020408] px-5 py-2.5 md:px-6 md:py-3 font-black font-archivo text-lg md:text-xl z-20 shadow-[0_0_25px_rgba(34,211,238,0.4)]">
                                SHAHID JANA
                            </div>

                            {/* corner accents */}
                            <div className="absolute top-2 left-2 w-5 h-5 border-t-2 border-l-2 border-cyan-400/30 z-20" />
                            <div className="absolute bottom-2 right-2 w-5 h-5 border-b-2 border-r-2 border-cyan-400/30 z-20" />
                        </div>
                    </motion.div>

                    {/* ── Content (Col 6-12) ── */}
                    <motion.div
                        className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left lg:order-1"
                        variants={fadeInRight}
                    >
                        {/* status */}
                        <div className="flex items-center gap-3 mb-5">
                            <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
                            <span className="text-cyan-400 font-mono text-[10px] tracking-[0.6em] uppercase">Available for Work</span>
                        </div>

                        {/* name */}
                        <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-[10rem] font-black font-archivo text-white leading-[0.85] tracking-tighter mb-6 uppercase">
                            Shahid<br />
                            <span className="text-cyan-400">Hussain</span>
                        </h1>

                        {/* title */}
                        <div className="inline-flex items-center px-4 py-2 bg-white text-[#020408] mb-8">
                            <h2 className="text-lg sm:text-xl md:text-2xl font-bold font-archivo tracking-[0.2em] md:tracking-[0.3em] uppercase">
                                {personal.title}
                            </h2>
                        </div>

                        {/* summary */}
                        <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-2xl mb-10">
                            {personal.summary}
                        </p>

                        {/* CTA + Socials */}
                        <div className="w-full flex flex-col md:flex-row items-center gap-6 border-t border-white/[0.05] pt-8">
                            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
                                <motion.a
                                    href="/contact"
                                    className="px-8 py-4 bg-cyan-400 text-[#020408] font-black font-archivo uppercase tracking-widest text-sm shadow-[0_0_20px_rgba(34,211,238,0.3)] hover:shadow-[0_0_40px_rgba(34,211,238,0.5)] transition-all flex items-center justify-center gap-2 group rounded-sm"
                                    whileHover={{ y: -4 }}
                                    transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                                >
                                    Inquire Now
                                    <FiArrowUpRight className="text-lg group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                </motion.a>
                                <motion.a
                                    href="/projects"
                                    className="px-8 py-4 bg-white/[0.03] border border-white/10 text-white font-black font-archivo uppercase tracking-widest text-sm hover:bg-white/[0.06] hover:border-white/20 transition-all flex items-center justify-center rounded-sm"
                                    whileHover={{ y: -4 }}
                                    transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                                >
                                    Review Projects
                                </motion.a>
                            </div>

                            <div className="flex-grow h-px bg-white/[0.05] hidden md:block" />

                            <div className="flex gap-5">
                                {socialLinks.map((social, i) => (
                                    <motion.a
                                        key={i}
                                        title={social.label}
                                        href={social.path}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-10 h-10 border border-white/[0.08] rounded-lg flex items-center justify-center text-lg text-gray-500 hover:text-cyan-400 hover:border-cyan-400/40 hover:bg-cyan-400/5 transition-all duration-300"
                                        whileHover={{ y: -4, scale: 1.1 }}
                                    >
                                        {social.icon}
                                    </motion.a>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>

            {/* ── Keywords Marquee ── */}
            <div className="w-full border-y border-white/[0.05] bg-[#020408]/80 backdrop-blur-md py-6 relative z-20">
                <div className="max-w-[1920px] mx-auto overflow-hidden whitespace-nowrap">
                    <motion.div
                        className="flex items-center gap-14 px-10"
                        animate={{ x: [0, -1000] }}
                        transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
                    >
                        {[...keywords, ...keywords, ...keywords].map((word, idx) => (
                            <div key={idx} className="flex items-center gap-14">
                                <span className="text-[10px] font-black font-archivo tracking-[0.5em] text-white/15 hover:text-cyan-400 transition-colors cursor-default uppercase">
                                    {word}
                                </span>
                                <div className="w-1.5 h-1.5 bg-cyan-400/20 rotate-45" />
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Home;
