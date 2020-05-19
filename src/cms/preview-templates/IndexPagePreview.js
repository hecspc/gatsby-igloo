import React from 'react'
import PropTypes from 'prop-types'
// import { IndexPageTemplate } from '../../templates/index-page'
import MDX from "@mdx-js/runtime"

import { RenderMarkdown } from '../render-markdown.component'

const IndexPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(['data']).toJS()

  if (data) {
    console.log(data)
    return (
      // <IndexPageTemplate
      //   image={getAsset(data.image)}
      //   title={data.title}
      //   heading={data.heading}
      //   subheading={data.subheading}
      //   description={data.description}
      //   intro={data.intro || { blurbs: [] }}
      //   mainpitch={data.mainpitch || {}}
      // />
      <>
      <p>YO!</p>
      <RenderMarkdown
            md={data.body}
          />
      </>
    )
  } else {
    return <div>Loading...</div>
  }
}

IndexPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default IndexPagePreview
