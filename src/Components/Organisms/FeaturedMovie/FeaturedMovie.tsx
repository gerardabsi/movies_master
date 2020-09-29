import React from 'react';
import { Col } from 'react-bootstrap';
import { FeaturedMovieDetails } from '../../Molecules/FeaturedMovieDetails/FeaturedMovieDetails';
import './FeaturedMovie.scss';

interface FeaturedMovieProps {
  title: string;
  description: string;
  image: string;
}

export const FeaturedMovie: React.FC<FeaturedMovieProps> = ({
  title,
  description,
  image,
}: FeaturedMovieProps): React.ReactElement => {
  return (
    <div
      className="featured-movie-container"
      style={{
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${image}")`,
      }}>
      <Col xs={12} sm={4}>
        <FeaturedMovieDetails title={title} description={description} />
      </Col>
    </div>
  );
};
