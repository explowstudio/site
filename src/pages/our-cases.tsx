import { Grid } from "@/ui";
import { DefaultLayout, Faq } from "@/layouts";

import { SEO } from "@/lib";
import { OurCustomers } from "@/features/home";

export default function Cases() {
  return (
    <>
      <SEO
        title="Explow | Design e tecnologia"
        description="Conheça o time que vai ser seu parceiro nos negócios"
      />
      <DefaultLayout color="white">
        <OurCustomers />
        <Grid as="section">
          <Faq />
        </Grid>
      </DefaultLayout>
    </>
  );
}
