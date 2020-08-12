import React, { forwardRef, useRef, useImperativeHandle } from "react";
import "./Workspace.scss";
import Canvas from "./Canvas";

const Workspace = forwardRef((props, ref) => {
  const addref = useRef();
  const refPasser = () => {
    addref.current.passCall();
  };

  useImperativeHandle(ref, () => ({
    passMessage() {
      refPasser();
    },
  }));

  return (
    <div className="workspace">
      <Canvas
        ref={addref}
        mediaBox={props.mediaBox}
        media={props.media}
        counter={props.counter}
      />
    </div>
  );
});

export default Workspace;
