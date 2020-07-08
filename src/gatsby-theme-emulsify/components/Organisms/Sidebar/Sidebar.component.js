import React from "react";
import PropTypes from "prop-types";
import { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
/** @jsx jsx */
import { jsx, useColorMode } from "theme-ui";

import "gatsby-theme-emulsify/src/components/Organisms/Sidebar/sidebar.css";

import MainMenu from "gatsby-theme-emulsify/src/components/Molecules/Menus/MainMenu.component";
import { withTheme } from "@material-ui/core/styles";
import logo from "./IglooLogo.png"

const Link = process.env.STORYBOOK_ENV
  ? ({ children }) => children
  : require("gatsby").Link;

function withColorValue(Component) {
  return function WrappedComponent(props) {
    const [colorMode] = useColorMode();
    return <Component {...props} colorMode={colorMode} />;
  };
}

const drawerWidth = 240;
const styles = {
  root: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "white",
    height: 48,
    padding: "0 30px",
  },
};
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
  toolbarIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 8px",
    ...theme.mixins.toolbar,
  },
}));

/**
 * Component that renders the sidebar.
 */
class Sidebar extends Component {
  static propTypes = {
    siteTitle: PropTypes.string,
  };

  static defaultProps = {
    siteTitle: ``,
  };

  state = { isSidebarOpen: false };

  toggleSidebar = () => {
    this.setState((prevState) => ({
      isSidebarOpen: !prevState.isSidebarOpen,
    }));
  };

  open = () => {
    this.props.toggleOpen();
  };

  render() {
    const {
      siteTitle,
      menu,
      id,
      collection,
      designSystems,
      colorMode,
    } = this.props;
    return (
      <>
        <div
          sx={{
            borderBottom: "#eeeeee 1px solid",
            textAlign: "center",
            padding: "15px",
            marginBottom: "40px",
          }}
        >
          <img
            src={logo}
            alt="Igloo Design System"
            sx={{
              maxWidth: "65%",
            }}
          />
        </div>

        <nav
        sx={{
          padding: "0 16px"
        }}
        className={
          this.state.isSidebarOpen
            ? "sidebar__nav sidebar__nav--open"
            : "sidebar__nav"
        }
        sx={{
          "& .main-menu > .menu-item": {
            border: "none",
            px: 4,
            py: 2,
            // textTransform: "uppercase"
            fontWeight: "normal",
            // borderBottom: "#f5f5f5 solid 1px",
            fontSize:"1.2rem",
            marginBottom: "0",
            "&:hover" :{
              background: "#f5f5f5"
                          }
          },
          ".menu-icon": {
            fill: "#2b2b2b",
            // float: "none",
            // height: "21px",
            marginLeft: "9px",
            top: "2px",
          },
          ".main-menu > .menu-item--open": {
            // backgroundColor: "#eeeeee",
            // borderLeft: "6px solid",
            color: "#2b2b2b !important",
            pb: 4,
            "& > span": {
              // color: "#2b2b2b",
              display: "block",
              mb: 2,
              // fontWeight: "bold"
            },
            "&:hover" :{
              background: "none"
                          },
          },
          ".menu-item--open .menu-icon--up": {
            display: "inline-block"
          },
          ".menu-child": {
            margin: 0,
          },
          ".menu-link": {
            // color: "primary",
            fontSize: "1rem !important",
            fontWeight: "normal",
            textDecoration: "none",
            textTransform: "capitalize !important",
            // marginBottom:"10px"
            padding: "5px 20px",
            display: "block",
          },
          ".menu-item--child": {
            // padding: "5px 20px",
            
        },
          ".menu-item--child--active": {
            fontWeight: "bold",
            textTransform: "capitalize !important",
            "&::before":{
            display: "none"
          },
          "& > a":{
            // fontWeight: "bold",
            color: "primary"
          }
          
          }
        }}
        >
          <MainMenu
            menu={menu}
            id={id}
            filter="pages"
            collection={collection}
          />
        </nav>
      </>
    );
  }
}

export default Sidebar = withTheme(withColorValue(Sidebar));
