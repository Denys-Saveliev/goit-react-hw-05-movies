import { Routes, Route } from 'react-router-dom';
import { useEffect, useState, lazy, Suspense } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import * as Api from '../../service/moviesApi';
import {
  Wrapper,
  Title,
  Text,
  Container,
  Overview,
  Box,
  ContainerLink,
  MovieTitle,
  MovieImage,
  Button,
  Hr,
} from './MovieDetailsPage.styled';
import { Link } from 'components/Navigation/Navigation.styled';
const Cast = lazy(() =>
  import('../../components/Cast/Cast' /* webpackChunkName: "cast-view" */)
);
const Reviews = lazy(() =>
  import(
    '../../components/Reviews/Reviews' /* webpackChunkName: "reviews-view" */
  )
);

const BASE_IMAGE_URL = 'https://image.tmdb.org/t/p/w300';

const MovieDetailsPage = () => {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    Api.fetchMovieDetails(movieId).then(data => setMovie(data.data));
  }, [movieId]);

  return (
    <>
      <Button type="button" onClick={() => navigate(-1)}>
        Back
      </Button>

      {movie && (
        <>
          <Wrapper>
            <div>
              <MovieImage
                src={BASE_IMAGE_URL + movie.poster_path}
                alt={movie.title}
              />
            </div>
            <Container>
              <MovieTitle>{movie.title}</MovieTitle>
              <Box>
                <Title>Genres:</Title>
                <Text>{movie.genres.map(genre => genre.name).join(', ')}</Text>
              </Box>

              <Box>
                <Title>Rate:</Title>
                <p>{movie.popularity}</p>
              </Box>

              <Box>
                <Title>Release date:</Title>
                <p>{movie.release_date}</p>
              </Box>

              <Overview>Overview</Overview>
              <p>{movie.overview}</p>
            </Container>
          </Wrapper>

          <ContainerLink>
            <h2 style={{ color: '#2a363b' }}>Additional information:</h2>

            <Link to={`/movies/${movieId}/cast`} replace={true}>
              Cast
            </Link>
            <Link to={`/movies/${movieId}/reviews`} replace={true}>
              Reviews
            </Link>
          </ContainerLink>

          <Hr />

          <Suspense fallback={<>loading...</>}>
            <Routes>
              <Route path="cast" element={<Cast />} />
              <Route path="reviews" element={<Reviews />} />
            </Routes>
          </Suspense>
        </>
      )}
    </>
  );
};

export default MovieDetailsPage;
