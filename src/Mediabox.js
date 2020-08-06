import React, { useRef, useState } from "react";
import "./App.scss";
import Button from "./Button";
import ReactPlayer from "react-player";

function Mediabox(props) {
  const [mediaURL, setMediaURL] = useState(props.url || "");
  const [error, setError] = useState("");
  const [contentType, setContentType] = useState(props.contentType);

  function validate() {
    if (mediaURL === "") {
      setError("url cannot be blank");
      return;
    }
    setError("");
    // onSave(mediaURL);
  }

  return (
    <ReactPlayer
      width="100%"
      height="100%"
      url="https://www.sciencemag.org/sites/default/files/styles/article_main_large/public/cc_iStock-478639870_16x9.jpg?itok=1-jMc4Xv"
      controls
      muted
      config={{
        youtube: {
          playerVars: { showinfo: 1 },
        },
      }}
    />
  );
}

export default Mediabox;
