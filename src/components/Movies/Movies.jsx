// Movies.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useSearchParams } from 'react-router-dom';

const apiKey = '1a79fc301203f205161daf43db66b1ec';

const Movies = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [searchParams, setParams] = useSearchParams();
  const query = searchParams.get('query');

  const handleSearch = () => {
    setParams({ query: searchQuery });
  };

  const handleChangeInput = (event) => {
    setSearchQuery(event.target.value);
  }

  useEffect(() => {
    if (!query) {
      return;
    }

    const searchEndpoint = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}`;
    axios.get(searchEndpoint).then(response => {
      setSearchResults(response.data.results);
    });
  }, [query]);

  return (
    <div>
      <h1>Search Movies</h1>
      <input
        type="text"
        value={searchQuery}
        onChange={handleChangeInput}
      />
      <button onClick={handleSearch}>Search</button>
      <ul>
        {searchResults.map(movie => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Movies;
