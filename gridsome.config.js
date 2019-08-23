// This is where project configuration and installed plugin options are located.
// Learn more: https://gridsome.org/docs/config

module.exports = {
  siteName: "Exeter XR",
  siteUrl: `https://exeterxr.org`,
  host: "0.0.0.0",
  titleTemplate: "%s - NWA",
  siteDescription: "Exeter XR",
  plugins: [
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "blog/**/*.md",
        typeName: "BlogPost",
        resolveAbsolutePaths: true,
        remark: {
          externalLinksTarget: "_blank",
          externalLinksRel: ["nofollow", "noopener", "noreferrer"]
        }
      }
    },
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "pages/**/*.md",
        typeName: "PagePost",
        resolveAbsolutePaths: true,
        remark: {
          externalLinksTarget: "_blank",
          externalLinksRel: ["nofollow", "noopener", "noreferrer"]
        }
      }
    }
  ],
  transformers: {
    remark: {
      plugins: ["@gridsome/remark-prismjs"]
    }
  }
};
