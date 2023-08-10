import { useRouter } from "next/router";
import { ChatTeardrop } from "@phosphor-icons/react";

import { useDispatchEvent } from "@/lib";

import * as S from "./WhatsappButton.styles";

export function WhatsAppButton() {
  const { pathname } = useRouter();

  const { dispatchEvent } = useDispatchEvent();

  function handleFocus() {
    dispatchEvent({
      name: "whatsapp_focus_link",
      category: `Focus in ${pathname}`,
      label: "WhatsApp",
    });
  }

  function handleClick() {
    dispatchEvent({
      name: "whatsapp_click_link",
      category: `Redirect from ${pathname}`,
      label: "WhatsApp",
    });
  }

  return (
    <S.Whatsapp
      href="https://api.whatsapp.com/send?phone=5511970419304"
      target="_blank"
      onClick={handleClick}
      onFocus={handleFocus}
    >
      <ChatTeardrop weight="fill" size={30} />
    </S.Whatsapp>
  );
}
