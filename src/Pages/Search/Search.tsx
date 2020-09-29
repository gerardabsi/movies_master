import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Container, Row } from 'react-bootstrap';
import { MovieItem } from '../../Components/Atoms/MovieItem/MovieItem';
import './Search.scss';
import { IMovie, IMovieResponse } from '../../Store/Types/Movie.interface';
import { MovieDetails } from '../../Components/Organisms/MovieDetails/MovieDetail';

export const Search: React.FC = () => {
  const location = useLocation();
  const { searchData } = location.state;
  const initialSelectedMovie = {
    id: 0,
    title: '',
    description: '',
    image: '',
  };
  const [showModal, setShowModal] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState<IMovie>(initialSelectedMovie);

  const selectMovieHandler = (movie: IMovie) => {
    setSelectedMovie(movie);
    setShowModal(true);
  };

  const handleClose = () => {
    setSelectedMovie(initialSelectedMovie);
    setShowModal(false);
  };

  return (
    <Container fluid>
      <Row className="movies-search-list-container">
        {searchData.map((movie: IMovieResponse) => (
          <MovieItem
            id={movie.id}
            title={movie.name}
            image={movie.poster_path ? movie.poster_path : movie.backdrop_path}
            coverImage={movie.backdrop_path}
            description={movie.overview}
            key={movie.id}
            selectMovieHandler={selectMovieHandler}
          />
        ))}
      </Row>
      <MovieDetails
        title={selectedMovie.title}
        description={selectedMovie.description}
        image={selectedMovie.image}
        show={showModal}
        handleClose={handleClose}
      />
    </Container>
  );
};
