import { motion } from 'framer-motion';

const pageVariants = {
    initial: {
        opacity: 0,
        rotateY: 90,
    },
    animate: {
        opacity: 1,
        rotateY: 0,
        transition: {
            duration: 0.8,
            ease: [0.645, 0.045, 0.355, 1], // easeInOutQuint
        },
    },
    exit: {
        opacity: 0,
        rotateY: -90,
        transition: {
            duration: 0.8,
            ease: [0.645, 0.045, 0.355, 1],
        },
    },
};

const PageTransition = ({ children }) => {
    return (
        <motion.div
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="w-full min-h-screen origin-left overflow-hidden"
            style={{
                perspective: "2000px",
                backfaceVisibility: "hidden",
                position: "relative"
            }}
        >
            {/* Subtle overlay to simulate shadow during flip */}
            <motion.div
                className="absolute inset-0 bg-black/20 pointer-events-none z-[50]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0 }}
                exit={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
            />
            {children}
        </motion.div>
    );
};

export default PageTransition;
