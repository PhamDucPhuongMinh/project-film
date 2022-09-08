import axios from "axios";
import React, { useState, useEffect } from "react";
import ItemCard from "../CardsHome/ItemCard";
import { Pagination } from "antd";
import { baseURL, keyAPI, baseImageURL } from "../../service/config";
import "./DisplayListMovie.css";

export default function DisplayListMovie(props) {
  const [resultAPI, setResultAPI] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const handleChangePagination = (e) => {
    setCurrentPage(e);
  };
  console.log(currentPage);
  useEffect(() => {
    async function callAPI() {
      try {
        const api = await axios({
          method: "get",
          url: `${baseURL}${props.category}/popular?api_key=${keyAPI}&language=en-US&page=${currentPage}`,
        });
        setResultAPI(api.data);
        console.log("hello");
      } catch (error) {
        console.log(error);
      }
    }
    callAPI();
  }, [props.category, currentPage]);
  console.log(currentPage, resultAPI);
  let arrDataRender = [];
  let totalResult = 0;
  if (resultAPI) {
    arrDataRender = [...resultAPI.results];
    totalResult = resultAPI.total_results;
    // 1 page has 20 item, number page <= 500
    if (totalResult > 10000) {
      totalResult = 10000;
    }
  }
  return (
    <div className="container display-list-movie">
      <h3 className="display-list-movie__title">
        {props.category === "movie"
          ? "Movie"
          : props.category === "tv"
          ? "TV Show"
          : props.category === "person"
          ? "Person"
          : ""}
      </h3>
      <div className="row">
        {arrDataRender.map((item) => {
          return (
            <div key={item.id} className="col l-2-4 m-3 c-12">
              <ItemCard
                id={item.id}
                category={props.category}
                background={`${baseImageURL}${
                  item.poster_path || item.profile_path
                }`}
                rating={item.vote_average || item.popularity}
                name={item.original_title || item.name}
              />
            </div>
          );
        })}
      </div>
      <Pagination
        current={currentPage}
        total={totalResult}
        defaultPageSize={20}
        onChange={handleChangePagination}
      />
    </div>
  );
}
