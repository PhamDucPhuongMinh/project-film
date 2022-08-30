import React from "react";
import Carousel from "../components/Carousel/Carousel";
import CardsHome from "../components/CardsHome/CardsHome";
import Menu from "../components/Menu/Menu";
import { useEffect } from "react";
import axios from "axios";
import { baseURL, keyAPI } from "../service/config";
import { useState } from "react";

export default function Home() {
  const [resultPopularMovie, setResultPopularMovie] = useState([]);
  const [resultTopRatingMovie, setResultTopRatingMovie] = useState([]);
  const [resultPopularTVShow, setResultPopularTVShow] = useState([]);
  const [resultTopRatingTVShow, setResultTopRatingTVShow] = useState([]);
  useEffect(() => {
    async function callApi() {
      try {
        // call api popular movie
        const apiPopularMovie = await axios({
          method: "get",
          url: `${baseURL}movie/popular?api_key=${keyAPI}&language=en-US&page=1`,
        });
        setResultPopularMovie(apiPopularMovie.data.results);

        // call api top rating movie
        const apiTopRatingMovie = await axios({
          method: "get",
          url: `${baseURL}movie/top_rated?api_key=${keyAPI}&language=en-US&page=1`,
        });
        setResultTopRatingMovie(apiTopRatingMovie.data.results);
        // call api popular TVShow
        const apiPopularTVShow = await axios({
          method: "get",
          url: `${baseURL}tv/popular?api_key=${keyAPI}&language=en-US&page=1`,
        });
        setResultPopularTVShow(apiPopularTVShow.data.results);

        // call api top rating TVShow
        const apiTopRatingTVShow = await axios({
          method: "get",
          url: `${baseURL}tv/top_rated?api_key=${keyAPI}&language=en-US&page=1`,
        });
        setResultTopRatingTVShow(apiTopRatingTVShow.data.results);
      } catch (err) {
        console.log(err);
      }
    }
    callApi();
  }, []);
  console.log(resultTopRatingTVShow);
  return (
    <>
      <Menu />
      <Carousel />
      <CardsHome title="Popular Movie" inforCards={resultPopularMovie} />
      <CardsHome title="Top Rating Movie" inforCards={resultTopRatingMovie} />
      <CardsHome title="Popular TV Show" inforCards={resultPopularTVShow} />
      <CardsHome
        title="Top Rating TV Show"
        inforCards={resultTopRatingTVShow}
      />
    </>
  );
}
