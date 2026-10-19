import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import { usePortfolio } from '../context/PortfolioContext';
import { fadeInUp, staggerContainer } from '../utils/animations';

/* ─── tiny helpers ─── */
const monogram = (title) =>
    title.split(' ').map((w) => w[0]).join('').slice(0, 3).toUpperCase();

const ImageBox = ({ image, title, live, height = 'h-52' }) => (
    <div className={`relative w-full ${height} overflow-hidden`}>
        {image ? (
            <img
                src={image}
                alt={title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
        ) : (
            <div className="w-full h-full bg-gradient-to-br from-[#0d1b2a] via-[#071220] to-[#020408] flex flex-col items-center justify-center gap-2 relative overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(34,211,238,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.035)_1px,transparent_1px)] bg-[size:28px_28px]" />
                <div className="absolute w-40 h-40 bg-cyan-500/[0.07] rounded-full blur-3xl" />
                <span className="relative z-10 text-5xl font-black font-archivo text-white/10 group-hover:text-cyan-400/25 transition-colors duration-500 tracking-widest">
                    {monogram(title)}
                </span>
                <span className="relative z-10 text-[8px] font-mono text-white/15 tracking-[0.5em] uppercase">
                    No Preview
                </span>
                {/* animated scan line */}
                <motion.div
                    className="absolute left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent opacity-0 group-hover:opacity-100"
                    animate={{ top: ['0%', '100%'] }}
                    transition={{ duration: 2.5, repeat: Infinity, ease: 'linear' }}
                />
            </div>
        )}
        {/* overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#020408]/80 via-transparent to-transparent" />
        {/* badges */}
        <div className="absolute top-3 left-3 flex gap-2">
            {live && (
                <span className="flex items-center gap-1 px-2 py-0.5 bg-black/50 backdrop-blur border border-cyan-400/40 text-cyan-400 text-[9px] font-mono tracking-widest uppercase rounded-sm">
                    <span className="w-1 h-1 bg-cyan-400 rounded-full animate-pulse" />
                    Live
                </span>
            )}
        </div>
    </div>
);

const CardLinks = ({ github, live }) => (
    <div className="flex gap-2">
        {github && (
            <motion.a
                href={github} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 border border-white/10 hover:border-cyan-400/60 hover:text-cyan-400 text-gray-400 text-xs font-mono transition-all duration-200 rounded-sm"
                whileHover={{ y: -2 }}
            >
                <FiGithub className="text-sm" /> Code
            </motion.a>
        )}
        {live && (
            <motion.a
                href={live} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 bg-cyan-400/10 border border-cyan-400/40 hover:bg-cyan-400/20 text-cyan-400 text-xs font-mono transition-all duration-200 rounded-sm"
                whileHover={{ y: -2 }}
            >
                <FiExternalLink className="text-sm" /> Visit
            </motion.a>
        )}
    </div>
);

/* ─── FEATURED CARD (first project) ─── */
const FeaturedCard = ({ project, idx }) => (
    <motion.div
        className="group col-span-1 md:col-span-2 lg:col-span-3 relative"
        variants={fadeInUp}
    >
        <div className="relative border border-white/[0.06] hover:border-cyan-400/30 bg-[#07111e]/70 backdrop-blur-xl rounded-sm transition-all duration-500 overflow-hidden flex flex-col md:flex-row">
            {/* image – 55% width on md+ */}
            <div className="w-full md:w-[55%] shrink-0">
                <ImageBox image={project.image} title={project.title} live={project.live} height="h-64 md:h-full" />
            </div>

            {/* content */}
            <div className="flex flex-col justify-between gap-6 p-8 md:p-10 lg:p-14 flex-1">
                <div className="space-y-5">
                    <div className="flex items-center gap-3">
                        <span className="text-cyan-400/60 font-mono text-[10px] tracking-[0.4em] uppercase">
                            Featured · {String(idx + 1).padStart(2, '0')}
                        </span>
                    </div>
                    <h3 className="text-3xl md:text-4xl lg:text-5xl font-black font-archivo text-white leading-tight group-hover:text-cyan-400 transition-colors uppercase">
                        {project.title}
                    </h3>
                    <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-lg">
                        {project.description}
                    </p>
                </div>

                {/* features */}
                <ul className="space-y-2">
                    {project.features.slice(0, 3).map((feat, i) => (
                        <li key={i} className="flex items-start gap-3 text-gray-500 group-hover:text-gray-300 transition-colors">
                            <span className="mt-1.5 w-1 h-1 bg-cyan-400/50 group-hover:bg-cyan-400 shrink-0 transition-all" />
                            <span className="text-xs leading-relaxed">{feat}</span>
                        </li>
                    ))}
                </ul>

                <div className="space-y-4 pt-4 border-t border-white/5">
                    {/* tech tags */}
                    <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, i) => (
                            <span key={i} className="px-2.5 py-1 bg-white/[0.03] border border-white/8 text-[9px] font-mono text-gray-500 group-hover:text-gray-300 group-hover:border-cyan-400/25 transition-all uppercase tracking-wider rounded-sm">
                                {tech}
                            </span>
                        ))}
                    </div>
                    <CardLinks github={project.github} live={project.live} />
                </div>
            </div>

            {/* corner accents */}
            <div className="absolute top-4 right-4 w-5 h-5 border-t border-r border-white/15 group-hover:border-cyan-400/60 transition-all" />
            <div className="absolute bottom-4 left-4 w-5 h-5 border-b border-l border-white/15 group-hover:border-cyan-400/60 transition-all" />
        </div>
    </motion.div>
);

