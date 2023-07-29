import { Grid } from "@/ui";
import { DefaultLayout, Faq } from "@/layouts";

import { Introduction, OurTeam, WhatWeDoForYou } from "@/features/about-us";
import { Companies } from "@/features/about-us/Companies";

export default function AboutUs() {
  return (
    <DefaultLayout>
      <Introduction />
      <Companies />
      <OurTeam />
      <WhatWeDoForYou />
      <Grid as="section">
        <Faq />
      </Grid>
    </DefaultLayout>
  );
}
