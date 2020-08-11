import React from "react";
import Button from "@material-ui/core/Button";
import { IconButton } from "@material-ui/core";
import ShareIcon from "@material-ui/icons/Share";
import "./Workspace.scss";

function Toolbar(props) {
  return (
    <>
      <div className="toolbar2">
        <div
          style={{
            color: "white",
            marginLeft: 20,
            marginRight: 400,
            marginTop: 4,
            fontSize: 18,
            fontStyle: "Bold",
          }}
        >
          {props.canvasName}
        </div>
        <Button
          variant="contained"
          color="primary"
          style={{ color: "white", marginRight: 20 }}
        >
          EDIT
        </Button>{" "}
        <Button
          variant="contained"
          color="primary"
          style={{ color: "white", marginRight: 20 }}
        >
          DELETE
        </Button>
        <IconButton
          variant="contained"
          color="primary"
          style={{ color: "white" }}
        >
          <ShareIcon />
        </IconButton>
      </div>
    </>
  );
}

export default Toolbar;
