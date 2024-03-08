import cases from "@/data/cases.json";
import { GeneralInformation, Impact, Introduction } from "@/features/cases";
import { DefaultLayout, Faq } from "@/layouts";
import { SEO } from "@/lib";
import { Grid } from "@/ui";

export default function CaseFromSlug() {
  const caseFromSlug = cases.compre_ou_alugue;

  return (
    <>
      <SEO
        title={`Explow | ${caseFromSlug.card.title}`}
        description={caseFromSlug.card.description}
        keywords={caseFromSlug.detail.generalInformation.tags}
      />
      <DefaultLayout>
        <Introduction />
        <GeneralInformation {...caseFromSlug.detail.generalInformation} />
        <Grid
          css={{
            display: "flex",
            flexDirection: "column",
            rowGap: "$6",
            paddingBlock: "83px",
          }}
        >
          {caseFromSlug.detail.images.map((image) => (
            <img key={image.id} src={image.source} />
          ))}
        </Grid>
        <Impact {...caseFromSlug.detail.impact} />
        <Grid as="section">
          <Faq />
        </Grid>
      </DefaultLayout>
    </>
  );
}
