import { Grid } from "@/ui";
import { DefaultLayout, Faq } from "@/layouts";

import { Introduction, WhatWeDoForYou } from "@/features/about-us";

export default function AboutUs() {
  return (
    <DefaultLayout>
      <Introduction />
      <WhatWeDoForYou />
      <Grid as="section">
        <Faq />
      </Grid>
    </DefaultLayout>
  );
}
