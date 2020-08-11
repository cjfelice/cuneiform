import React from "react";
import "./Workspace.scss";
import Canvas from "./Canvas";
import Button from "@material-ui/core/Button";
import { getThemeProps } from "@material-ui/styles";

function Landcard(props) {
  return (
    <div className="landcard">
      Welcome to Chimera.
      <div>Create something.</div>Create something... weird.
      <Button
        onClick={() => props.getStarted()}
        style={{ marginLeft: 180 }}
        variant="contained"
        color="secondary"
      >
        Get Started
      </Button>
      <img
        src="https://i.imgur.com/6YtyiMy.png"
        alt="tree"
        className="chimera"
      ></img>
    </div>
  );
}

export default Landcard;
