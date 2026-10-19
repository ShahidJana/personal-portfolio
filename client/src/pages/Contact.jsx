import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiMail, FiLinkedin, FiInstagram, FiArrowUpRight, FiSend, FiCheck, FiAlertCircle } from 'react-icons/fi';
import { usePortfolio } from '../context/PortfolioContext';
import { contactAPI } from '../utils/api';
import { fadeInUp, staggerContainer } from '../utils/animations';

const Contact = () => {
    const { portfolioData } = usePortfolio();
    const { personal, socialLinks } = portfolioData;

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const [status, setStatus] = useState({ type: '', message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {

        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
        if (status.message) setStatus({ type: '', message: '' });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        const { name, email, subject, message } = formData;

        if (!name || !email || !subject || !message) {
            setStatus({ type: 'error', message: 'Please fill all the fields' });
            setIsSubmitting(false);
            return;
        }

        if (!email.match(/^[a-zA-Z0-9._%+-]+@gmail\.com$/)) {
            setStatus({ type: 'error', message: 'Please enter a valid Gmail address' });
            setIsSubmitting(false);
            return;
        }

        setStatus({ type: '', message: '' });

        try {
            const response = await contactAPI.sendMessage(formData);

            setStatus({
                type: 'success',
                message: response.message || 'Message sent successfully!'
            });
            setFormData({ name: '', email: '', subject: '', message: '' });
        } catch (error) {
            setStatus({
                type: 'error',
                message: error.response?.data?.message || 'Failed to send message. Please try again.'
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section
            id="contact"
            className="relative min-h-screen py-32 flex flex-col items-center justify-center bg-[#020408] text-white overflow-hidden"
        >
            {/* SIGNAL LINK BACKGROUND */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                {/* 1. Global Scan Lines */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(34,211,238,0.03)_1px,transparent_1px)] bg-[size:100%_4px] opacity-20" />

                {/* 2. Concentric Emission Rings */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full flex items-center justify-center">
                    {[...Array(5)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute border border-cyan-400/10 rounded-full"
                            initial={{ width: 0, height: 0, opacity: 0.5 }}
                            animate={{ width: 2000, height: 2000, opacity: 0 }}
                            transition={{ duration: 10, repeat: Infinity, delay: i * 2, ease: "linear" }}
                        />
                    ))}
                </div>

                {/* 3. Animated Frequency Wave (SVG) */}
                {/* 3. Animated Frequency Wave (SVG) */}
                <svg className="absolute bottom-0 left-0 w-full h-64 opacity-5 pointer-events-none" preserveAspectRatio="none">
                    <motion.path
                        d="M0,32L48,37.3C96,43,192,53,288,58.7C384,64,480,64,576,58.7C672,53,768,43,864,37.3C960,32,1056,32,1152,42.7C1248,53,1344,75,1392,85.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                        fill="cyan"
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
                    <div className="inline-flex items-center gap-4 mb-4">
                        <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-ping" />
                        <span className="text-cyan-400 font-mono text-[10px] tracking-[0.8em] uppercase">Communication_Link: Established</span>
                    </div>
                    <h2 className="text-6xl sm:text-8xl md:text-[11rem] font-black font-archivo text-white leading-none tracking-tighter uppercase relative">
                        Connect<span className="text-cyan-400">.</span>
                    </h2>
                </motion.div>

                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                    {/* SOCIAL GRID - ARCHITECTURAL NODES */}
                    <motion.div
                        className="lg:col-span-1 grid grid-cols-1 sm:grid-cols-1 gap-4 w-full lg:order-2"
                        variants={staggerContainer}
                        initial="initial"
                        whileInView="animate"
                    >
                        {socialLinks.map((link, idx) => (
                            <motion.a
                                key={idx}
                                href={link.path}
                                target="_blank"
                                rel="noopener noreferrer"
                                title={link.label}
                                className="group relative bg-white/[0.01] border border-white/5 p-4 flex items-center gap-4 hover:border-cyan-400/10 transition-all duration-500 rounded-sm overflow-hidden"
                                variants={fadeInUp}
                                whileHover={{ y: -8, translateZ: 50 }}
                            >
                                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-cyan-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                <div className={`text-2xl ${link.color || 'text-cyan-400'} transition-all duration-500 group-hover:scale-110 group-hover:rotate-12 shrink-0`}>
                                    {link.icon}
                                </div>
                                <div className="flex flex-col flex-1 min-w-0">
                                    <h3 className="text-sm font-black font-archivo text-white uppercase tracking-widest group-hover:text-cyan-400 transition-colors duration-300">{link.label}</h3>
                                    <div className="max-h-0 group-hover:max-h-20 overflow-hidden transition-all duration-500 ease-in-out">
                                        <p className="text-[10px] font-mono text-white mt-2 break-all">
                                            {link.path.replace('mailto:', '').replace('tel:', '').replace('https://www.', '').replace('https://', '')}
                                        </p>
                                    </div>
                                </div>
                                <FiArrowUpRight className="text-lg text-gray-700 group-hover:text-cyan-400 transition-colors shrink-0" />
                            </motion.a>
                        ))}
                    </motion.div>

                    {/* CONSOLE FORM INTERFACE */}
                    <motion.div
                        className="lg:col-span-2 w-full lg:order-1"
                        variants={fadeInUp}
                        initial="initial"
                        whileInView="animate"
                    >
                        <div className="relative p-8 md:p-16 bg-[#0a0f18]/40 border border-white/5 backdrop-blur-3xl rounded-sm">
                            <div className="absolute -top-[1px] left-1/2 -translate-x-1/2 w-1/2 h-[2px] bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent" />

                            <h3 className="text-lg md:text-2xl font-black font-archivo text-white/80 uppercase tracking-[0.3em] md:tracking-[0.5em] mb-12 text-center">Message_Box</h3>

                            <form onSubmit={handleSubmit} className="space-y-10">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                    <div className="relative group">
                                        <label className="absolute -top-6 left-0 text-[10px] font-mono text-cyan-400 uppercase tracking-[0.3em]">Identity.name</label>
                                        <input
                                            type="text" name="name" value={formData.name} onChange={handleChange}
                                            className="w-full bg-white/[0.02] border-b border-white/10 p-4 outline-none focus:border-cyan-400 transition-all duration-300 text-white font-medium placeholder:text-gray-800/20 uppercase tracking-widest"
                                            placeholder="Enter ID"
                                        />
                                        <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-cyan-400 group-focus-within:w-full transition-all duration-500 shadow-[0_0_15px_rgba(34,211,238,0.5)]" />
                                    </div>
                                    <div className="relative group">
                                        <label className="absolute -top-6 left-0 text-[10px] font-mono text-cyan-400 uppercase tracking-[0.3em]">Identity.email</label>
                                        <input
                                            type="email" name="email" value={formData.email} onChange={handleChange}
                                            className="w-full bg-white/[0.02] border-b border-white/10 p-4 outline-none focus:border-cyan-400 transition-all duration-300 text-white font-medium placeholder:text-gray-800/20 uppercase tracking-widest"
                                            placeholder="Enter_Mail"
                                        />
                                        <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-cyan-400 group-focus-within:w-full transition-all duration-500 shadow-[0_0_15px_rgba(34,211,238,0.5)]" />
                                    </div>
                                </div>

                                <div className="relative group">
                                    <label className="absolute -top-6 left-0 text-[10px] font-mono text-cyan-400 uppercase tracking-[0.3em]">Transmission.subject</label>
                                    <input
                                        type="text" name="subject" value={formData.subject} onChange={handleChange}
                                        className="w-full bg-white/[0.02] border-b border-white/10 p-4 outline-none focus:border-cyan-400 transition-all duration-300 text-white font-medium placeholder:text-gray-800/20 uppercase tracking-widest"
                                        placeholder="Project_Query"
                                    />
                                    <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-cyan-400 group-focus-within:w-full transition-all duration-500 shadow-[0_0_15px_rgba(34,211,238,0.5)]" />
                                </div>

                                <div className="relative group">
                                    <label className="absolute -top-6 left-0 text-[10px] font-mono text-cyan-400 uppercase tracking-[0.3em]">Transmission.payload</label>
                                    <textarea
                                        name="message" value={formData.message} onChange={handleChange} rows="4"
                                        className="w-full bg-white/[0.02] border border-white/10 p-6 outline-none focus:border-cyan-400 transition-all duration-300 text-white font-medium resize-none placeholder:text-gray-800/20 uppercase tracking-widest"
                                        placeholder="Enter Message Data..."
                                    />
                                    <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-cyan-400/50" />
                                    <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-cyan-400/50" />
                                </div>

                                {status.message && (
                                    <motion.div
                                        className={`p-6 border flex items-center gap-4 font-black font-archivo text-xs tracking-[0.3em] uppercase ${status.type === 'success' ? 'border-cyan-400/50 text-cyan-400 bg-cyan-400/5' : 'border-red-500/50 text-red-500 bg-red-500/5'}`}
                                        initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                                    >
                                        <div className={`w-2 h-2 rounded-full ${status.type === 'success' ? 'bg-cyan-400' : 'bg-red-500'} animate-pulse`} />
                                        {status.message}
                                    </motion.div>
                                )}

                                <button
                                    type="submit" disabled={isSubmitting}
                                    className="group relative w-full py-6 bg-cyan-400 text-[#020408] font-black font-archivo uppercase tracking-[0.5em] shadow-[0_0_40px_rgba(34,211,238,0.3)] hover:shadow-[0_0_60px_rgba(34,211,238,0.5)] hover:scale-[1.02] active:scale-95 transition-all duration-500 disabled:opacity-50 overflow-hidden"
                                >
                                    <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out" />
                                    <div className="flex items-center justify-center gap-4 relative z-10">
                                        {isSubmitting ? "INITIATING..." : "SEND_MESSAGE"}
                                        {!isSubmitting && <FiSend className="text-lg group-hover:translate-x-4 group-hover:-translate-y-4 transition-all duration-500" />}
                                    </div>
                                </button>
                            </form>
                        </div>

                        <div className="mt-20 flex flex-col items-center gap-4">
                            <span className="text-gray-700 font-mono text-[10px] tracking-[0.5em] uppercase">Security_Protocol: SSL_ENCRYPTED</span>
                            <div className="w-[1px] h-12 bg-gradient-to-b from-white/10 to-transparent" />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
