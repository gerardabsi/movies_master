import React, { Component } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { IMovie } from '../../../Store/Types/Movie.interface';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';

import './MoviesList.scss';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

interface MoviesListProps {
  sectionTitle: string;
  movies: IMovie[];
}

export const MoviesList: React.FC<MoviesListProps> = ({
  movies,
  sectionTitle,
}: MoviesListProps): React.ReactElement => {
  return (
    <>
      <h1 className="movie-section-title">{sectionTitle}</h1>
      <Swiper
        className="movies-list-container"
        navigation
        grabCursor={false}
        draggable
        loop
        breakpoints={{
          1378: {
            slidesPerView: 5,
            slidesPerGroup: 5,
          },
          998: {
            slidesPerView: 4,
            slidesPerGroup: 4,
          },
          625: {
            slidesPerView: 3,
            slidesPerGroup: 3,
          },
          0: {
            slidesPerView: 2,
            slidesPerGroup: 2,
          },
        }}
        preventClicksPropagation
        preventClicks
        scrollbar={{ draggable: false, hide: true }}
        slideToClickedSlide={false}>
        {movies.map(({ title, image }, idx) => (
          <SwiperSlide key={idx} className="movie">
            <img src={`https://image.tmdb.org/t/p/original/${image}`} className="movie-image" alt="" />
            <div className="movie-title">{title}</div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};
