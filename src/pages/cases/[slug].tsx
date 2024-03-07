import cases from "@/data/cases.json";
import { Introduction } from "@/features/cases";
import { DefaultLayout, Faq } from "@/layouts";
import { SEO } from "@/lib";
import { Grid } from "@/ui";

export default function CaseFromSlug() {
  const caseFromSlug = cases.compre_ou_alugue;

  return (
    <>
      <SEO
        title="Explow | Design e tecnologia"
        description="Nós somos o braço que sua empresa precisa para decolar no digital hoje"
        keywords={caseFromSlug.detail.generalInformation.tags}
      />
      <DefaultLayout>
        <Introduction />
        <Grid as="section">
          <Faq />
        </Grid>
      </DefaultLayout>
    </>
  );
}
