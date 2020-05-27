import React from "react"
import { MDXProvider } from "@mdx-js/react"

import {
  CMS_COMPONENTS,
  CMS_SHORTCODES,
} from "../cms/cms-components.constants"

import { RenderMarkdown } from '../cms/render-markdown.component'

import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

import igloo from '../theme/igloo'

export const DefaultPageTemplate = ({ title, body, children }) => {
   let theme = createMuiTheme(igloo);
   theme = responsiveFontSizes(theme);
  return (
    <article>
     <ThemeProvider theme={theme}>
      {/* If children should be used instead of body, body will be empty, so it's safe to have both */}
      <RenderMarkdown md={body} />
      {/* Include children to support any normal MDX files in the project */}
      <MDXProvider components={{ ...CMS_COMPONENTS, ...CMS_SHORTCODES }}>
        {children}
      </MDXProvider>
      </ThemeProvider>
    </article>
  )
}

const DefaultPage = ({ pageContext, ...props }) => {
  return (
    <DefaultPageTemplate
      {...pageContext}
      {...props}
      isPreview={false}
    />
  )
}

export default DefaultPage
