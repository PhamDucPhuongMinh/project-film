import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Menu.css";
import { SearchOutlined, MenuOutlined } from "@ant-design/icons";

export default function Menu() {
  const handleMenuPhone = () => {
    const menuNav = document.querySelector(".menu .container .menu__nav");
    const body = document.querySelector("body");
    const overlay = document.querySelector("#overlay");
    const closeMenu = () => {
      menuNav.classList.remove("menu__nav--open");
      body.classList.remove("no-scroll");
      overlay.classList.add("hidden");
    };
    const openMenu = () => {
      menuNav.classList.add("menu__nav--open");
      body.classList.add("no-scroll");
      overlay.classList.remove("hidden");
    };
    if (menuNav.classList.contains("menu__nav--open")) {
      closeMenu();
      overlay.removeEventListener("click", closeMenu);
    } else {
      openMenu();
      overlay.addEventListener("click", closeMenu);
    }
  };
  return (
    <div className="menu">
      <div className="container">
        <MenuOutlined
          className="menu__icon-menu-phone"
          onClick={handleMenuPhone}
        />
        <Link to="/" className="menu__logo">
          <img src={require("../../assets/images/logo.png")} alt="" />
          <p>
            MiChu <span>Movie</span>
          </p>
        </Link>
        <div className="menu__nav">
          <ul className="nav__list">
            <li className="nav__item">
              <NavLink
                onClick={() => {
                  document.querySelector("#overlay").classList.add("hidden");
                  document.querySelector("body").classList.remove("no-scroll");
                }}
                to="/"
                className={(navData) =>
                  navData.isActive ? "nav__item--active" : ""
                }
              >
                Home
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink
                onClick={() => {
                  document.querySelector("#overlay").classList.add("hidden");
                  document.querySelector("body").classList.remove("no-scroll");
                }}
                to="/movie"
                className={(navData) =>
                  navData.isActive ? "nav__item--active" : ""
                }
              >
                Movie
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink
                onClick={() => {
                  document.querySelector("#overlay").classList.add("hidden");
                  document.querySelector("body").classList.remove("no-scroll");
                }}
                to="/tv"
                className={(navData) =>
                  navData.isActive ? "nav__item--active" : ""
                }
              >
                TV show
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink
                onClick={() => {
                  document.querySelector("#overlay").classList.remove("");
                }}
                to="/person"
                className={(navData) =>
                  navData.isActive ? "nav__item--active" : ""
                }
              >
                Person
              </NavLink>
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
