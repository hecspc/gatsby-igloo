import React from "react"
import { MDXProvider } from "@mdx-js/react"

import {
  CMS_COMPONENTS,
  CMS_SHORTCODES,
} from "../cms/cms-components.constants"

import { RenderMarkdown } from '../cms/render-markdown.component'


export const DefaultPageTemplate = ({ title, body, children }) => {
  return (
    <article>
     
      {/* If children should be used instead of body, body will be empty, so it's safe to have both */}
      <RenderMarkdown md={body} />
      {/* Include children to support any normal MDX files in the project */}
      <MDXProvider components={{ ...CMS_COMPONENTS, ...CMS_SHORTCODES }}>
        {children}
      </MDXProvider>
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
