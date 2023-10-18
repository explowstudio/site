import { SEO } from "@/lib";
import { ExpertiseLayout } from "@/layouts";
import { WhatWeDoForYou } from "@/features/about-us";

export default function Expertise() {
  return (
    <>
      <SEO
        title="Explow | Design e tecnologia"
        description="Transformamos problemas em soluções singulares através do Design e tecnologia"
      />
      <ExpertiseLayout>
        <WhatWeDoForYou />
      </ExpertiseLayout>
    </>
  );
}
