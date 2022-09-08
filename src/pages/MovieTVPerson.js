import React from "react";
import DisplayListMovie from "../components/DisplayListMovie/DisplayListMovie";
import Menu from "../components/Menu/Menu";

export default function MovieTVPerson(props) {
  return (
    <>
      <Menu />
      <DisplayListMovie category={props.category} />
    </>
  );
}
