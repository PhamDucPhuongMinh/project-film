import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { InfoCircleOutlined } from "@ant-design/icons";
import { baseURL, keyAPI, baseImageURL } from "../../service/config";

export default function DisplayPerson({ id, category }) {
  const [resultAPI, setResultAPI] = useState({});
  useEffect(() => {
    async function callAPI() {
      try {
        const api = await axios({
          method: "get",
          url: `${baseURL}${category}/${id}?api_key=${keyAPI}&language=en-US`,
        });
        setResultAPI(api.data);
      } catch (error) {
        console.log(error);
      }
    }
    callAPI();
  }, [id, category]);

  const renderDate = (string) => {
    const date = new Date(string);
    const dd = date.getDate();
    const mm = date.getMonth() + 1;
    const yy = date.getFullYear();
    return `${dd}-${mm}-${yy}`;
  };

  return (
    <div className="display-detail container">
      <div className="display-detail__poster">
        <img src={`${baseImageURL}${resultAPI.profile_path}`} alt="" />
      </div>
      <div className="display-detail__infor">
        <p className="infor__year color-grey">
          <InfoCircleOutlined />
          <span>{category}</span>
        </p>
        <h3 className="infor__title">{resultAPI.name}</h3>
        <p className="infor__overview">{resultAPI.biography}</p>
        <div className="infor__infor-other">
          {resultAPI.place_of_birth ? (
            <p>
              <span className="color-grey">Place of birth: </span>
              <span className="color-white">{resultAPI.place_of_birth}</span>
            </p>
          ) : (
            ""
          )}
          {resultAPI.birthday ? (
            <p>
              <span className="color-grey">Birthday: </span>
              <span className="color-white">
                {renderDate(resultAPI.birthday)}
              </span>
            </p>
          ) : (
            ""
          )}
          {resultAPI.deathday ? (
            <p>
              <span className="color-grey">Deathday: </span>
              <span className="color-white">
                {renderDate(resultAPI.deathday)}
              </span>
            </p>
          ) : (
            ""
          )}
          <p>
            <span className="color-grey">Popularity: </span>
            <span className="color-white">{resultAPI.popularity}</span>
          </p>
        </div>
      </div>
    </div>
  );
}
