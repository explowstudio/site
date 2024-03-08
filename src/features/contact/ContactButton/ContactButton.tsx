import NextLink from "next/link";
import { useRouter } from "next/router";

import { ArrowRight } from "@phosphor-icons/react";

import { Button, ButtonProps } from "@/ui";
import { useDispatchEvent } from "@/lib";

type Props = {
  variant?: ButtonProps["variant"];
  css?: ButtonProps["css"];
} & Omit<ButtonProps, "as">;

export function ContactButton(props: Props) {
  const { pathname } = useRouter();

  const { dispatchEvent } = useDispatchEvent();

  function handleFocus() {
    dispatchEvent({
      name: "contact_focus_link",
      category: `Focus in ${pathname}`,
      label: "Conheça a Explow",
    });
  }

  function handleClick() {
    dispatchEvent({
      name: "contact_click_link",
      category: `Redirect from ${pathname}`,
      label: "Conheça a Explow",
    });
  }

  return (
    <Button
      as={NextLink as any}
      href="/contact"
      onFocus={handleFocus}
      onClick={handleClick}
      {...props}
    >
      Conheça a Explow
      <ArrowRight size={18} weight="bold" />
    </Button>
  );
}
