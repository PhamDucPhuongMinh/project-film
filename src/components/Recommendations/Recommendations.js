import React, { useState } from "react";
import "./Recommendations.css";
import { useEffect } from "react";
import axios from "axios";
import ItemCard from "../CardsHome/ItemCard";
import { baseURL, keyAPI, baseImageURL } from "../../service/config";

export default function Recommendations(props) {
  const { id, category } = props;
  const [resultAPI, setResultAPI] = useState([]);
  useEffect(() => {
    async function callAPI() {
      try {
        const api = await axios({
          method: "get",
          url: `${baseURL}${category}/${id}/recommendations?api_key=${keyAPI}&language=en-US&page=1`,
        });
        setResultAPI(api.data.results);
      } catch (error) {
        console.log(error);
      }
    }
    callAPI();
  }, [id, category]);
  return (
    <div className="recommendations container">
      <h3 className="recommendations__title">Recommendations</h3>
      <div className="row">
        {resultAPI.map((item) => {
          return (
            <div key={item.id} className="col l-2-4 m-3 c-12">
              <ItemCard
                id={item.id}
                category={category}
                background={`${baseImageURL}${item.poster_path}`}
                rating={item.vote_average}
                name={item.original_title || item.name}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
