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
import comingSoonImg from '../../images/soon.png';
import { RotatingLines } from 'react-loader-spinner';

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
                src={
                  movie.poster_path
                    ? BASE_IMAGE_URL + movie.poster_path
                    : comingSoonImg
                }
                alt={movie.title}
              />
            </div>
            <Container>
              <MovieTitle>{movie.title}</MovieTitle>
              <Box>
                <Title>Genres:</Title>
                <Text>
                  {movie.genres.length
                    ? movie.genres.map(genre => genre.name).join(', ')
                    : 'Coming soon'}
                </Text>
              </Box>

              <Box>
                <Title>Rate:</Title>
                <Text>
                  {movie.popularity ? movie.popularity : 'Coming soon'}
                </Text>
              </Box>

              <Box>
                <Title>Release date:</Title>
                <Text>
                  {movie.release_date ? movie.release_date : 'Coming soon'}
                </Text>
              </Box>

              <Overview>Overview</Overview>
              <Text>{movie.overview ? movie.overview : 'Coming soon'}</Text>
            </Container>
          </Wrapper>

          <ContainerLink>
            <h2 style={{ color: '#2a363b' }}>Additional information:</h2>

            <Link to="cast" replace={true}>
              Cast
            </Link>
            <Link to="reviews" replace={true}>
              Reviews
            </Link>
          </ContainerLink>

          <Hr />

          <Suspense
            fallback={
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                }}
              >
                <RotatingLines strokeColor="#eee56b" />
              </div>
            }
          >
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
