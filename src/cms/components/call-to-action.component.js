import React from "react"
import PropTypes from "prop-types"

// import { SmartLink } from "./smart-link.component"

export const CallToAction = ({ url, children, align, bgColor, ...other }) => {
  const style = {
    borderRadius: "5px",
    textDecoration: "none",
    display: "inline-block",
    padding: "1.5em 2.5em",
    backgroundColor: bgColor ? bgColor : "rebeccaPurple",
    color: "white",
  }
  const link = (
    <a to={url} style={style} {...other}>
      {children}
    </a>
  )

  return align === "center" ? (
    <span style={{ display: "flex", justifyContent: "center" }}>{link}</span>
  ) : (
    link
  )
}

CallToAction.propTypes = {
  url: PropTypes.string,
  align: PropTypes.string,
}
