import React from "react";
import { useParams } from "react-router-dom";
import DisplayDetail from "../components/DisplayDetail/DisplayDetail";
import Recommendations from "../components/Recommendations/Recommendations";
import Menu from "../components/Menu/Menu";
import DisplayPerson from "../components/DisplayPerson/DisplayPerson";
import Footer from "../components/Footer/Footer";

export default function WatchDetail() {
  // category = movie || tv || person
  let { id, category } = useParams();
  return (
    <>
      <Menu />
      {category === "person" ? (
        <DisplayPerson id={id} category={category} />
      ) : (
        <DisplayDetail id={id} category={category} />
      )}
      {category === "person" ? (
        ""
      ) : (
        <Recommendations id={id} category={category} />
      )}
      <Footer />
    </>
  );
}