/* ─── REGULAR CARD ─── */
const ProjectCard = ({ project, idx }) => (
    <motion.div className="group relative" variants={fadeInUp}>
        <motion.div
            className="relative h-full border border-white/[0.06] hover:border-cyan-400/30 bg-[#07111e]/70 backdrop-blur-xl rounded-sm transition-all duration-500 overflow-hidden flex flex-col"
            whileHover={{ y: -4 }}
            transition={{ type: 'spring', stiffness: 200, damping: 20 }}
        >
            {project.image && (
                <ImageBox image={project.image} title={project.title} live={project.live} height="h-44" />
            )}

            <div className="flex flex-col flex-1 gap-5 p-6 md:p-8">
                <div className="space-y-2">
                    <span className="text-cyan-400/50 font-mono text-[9px] tracking-[0.4em] uppercase">
                        {String(idx + 1).padStart(2, '0')}
                    </span>
                    <h3 className="text-xl md:text-2xl font-black font-archivo text-white leading-tight group-hover:text-cyan-400 transition-colors uppercase">
                        {project.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed line-clamp-2">
                        {project.description}
                    </p>
                </div>

                {/* features */}
                <ul className="flex-1 space-y-1.5">
                    {project.features.slice(0, 2).map((feat, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-gray-600 group-hover:text-gray-400 transition-colors">
                            <span className="mt-1.5 w-1 h-1 bg-cyan-400/40 shrink-0" />
                            <span className="text-[11px] leading-snug">{feat}</span>
                        </li>
                    ))}
                </ul>

                <div className="space-y-4 pt-4 border-t border-white/[0.05]">
                    <div className="flex flex-wrap gap-1.5">
                        {project.technologies.slice(0, 4).map((tech, i) => (
                            <span key={i} className="px-2 py-0.5 bg-white/[0.02] border border-white/8 text-[8px] font-mono text-gray-600 group-hover:text-gray-300 group-hover:border-cyan-400/20 transition-all uppercase tracking-wide rounded-sm">
                                {tech}
                            </span>
                        ))}
                        {project.technologies.length > 4 && (
                            <span className="px-2 py-0.5 text-[8px] font-mono text-gray-700 uppercase">
                                +{project.technologies.length - 4}
                            </span>
                        )}
                    </div>
                    <CardLinks github={project.github} live={project.live} />
                </div>
            </div>

            {/* corner accents */}
            <div className="absolute top-3 right-3 w-4 h-4 border-t border-r border-white/10 group-hover:border-cyan-400/50 transition-all" />
            <div className="absolute bottom-3 left-3 w-4 h-4 border-b border-l border-white/10 group-hover:border-cyan-400/50 transition-all" />
        </motion.div>
    </motion.div>
);

/* ─── MAIN SECTION ─── */
const Projects = () => {
    const { portfolioData } = usePortfolio();
    const { projects } = portfolioData;

    return (
        <section
            id="projects"
            className="relative min-h-screen py-28 md:py-36 bg-[#020408] text-white overflow-hidden"
        >
            {/* Background */}
            <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(34,211,238,0.018)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.018)_1px,transparent_1px)] bg-[size:48px_48px]" />
                <div className="absolute top-1/3 -left-32 w-[700px] h-[700px] bg-cyan-500/[0.06] rounded-full blur-[180px]" />
                <div className="absolute bottom-1/4 -right-32 w-[600px] h-[600px] bg-blue-600/[0.07] rounded-full blur-[160px]" />
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
                        <span className="text-cyan-400 font-mono text-[10px] tracking-[0.6em] uppercase">Production Vault</span>
                        <div className="h-px w-12 bg-gradient-to-l from-transparent to-cyan-400/60" />
                    </div>
                    <h2 className="text-5xl sm:text-7xl md:text-8xl lg:text-[10rem] font-black font-archivo text-white leading-none tracking-tighter uppercase">
                        Creations<span className="text-cyan-400">.</span>
                    </h2>
                    <p className="mt-6 text-gray-500 text-sm md:text-base tracking-widest uppercase max-w-xl">
                        A collection of full-stack applications built with the MERN stack.
                    </p>
                </motion.div>

                {/* ── Uniform 3-column grid ── */}
                <motion.div
                    className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6"
                    variants={staggerContainer}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true, margin: '-60px' }}
                >
                    {projects.map((project, i) => (
                        <ProjectCard key={project.id} project={project} idx={i} />
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;
