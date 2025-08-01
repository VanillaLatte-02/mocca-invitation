import { motion } from 'framer-motion';

export const pageVariants = {
  initial: { y: '100%', opacity: 0 },
  in: { y: 0, opacity: 1 },
  out: { y: '-30%', opacity: 0 },
};

export const pageTransition = {
  type: 'spring',
  stiffness: 80,
  damping: 20,
};

export function PageTransition({ children }) {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      style={{ minHeight: '100dvh' }}
    >
      {children}
    </motion.div>
  );
}
