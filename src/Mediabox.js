import React, { useRef, useState } from "react";
import "./App.scss";
import Mediaform from "./Mediaform";
import ReactPlayer from "react-player";
import IconButton from "@material-ui/core/Button";
import ImageIcon from "@material-ui/icons/Image";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import AudiotrackIcon from "@material-ui/icons/Audiotrack";
import TextFieldsIcon from "@material-ui/icons/TextFields";

function Mediabox(props) {
  const [mediaURL, setMediaURL] = useState(props.url || "");
  const [error, setError] = useState("");
  const [content, setContent] = useState(props.contentType || "");
  const [mode, setMode] = useState(props.mode || "EDIT");

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
    <React.Fragment>
      {mode === "EDIT" && (
        <Mediaform setMode={setMode} setContent={setContent} />
      )}
      {mode === "IMAGE" && (
        <img
          width="100%"
          height="100%"
          src={content}
          alt={"Try another source"}
        ></img>
      )}
      {mode === "VIDEO" && (
        <ReactPlayer
          width="100%"
          height="100%"
          url={content}
          controls
          muted
          config={{
            youtube: {
              playerVars: { showinfo: 1 },
            },
          }}
        />
      )}
      {mode === "AUDIO" && (
        <ReactPlayer
          width="100%"
          height="100%"
          url={content}
          controls
          muted
          config={{
            youtube: {
              playerVars: { showinfo: 1 },
            },
          }}
        />
      )}
      {mode === "TEXT" && <div>{content}</div>}
    </React.Fragment>
  );
}

export default Mediabox;
