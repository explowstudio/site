import Link from "next/link";
import { InstagramLogo } from "@phosphor-icons/react";

import { IconButton } from "@/ui";
import { LinkedInLogo, MediumLogo } from "@/ui/_icons";

import * as S from "./SocialButtonGroup.styles";

export function SocialButtonGroup() {
  return (
    <S.Container>
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
        href="https://www.instagram.com/explow.studio/"
        target="_blank"
      >
        <MediumLogo size={20} />
      </IconButton>
    </S.Container>
  );
}
