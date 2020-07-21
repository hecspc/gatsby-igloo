// import React from "react";
// import PropTypes from "prop-types";
// // import { IndexPageTemplate } from '../../templates/index-page'
// import MDX from "@mdx-js/runtime";
// import { CMS_COMPONENTS, CMS_SHORTCODES } from "../cms-components.constants";

// const IndexPagePreview = ({ entry, getAsset }) => {
//   const data = entry.getIn(["data"]).toJS();
//   if (data) {
//     console.log(data);
//     return (
//       <>
//         <MDX components={{ ...CMS_COMPONENTS, ...CMS_SHORTCODES }}>
//           {data.body}
//         </MDX>
//         -- using template --
//         {/* <RenderMarkdown
//             md={data.body}
//           /> */}
//       </>
//     );
//   } else {
//     return <div>Loading...</div>;
//   }
// };

// IndexPagePreview.propTypes = {
//   entry: PropTypes.shape({
//     getIn: PropTypes.func,
//   }),
//   getAsset: PropTypes.func,
// };

// export default IndexPagePreview;

import { CssBaseline, jssPreset, StylesProvider } from "@material-ui/core";
import { create } from "jss";
import React from "react";
// import { IndexPageTemplate } from "../../templates/index-page";
import Button from "@material-ui/core/Button";
import MDX from "@mdx-js/runtime";
import { CMS_COMPONENTS, CMS_SHORTCODES } from "../cms-components.constants";
import { DefaultPageTemplate } from '../../page-templates/default-page.template';

class IndexPagePreview extends React.Component {
  state = {
    ready: false,
  };

  handleRef = (ref) => {
    const ownerDocument = ref ? ref.ownerDocument : null;
    this.setState({
      ready: true,
      jss: create({
        ...jssPreset(),
        insertionPoint: ownerDocument
          ? ownerDocument.querySelector("#demo-frame-jss")
          : null,
      }),
      sheetsManager: new Map(),
    });
  };

  render() {
    const { entry } = this.props;
    const data = entry.getIn(["data"]).toJS();

    if (data) {
      // const { greet, testimonials } = data;
      return (
        <React.Fragment>
          <div id="demo-frame-jss" ref={this.handleRef} />
          {this.state.ready ? (
            <StylesProvider
              jss={this.state.jss}
              sheetsManager={this.state.sheetsManager}
            >
              <CssBaseline />
              <DefaultPageTemplate body={data.body}/> 

              {/* <MDX components={{ ...CMS_COMPONENTS, ...CMS_SHORTCODES }}>
                {data.body}
              </MDX> */}

            </StylesProvider>
          ) : null}
        </React.Fragment>
      );
    } else {
      return <div>Loading...</div>;
    }
  }
}

export default IndexPagePreview;
