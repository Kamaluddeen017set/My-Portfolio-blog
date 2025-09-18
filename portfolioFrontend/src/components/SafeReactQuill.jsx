// SafeReactQuill.jsx
import React, { forwardRef } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

// Wrap ReactQuill with forwardRef so it doesn't use findDOMNode
const SafeReactQuill = forwardRef((props, ref) => {
  return <ReactQuill {...props} ref={ref} />;
});

export default SafeReactQuill;
