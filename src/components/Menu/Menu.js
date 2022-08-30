import React from "react";
import "./Menu.css";
import { SearchOutlined } from "@ant-design/icons";

export default function Menu() {
  return (
    <div className="menu">
      <div className="container">
        <div className="menu__logo">
          <img src={require("../../assets/images/logo.png")} alt="" />
          <p>
            MiChu <span>Movie</span>
          </p>
        </div>
        <div className="menu__nav">
          <ul className="nav__list">
            <li className="nav__item nav__item--active">
              <a href="google.com">Home</a>
            </li>
            <li className="nav__item">
              <a href="google.com">Movie</a>
            </li>
            <li className="nav__item">
              <a href="google.com">TV show</a>
            </li>
            <li className="nav__item">
              <a href="google.com">People</a>
            </li>
          </ul>
        </div>
        <div className="menu__search">
          <input type="text" placeholder="Input keyword search" />
          <button className="btn btn-primary">
            <SearchOutlined />
          </button>
        </div>
      </div>
    </div>
  );
}
