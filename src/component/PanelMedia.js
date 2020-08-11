import React, { useState } from "react";

import Image from "../Image";
import Video from "../Video";
import Audio from "../Audio";

import "./Panels.scss";
import "../Workspace.scss";

import ReactPlayer from "react-player";

import { makeStyles } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";
import { GridList, GridListTile, Box } from "@material-ui/core";

function PanelMedia(props) {
  const {
    title,
    description,
    music_id,
    time,
    media,
    mediaBox,
    mediaCounter,
    panel_id,
    username,
    id,
  } = props;

  const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: "100%",
      maxHeight: 250,
      minHeight: 250,
      // marginLeft: 0,
      // marginRight: 0,
      marginTop: 5,
      display: "flex",
      // flexWrap: "wrap",
      // justifyContent: "space-around",
      // overflow: "hidden",
    },
    media: {
      paddingTop: "1%",
      backgroundColor: "#424242",
    },
    description: {
      // height: 0,
      paddingTop: "56.25%",
    },
    expand: {
      transform: "rotate(0deg)",
      marginLeft: "auto",
      transition: theme.transitions.create("transform", {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: "rotate(180deg)",
    },
    like: {
      color: red[500],
    },
    gridList: {
      width: "100%",
      height: "100%",
      marginRight: 0,
      marginLeft: 10,
      // backgroundColor: '#424242'
    },
  }));

  //Cards material ui
  const [like, setLike] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const classes = useStyles();
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  let sizeCount = 0;
  let count = 0;

  const mathTime = (w, h, sizeCount) => {
    let width = 1;
    let wide = 1;
    if (sizeCount % 2 === 0) {
      width = 1;
      wide = w > h * 1.1 ? 2 : 1;
      w > 8 ?? (width = 2);
    }
    return { width: width, wide: wide };
  };

  //set the height of each cell in grid list
  let cell = 175;
  const space = 0;
  if (media.length === 1) {
    return (
      <Box container className={classes.root}>
        <GridList cellHeight={250} className={classes.gridList} cols={1}>
          {media.map(({ mediaUrl, mediaType, mediaBox_id, length }) =>
            mediaBox.map(({ i, h, w, x, y }) => {
              if (mediaBox_id === i) {
                let width = 1;
                // if (w > 8) {
                //   width = 1;
                // }
                // let wide = w > h * 1.1 ? 2 : 1;
                let wide = 1;

                return (
                  <GridListTile
                    key={mediaBox_id}
                    xs={width}
                    cols={wide}
                    rows={0}
                  >
                    {mediaType === "TEXT" && <div>{mediaUrl}</div>}
                    {mediaType === "VIDEO" && <Video content={mediaUrl} />}
                    {mediaType === "IMAGE" && <Image content={mediaUrl} />}
                    {mediaType === "AUDIO" && <Audio content={mediaUrl} />}
                  </GridListTile>
                );
              }
            })
          )}
        </GridList>
      </Box>
    );
  }

  if (media.length === 2) {
    return (
      <Box container className={classes.root}>
        <GridList
          cellHeight={120}
          className={classes.gridList}
          cols={2}
          spacing={space}
        >
          {media.map(({ mediaUrl, mediaType, mediaBox_id, length }) =>
            mediaBox.map(({ i, h, w, x, y }) => {
              if (mediaBox_id === i) {
                let width = 2;
                let wide = 2;

                return (
                  <GridListTile key={mediaBox_id} xs={width} cols={wide}>
                    {mediaType === "TEXT" && <div>{mediaUrl}</div>}
                    {mediaType === "VIDEO" && <Video content={mediaUrl} />}
                    {mediaType === "IMAGE" && <Image content={mediaUrl} />}
                    {mediaType === "AUDIO" && <Audio content={mediaUrl} />}
                  </GridListTile>
                );
              }
            })
          )}
        </GridList>
      </Box>
    );
  }

  return (
    <Box container className={classes.root}>
      <GridList
        cellHeight={120}
        className={classes.gridList}
        cols={media.length > 6 ? 3 : 2}
        spacing={space}
      >
        {media.map(({ mediaUrl, mediaType, mediaBox_id, length }) =>
          mediaBox.map(({ i, h, w, x, y }) => {
            if (mediaBox_id === i) {
              let dimensions = mathTime(w, h, sizeCount);
              count += 1;
              count === 1 && Math.random() < 0.5 && media.length === 3
                ? (dimensions.wide = 2)
                : (dimensions.wide += 0);
              count === media.length && sizeCount % 2 === 0
                ? (dimensions.wide = 2)
                : (dimensions.wide += 0);
              dimensions.width === 2 || dimensions.wide === 2
                ? (sizeCount += 2)
                : (sizeCount += 1);
              media.length > 6
                ? (dimensions = { wide: 1, width: 1 })
                : (sizeCount += 0);

              return (
                <GridListTile
                  key={mediaBox_id}
                  xs={dimensions.width}
                  cols={dimensions.wide}
                >
                  {mediaType === "TEXT" && <div>{mediaUrl}</div>}
                  {mediaType === "VIDEO" && <Video content={mediaUrl} />}
                  {mediaType === "IMAGE" && <Image content={mediaUrl} />}
                  {mediaType === "AUDIO" && <Audio content={mediaUrl} />}
                </GridListTile>
              );
            }
          })
        )}
      </GridList>
    </Box>
  );
}
{
  /* <GridList cellHeight="auto" spacing={1} className={classes.gridList}>
        {media.map(({ mediaUrl, mediaType, mediaBox_id, length }) =>
          mediaBox.map(({ i, h, w, x, y }) => {
            if (mediaBox_id === i) {
              let width = Math.floor((w / 20) * 12);
              // let height = Math.floor((h / 31) * 100);

              let wide = w > h * 1.1 ? 2 : 1;
              let height = h > w ? 2 : 1;

              if (mediaCounter % 2 !== 0) {
                wide = 2;
                height = 2;
              }

              if (mediaCounter === 1) {
                width = 12;
                wide = 2;
              }

              return (
                <GridListTile
                  key={mediaBox_id}
                  xs={width}
                  cols={wide}
                  rows={height}
                >
                  {mediaType === "TEXT" && <div>{mediaUrl}</div>}
                  {mediaType === "VIDEO" && <Video content={mediaUrl} />}

                  {mediaType === "IMAGE" && <Image content={mediaUrl} />}
                  {mediaType === "AUDIO" && (
                    <ReactPlayer
                      width="100%"
                      height="100%"
                      url={mediaUrl}
                      controls
                      muted
                      config={{
                        youtube: {
                          playerVars: { showinfo: 1 },
                        },
                      }}
                    />
                  )}
                </GridListTile>
              );
            }
          })
        )}
      </GridList> */
}

export default PanelMedia;

{
  /* <GridListTile key={mediaBox_id} cols={w} rows={h}></GridListTile> */
}
