import React from "react"
import DefaultPageTemplate from "../../page-templates/default-page.template"

export const DefaultPagePreview = ({ entry }) => (
 
    <DefaultPageTemplate {...entry.getIn(["data"]).toJS()} isPreview={true} />
 
)