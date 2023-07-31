import Head from "next/head";

import { DefaultLayout, Faq } from "@/layouts";
import {
  Introduction,
  OurCustomers,
  OurMethodology,
  OurPartners,
  OurServices,
  OurStory,
  Testimonials,
  WhyWeAre,
} from "@/features/home";
import { Grid } from "@/ui";
import { SEO } from "@/lib";

export default function Home() {
  return (
    <>
      <SEO title="Explow | Studio design e tecnologia" />
      <DefaultLayout>
        <Introduction />
        <OurStory />
        <OurPartners />
        <Testimonials />
        <OurServices />
        <OurMethodology />
        <WhyWeAre />
        <OurCustomers />
        <Grid as="section">
          <Faq />
        </Grid>
      </DefaultLayout>
    </>
  );
}
