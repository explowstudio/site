import { Grid } from "@/ui";
import { DefaultLayout, Faq } from "@/layouts";

import { Companies, Introduction, OurTeam } from "@/features/about-us";
import { SEO } from "@/lib";

export default function AboutUs() {
  return (
    <>
      <SEO
        title="Explow | Design e tecnologia"
        description="Conheça o time que vai ser seu parceiro nos negócios"
      />
      <DefaultLayout>
        <Introduction />
        <Companies />
        <OurTeam />
        <Grid as="section">
          <Faq />
        </Grid>
      </DefaultLayout>
    </>
  );
}
