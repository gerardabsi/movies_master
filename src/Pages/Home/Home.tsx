import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '../../Store/configureStore';
import { FeaturedMovie } from '../../Components/Organisms/FeaturedMovie/FeaturedMovie';
import { GetFeaturedMovie } from '../../Store/Actions/FeaturedMovieAction';
import { IFeatureMovie, IMovie, IMovies } from '../../Store/Types/Movie.interface';
import { Loader } from '../../Components/Atoms/Loading/Loading';
import { GetMoviesByGenre } from '../../Store/Actions/GenreMoviesAction';
import { MoviesList } from '../../Components/Organisms/MoviesList/MoviesList';
import { MovieDetails } from '../../Components/Organisms/MovieDetails/MovieDetail';

export const Home: React.FC = () => {
  const dispatch = useDispatch();
  const featuredMovie: IFeatureMovie = useSelector((state: AppState) => state.featuredMovie);
  const actionMovies: IMovies = useSelector((state: AppState) => state.actionMovies);
  const comedyMovies: IMovies = useSelector((state: AppState) => state.comedyMovies);
  const crimeMovies: IMovies = useSelector((state: AppState) => state.crimeMovies);
  const horrorMovies: IMovies = useSelector((state: AppState) => state.horrorMovies);
  const initialSelectedMovie = {
    id: 0,
    title: '',
    description: '',
    image: '',
  };
  const [showModal, setShowModal] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState<IMovie>(initialSelectedMovie);

  useEffect(() => {
    dispatch(GetFeaturedMovie('63351'));
    dispatch(GetMoviesByGenre('action', '28'));
    dispatch(GetMoviesByGenre('comedy', '35'));
    dispatch(GetMoviesByGenre('crime', '80'));
    dispatch(GetMoviesByGenre('romance', '10749'));
  }, [dispatch]);

  const selectMovieHandler = (movie: IMovie) => {
    setSelectedMovie(movie);
    setShowModal(true);
  };

  const handleClose = () => {
    setSelectedMovie(initialSelectedMovie);
    setShowModal(false);
  };

  return (
    <Container fluid style={{ padding: 0 }}>
      {featuredMovie.loading ? (
        <Loader />
      ) : (
        <FeaturedMovie
          title={featuredMovie.title}
          description={featuredMovie.description}
          image={featuredMovie.image}
        />
      )}
      {actionMovies.loading ? (
        <Loader />
      ) : (
        <MoviesList sectionTitle="Action" movies={actionMovies.movies} selectMovieHandler={selectMovieHandler} />
      )}
      {comedyMovies.loading ? (
        <Loader />
      ) : (
        <MoviesList sectionTitle="Comedy" movies={comedyMovies.movies} selectMovieHandler={selectMovieHandler} />
      )}
      {crimeMovies.loading ? (
        <Loader />
      ) : (
        <MoviesList sectionTitle="Crime" movies={crimeMovies.movies} selectMovieHandler={selectMovieHandler} />
      )}
      {horrorMovies.loading ? (
        <Loader />
      ) : (
        <MoviesList sectionTitle="Horror" movies={horrorMovies.movies} selectMovieHandler={selectMovieHandler} />
      )}
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
