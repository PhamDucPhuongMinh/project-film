import React, { useEffect } from "react";
import "./Carousel.css";
import { Swiper, SwiperSlide } from "swiper/react";
import axios from "axios";
import { baseURL, keyAPI } from "../../service/config";
import { addCarousel } from "../../redux/actions/carouselAction";
import { useDispatch, useSelector } from "react-redux";
import { carouselSelector } from "../../redux/selectors";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";

import { Navigation, Autoplay } from "swiper";
import SliderCarousel from "./SliderCarousel";

export default function Carousel() {
  let carouselList = useSelector(carouselSelector);
  const dispatch = useDispatch();
  useEffect(() => {
    axios({
      method: "get",
      url: `${baseURL}trending/all/day?api_key=${keyAPI}`,
    }).then(function (response) {
      let trending = response.data.results;
      let result = [];
      trending.forEach((element) => {
        if (result.length === 5) return false;
        if (element.title) {
          result.push(element);
        }
      });
      dispatch(addCarousel(result));
    });
  }, [dispatch]);
  return (
    <>
      <Swiper
        autoplay={{ delay: 10000 }}
        navigation={true}
        loop={true}
        modules={[Navigation, Autoplay]}
        className="mySwiper container carousel"
      >
        {carouselList.map((item) => (
          <SwiperSlide key={item.id}>
            <SliderCarousel
              background={item.backdrop_path}
              date={item.release_date}
              movieName={item.title}
              id={item.id}
              rating={item.vote_average}
              overview={item.overview}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
