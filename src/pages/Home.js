import React, { useEffect } from "react";
import Carousel from "../components/Carousel/Carousel";
import CardsHome from "../components/CardsHome/CardsHome";
import Menu from "../components/Menu/Menu";
import axios from "axios";
import { baseURL, keyAPI } from "../service/config";
import Footer from "../components/Footer/Footer";
import { addCardsHome } from "../redux/actions/cardsHomeAction";
import { useDispatch, useSelector } from "react-redux";
import { cardsHomeSelector } from "../redux/selectors";

export default function Home() {
  let cardHomeResult = useSelector(cardsHomeSelector);
  const dispath = useDispatch();

  useEffect(() => {
    async function callApi() {
      const resultAPI = {
        popularMovie: [],
        topRatingMovie: [],
        popularTVShow: [],
        topRatingTVShow: [],
      };
      try {
        // call api popular movie
        const apiPopularMovie = await axios({
          method: "get",
          url: `${baseURL}movie/popular?api_key=${keyAPI}&language=en-US&page=1`,
        });
        resultAPI.popularMovie = [...apiPopularMovie.data.results];

        // call api top rating movie
        const apiTopRatingMovie = await axios({
          method: "get",
          url: `${baseURL}movie/top_rated?api_key=${keyAPI}&language=en-US&page=1`,
        });
        resultAPI.topRatingMovie = [...apiTopRatingMovie.data.results];

        // call api popular TVShow
        const apiPopularTVShow = await axios({
          method: "get",
          url: `${baseURL}tv/popular?api_key=${keyAPI}&language=en-US&page=1`,
        });
        resultAPI.popularTVShow = [...apiPopularTVShow.data.results];

        // call api top rating TVShow
        const apiTopRatingTVShow = await axios({
          method: "get",
          url: `${baseURL}tv/top_rated?api_key=${keyAPI}&language=en-US&page=1`,
        });
        resultAPI.topRatingTVShow = [...apiTopRatingTVShow.data.results];
        dispath(addCardsHome(resultAPI));
      } catch (err) {
        console.log(err);
      }
    }
    callApi();
  }, [dispath]);
  return (
    <>
      <Menu />
      <Carousel />
      <CardsHome
        category="movie"
        title="Popular Movie"
        inforCards={cardHomeResult.popularMovie}
      />
      <CardsHome
        category="movie"
        title="Top Rating Movie"
        inforCards={cardHomeResult.topRatingMovie}
      />
      <CardsHome
        category="tv"
        title="Popular TV Show"
        inforCards={cardHomeResult.popularTVShow}
      />
      <CardsHome
        category="tv"
        title="Top Rating TV Show"
        inforCards={cardHomeResult.topRatingTVShow}
      />
      <Footer />
    </>
  );
}
