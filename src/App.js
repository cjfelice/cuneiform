import React, { useState, useEffect, Fragment } from "react";
import Headroom from "react-headroom";
import PresentCanvas from "./PresentCanvas";
import { createMuiTheme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { db } from "./config/firebase";

//Component files
import Panels from "./component/Panels";
import MediaStorage from "./component/MediaStorage";
import UserAuth from "./auth/authUser";
import Navbar from "./Navbar";
import Row from "./Row";
import Workspace from "./Workspace";
import requests from "./requests";
import Workarea from "./Workarea";
import Landcard from "./Landcard";
import Title from "./Title";
import ImageRow from "./ImageRow";
import { MuiThemeProvider } from "@material-ui/core/styles";

import "./App.scss";
import "./component/Panels.scss";

import Cards from "./component/Cards";
import { GridList, Box } from "@material-ui/core";

function App() {
  const [mode, setMode] = useState("HOME");

  const [panels, setPanels] = useState([]);
  const [media, setMedia] = useState();
  const [mediaBox, setMediaBox] = useState();
  const [openModal, setOpenModal] = useState(false);

  /*
  - for the time being, panels and cards will be used interchangeably; cards use material ui, panels were created initially for setup and testing. can now use the functional elements of panels and apply them to cards.
  - hardcoded data set is in dummyData.js if required
*/

  useEffect(() => {
    db.collection("panels").onSnapshot((snapshot) => {
      setPanels(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          panel: doc.data(),
        }))
      );
    });
  }, []);

  const theme = createMuiTheme({
    typography: {
      fontFamily: "Karla",
    },
  });

  const createModal = (media, mediaBox) => {
    setMedia(media);
    setMediaBox(mediaBox);
    setOpenModal(true);
  };

  return (
    <div className="App">
      <MuiThemeProvider theme={theme}>
        <Headroom>
          <div className="header">
            <Navbar setMode={setMode} />
          </div>
        </Headroom>
        {mode === "NEWCANVAS" && (
          <div>
            <Workarea />
          </div>
        )}
        {mode === "HOME" && (
          <div>
            <Landcard />
          </div>
        )}
        <PresentCanvas
          media={media}
          mediaBox={mediaBox}
          openModal={openModal}
          closeModal={setOpenModal}
        />

        <Row
          title="Suggested Canvi"
          fetchUrl={requests.fetchTrending}
          panels={panels}
          openModal={createModal}
        />
        <div style={{ height: 300 }}></div>
      </MuiThemeProvider>
    </div>
  );
}

export default App;
