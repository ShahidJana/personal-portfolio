import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink, FiArrowUpRight } from 'react-icons/fi';
import { usePortfolio } from '../context/PortfolioContext';
import { fadeInUp, staggerContainer } from '../utils/animations';

const Projects = () => {
    const { portfolioData } = usePortfolio();
    const { projects } = portfolioData;

    return (
        <section
            id="projects"
            className="relative min-h-screen py-32 flex flex-col items-center justify-center bg-[#020408] text-white overflow-hidden"
        >
            {/* DATA-LATTICE BACKGROUND SYSTEM */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                {/* 1. High-Density Isometric Grid */}
                <div className="absolute inset-0 bg-[linear-gradient(30deg,rgba(34,211,238,0.02)_1px,transparent_1px),linear-gradient(-30deg,rgba(34,211,238,0.02)_1px,transparent_1px)] bg-[size:40px_40px]" />

                {/* 2. Shimmering Binary Streams */}
                <div className="absolute inset-0 flex justify-around opacity-10">
                    {[...Array(12)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="flex flex-col text-[10px] font-mono text-cyan-400 gap-2 select-none"
                            animate={{ y: ['-10%', '-50%'] }}
                            transition={{ duration: Math.random() * 20 + 20, repeat: Infinity, ease: "linear" }}
                        >
                            {Array.from({ length: 50 }).map((_, j) => (
                                <span key={j}>{Math.round(Math.random())}</span>
                            ))}
                        </motion.div>
                    ))}
                </div>

                {/* 3. Deep Atmos Glows */}
                <div className="absolute top-1/4 -left-24 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[160px]" />
                <div className="absolute bottom-1/4 -right-24 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[160px]" />
            </div>

            <div className="container mx-auto px-6 z-10 box-border">
                {/* ARCHITECTURAL HEADER */}
                <motion.div
                    className="flex flex-col items-center mb-28 md:mb-36 text-center"
                    variants={fadeInUp}
                    initial="initial"
                    whileInView="animate"
                >
                    <div className="flex items-center gap-6 mb-4">
                        <div className="w-2 h-2 bg-cyan-400 rotate-45" />
                        <span className="text-cyan-400 font-mono text-xs tracking-[0.8em] uppercase">Production Vault</span>
                        <div className="w-2 h-2 bg-cyan-400 rotate-45" />
                    </div>
                    <h2 className="text-5xl sm:text-7xl md:text-9xl lg:text-[12rem] font-black font-archivo text-white leading-none tracking-tighter uppercase">
                        Creations<span className="text-cyan-400 underline decoration-[0.1em] underline-offset-[-0.05em]">_</span>
                    </h2>
                    <p className="mt-8 text-gray-500 text-lg md:text-xl font-bold tracking-widest uppercase max-w-3xl">
                        A repository of high-performance digital architectures and artistic experiments.
                    </p>
                </motion.div>

                {/* PROJECTS GRID - 3D CARDS */}
                <motion.div
                    className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 perspective-[2000px]"
                    variants={staggerContainer}
                    initial="initial"
                    whileInView="animate"
                >
                    {projects.map((project, idx) => (
                        <motion.div
                            key={project.id}
                            className="group relative h-full flex"
                            variants={fadeInUp}
                        >
                            <motion.div
                                className="relative bg-[#0a0f18]/80 backdrop-blur-xl border border-white/5 rounded-sm p-8 md:p-12 flex flex-col w-full hover:border-cyan-400/40 transition-all duration-500"
                                whileHover={{ rotateY: 5, rotateX: -5, translateZ: 20 }}
                                transition={{ type: 'spring', stiffness: 100 }}
                            >
                                {/* INTERNAL SCANNING LASER */}
                                <motion.div
                                    className="absolute left-0 w-full h-[1px] bg-cyan-400/30 blur-[2px] opacity-0 group-hover:opacity-100 z-20"
                                    animate={{ top: ['0%', '100%'] }}
                                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                                />

                                {/* CORNER FOCUS HUD */}
                                <div className="absolute top-4 left-4 w-4 h-4 border-t border-l border-white/20 group-hover:border-cyan-400 group-hover:scale-110 transition-all" />
                                <div className="absolute top-4 right-4 w-4 h-4 border-t border-r border-white/20 group-hover:border-white/40 transition-all" />
                                <div className="absolute bottom-4 left-4 w-4 h-4 border-b border-l border-white/20 group-hover:border-white/40 transition-all" />
                                <div className="absolute bottom-4 right-4 w-4 h-4 border-b border-r border-white/20 group-hover:border-cyan-400 group-hover:scale-110 transition-all" />

                                <div className="flex flex-col h-full gap-8">
                                    <div className="flex justify-between items-start">
                                        <div className="space-y-1">
                                            <span className="text-cyan-400 font-mono text-[10px] tracking-widest">OBJ_ID: {String(idx + 1).padStart(2, '0')}</span>
                                            <h3 className="text-2xl sm:text-3xl md:text-5xl font-black font-archivo text-white leading-none group-hover:text-cyan-400 transition-colors uppercase">
                                                {project.title}
                                            </h3>
                                        </div>
                                        <div className="flex gap-4 pt-2">
                                            {project.github && (
                                                <motion.a
                                                    href={project.github} target="_blank" rel="noopener noreferrer"
                                                    className="p-2 border border-white/5 hover:border-cyan-400 hover:text-cyan-400 transition-all"
                                                    whileHover={{ y: -3 }}
                                                >
                                                    <FiGithub className="text-xl" />
                                                </motion.a>
                                            )}
                                            {project.live && (
                                                <motion.a
                                                    href={project.live} target="_blank" rel="noopener noreferrer"
                                                    className="p-2 border border-white/5 hover:border-cyan-400 hover:text-cyan-400 transition-all"
                                                    whileHover={{ y: -3 }}
                                                >
                                                    <FiExternalLink className="text-xl" />
                                                </motion.a>
                                            )}
                                        </div>
                                    </div>

                                    <p className="text-gray-400 text-base md:text-xl leading-relaxed font-medium">
                                        {project.description}
                                    </p>

                                    {/* FEATURE LIST - HIGH CONTRAST */}
                                    <div className="flex-grow space-y-3">
                                        {project.features.slice(0, 3).map((feat, i) => (
                                            <div key={i} className="flex items-center gap-4 text-gray-500 group-hover:text-gray-300 transition-colors">
                                                <div className="w-1 h-1 bg-cyan-400/40 group-hover:bg-cyan-400 group-hover:scale-150 transition-all" />
                                                <span className="text-xs font-black font-archivo tracking-widest uppercase">{feat}</span>
                                            </div>
                                        ))}
                                    </div>

                                    {/* TECH STACK - GLOW TAGS */}
                                    <div className="flex flex-wrap gap-2 pt-6 border-t border-white/5">
                                        {project.technologies.map((tech, i) => (
                                            <span
                                                key={i}
                                                className="px-3 py-1 bg-white/[0.02] border border-white/10 text-[10px] font-mono text-gray-500 group-hover:text-white group-hover:border-cyan-400/40 transition-all"
                                            >
                                                {tech.toUpperCase()}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;
