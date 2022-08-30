import React from "react";
import "./SliderCarousel.css";
import { baseImageURL } from "../../service/config";
import RatingStar from "../RatingStar/RatingStar";

export default function SliderCarousel(props) {
  const styleBackground = `url(${baseImageURL}${props.background}) center center / cover`;
  return (
    <div
      className="carousel__slider"
      style={{
        background: styleBackground,
      }}
    >
      <div className="slider__infor">
        <h3 className="infor__name">{props.movieName}</h3>
        <p className="infor__date">{props.date.slice(0, 4)}</p>
        <p className="infor__overview">{props.overview}</p>
        <RatingStar rating={props.rating.toFixed(1)} primaryStyle={true} />
      </div>
      <div className="slider__buttons">
        <button className="btn btn-primary-transparent">Watch now</button>
        <button className="btn btn-sencondary-transparent">Read more</button>
      </div>
      <div className="slider__overlay"></div>
    </div>
  );
}
