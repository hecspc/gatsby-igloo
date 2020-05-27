import React from "react"
import DefaultPageTemplate from "../../page-templates/default-page.template"
import CatchError  from "../catch-error.component"

export const DefaultPagePreview = ({ entry }) => (
 
    <DefaultPageTemplate {...entry.getIn(["data"]).toJS()} isPreview={true} />
 
)