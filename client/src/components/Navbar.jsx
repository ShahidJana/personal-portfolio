import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FiSun, FiMoon, FiHome, FiUser, FiBriefcase, FiCode, FiLayers, FiMail } from 'react-icons/fi';
import { usePortfolio } from '../context/PortfolioContext';
import {
    AiOutlineHome,
    AiOutlineUser,
    AiOutlineProject,
    AiOutlineBook,
    AiOutlineCode,
    AiOutlineMail
} from "react-icons/ai";

const Navbar = () => {
    const { theme, toggleTheme } = usePortfolio();
    const [hoveredLink, setHoveredLink] = useState(null);

    // const navLinks = [
    //     { name: 'Home', path: '/', icon: <FiHome /> },
    //     { name: 'About', path: '/about', icon: <FiUser /> },
    //     { name: 'Experience', path: '/experience', icon: <FiBriefcase /> },
    //     { name: 'Projects', path: '/projects', icon: <FiCode /> },
    //     { name: 'Skills', path: '/skills', icon: <FiLayers /> },
    //     { name: 'Contact', path: '/contact', icon: <FiMail /> }
    // ],
    const navLinks = [
        { name: 'Home', path: '/', icon: <AiOutlineHome /> },
        { name: 'About', path: '/about', icon: <AiOutlineUser /> },
        { name: 'Experience', path: '/experience', icon: <AiOutlineBook /> },
        { name: 'Projects', path: '/projects', icon: <AiOutlineCode /> },
        { name: 'Skills', path: '/skills', icon: <AiOutlineProject /> },
        { name: 'Contact', path: '/contact', icon: <AiOutlineMail /> }
    ];



    return (
        <motion.nav
            className="fixed bottom-0 left-0 w-full h-20 lg:top-0 lg:left-0 lg:h-screen lg:w-24 z-[1030] flex flex-row lg:flex-col items-center bg-transparent lg:bg-[#050810]/95 lg:bg-[#050810]/40 backdrop-blur-xl border-t lg:border-r lg:border-t-0 border-white/[0.03]"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
            <div className="flex flex-row lg:flex-col items-center justify-center lg:justify-between w-full h-full lg:py-8 px-4 lg:px-0 relative">
                {/* Brand Logo / Initials - Hidden on mobile/tablet */}
                <Link to="/" className="hidden lg:flex relative group items-center justify-center w-12 h-12 lg:mb-4">
                    <motion.div
                        className="text-lg lg:text-xl font-black font-archivo text-white relative z-10"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        SJ<span className="text-cyan-400">.</span>
                    </motion.div>
                    <div className="absolute inset-0 bg-cyan-400/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full" />
                </Link>

                {/* Main Navigation Links */}
                <div className="flex flex-row lg:flex-col items-center justify-center gap-4 md:gap-8 lg:gap-6 flex-1 lg:w-full lg:py-10">
                    {navLinks.map((link, index) => (
                        <NavLink
                            key={link.name}
                            to={link.path}
                            className={({ isActive }) => `relative flex items-center justify-center w-12 h-12 lg:w-14 lg:h-14 transition-all duration-300 group`}
                            onMouseEnter={() => setHoveredLink(link.name)}
                            onMouseLeave={() => setHoveredLink(null)}
                        >
                            {({ isActive }) => (
                                <>
                                    <div className={`absolute inset-0 rounded-sm transition-all duration-300 
                                        ${isActive ? 'bg-cyan-400/5 border border-cyan-400/20' : 'bg-transparent group-hover:bg-white/5'}
                                    `} />

                                    <motion.div
                                        className={`relative z-10 text-xl lg:text-2xl transition-colors duration-300 ${isActive ? 'text-cyan-400' : 'text-gray-500 group-hover:text-white'}`}
                                        initial={{ opacity: 0, scale: 0.5 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: 0.1 + (index * 0.05) }}
                                    >
                                        {link.icon}

                                    </motion.div>

                                    {/* Tooltip Label */}
                                    <AnimatePresence>
                                        {hoveredLink === link.name && (
                                            <motion.div
                                                className="hidden lg:block absolute left-[110%] top-1/2 -translate-y-1/2 z-[2000] px-4 py-2 bg-[#0a0f18] border border-white/10 text-cyan-400 font-bold text-[10px] tracking-[0.2em] uppercase whitespace-nowrap pointer-events-none rounded-sm shadow-[0_0_15px_rgba(0,0,0,0.5)]"
                                                initial={{ opacity: 0, x: -10, scale: 0.9 }}
                                                animate={{ opacity: 1, x: 0, scale: 1 }}
                                                exit={{ opacity: 0, x: -10, scale: 0.9 }}
                                                transition={{ duration: 0.15 }}
                                            >
                                                {link.name}
                                                {/* Arrow */}
                                                <div className="absolute top-1/2 -left-[5px] -translate-y-1/2 w-2 h-2 bg-[#0a0f18] border-l border-b border-white/10 rotate-45" />
                                            </motion.div>
                                        )}
                                    </AnimatePresence>

                                    {/* Active Link Indicator */}
                                    {isActive && (
                                        <>
                                            {/* Desktop Side Bar */}
                                            <motion.div
                                                layoutId="activeIndicatorDesktop"
                                                className="hidden lg:block absolute right-0 top-1/4 bottom-1/4 w-1 bg-cyan-400 shadow-[0_0_15px_rgba(34,211,238,1)] rounded-l-full"
                                                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                                            />
                                            {/* Mobile Bottom Bar */}
                                            <motion.div
                                                layoutId="activeIndicatorMobile"
                                                className="lg:hidden absolute bottom-0 left-1/4 right-1/4 h-1 bg-cyan-400 shadow-[0_0_15px_rgba(34,211,238,1)] rounded-t-full"
                                                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                                            />
                                        </>
                                    )}
                                </>
                            )}
                        </NavLink>
                    ))}
                </div>

                {/* Theme Toggle & Indicators - Hidden on mobile/tablet */}
                <div className="hidden lg:flex flex-col items-center gap-8 lg:pb-4">
                    <motion.button
                        className="relative flex items-center justify-center w-12 h-12 bg-white/[0.03] border border-white/5 text-gray-400 rounded-sm cursor-pointer text-xl transition-all duration-300 hover:text-cyan-400 hover:border-cyan-400/30"
                        onClick={toggleTheme}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        aria-label="Toggle theme"
                    >
                        {theme === 'dark' ? <FiSun /> : <FiMoon />}
                        <div className="absolute inset-0 bg-cyan-400/5 rounded-full blur-lg opacity-0 hover:opacity-100 transition-opacity" />
                    </motion.button>

                    {/* Vertical Decoration */}
                    <div className="flex flex-col items-center gap-4">
                        <div className="w-[1px] h-20 bg-gradient-to-b from-white/10 via-cyan-400/20 to-transparent" />
                        <span className="[writing-mode:vertical-lr] text-[8px] font-mono tracking-[0.5em] text-white/20 uppercase rotate-180">
                            SHAHID.DEV
                        </span>
                    </div>
                </div>
            </div>
        </motion.nav>
    );
};

export default Navbar;
