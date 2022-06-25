import { useState, useEffect } from 'react';
import MovieLinkList from '../components/MovieLinkList/MovieLinkList';
import * as Api from '../service/moviesApi';

const HomePage = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    Api.fetchMoviesTrending()
      .then(data => {
        return data.data.results;
      })
      .then(setData);
  }, []);

  return (
    <>
      <h1>Trending today:</h1>
      <MovieLinkList data={data} />
    </>
  );
};

export default HomePage;
