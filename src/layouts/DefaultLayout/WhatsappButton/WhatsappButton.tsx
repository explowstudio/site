import { ChatTeardrop } from "@phosphor-icons/react";

import * as S from "./WhatsappButton.styles";

export function WhatsAppButton() {
  return (
    <S.Whatsapp
      href="https://api.whatsapp.com/send?phone=5511970419304"
      target="_blank"
    >
      <ChatTeardrop weight="fill" size={30} />
    </S.Whatsapp>
  );
}
