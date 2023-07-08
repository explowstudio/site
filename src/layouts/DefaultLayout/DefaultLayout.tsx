import { ReactNode } from "react";

import { Header } from "./Header";

type Props = {
  children: ReactNode;
};

export function DefaultLayout({ children }: Props) {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
}
