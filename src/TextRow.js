import React, { useState, useEffect, useRef } from "react";
import axios from "./axios";
import { fade, makeStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/Button";
import Switch from "@material-ui/core/Switch";
import PageviewIcon from "@material-ui/icons/Pageview";
import ReactPlayer from "react-player";
import Button from "@material-ui/core/Button";
import "./Row.scss";
import { Editor } from "@tinymce/tinymce-react";

function TextRow(props) {
  const [HTML, setHTML] = useState("");

  const API_KEY = process.env.REACT_APP_CLOUD_EDIT_API_KEY;

  const handleEditorChange = (content, editor) => {
    setHTML(content);
  };

  return (
    <>
      <Editor
        initialValue="Type something to add to your canvas..."
        apiKey={API_KEY}
        init={{
          height: 300,
          menubar: false,
          plugins: [
            // "advlist autolink lists link image charmap print preview anchor",
            // "searchreplace visualblocks code fullscreen",
            // "insertdatetime media table paste code help wordcount",
          ],
          toolbar:
            " fontselect | fontsizeselect | forecolor backcolor | bold italic backcolor | \
             alignleft aligncenter alignright alignjustify | \
             bullist numlist outdent indent ",
        }}
        onEditorChange={handleEditorChange}
      />
      <Button
        onClick={() => {
          props.setContent(HTML);
          props.submitUrl();
          console.log("HTML", HTML);
        }}
      >
        Submit
      </Button>
    </>
  );
}

export default TextRow;
