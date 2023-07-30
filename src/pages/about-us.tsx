import { Grid } from "@/ui";
import { DefaultLayout, Faq } from "@/layouts";

import {
  Companies,
  Introduction,
  OurCulture,
  OurTeam,
  WhatWeDoForYou,
} from "@/features/about-us";

export default function AboutUs() {
  return (
    <DefaultLayout>
      <Introduction />
      <Companies />
      <OurCulture />
      <OurTeam />
      {/* <WhatWeDoForYou /> */}
      <Grid as="section">
        <Faq />
      </Grid>
    </DefaultLayout>
  );
}
