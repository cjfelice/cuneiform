import React, { useRef, useState } from "react";
import "./App.scss";
import Button from "./Button";
import ReactPlayer from "react-player";
import IconButton from "@material-ui/core/Button";
import ImageIcon from "@material-ui/icons/Image";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import AudiotrackIcon from "@material-ui/icons/Audiotrack";
import TextFieldsIcon from "@material-ui/icons/TextFields";

function Mediabox(props) {
  const [mediaURL, setMediaURL] = useState(props.url || "");
  const [error, setError] = useState("");
  const [contentType, setContentType] = useState(props.contentType || false);

  const onSave = () => {
    console.log("hi");
  };

  const validate = () => {
    if (mediaURL === "") {
      setError("url cannot be blank");
      return;
    }
    setError("");
    onSave(mediaURL);
  };

  return (
    <div className="selection-box">
      <IconButton color="primary" aria-label="image">
        <ImageIcon fontSize="large" />
      </IconButton>
      <IconButton color="primary" aria-label="video">
        <VideoCallIcon fontSize="large" />
      </IconButton>
      <IconButton color="primary" aria-label="add an alarm">
        <AudiotrackIcon fontSize="large" />
      </IconButton>
      <IconButton color="primary" aria-label="add an alarm">
        <TextFieldsIcon fontSize="large" />
      </IconButton>
    </div>
  );
}

export default Mediabox;
