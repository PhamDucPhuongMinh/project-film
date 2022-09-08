import React from "react";
import "./RatingStar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faStar as starRegular } from "@fortawesome/free-regular-svg-icons";
import { faStar as starSolid } from "@fortawesome/free-solid-svg-icons";

export default function RatingStar(props) {
  let ratingStyle = "";
  if (props.primaryStyle) {
    ratingStyle = "rating-star__primary";
  } else {
    ratingStyle = "rating-star__secondary";
  }
  return (
    <span className={`rating-star ${ratingStyle}`}>
      {props.rating.toFixed(1)} <FontAwesomeIcon icon={starSolid} />
    </span>
  );
}
