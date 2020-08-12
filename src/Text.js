import React, { useState, useEffect } from "react";
import html from "react-inner-html";

function Text(props) {
  const text = props.content;

  return <div {...html(props.content)} />;
}

export default Text;
