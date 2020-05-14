import PropTypes from "prop-types";
import { Component } from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
/** @jsx jsx */
import { jsx, useColorMode } from "theme-ui";

import "gatsby-theme-emulsify/src/components/Organisms/Sidebar/sidebar.css";
import "./wu_sidebar.css";

import CloseIcon from "gatsby-theme-emulsify/assets/close.svg";
import DownIcon from "gatsby-theme-emulsify/assets/down.svg";
import MenuIcon from "gatsby-theme-emulsify/assets/menu-bars.svg";
import MainMenu from "gatsby-theme-emulsify/src/components/Molecules/Menus/MainMenu.component";
import { withTheme } from '@material-ui/core/styles';

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
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
  },
};
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
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
}));

/**
 * Component that renders the sidebar.
 */
class Sidebar extends Component {
  
  static propTypes = {
    siteTitle: PropTypes.string
  };

  static defaultProps = {
    siteTitle: ``
  };

  state = { isSidebarOpen: false };

  toggleSidebar = () => {
    this.setState(prevState => ({
      isSidebarOpen: !prevState.isSidebarOpen
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
      colorMode
    } = this.props;
    return (
      <div
        className="sidebar"
        sx={
          colorMode === "default"
            ? {
                backgroundColor: "muted",
                color: "primary",
                flex: "0 1 28%"
              }
            : {
                backgroundColor: "secondary",
                color: "background",
                flex: "0 1 28%"
              }
        }
      >
        <Button variant="contained">test</Button>
        <div
          className="sidebar__inner"
          sx={{
            fontFamily: "heading"
          }}
        >
          <div
            className="sidebar__header"
            sx={{
              px: 6
            }}
          >
            <DownIcon
              className="parent-menu__toggle parent-menu__toggle--open"
              onClick={this.open}
              aria-label="Toggle Parent Menu"
              sx={{
                fill: "background",
                padding: 1
              }}
            />
            <h3
              className="sidebar__heading"
              sx={{
                fontSize: 7,
                margin: ["0 auto 0 0", null, "3rem auto 3rem 0"]
              }}
            >
              <Link
                to="/"
                sx={{
                  color: "primary"
                }}
              >
                {siteTitle}
              </Link>
            </h3>
            
            <MenuIcon
              className="sidebar__toggle"
              onClick={this.toggleSidebar}
              aria-label="Toggle Sidebar Menu"
              sx={{
                fill: "background",
                height: "2rem",
                paddingLeft: 0
              }}
            />
          </div>
          <nav
            className={
              this.state.isSidebarOpen
                ? "sidebar__nav sidebar__nav--open"
                : "sidebar__nav"
            }
            sx={{
              "& .main-menu > .menu-item": {
                border: "none",
                px: 6,
                py: 2,
                textTransform: "uppercase"
              },
              ".menu-icon": {
                fill: "primary",
                float: "none",
                height: "21px",
                marginLeft: "9px",
                top: "5px",
              },
              ".main-menu > .menu-item--open": {
                backgroundColor: "background",
                // borderLeft: "6px solid",
                pb: 4,
                "& > span": {
                  color: colorMode === "dark" ? "text" : "primary",
                  display: "block",
                  mb: 2
                }
              },
              ".menu-item--open .menu-icon--up": {
                display: "inline-block"
              },
              ".menu-child": {
                margin: 0,
              },
              ".menu-link": {
                color: "primary",
                fontSize: 1,
                fontWeight: "600",
                textDecoration: "none",
                textTransform: "none"
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
          {/* <footer
            className="sidebar__footer"
            sx={{
              fontSize: "0.65rem",
              py: 3,
              mx: 4,
              borderTop: theme => [null, null, `1px solid ${theme.colors.background}`]
            }}
          >
            Design System Powered by{" "}
            <a
              href="http://emulsify.info"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                color: "primary"
              }}
            >
              <strong>Emulsify</strong>
            </a>
          </footer> */}
        </div>
      </div>
    );
  }
}

export default Sidebar = withTheme(withColorValue(Sidebar));
