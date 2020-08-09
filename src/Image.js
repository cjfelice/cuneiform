import React from "react";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    maxWidth: 2000,
    height: "100%",
    backgroundPosition: "center",
  },
  media: {
    height: "100%",
    width: "100%",
    objectFit: "cover",
    borderRadius: 0,
  },
});

function Image(props) {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image={props.content}
        component="image"
        title={"Try another source"}
      />
    </Card>
  );
}

export default Image;
