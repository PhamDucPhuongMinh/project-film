/* eslint-disable no-unused-vars */
import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { baseURL, keyAPI } from "../../service/config";
import "./DisplayTVShow.css";
import EpisodesTVShow from "./EpisodesTVShow";
import SeasonsTVShow from "./SeasonsTVShow";

export default function DisplayTVShow({ id }) {
  const [resultAPI, setResultAPI] = useState("");
  const [currentEpisode, setCurrentEpisode] = useState(1);
  const [currentSeason, setCurrentSeason] = useState(1);
  useEffect(() => {
    async function callAPI() {
      try {
        const apiDetail = await axios({
          method: "get",
          url: `${baseURL}tv/${id}?api_key=${keyAPI}&language=en-US`,
        });
        setResultAPI(apiDetail.data);
      } catch (err) {
        console.log(err);
      }
    }
    callAPI();
  }, [id]);

  const hanldeCurrentEpisode = (number) => {
    setCurrentEpisode(number);
  };
  const hanldeCurrentSeason = (number) => {
    setCurrentSeason(number);
    setCurrentEpisode(1);
  };

  console.log(resultAPI);

  return (
    <div className="display-video container">
      <iframe
        src={`https://www.2embed.to/embed/tmdb/tv?id=${resultAPI.id}&s=${currentSeason}&e=${currentEpisode}`}
        title="Film Video Player"
        width={"100%"}
        height={550}
        frameBorder={0}
        allowFullScreen
      />
      {resultAPI ? (
        <div className="display-video__number-of-episodes">
          <p>Episodes: </p>
          <EpisodesTVShow
            currentEpisode={currentEpisode}
            totalEpisodes={resultAPI.seasons[currentSeason - 1].episode_count}
            hanldeCurrentEpisode={hanldeCurrentEpisode}
          />
        </div>
      ) : (
        ""
      )}
      {resultAPI ? (
        <div className="display-video__number-of-episodes">
          <p>Season: </p>
          <SeasonsTVShow
            currentSeason={currentSeason}
            totalSeasons={resultAPI.seasons.length}
            hanldeCurrentSeason={hanldeCurrentSeason}
          />
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
