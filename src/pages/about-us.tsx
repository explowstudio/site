import { Grid } from "@/ui";
import { DefaultLayout, Faq } from "@/layouts";

import { Introduction } from "@/features/about-us";

export default function AboutUs() {
  return (
    <DefaultLayout>
      <Introduction />
      <Grid as="section">
        <Faq />
      </Grid>
    </DefaultLayout>
  );
}
