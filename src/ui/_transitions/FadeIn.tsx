import { Target, TargetAndTransition, motion } from "framer-motion";
import { ElementType, ReactNode } from "react";

type Props = {
  children: ReactNode;
  duration?: number;
  delay?: number;
  initial?: Target;
  animate?: TargetAndTransition;
  viewport?: {
    once?: boolean;
    margin?: string;
    amount?: "some" | "all" | number;
  };
  component?: ElementType;
};

export function FadeIn({
  children,
  duration = 0.8,
  delay = 0,
  initial = {},
  animate = {},
  component = "div",
  ...rest
}: Props) {
  const MotionComponent = motion(component);

  return (
    <MotionComponent
      initial={{ opacity: 0, ...initial }}
      animate={{ opacity: 1, ...animate }}
      transition={{ duration, delay }}
      {...rest}
    >
      {children}
    </MotionComponent>
  );
}

FadeIn.WhileInView = function WhileInView({
  children,
  duration = 0.8,
  delay = 0,
  initial = {},
  animate = {},
  component = "div",
  viewport,
  ...rest
}: Props) {
  const MotionComponent = motion(component);

  return (
    <MotionComponent
      initial={{ opacity: 0, ...initial }}
      whileInView={{ opacity: 1, ...animate }}
      transition={{ duration, delay }}
      viewport={{ once: true, ...viewport }}
      {...rest}
    >
      {children}
    </MotionComponent>
  );
};
