// MovieDetails.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState({});

  useEffect(() => {
    const apiKey = '1a79fc301203f205161daf43db66b1ec';
    const movieDetailsEndpoint = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}`;

    axios.get(movieDetailsEndpoint).then((response) => {
      setMovieDetails(response.data);
    });
  }, [movieId]);

  const posterBaseUrl = 'https://image.tmdb.org/t/p/w300'; // Базовый URL для загрузки постеров

  return (
    <div>
      {movieDetails.poster_path && (
        <img src={`${posterBaseUrl}${movieDetails.poster_path}`} alt={movieDetails.title} />
      )}
      <h1>{movieDetails.title}</h1>
      <p>{movieDetails.overview}</p>
      <Link to={`/movies/${movieId}/cast`}>View Cast</Link>
      <Link to={`/movies/${movieId}/reviews`}>View Reviews</Link>
    </div>
  );
};

export default MovieDetails;

