export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "619ce8c3678a83fb65334857",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-b8x3z4f1",
                  apiId: "06c3938a-0810-4bc7-9ee6-fddd5254e8f1",
                },
                {
                  buildHookId: "619ce8c3ccb531fe3d7905b5",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-b61rg3k1",
                  apiId: "09cc0ecc-b1ad-49b4-9ddc-267ca43bd406",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/yvoalen/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-b61rg3k1.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
