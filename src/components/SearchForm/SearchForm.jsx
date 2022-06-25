import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

export const SearchForm = () => {
  const [query, setQuery] = useState('');

  const navigate = useNavigate();

  const { pathname, search } = useLocation();

  useEffect(() => {
    const searchQuery = search.slice(8);
    if (!searchQuery) {
      return;
    }

    setQuery(searchQuery);
  }, [search]);

  const handleStateChange = e => {
    setQuery(e.currentTarget.value.toLowerCase());
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (query.trim() === '') {
      return alert('Please insert valid request!');
    }

    navigate(`${pathname}?search=${query}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={query}
        placeholder="Search movies"
        onChange={handleStateChange}
      />
      <button type="submit">Search</button>
    </form>
  );
};
