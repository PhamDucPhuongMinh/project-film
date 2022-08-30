import React from "react";
import "./CardsHome.css";
import { Swiper, SwiperSlide } from "swiper/react";

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
        slidesPerView={5}
        spaceBetween={30}
        slidesPerGroup={5}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {props.inforCards.map((item) => {
          return (
            <SwiperSlide key={item.id}>
              <ItemCard
                background={`https://image.tmdb.org/t/p/original${item.poster_path}`}
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
