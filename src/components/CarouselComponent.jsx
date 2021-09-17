import React, { useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import MovieCard from './MovieCard';

// Import Swiper styles
// import 'swiper/css';

export default ({movies}) => {
    // console.log(`movies`, movies)
  return (
    <Swiper
      spaceBetween={30}
      slidesPerView={3}
      loop={true}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
        {movies.map((movie, index) => {
            return (<SwiperSlide key={index}>
                    <MovieCard movieData={movie}/>
                </SwiperSlide>)
        })}
    </Swiper>
  );
};

