import React, { useState, useEffect } from "react";
import Modal from "@material-ui/core/Modal";
import { makeStyles } from "@material-ui/core/styles";
import GalleryCanvas from "./GalleryCanvas";
import { Button, Input, Container } from "@material-ui/core";
import "./Workspace.scss";

function PresentCanvas(props) {
  const useStyles = makeStyles((theme) => ({
    paper: {
      position: "absolute",
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: "2px solid #000",
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
      outline: "none",
    },
  }));

  const classes = useStyles();

  useEffect(() => {}, []);

  return (
    <div>
      <Modal
        className="egClass"
        open={props.openModal}
        onClose={() => props.closeModal(false)}
      >
        <div className="workspace">
          <GalleryCanvas media={props.media} mediaBox={props.mediaBox} />
        </div>
      </Modal>
    </div>
  );
}

export default PresentCanvas;
