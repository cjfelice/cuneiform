import React, { useRef, useState, useEffect } from "react";
import "./App.scss";
import Mediaform from "./Mediaform";
import ReactPlayer from "react-player";
import Image from "./Image";
import Video from "./Video";
import Audio from "./Audio";
import IconButton from "@material-ui/core/Button";
import ImageIcon from "@material-ui/icons/Image";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import AudiotrackIcon from "@material-ui/icons/Audiotrack";
import TextFieldsIcon from "@material-ui/icons/TextFields";
import { getThemeProps } from "@material-ui/styles";

function Mediabox(props) {
  const [error, setError] = useState("");
  const [trigger, setTrigger] = useState(null);
  const [content, setContent] = useState(
    props.mediaObject ? props.mediaObject.mediaUrl : ""
  );
  const [mode, setMode] = useState(
    props.mediaObject ? props.mediaObject.mediaType : "EDIT"
  );

  const onSave = () => {
    console.log("hi");
  };
  console.log("content:", content, "mode:", mode);
  useEffect(() => {
    if (trigger !== null) {
      props.createObject(props.boxID, content, mode);
    }
  }, [trigger]);

  // const validate = () => {
  //   // if (mediaURL === "") {
  //     setError("url cannot be blank");
  //     return;
  //   }
  //   setError("");
  //   // onSave(mediaURL);
  // };

  return (
    <React.Fragment>
      {mode === "EDIT" && (
        <Mediaform
          setMode={setMode}
          setContent={setContent}
          fireTrigger={setTrigger}
        />
      )}
      {mode === "IMAGE" && <Image content={content} />}
      {mode === "VIDEO" && <Video content={content} />}
      {mode === "AUDIO" && <Audio content={content} />}
      {mode === "TEXT" && <div>{content}</div>}
    </React.Fragment>
  );
}

export default Mediabox;
