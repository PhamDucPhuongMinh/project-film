import React from "react";
import { Link } from "react-router-dom";
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
      <div className="slider__content">
        <div className="slider__infor">
          <h3 className="infor__name">{props.movieName}</h3>
          <p className="infor__date">{props.date.slice(0, 4)}</p>
          <p className="infor__overview">{props.overview}</p>
          <RatingStar rating={props.rating} primaryStyle={true} />
        </div>
        <div className="slider__buttons">
          <Link
            to={`/watch/movie/${props.id}`}
            className="btn btn-primary-transparent"
          >
            Watch now
          </Link>
          <Link
            to={`/detail/movie/${props.id}`}
            className="btn btn-sencondary-transparent"
          >
            Read more
          </Link>
        </div>
      </div>
      <div className="slider__overlay"></div>
    </div>
  );
}
