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
  const [panels, setPanels] = useState([
    {
      username: "Jasper",
      title: "Test1/rename to title!",
      description: "Yangmingshan Taipei Chinese Pavilion!",
      music_id: "",
      media: [
        {
          mediaUrl:
            "https://p1.pxfuel.com/preview/326/736/1008/people-whimsical-lazy-suit.jpg",
        },
        {
          mediaUrl: "https://www.youtube.com/watch?v=f7T48W0cwXM&t=6269s",
        },
        {
          mediaUrl:
            "https://static.pexels.com/photos/8486/water-rain-raindrops-drops.jpg",
        },
      ],
    },
  ]);
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
      <Row title="Suggested Canvi" fetchUrl={requests.fetchTrending} />

      <div className="panels_canvis">
        {/* {panels.map(({ id, panel }) => ( */}
        {panels.map((panel) => (
          <Panels
            // key={id}
            username={panel.username}
            title={panel.title}
            description={panel.description}
            music_id={panel.music_id}
            media={[...panel.media]}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
