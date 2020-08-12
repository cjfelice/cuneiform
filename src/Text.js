import React, { useState, useEffect } from "react";
import html from "react-inner-html";
import ReactHtmlParser, {
  processNodes,
  convertNodeToElement,
  htmlparser2,
} from "react-html-parser";
import { Card } from "@material-ui/core";

function Text(props) {
  const text = props.content;

  return <div>{ReactHtmlParser(props.content)} </div>;
}

export default Text;
