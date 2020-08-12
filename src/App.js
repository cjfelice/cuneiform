import React, { useState, useEffect, Fragment } from "react";

import { db } from "./config/firebase";

import PresentCanvas from "./PresentCanvas";
import { createMuiTheme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Zoom from "@material-ui/core/Zoom";
import GitHubIcon from "@material-ui/icons/GitHub";

//Component files
import Panels from "./component/Panels";
import UserAuth from "./auth/authUser";
import Navbar from "./Navbar";
import Toolbar from "./Toolbar";
import ReactLoading from "react-loading";
import GalleryCanvas from "./GalleryCanvas";
import MediaStorage from "./component/MediaStorage";
import Row from "./Row";
import Workspace from "./Workspace";
import requests from "./requests";
import Workarea from "./Workarea";
import Landcard from "./Landcard";
import Title from "./Title";
import ImageRow from "./ImageRow";

import "./App.scss";
import "./component/Panels.scss";
import "rc-footer/assets/index.css"; // import 'rc-footer/asssets/index.less';
import Headroom from "react-headroom";
import Footer from "rc-footer";
import { MuiThemeProvider } from "@material-ui/core/styles";
import "./Workspace.scss";

import Cards from "./component/Cards";
import { GridList, Box, IconButton } from "@material-ui/core";
import { getThemeProps } from "@material-ui/styles";

function App() {
  const [mode, setMode] = useState("HOME");
  const [panels, setPanels] = useState([]);
  const [media, setMedia] = useState([]);
  const [title, setTitle] = useState("");
  const [mediaBox, setMediaBox] = useState([]);
  const [panelID, setPanelID] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [userName, setUserName] = useState("");
  const [userID, setUserID] = useState("");
  const [trigger, setTrigger] = useState(false);

  useEffect(() => {
    const unsubscribe = db.collection("panels").onSnapshot((snapshot) => {
      setPanels(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          panel: doc.data(),
        }))
      );
    });
    return () => {
      unsubscribe(); //run the 'done' function (see done = db above)
    };
  }, []);

  const theme = createMuiTheme({
    typography: {
      fontFamily: "Raleway",
    },
    overrides: {
      MuiButton: {},
    },
  });

  const createModal = (media, mediaBox, title) => {
    setMedia(media);
    setMediaBox(mediaBox);
    setTitle(title);
    setOpenModal(true);
  };
  const createGallery = (media, mediaBox, title, user, panelID) => {
    setMode("LOADINGCANVAS");
    setMedia(media);
    setPanelID(panelID);
    setMediaBox(mediaBox);
    setTitle(title);
    setUserName(user);
  };
  return (
    <div className="App">
      <MuiThemeProvider theme={theme}>
        <Headroom>
          <div className="header">
            <Navbar setMode={setMode} userName={userName} />
          </div>
        </Headroom>
        {mode === "NEWCANVAS" && (
          <div>
            <Workarea createGallery={createGallery} setMode={setMode} />
          </div>
        )}
        {mode === "MYCANVASES" && (
          <div>
            <div className="title-header">My Canvases</div>
            <Row
              title="Suggested Canvi"
              fetchUrl={requests.fetchTrending}
              panels={panels}
              openModal={createModal}
              setMode={setMode}
              createGallery={createGallery}
            />
          </div>
        )}
        {mode === "CREATEDCANVAS" && (
          <>
            <Toolbar
              canvasName={title}
              setMode={setMode}
              userName={userName}
              panel_id={panelID}
            />
            <div className="workspace">
              <GalleryCanvas media={media} mediaBox={mediaBox} />
            </div>
          </>
        )}
        {mode === "HOME" && (
          <div>
            <Landcard getStarted={() => setMode("NEWCANVAS")} />
          </div>
        )}
        {mode === "LOADINGCANVAS" && (
          <>
            <Toolbar canvasName={title} setMode={setMode} panelID={panelID} />
            <div className="workspace" style={{ textAlign: "center" }}>
              <div style={{ display: "inline-block", marginTop: 200 }}>
                <ReactLoading
                  type={"balls"}
                  color={"#5B84B1FF"}
                  height={200}
                  width={200}
                />
              </div>
            </div>
          </>
        )}
        <PresentCanvas
          media={media}
          mediaBox={mediaBox}
          openModal={openModal}
          closeModal={setOpenModal}
        />
        {mode !== "NEWCANVAS" && (
          <Row
            title="Suggested Canvi"
            fetchUrl={requests.fetchTrending}
            panels={panels}
            openModal={createModal}
            setMode={setMode}
            createGallery={createGallery}
          />
        )}
        <div style={{ height: 100 }}></div>
        <Footer
          style={{ fontFamily: "Varela Round" }}
          backgroundColor="transparent"
          columns={[
            {
              icon: (
                <IconButton style={{ color: "white" }}>
                  <GitHubIcon />
                </IconButton>
              ),
              url: "https://github.com/cjfelice/cuneiform",
              openExternal: true,
            },
          ]}
          bottom={`Made for the Lighthouse Bootcamp by Rubin Jhand & Christopher Smith`}
        />
        ,
      </MuiThemeProvider>
    </div>
  );
}

export default App;
