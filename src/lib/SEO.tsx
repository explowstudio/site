import { useEffect, useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";

type Props = {
  title: string;
  description?: string;
  keywords?: string[];
};

function useOrigin() {
  const [origin, setOrigin] = useState("");

  useEffect(() => {
    setOrigin(window.location.origin);
  }, []);

  return origin;
}

export function SEO({
  title,
  description = "Nós somos o braço que sua empresa precisa para decolar no digital hoje",
  keywords = [
    "design",
    "designer",
    "ui design",
    "ux design",
    "developer",
    "desenvolvedor",
    "front-end",
    "programador",
    "studio",
    "desenvolvedor de sites",
    "digital",
    "estratégia",
    "código",
    "aplicativo",
    "mobile",
    "back-end",
    "engenharia de software",
  ],
}: Props) {
  const { asPath } = useRouter();
  const origin = useOrigin();

  const currentUrl = `${origin}${asPath}`;

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta
        name="keywords"
        content={new Intl.ListFormat("pt-BR", {
          style: "long",
          type: "conjunction",
        }).format(keywords)}
      />
      <link rel="shortcut icon" href="/favicon.png" type="image/x-icon" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={currentUrl} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <link rel="canonical" href={currentUrl} />
    </Head>
  );
}
