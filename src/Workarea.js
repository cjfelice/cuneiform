import React, { useRef } from "react";

import Workspace from "./Workspace";
import Canvas from "./Canvas";
import DatabaseUpload from "./component/DatabaseUpload";
import firebase from "firebase";

import "./Workspace.scss";

import AddIcon from "@material-ui/icons/Add";

function Workarea() {
  const user = firebase.auth().currentUser;

  const refPass = useRef();
  console.log(refPass);

  return (
    <div>
      <div className="toolbar">
        <div className="title">Toolbar</div>
        {/* <div className='save'>Save</div> */}

        {!user ? (
          <h5>Sign In to Publish!</h5>
        ) : (
          <DatabaseUpload className="save" />
        )}
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
