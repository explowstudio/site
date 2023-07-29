import { Grid } from "@/ui";
import { DefaultLayout, Faq } from "@/layouts";

import { Introduction, WhatWeDoForYou } from "@/features/about-us";
import { Companies } from "@/features/about-us/Companies";

export default function AboutUs() {
  return (
    <DefaultLayout>
      <Introduction />
      <Companies />
      <WhatWeDoForYou />
      <Grid as="section">
        <Faq />
      </Grid>
    </DefaultLayout>
  );
}
