import { ElementType, ReactNode } from "react";
import { Target, TargetAndTransition, motion } from "framer-motion";

type Direction = "horizontal" | "vertical";

type Props = {
  children: ReactNode;
  duration?: number;
  delay?: number;
  initial?: Target;
  animate?: TargetAndTransition;
  direction?: Direction;
  component?: ElementType;
};

export function ProgressiveExpansion({
  children,
  duration = 0.8,
  delay = 0,
  initial = {},
  animate = {},
  direction = "horizontal",
  component = "div",
  ...rest
}: Props) {
  const MotionComponent = motion(component);
  const cssKey = direction === "horizontal" ? "width" : "height";

  return (
    <MotionComponent
      initial={{ [cssKey]: 0, ...initial }}
      animate={{ [cssKey]: "100%", ...animate }}
      transition={{ duration, delay }}
      {...rest}
    >
      {children}
    </MotionComponent>
  );
}

ProgressiveExpansion.WhileInView = function WhileInView({
  children,
  duration = 0.8,
  delay = 0,
  initial = {},
  animate = {},
  direction = "horizontal",
  component = "div",
  ...rest
}: Props) {
  const MotionComponent = motion(component);
  const cssKey = direction === "horizontal" ? "width" : "height";

  return (
    <MotionComponent
      initial={{ [cssKey]: 0, ...initial }}
      whileInView={{ [cssKey]: "100%", ...animate }}
      viewport={{ once: true }}
      transition={{ duration, delay }}
      {...rest}
    >
      {children}
    </MotionComponent>
  );
};
