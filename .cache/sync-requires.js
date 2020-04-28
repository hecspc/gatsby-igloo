const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/jackbehar/Downloads/gatsby-site/gatsby-igloo/.cache/dev-404-page.js"))),
  "component---node-modules-gatsby-theme-emulsify-src-components-templates-layout-js": hot(preferDefault(require("/Users/jackbehar/Downloads/gatsby-site/gatsby-igloo/node_modules/gatsby-theme-emulsify/src/components/Templates/layout.js")))
}

