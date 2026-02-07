import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiGithub, FiMail, FiHeart } from 'react-icons/fi';
import { usePortfolio } from '../context/PortfolioContext';

const Footer = () => {
    const { portfolioData } = usePortfolio();
    const { personal } = portfolioData;
    const currentYear = new Date().getFullYear();

    const quickLinks = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Experience', path: '/experience' },
        { name: 'Projects', path: '/projects' },
        { name: 'Skills', path: '/skills' },
        { name: 'Contact', path: '/contact' }
    ];

    return (
        <footer className="bg-bg-secondary pt-20 pb-10 border-t border-bg-tertiary">
            <div className="container mx-auto px-6 md:px-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
                    <motion.div
                        className="flex flex-col gap-6"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-3xl font-extrabold bg-accent-gradient bg-clip-text text-transparent w-fit">SH</h3>
                        <p className="text-text-secondary leading-relaxed max-w-[300px]">Full Stack Developer passionate about creating amazing web experiences.</p>
                        <div className="flex gap-4">
                            <a
                                href={personal.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="GitHub"
                                className="flex items-center justify-center w-10 h-10 bg-bg-primary text-text-primary rounded-lg text-xl transition-all duration-300 hover:bg-accent-gradient hover:text-white hover:shadow-lg"
                            >
                                <FiGithub />
                            </a>
                            <a
                                href={`mailto:${personal.email}`}
                                aria-label="Email"
                                className="flex items-center justify-center w-10 h-10 bg-bg-primary text-text-primary rounded-lg text-xl transition-all duration-300 hover:bg-accent-gradient hover:text-white hover:shadow-lg"
                            >
                                <FiMail />
                            </a>
                        </div>
                    </motion.div>

                    <motion.div
                        className="flex flex-col gap-6"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                    >
                        <h4 className="text-lg font-bold text-text-primary mb-2">Quick Links</h4>
                        <ul className="flex flex-col gap-3 m-0 p-0 list-none">
                            {quickLinks.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        to={link.path}
                                        className="text-text-secondary no-underline transition-colors duration-200 hover:text-accent-primary"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    <motion.div
                        className="flex flex-col gap-6"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        <h4 className="text-lg font-bold text-text-primary mb-2">Contact Info</h4>
                        <ul className="flex flex-col gap-4 m-0 p-0 list-none">
                            <li className="text-text-secondary">{personal.email}</li>
                            <li className="text-text-secondary">{personal.phone}</li>
                            <li className="text-text-secondary">{personal.location}</li>
                        </ul>
                    </motion.div>
                </div>

                <div className="pt-10 border-t border-bg-tertiary text-center">
                    <p className="text-text-tertiary text-sm flex items-center justify-center gap-2 m-0">
                        © {currentYear} {personal.name}. Made with <FiHeart className="text-red-500 animate-pulse" /> using React & Node.js
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
