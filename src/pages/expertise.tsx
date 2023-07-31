import { Grid } from "@/ui";
import { Faq } from "@/layouts";

import { ContactLayout } from "@/layouts/ContactLayout";
import { WhatWeDoForYou } from "@/features/about-us";

export default function Expertise() {
  return (
    <ContactLayout>
      <WhatWeDoForYou />
      <Grid as="section">
        <Faq />
      </Grid>
    </ContactLayout>
  );
}
