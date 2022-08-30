import React from "react";
import "./ItemCard.css";
import RatingStar from "../RatingStar/RatingStar";

export default function ItemCard(props) {
  return (
    <div className="item-card">
      <div className="item-card--image">
        <img src={props.background} alt="" />
      </div>
      <h1 className="item-card--name">{props.name}</h1>
      <RatingStar rating={props.rating} primaryStyle={true} />
    </div>
  );
}
