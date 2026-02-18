import { useRef } from "react";
import { motion, useInView } from "framer-motion";

/**
 * FadeIn — animates children into view on scroll
 * Props: delay, className, y (vertical offset)
 */
export const FadeIn = ({ children, delay = 0, className = "", y = 40 }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.9, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

/**
 * GoldLine — a thin horizontal gold divider
 */
export const GoldLine = ({ style = {} }) => (
  <div
    style={{
      height: 1,
      background: "linear-gradient(to right, transparent, rgba(184,147,90,0.4), transparent)",
      ...style,
    }}
  />
);

/**
 * GoldAccent — a short gold bar used above section headings
 */
export const GoldAccent = ({ style = {} }) => (
  <div
    style={{
      width: 48,
      height: 2,
      background: "var(--gold)",
      marginBottom: 24,
      ...style,
    }}
  />
);
