import React from "react";

import "./Panels.scss";
import { makeStyles } from "@material-ui/core/styles";
import CardHeader from "@material-ui/core/CardHeader";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import VisibilityIcon from "@material-ui/icons/Visibility";
import { Typography } from "@material-ui/core";
import { purple } from "@material-ui/core/colors";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import FullscreenIcon from "@material-ui/icons/Fullscreen";

const useStyles = makeStyles((theme) => ({
  root: {
    maxHeight: 20,
    color: "white",
  },
  avatar: {
    backgroundColor: purple[900],
  },
}));

//converts server time to people time
const dateConversion = (seconds) => {
  if (seconds) {
    return seconds.toDate().toDateString();
  }
  return 0;
};

function PanelsHeader(props) {
  const { username, title, time } = props;

  const classes = useStyles();

  return (
    <>
      <CardHeader
        // avatar={<Avatar className={classes.avatar}>{username[0]}</Avatar>}
        action={
          <IconButton>
            <FullscreenIcon styles={{ color: "#5B84B1FF" }} />
          </IconButton>
        }
        className="card"
        title={
          <Typography gutterBottom variant="h6" component="h8">
            {title}
          </Typography>
        }
        subheader={dateConversion(time)}
      />
    </>
  );
}

export default PanelsHeader;
