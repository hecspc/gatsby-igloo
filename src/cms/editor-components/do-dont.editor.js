const doDontEditor = props =>
  `<DoDont url="${props.url || ""}" align="center" bgColor="${props.bgColor}">${props.text || ""}</DoDont>`

export const doDontConfig = {
  // Internal id of the component
  id: "doDont",
  // Visible label
  label: "Do/Don't",
  // Fields the user need to fill out when adding an instance of the component
  fields: [
    { label: "Text", name: "text", widget: "string" },
    { label: "Link", name: "url", widget: "string" },
    {
      label: "Background Colour",
      name: "bgColor",
      widget: "select",
      options: ["crimson", "seagreen", "rebeccapurple", "midnightblue"],
      default: "rebeccapurple"
    },
  ],
  // Pattern to identify a block as being an instance of this component
  pattern: /<DoDont url="(\S+)" align="center" bgColor="(\S+)">(\S+)<\/DoDont>/g,
  // Function to extract data elements from the regexp match
  fromBlock: function(match) {
    return {
      url: match[1],
      bgColor: match[2],
      text: match[3],
    }
  },
  // Function to create a text block from an instance of this component
  toBlock: function(props) {
    return doDontEditor(props)
  },
  // Preview output for this component. Can either be a string or a React component
  // (component gives better render performance)
  toPreview: function(props) {
    return doDontEditor(props)
  },
}
