import React, { useState, useEffect } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

function Text(props) {
  const [value, setValue] = useState(props.content || "");
  const [editMode, setEditMode] = useState(props.edit || true);
  const onChange = (content) => {
    console.log("onChange", content);
  };
  useEffect(() => {
    props.createObject(props.boxID, value, "TEXT");
  }, [value]);
  var toolbarOptions = [
    ["bold", "italic", "underline"],
    ["code-block"],
    [{ size: ["small", false, "large", "huge"] }],
    [{ color: [] }, { background: [] }],
    [{ font: [] }],
    [{ align: [] }],
  ];

  return (
    <ReactQuill
      theme="snow"
      value={value}
      onChange={setValue}
      modules={{ toolbar: toolbarOptions }}
    />
  );
}

export default Text;
