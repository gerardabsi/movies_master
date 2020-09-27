import React from 'react';
import { Button, Col, Modal } from 'react-bootstrap';
import close from '../../../Assets/Images/close.png';
import './MovieDetails.scss';

interface MovieDetailProps {
  title: string;
  description: string;
  image: string;
  show: boolean;
  handleClose(): void;
}

export const MovieDetails: React.FC<MovieDetailProps> = ({
  title,
  description,
  image,
  show,
  handleClose,
}: MovieDetailProps): React.ReactElement => {
  return (
    <Modal show={show} onHide={handleClose} className="movie-detail-container">
      <div
        className="movie-detail-image"
        style={{ backgroundImage: `url("https://image.tmdb.org/t/p/original/${image}")` }}>
        {/* eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions */}
        <img src={close} alt="" className="close" onClick={handleClose} />
        <div className="movie-details">
          <div className="movie-title">{title}</div>
          <div className="movie-description">{description}</div>
          <div className="btn-container">
            <Button className="button-play">Play</Button>
            <Button className="button-play">Add To My List</Button>
          </div>
        </div>
      </div>
    </Modal>
  );
};
