module.exports = {
  title: "AWS S3 Doc",
  tagline: "AWS S3 made simple with Docusaurus and DocSearch.",
  url: "https://aws-doc.algolia.com",
  baseUrl: "/",
  favicon: "img/favicon.ico",
  organizationName: "algolia", // Usually your GitHub org/user name.
  projectName: "aws-docsearch", // Usually your repo name.
  themeConfig: {
    navbar: {
      title: "S3 Doc",
      logo: {
        alt: "AWS S3 Doc Logo",
        src: "img/logo.svg"
      },
      links: [
        { to: "docs/Welcome", label: "Docs", position: "left" },
        {
          href: "https://github.com/algolia/aws-docsearch",
          label: "GitHub",
          position: "right"
        }
      ]
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Welcome",
              to: "docs/Welcome"
            }
          ]
        },
        {
          title: "Community",
          items: [
            {
              label: "Stack Overflow",
              href: "https://stackoverflow.com/questions/tagged/docsearch"
            },
            {
              label: "Discord",
              href: "https://discord.gg/tXdr5mP"
            },
            {
              label: "Apply",
              href: "https://docsearch.algolia.com/apply"
            },
          ]
        },
        {
          title: "Social",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/algolia/aws-docsearch"
            },
            {
              label: "Twitter",
              href: "https://twitter.com/docsearch_"
            }
          ]
        }
      ],
      copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`
    }
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl:
            "https://github.com/algolia/aws-docsearch/edit/master/website/"
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css")
        }
      }
    ]
  ]
};