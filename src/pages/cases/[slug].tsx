import cases from "@/data/cases.json";
import { GeneralInformation, Impact, Introduction } from "@/features/cases";
import { DefaultLayout, Faq } from "@/layouts";
import { SEO } from "@/lib";
import { Grid } from "@/ui";
import { GetStaticPaths, GetStaticProps } from "next";

export const getStaticPaths = (async () => {
  return {
    paths: Object.keys(cases).map((key) => {
      return {
        params: {
          slug: key,
        },
      };
    }),
    fallback: false,
  };
}) satisfies GetStaticPaths;

export const getStaticProps = (async (context) => {
  const slug = context.params?.slug as keyof typeof cases;

  const caseFromSlug = cases[slug];

  return {
    props: {
      case: caseFromSlug,
    },
  };
}) satisfies GetStaticProps;

export default function CaseFromSlug(inProps: {
  case: typeof cases.compre_ou_alugue;
}) {
  const { case: caseFromSlug } = inProps;

  return (
    <>
      <SEO
        title={`Explow | ${caseFromSlug.card.title}`}
        description={caseFromSlug.card.description}
        keywords={caseFromSlug.detail.generalInformation.tags}
      />
      <DefaultLayout color="white">
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
