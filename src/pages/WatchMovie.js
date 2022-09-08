import React from "react";
import { useParams } from "react-router-dom";
import Menu from "../components/Menu/Menu";
import DisplayMovie from "../components/DisplayMovie/DisplayMovie";
import DisplayTVShow from "../components/DisplayTVShow/DisplayTVShow";
import Recommendations from "../components/Recommendations/Recommendations";
import Footer from "../components/Footer/Footer";

export default function WatchMovie() {
  let { id, category } = useParams();

  return (
    <>
      <Menu />
      {category === "movie" ? (
        <DisplayMovie id={id} />
      ) : (
        <DisplayTVShow id={id} />
      )}
      <Recommendations id={id} category={category} />
      <Footer />
    </>
  );
}
