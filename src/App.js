import React, { useState, useEffect, Fragment } from "react";
import Headroom from "react-headroom";
import "./App.scss";
import Row from "./Row";
import Workspace from "./Workspace";
import Navbar from "./Navbar";
import Title from "./Title";
import requests from "./requests";
import "./App.scss";
import Landcard from "./Landcard";
import Workarea from "./Workarea";
import PresentCanvas from "./PresentCanvas";
import ImageRow from "./ImageRow";

//Component files
import Panels from "./component/Panels";
import "./component/Panels.scss";
import { db } from "./config/firebase";

import Cards from "./component/Cards";
// import MediaStorage from './component/doNotUse/MediaStorage';
import UserAuth from "./auth/authUser";

function App() {
  const [mode, setMode] = useState("HOME");
  //sample database inside useState array; sets value to panels
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
      //every time onSnapshot fires from a change in 'panels' (collection name in firebase), do this only
      setPanels(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          panel: doc.data(),
        }))
      );
    });
  }, []);

  const createModal = (media, mediaBox) => {
    setMedia(media);
    setMediaBox(mediaBox);
    setOpenModal(true);
  };

  return (
    <div className="App">
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
      <Row title="Suggested Canvi" fetchUrl={requests.fetchTrending} />

      {/* {panels.map((panel) => ( */}
      <div>
        {panels.map(({ id, panel }) => (
          <Panels
            key={id}
            panel_id={id}
            username={panel.username}
            title={panel.title}
            description={panel.description}
            music_id={panel.music_id}
            media={panel.media}
            mediaBox={panel.mediaBox}
            time={panel.timestamp}
            createModal={createModal}
          />
        ))}
      </div>
      <Cards />
      <Cards />
      <Cards />
    </div>
  );
}

export default App;
