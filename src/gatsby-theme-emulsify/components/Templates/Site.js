import React from "react";
import { MDXRenderer } from "gatsby-plugin-mdx";
/** @jsx jsx */
import { jsx } from "theme-ui";

import Sidebar from "gatsby-theme-emulsify/src/components/Organisms/Sidebar/Sidebar.component";
import Tabs from "gatsby-theme-emulsify/src/components/Organisms/Tabs/Tabs.component";



import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import { StylesProvider } from '@material-ui/core/styles';

import igloo from "../../../theme/igloo";
import Container from '@material-ui/core/Container';
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import Box from "@material-ui/core/Box";
import MenuIcon from "@material-ui/icons/Menu";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import "gatsby-theme-emulsify/src/components/Templates/site.css";
import "gatsby-theme-emulsify/src/components/Templates/main.css";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    // padding: theme.spacing(3),
    paddingTop: 0,
  },
}));

function ResponsiveDrawer({
  title,
  pageTitle,
  body,
  docPages,
  designSystems,
  id,
  menu,
  parentDirectory,
  collection,
}) {
  const classes = useStyles();
  let theme = createMuiTheme(igloo);
  theme = responsiveFontSizes(theme);

  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  let tabs = docPages
    .filter(
      (docPage) =>
        docPage.node.fields &&
        docPage.node.fields.parentDir === parentDirectory &&
        docPage.node.frontmatter.tab
    )
    .sort(function (a, b) {
      return a.node.frontmatter.tabOrder - b.node.frontmatter.tabOrder;
    });

  return (
    <StylesProvider injectFirst>

    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className={classes.root}>
        <Hidden smUp implementation="css">
          <AppBar position="fixed" className={classes.appBar} color="secondary">
            <Toolbar>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                className={classes.menuButton}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" noWrap>
                {title}
              </Typography>
            </Toolbar>
          </AppBar>
        </Hidden>

        <nav className={classes.drawer}>
          {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
          <Hidden smUp implementation="css">
            <Drawer
              // container=""
              variant="temporary"
              anchor={theme.direction === "rtl" ? "right" : "left"}
              open={mobileOpen}
              onClose={handleDrawerToggle}
              classes={{
                paper: classes.drawerPaper,
              }}
              ModalProps={{
                keepMounted: true, // Better open performance on mobile.
              }}
            >
              <Sidebar
                id={id}
                pages={docPages}
                siteTitle={title}
                // toggleOpen={toggleOpen}
                menu={menu}
                collection={collection}
                designSystems={designSystems}
              />
            </Drawer>
          </Hidden>

          <Hidden xsDown implementation="css">
            <Drawer
              classes={{
                paper: classes.drawerPaper,
              }}
              variant="permanent"
              open
            >
              <Sidebar
                id={id}
                pages={docPages}
                siteTitle={title}
                // toggleOpen={toggleOpen}
                menu={menu}
                collection={collection}
                designSystems={designSystems}
              />
            </Drawer>
          </Hidden>
        </nav>
       
        <main className={classes.content}>
          <Hidden smUp implementation="css">
            <div className={classes.toolbar}>toolbar</div>
          </Hidden>
          <div
            className="main-title"
            sx={{
              background: "#0a74c7",
              color: "#ffffff",
              lineHeight: "1.2",
              mb: 0,
              marginTop: 0,
              // margin: "0 -24px",
              px: [8, null, 8],
              py: [8, null, 16],
              pb: [8, null, 8],
            }}
          >
            
            <Typography variant="h2">{pageTitle}</Typography>
            {/* <Box mt={1}>
              <Typography variant="h5">
                Buttons make common actions and navigation easy to perform.
              </Typography>
            </Box> */}
          </div>
          <AppBar
            position="sticky"
            sx={{
              padding: "0 24px",
            }}
          >
            {tabs.length ? <Tabs tabs={tabs} id={id} /> : null}
          </AppBar>
          <Container>
          <Box p={8} pt={4}>
            <MDXRenderer>{body}</MDXRenderer>
          </Box>
          </Container>
        </main>
        
      </div>
    </ThemeProvider>
    </StylesProvider>
  );
}

export default ResponsiveDrawer;
