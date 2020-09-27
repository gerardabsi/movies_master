import React from 'react';
import { Button, Col } from 'react-bootstrap';
import './FeaturedMovieDetails.scss';

interface FeaturedMovieDetailsProps {
  title: string;
  description: string;
}

export const FeaturedMovieDetails: React.FC<FeaturedMovieDetailsProps> = ({
  title,
  description,
}: FeaturedMovieDetailsProps): React.ReactElement => (
  <div className="featured-movie-details-container">
    <Col xs={12} className="title">
      {title}
    </Col>
    <Col xs={12} className="description">
      {description}
    </Col>
    <Col xs={12} className="actions">
      <Button className="button-play">Play</Button>
      <Button className="button-play">Add To My List</Button>
    </Col>
  </div>
);
