import React from "react";
import PropTypes from "prop-types";
// import { IndexPageTemplate } from '../../templates/index-page'
import MDX from "@mdx-js/runtime";
import { CMS_COMPONENTS, CMS_SHORTCODES } from "../cms-components.constants";


const IndexPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(["data"]).toJS();
console.log(entry.getIn(["data"]));

  if (data) {
    console.log(data);
    return (
      <>
        <MDX components={{ ...CMS_COMPONENTS, ...CMS_SHORTCODES }}>
          {data.body}
        </MDX>
        -- using template -- 
        {/* <RenderMarkdown
            md={data.body}
          /> */}
      </>
    );
  } else {
    return <div>Loading...</div>;
  }
};

IndexPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
};

export default IndexPagePreview;
