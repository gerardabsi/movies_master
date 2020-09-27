import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '../../Store/configureStore';
import { FeaturedMovie } from '../../Components/Organisms/FeaturedMovie/FeaturedMovie';
import { GetFeaturedMovie } from '../../Store/Actions/FeaturedMovieAction';
import { IFeatureMovie, IMovies } from '../../Store/Types/Movie.interface';
import { Loader } from '../../Components/Atoms/Loading/Loading';
import { GetMoviesByGenre } from '../../Store/Actions/GenreMoviesAction';
import { MoviesList } from '../../Components/Organisms/MoviesList/MoviesList';

export const Home: React.FC = () => {
  const dispatch = useDispatch();
  const movie: IFeatureMovie = useSelector((state: AppState) => state.featuredMovie);
  const actionMovies: IMovies = useSelector((state: AppState) => state.actionMovies);
  const comedyMovies: IMovies = useSelector((state: AppState) => state.comedyMovies);
  const crimeMovies: IMovies = useSelector((state: AppState) => state.crimeMovies);
  const horrorMovies: IMovies = useSelector((state: AppState) => state.horrorMovies);

  useEffect(() => {
    dispatch(GetFeaturedMovie('63351'));
    dispatch(GetMoviesByGenre('action', '28'));
    dispatch(GetMoviesByGenre('comedy', '35'));
    dispatch(GetMoviesByGenre('crime', '80'));
    dispatch(GetMoviesByGenre('romance', '10749'));
  }, [dispatch]);

  return (
    <Container fluid style={{ padding: 0 }}>
      {movie.loading ? (
        <Loader />
      ) : (
        <FeaturedMovie title={movie.title} description={movie.description} image={movie.image} />
      )}
      {actionMovies.loading ? <Loader /> : <MoviesList sectionTitle="Action" movies={actionMovies.movies} />}
      {comedyMovies.loading ? <Loader /> : <MoviesList sectionTitle="Comedy" movies={comedyMovies.movies} />}
      {crimeMovies.loading ? <Loader /> : <MoviesList sectionTitle="Crime" movies={crimeMovies.movies} />}
      {horrorMovies.loading ? <Loader /> : <MoviesList sectionTitle="Horror" movies={horrorMovies.movies} />}
    </Container>
  );
};
