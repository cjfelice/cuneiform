import React, { useState, useEffect } from "react";
import axios from "./axios";
import "./Row.css";

const base_url = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl }) {
  const [canvi, setCanvi] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setCanvi(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  console.log(canvi);

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row_canvis">
        {canvi.map((canvi) => (
          <img
            className="row_canvi"
            src={`${base_url}${canvi.poster_path}`}
            alt={canvi.name}
          />
        ))}
      </div>
    </div>
  );
}

export default Row;
