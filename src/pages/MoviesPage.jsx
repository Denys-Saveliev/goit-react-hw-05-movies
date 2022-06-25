import { SearchForm } from 'components/SearchForm/SearchForm';
import { MovieLinkList } from 'components/MovieLinkList/MovieLinkList';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import * as Api from '../service/moviesApi';

export const MoviesPage = () => {
  const [data, setData] = useState(null);
  const { search } = useLocation();

  useEffect(() => {
    const query = search.slice(8);
    if (!query) {
      return;
    }

    Api.fetchSearchMovies(query).then(data => {
      setData(data.data.results);
    });
  }, [search]);

  return (
    <>
      <SearchForm />
      {data && <MovieLinkList data={data} />}
    </>
  );
};
