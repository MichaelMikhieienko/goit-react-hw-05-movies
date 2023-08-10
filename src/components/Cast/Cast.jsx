// Cast.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const apiKey = '1a79fc301203f205161daf43db66b1ec';
    const castEndpoint = `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${apiKey}`;

    axios.get(castEndpoint).then(response => {
      setCast(response.data.cast);
    });
  }, [movieId]);

  return (
    <div>
      <h1>Cast</h1>
      <ul>
        {cast.map(actor => (
          <li key={actor.id}>{actor.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Cast;
