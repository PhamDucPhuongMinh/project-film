import React from "react";
import DisplayListMovie from "../components/DisplayListMovie/DisplayListMovie";
import Footer from "../components/Footer/Footer";
import Menu from "../components/Menu/Menu";

export default function MovieTVPerson(props) {
  return (
    <>
      <Menu />
      <DisplayListMovie category={props.category} />
      <Footer />
    </>
  );
}
