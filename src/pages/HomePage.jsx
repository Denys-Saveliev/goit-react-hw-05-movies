import { useState, useEffect } from 'react';
import { TrendingMovieLinks } from 'components/TrendingMovieLinks/TrendingMovieLinks';
import * as Api from '../service/moviesApi';

export const HomePage = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    Api.fetchMoviesTrending()
      .then(data => {
        console.log(data);
        return data.data.results;
      })
      .then(setData);
  }, []);

  return (
    <>
      <h1>Trending today:</h1>
      <TrendingMovieLinks data={data} />
    </>
  );
};
