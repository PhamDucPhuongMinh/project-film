/* eslint-disable no-unused-vars */
import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { baseURL, keyAPI } from "../../service/config";
import "./DisplayMovie.css";

export default function DisplayMovie({ id }) {
  const [resultAPI, setResultAPI] = useState("");
  useEffect(() => {
    async function callAPI() {
      try {
        const apiDetail = await axios({
          method: "get",
          url: `${baseURL}movie/${id}?api_key=${keyAPI}&language=en-US`,
        });
        setResultAPI(apiDetail.data);
      } catch (err) {
        console.log(err);
      }
    }
    callAPI();
  }, [id]);
  return (
    <div className="display-video container">
      <iframe
        title="as"
        id="ve-iframe"
        src={`https://www.2embed.to/embed/imdb/movie?id=${resultAPI.imdb_id}`}
        width="100%"
        height="550"
        allowFullScreen="allowfullscreen"
        frameBorder={0}
      />
    </div>
  );
}
