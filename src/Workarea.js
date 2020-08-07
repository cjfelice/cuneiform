import React, { useRef } from "react";
import "./Workspace.scss";
import Workspace from "./Workspace";
import Canvas from "./Canvas";
import AddIcon from "@material-ui/icons/Add";

function Workarea() {
  const refPass = useRef();

  return (
    <div>
      <div className="toolbar">
        <div className="title">Toolbar</div>
        <div className="save">Save</div>
        <div className="save">Add Content</div>
        <div
          onClick={() => refPass.current.passMessage()}
          className="droppable-element"
          draggable={true}
          unselectable="on"
          onDragStart={(e) => e.dataTransfer.setData("text/plain", "")}
        >
          <AddIcon
            style={{ color: "white", fontSize: "30px", cursor: "pointer" }}
          />
        </div>
      </div>
      <Workspace ref={refPass} />
    </div>
  );
}

export default Workarea;
