import React, { useState } from "react";
import "./App.scss";
import IconButton from "@material-ui/core/Button";
import ImageIcon from "@material-ui/icons/Image";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import AudiotrackIcon from "@material-ui/icons/Audiotrack";
import TextFieldsIcon from "@material-ui/icons/TextFields";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

const Mediaform = (props) => {
  const [open, setOpen] = useState(false);
  const [type, setType] = useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const submitURL = () => {
    setOpen(false);
    props.setMode(type);
  };

  return (
    <div className="selection-box">
      <IconButton
        color="primary"
        aria-label="image"
        onClick={() => {
          handleClickOpen();
          setType("IMAGE");
        }}
      >
        <ImageIcon fontSize="large" />
      </IconButton>
      <IconButton
        color="primary"
        aria-label="video"
        onClick={() => {
          handleClickOpen();
          setType("VIDEO");
        }}
      >
        <VideoCallIcon fontSize="large" />
      </IconButton>
      <IconButton
        color="primary"
        aria-label="audio"
        onClick={() => {
          handleClickOpen();
          setType("AUDIO");
        }}
      >
        <AudiotrackIcon fontSize="large" />
      </IconButton>
      <IconButton
        color="primary"
        aria-label="text"
        onClick={() => {
          handleClickOpen();
          setType("TEXT");
        }}
      >
        <TextFieldsIcon fontSize="large" />
      </IconButton>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        {type === "IMAGE" && (
          <DialogTitle id="form-dialog-title">Add an Image</DialogTitle>
        )}
        {type === "AUDIO" && (
          <DialogTitle id="form-dialog-title">Add Audio</DialogTitle>
        )}
        {type === "VIDEO" && (
          <DialogTitle id="form-dialog-title">Add a Video</DialogTitle>
        )}
        {type === "TEXT" && (
          <DialogTitle id="form-dialog-title">Add Text</DialogTitle>
        )}
        <DialogContent>
          {type === "IMAGE" && (
            <DialogContentText>
              You can add an image from anywhere on the internet. Just copy and
              paste the source url. (Right click on the image and click "Copy
              image address" then paste it below.)
            </DialogContentText>
          )}
          {type === "VIDEO" && (
            <DialogContentText>
              You can add video from anywhere on the internet. Just copy and
              paste the video source url.
            </DialogContentText>
          )}
          {type === "AUDIO" && (
            <DialogContentText>
              You can add audio from anywhere on the internet. Just copy and
              paste the audio source url.
            </DialogContentText>
          )}
          {type === "TEXT" && (
            <DialogContentText>
              Add some text to your Canvas. Give it a try, type something below.
            </DialogContentText>
          )}
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Source url"
            type="url"
            onChange={(event) => props.setContent(event.target.value)}
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={submitURL} color="primary">
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Mediaform;
