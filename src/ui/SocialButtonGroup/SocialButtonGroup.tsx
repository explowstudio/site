import { ComponentProps } from "react";
import { Variants } from "framer-motion";

import Link from "next/link";
import { InstagramLogo } from "@phosphor-icons/react";

import { IconButton } from "@/ui";
import { LinkedInLogo, MediumLogo } from "@/ui/_icons";

import * as S from "./SocialButtonGroup.styles";

const parentVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

export function SocialButtonGroup(props: ComponentProps<typeof S.Container>) {
  return (
    <S.Container
      variants={parentVariants}
      initial="hidden"
      animate="show"
      {...props}
    >
      <IconButton
        as={Link}
        href="https://www.instagram.com/explow.studio/"
        target="_blank"
      >
        <InstagramLogo size={24} />
      </IconButton>

      <IconButton
        as={Link}
        href="https://www.linkedin.com/company/explow-studio/"
        target="_blank"
      >
        <LinkedInLogo size={18} />
      </IconButton>
      <IconButton
        as={Link}
        href="https://medium.com/@explowstudio"
        target="_blank"
      >
        <MediumLogo size={20} />
      </IconButton>
    </S.Container>
  );
}
