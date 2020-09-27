import React from 'react';
import { Col } from 'react-bootstrap';
import { FeaturedMovieDetails } from '../../Molecules/FeaturedMovieDetails/FeaturedMovieDetails';
import './FeaturedMovie.scss';

interface FeaturedMovieProps {
  title: string;
  description: string;
}

export const FeaturedMovie: React.FC<FeaturedMovieProps> = ({
  title,
  description,
}: FeaturedMovieProps): React.ReactElement => {
  return (
    <div
      className="featured-movie-container"
      style={{
        backgroundImage: 'url("https://image.tmdb.org/t/p/original//yJPI9e3H5fGNTWNzW2p4iSG5qdc.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
      }}>
      <Col xs={4}>
        <FeaturedMovieDetails title={title} description={description} />
      </Col>
    </div>
  );
};
