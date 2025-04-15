import { SEO } from "@/lib";
import { ExpertiseLayout, Faq } from "@/layouts";
import { WhatWeDoForYou } from "@/features/about-us";
import { Grid } from "@/ui";

export default function Expertise() {
  return (
    <>
      <SEO
        title="Explow | Design e tecnologia"
        description="Transformamos problemas em soluções singulares através do Design e tecnologia"
      />
      <ExpertiseLayout>
        <WhatWeDoForYou />
        <Grid as="section" style={{ marginBlock: "120px" }}>
          <Faq />
        </Grid>
      </ExpertiseLayout>
    </>
  );
}
