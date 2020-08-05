import React, { useState, useEffect } from 'react';
import axios from './axios';
// import "./Row.scss";

const base_url = 'https://image.tmdb.org/t/p/original/';

function Row({ title, fetchUrl }) {
  const [media, setMedia] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMedia(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  return (
    <div className='row'>
      <h2>{title}</h2>
      <div className='row_medias'>
        {media.map((media) => (
          <img
            key={media.id}
            className='row_media'
            src={`${base_url}${media.poster_path}`}
            alt={media.name}
          />
        ))}
      </div>
    </div>
  );
}

export default Row;
