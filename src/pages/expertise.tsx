import { SEO } from "@/lib";
import { ExpertiseLayout } from "@/layouts";
import { WhatWeDoForYou } from "@/features/about-us";

export default function Expertise() {
  return (
    <>
      <SEO title="Explow | Studio de design e tecnologia" />
      <ExpertiseLayout>
        <WhatWeDoForYou />
      </ExpertiseLayout>
    </>
  );
}
