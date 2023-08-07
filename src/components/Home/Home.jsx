// Home.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    const apiKey = '1a79fc301203f205161daf43db66b1ec';
    const trendingEndpoint = `https://api.themoviedb.org/3/trending/movie/day?api_key=${apiKey}`;

    axios.get(trendingEndpoint).then((response) => {
      setTrendingMovies(response.data.results);
    });
  }, []);

  return (
    <div>
      <h1>Trending Movies</h1>
      <ul>
        {trendingMovies.map((movie) => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;

