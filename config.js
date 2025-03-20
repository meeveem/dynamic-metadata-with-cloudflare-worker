export const config = {
  domainSource: "https://54158bdd-39f4-434b-a793-0573aaee4bfd.weweb-preview.io", // Your WeWeb app preview link
  patterns: [
      {
          pattern: "/companies/jobs/[^/]+",
          metaDataEndpoint: "https://xd1w-wj6z-napn.e2.xano.io/api:W5v_PiaD/metadata/jobs/{slug}"
      },
      {
          pattern: "/find-a-startup/[^/]+",
          metaDataEndpoint: "https://xd1w-wj6z-napn.e2.xano.io/api:W5v_PiaD/metadata/companies/{slug}"
      }
      // Add more patterns and their metadata endpoints as needed
  ]
};
