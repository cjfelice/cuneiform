import React, { useState, useEffect } from "react";

import firebase from "firebase";
import { db } from "../config/firebase";

import Title from "../Title";

import { makeStyles } from "@material-ui/core/styles";
import { Button, Input, Modal } from "@material-ui/core";

import { saveMedia } from "../Canvas";

function DatabaseUpload(props) {
  const { media, music_id, likes } = props;

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const user = firebase.auth().currentUser;

  function getModalStyle() {
    const top = 50;
    const left = 50;
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
  }
  const useStyles = makeStyles((theme) => ({
    paper: {
      position: "absolute",
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: "2px solid #000",
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }));

  const classes = useStyles();
  const [modalStyle] = useState(getModalStyle);
  const [open, setOpen] = useState(false);

  const handleUpload = () => {
    db.collection("panels").add({
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      title: title,
      mediaBox: [...saveMedia[0].items],
      mediaCounter: saveMedia[0].newCounter,
      media: [...saveMedia[1]],
      username: user.displayName,
      description: description,
      music_id: "",
    });
    setOpen(false);
  };
  console.log("\n\nsaveMedia:>>", saveMedia);

  return (
    <>
      <Modal open={open} onClose={() => setOpen(false)}>
        <div style={modalStyle} className={classes.paper}>
          <form className="chimera__signup">
            <Title text="chiMera" />

            <Input
              placeholder="Title"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <Input
              placeholder="Description"
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <Button
              onClick={() => {
                handleUpload();
              }}
            >
              Publish!
            </Button>
          </form>
        </div>
      </Modal>
      <Button onClick={() => setOpen(true)}>SAVE</Button>
    </>
  );
}

export default DatabaseUpload;
