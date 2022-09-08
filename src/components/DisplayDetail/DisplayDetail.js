/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { InfoCircleOutlined } from "@ant-design/icons";
import sortBy from "lodash/sortBy";
import "./DisplayDetail.css";
import { baseURL, keyAPI, baseImageURL } from "../../service/config";

export default function DisplayDetail({ id, category }) {
  const [inforDetail, setInforDetail] = useState({});
  const [credits, setCredits] = useState({});
  const [displayTrailer, setDisplayTrailer] = useState(false);
  const [linkTrailer, setLinkTrailer] = useState("");

  // get link trailer
  const handleGetLinkTrailer = () => {
    let apiTrailer = axios({
      method: "get",
      url: `${baseURL}${category}/${id}/videos?api_key=${keyAPI}&language=en-US`,
    }).then((response) => {
      setLinkTrailer(response.data.results[0].key);
    });
  };
  const handleDisplayTrailer = () => {
    if (linkTrailer === "") {
      handleGetLinkTrailer();
    }
    setDisplayTrailer((prev) => !prev);
  };

  useEffect(() => {
    async function callApi() {
      try {
        // api get detail information
        const apiDetail = await axios({
          method: "get",
          url: `${baseURL}${category}/${id}?api_key=${keyAPI}&language=en-US`,
        });
        setInforDetail(apiDetail.data);
        // api get credits
        const apiCredits = await axios({
          method: "get",
          url: `${baseURL}${category}/${id}/credits?api_key=${keyAPI}&language=en-US`,
        });
        setCredits(apiCredits.data);
      } catch (err) {
        console.log(err);
      }
    }
    callApi();
  }, [id, category]);

  // get year
  let year = "";
  if (inforDetail.release_date || inforDetail.first_air_date) {
    if (inforDetail.release_date) {
      year = inforDetail.release_date.slice(0, 4);
    } else {
      year = inforDetail.first_air_date.slice(0, 4);
    }
  }
  // get IMDB
  let imdb;
  if (inforDetail.vote_average) {
    imdb = inforDetail.vote_average;
    imdb = imdb.toFixed(1);
  }
  // get countries
  let countries = "";
  if (inforDetail.production_countries) {
    inforDetail.production_countries.forEach((item) => {
      if (countries === "") {
        countries += item.name;
      } else {
        countries += ", " + item.name;
      }
    });
  }
  // get genres
  let genres = "";
  if (inforDetail.genres) {
    inforDetail.genres.forEach((item) => {
      if (genres === "") {
        genres += item.name;
      } else {
        genres += ", " + item.name;
      }
    });
  }
  // get casts
  let casts = "";
  if (credits.cast) {
    // sort cast by popularity
    let arrCast = sortBy(credits.cast, [
      function (o) {
        return -o.popularity;
      },
    ]);
    // get 5 casts have most popularity
    arrCast.every((item, index) => {
      if (index === 5) return false;
      if (casts === "") {
        casts += item.name;
      } else {
        casts += ", " + item.name;
      }
      return true;
    });
  }

  return (
    <>
      <div className="display-detail container">
        <div className="display-detail__poster">
          <img src={`${baseImageURL}${inforDetail.poster_path}`} alt="" />
        </div>
        <div className="display-detail__infor">
          <p className="infor__year color-grey">
            <InfoCircleOutlined />
            <span>{category}</span>
            <span>{year}</span>
          </p>
          <h3 className="infor__title">
            {inforDetail.original_title || inforDetail.name}
          </h3>
          <div className="infor__btns">
            <span
              className="infor__btn--trailer"
              onClick={handleDisplayTrailer}
            >
              Trailer
            </span>
            <Link to={`/watch/${category}/${id}`} className="infor__btn--play">
              Play
            </Link>
          </div>
          <p className="infor__overview">{inforDetail.overview}</p>
          <div className="infor__infor-other">
            {category === "tv" && inforDetail.seasons ? (
              <p>
                <span className="color-grey">Season: </span>
                <span className="color-white">
                  {inforDetail.seasons.length}{" "}
                  {inforDetail.seasons.length === 1 ? "season" : "seasons"}
                </span>
              </p>
            ) : (
              <p>
                <span className="color-grey">Runtime: </span>
                <span className="color-white">
                  {inforDetail.runtime} minutes
                </span>
              </p>
            )}
            {/* render product countries */}
            {countries === "" ? (
              ""
            ) : (
              <p>
                <span className="color-grey">National: </span>
                <span className="color-white">{countries}</span>
              </p>
            )}
            {/* render genres */}
            {genres === "" ? (
              ""
            ) : (
              <p>
                <span className="color-grey">Genres: </span>
                <span className="color-white">{genres}</span>
              </p>
            )}
            <p>
              <span className="color-grey">Release: </span>
              <span className="color-white">{year}</span>
            </p>
            <p>
              <span className="color-grey">IMDB: </span>
              <span className="color-white">{imdb}</span>
            </p>
            {/* render casts */}
            {casts === "" ? (
              ""
            ) : (
              <p>
                <span className="color-grey">Casts: </span>
                <span className="color-white">{casts}</span>
              </p>
            )}
          </div>
        </div>
      </div>
      {displayTrailer ? (
        <div className="container">
          <iframe
            style={{ marginBottom: "30px" }}
            width={560}
            height={315}
            src={`https://www.youtube.com/embed/${linkTrailer}`}
            title="YouTube video player"
            frameBorder={0}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      ) : (
        ""
      )}
    </>
  );
}

//https://api.themoviedb.org/3/movie/id?api_key=<<api_key>>&language=en-US
//https://api.themoviedb.org/3/tv/id?api_key=<<api_key>>&language=en-US
//https://api.themoviedb.org/3/person/{person_id}?api_key=<<api_key>>&language=en-US
