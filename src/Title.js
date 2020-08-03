import React, { useRef, useState } from "react";
import "./App.scss";

function Title({ text }) {
  const [state, setState] = useState(0);
  const titleContainer = useRef(null);

  const _onMouseMove = (e) => {
    const width = titleContainer.current.clientWidth;
    const height = titleContainer.current.clientHeight;
    const oX = (e.nativeEvent.offsetX / width) * 100;
    const oY = (e.nativeEvent.offsetY / height) * 100;
    setState({
      x: oX,
      y: oY,
    });
  };

  // const _onMouseOut = () => {
  //   setState({
  //     x: 0,
  //     y: 0,
  //   });
  // };

  const { x, y } = state;
  const maskStyle = {
    "--maskX": x,
    "--maskY": y,
  };

  return (
    <div
      className="titleContainer"
      onMouseMove={_onMouseMove}
      // onMouseOut={_onMouseOut}
      ref={titleContainer}
      style={maskStyle}
    >
      <div className="titleWrapper">
        <h1> {text} </h1>
      </div>
      <div className="titleWrapper cloneWrapper">
        <h1> {text} </h1>
      </div>
    </div>
  );
}

export default Title;
