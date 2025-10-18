import { motion, Variants } from 'framer-motion';
import React from 'react';

type Props = React.PropsWithChildren<{
  delay?: number;
  className?: string;
}>;

const variants: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0 },
};

export default function Reveal({ children, delay = 0.05, className }: Props) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, delay }}
      variants={variants}
    >
      {children}
    </motion.div>
  );
}
