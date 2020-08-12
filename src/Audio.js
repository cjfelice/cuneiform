import React from "react";
import ReactPlayer from "react-player";

function Audio(props) {
  return (
    <iframe
      src={props.content}
      width="100%"
      height="100%"
      allowtransparency="true"
      allow="encrypted-media"
    ></iframe>
  );
}

export default Audio;
