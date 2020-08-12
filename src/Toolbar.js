import React from "react";
import Button from "@material-ui/core/Button";
import { IconButton } from "@material-ui/core";
import ShareIcon from "@material-ui/icons/Share";
import "./Workspace.scss";
import DeletePanel from "./component/DeletePanel";

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
        <DeletePanel
          username={props.userName}
          panel_id={props.panel_id}
          setMode={props.setMode}
        />
        <IconButton
          variant="contained"
          color="primary"
          style={{ color: "white" }}
          onClick={() => alert(props.panel_id)}
        >
          <ShareIcon />
        </IconButton>
      </div>
    </>
  );
}

export default Toolbar;
