/** @jsx jsx */
import { jsx } from "theme-ui";
import { Link } from "gatsby";

import "./tabs.css";

export default ({ tabs, id }) => (
  <nav
    className="tabs"
    sx={{
      backgroundColor: "#ffffff",
      px: 8,
      py: 0,
      pb: 0,
      margin: "0 -24px",
      // borderBottom: "#eeeeee 1px solid"
    }}
  >
    <ul>
      {tabs.map(tab => (
        <li key={tab.node.id}>
          <Link
            to={tab.node.fields.slug}
            className={tab.node.id === id ? "active" : ""}
            sx={{
              color: "#2b2b2b",
              // borderTopLeftRadius: 0,
              // borderTopRightRadius: 0,
              fontWeight: "normal",
              fontSize: "1rem",
              // marginRight: 2,
              px: 8,
              py: 2,
              pt: 13,
              borderBottom: 3,
              textDecoration: "none",
              ":hover": {
                backgroundColor: "#edf0f4",
                // borderBottom: "#edf0f4 solid 3px"
               
              },
              "&.active": {
                // backgroundColor: "background",
                color: "#0a74c7",
                borderBottom: "#0a74c7 solid 3px",
              }
            }}
          >
            {tab.node.frontmatter.tab}
          </Link>
        </li>
      ))}
    </ul>
  </nav>
);
