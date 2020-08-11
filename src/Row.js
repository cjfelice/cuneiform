import React, { useState, useEffect } from 'react';
import axios from './axios';
import './Row.scss';
import Panels from './component/Panels';

const base_url = 'https://image.tmdb.org/t/p/original/';

function Row(props) {
  const [canvi, setCanvi] = useState([]);

  // useEffect(() => {
  //   async function fetchData() {
  //     const request = await axios.get(fetchUrl);
  //     setCanvi(request.data.results);
  //     return request;
  //   }
  //   fetchData();
  // }, [fetchUrl]);

  const panels = props.panels;

  return (
    <div className='row'>
      <div className='row_canvis'>
        {panels.map(({ id, panel }) => (
          <div className='row_div'>
            <Panels
              key={id}
              panel_id={id}
              username={panel.username}
              title={panel.title}
              description={panel.description}
              music_id={panel.music_id}
              media={panel.media}
              mediaBox={panel.mediaBox}
              mediaCounter={panel.mediaCounter}
              time={panel.timestamp}
              openModal={props.openModal}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Row;
