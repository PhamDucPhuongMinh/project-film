import React from "react";
import "./CardsHome.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { baseImageURL } from "../../service/config";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper";
import ItemCard from "./ItemCard";

export default function CardsHome(props) {
  return (
    <div className="cards-home container">
      <h3 className="cards-home__title">{props.title}</h3>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: false,
        }}
        loop={true}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
        breakpoints={{
          450: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          600: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          724: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          900: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
      >
        {props.inforCards.map((item) => {
          return (
            <SwiperSlide key={item.id}>
              <ItemCard
                id={item.id}
                category={props.category}
                background={`${baseImageURL}${item.poster_path}`}
                rating={item.vote_average}
                name={item.original_title || item.name}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
