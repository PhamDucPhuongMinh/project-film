import React from "react";
import { Link } from "react-router-dom";
import "./ItemCard.css";
import RatingStar from "../RatingStar/RatingStar";

export default function ItemCard(props) {
  return (
    <Link to={`/detail/${props.category}/${props.id}`} className="item-card">
      <div className="item-card--image">
        <img src={props.background} alt="" />
      </div>
      <h1 className="item-card--name">{props.name}</h1>
      <RatingStar rating={props.rating} primaryStyle={true} />
    </Link>
  );
}
