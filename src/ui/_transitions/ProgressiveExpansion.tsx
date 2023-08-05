import { Target, TargetAndTransition, motion } from "framer-motion";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  duration?: number;
  delay?: number;
  initial?: Target;
  animate?: TargetAndTransition;
};

export function ProgressiveExpansion({
  children,
  duration = 0.8,
  delay = 0,
  initial = {},
  animate = {},
  ...rest
}: Props) {
  return (
    <motion.div
      initial={{ width: 0, ...initial }}
      animate={{ width: "100%", ...animate }}
      transition={{ duration, delay }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

ProgressiveExpansion.WhileInView = function WhileInView({
  children,
  duration = 0.8,
  delay = 0,
  initial = {},
  animate = {},
  ...rest
}: Props) {
  return (
    <motion.div
      initial={{ width: 0, ...initial }}
      whileInView={{ width: "100%", ...animate }}
      viewport={{ once: true }}
      transition={{ duration, delay }}
      {...rest}
    >
      {children}
    </motion.div>
  );
};
