// Scroll animations
export const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: 'easeOut' }
};

export const fadeInLeft = {
    initial: { opacity: 0, x: -60 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.6, ease: 'easeOut' }
};

export const fadeInRight = {
    initial: { opacity: 0, x: 60 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.6, ease: 'easeOut' }
};

export const fadeIn = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.6 }
};

export const scaleIn = {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.5, ease: 'easeOut' }
};

// Stagger children animation
export const staggerContainer = {
    initial: {},
    animate: {
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2
        }
    }
};

// Hover animations
export const hoverScale = {
    scale: 1.05,
    transition: { duration: 0.3 }
};

export const hoverLift = {
    y: -10,
    transition: { duration: 0.3 }
};

// Page transition
export const pageTransition = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
    transition: { duration: 0.4 }
};

// Floating animation
export const floatingAnimation = {
    y: [0, -20, 0],
    transition: {
        duration: 3,
        repeat: Infinity,
        ease: 'easeInOut'
    }
};

// Pulse animation
export const pulseAnimation = {
    scale: [1, 1.05, 1],
    transition: {
        duration: 2,
        repeat: Infinity,
        ease: 'easeInOut'
    }
};

// Slide in from bottom
export const slideInBottom = {
    initial: { y: 100, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { duration: 0.6, ease: 'easeOut' }
};

// Rotate in
export const rotateIn = {
    initial: { rotate: -180, opacity: 0 },
    animate: { rotate: 0, opacity: 1 },
    transition: { duration: 0.8, ease: 'easeOut' }
};
