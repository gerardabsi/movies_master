import React from 'react';
import './MovieItem.scss';
import { IMovie } from '../../../Store/Types/Movie.interface';

interface MovieItemProps {
  id: number;
  title: string;
  description: string;
  image: string;
  coverImage: string;
  selectMovieHandler(movie: IMovie): any;
}
export const MovieItem: React.FC<MovieItemProps> = ({
  id,
  title,
  image,
  coverImage,
  description,
  selectMovieHandler,
}: MovieItemProps): React.ReactElement => {
  return (
    <div className="movie-item-container">
      {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions */}
      <div
        className="poster"
        onClick={() => selectMovieHandler({ id, title, image: coverImage || image, description })}>
        <img className="movie-background" src={`https://image.tmdb.org/t/p/original/${image}`} alt="" />
      </div>
    </div>
  );
};
