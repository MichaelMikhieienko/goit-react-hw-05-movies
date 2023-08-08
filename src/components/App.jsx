// App.jsx
import React, { Suspense } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import HomePage from './Home/Home';
import MoviesPage from './Movies/Movies';
import MovieDetails from './MovieDetails/MovieDetails';
import Cast from './Cast/Cast';
import Reviews from './Reviews/Reviews';
import LoadingSpinner from './LoadingSpinner/LoadingSpinner';
import Layout from './Layout/Layout';

const App = () => {
  return (
    <Router>
      <Layout>
        <Suspense fallback={<LoadingSpinner />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/movies/*">
              <Route path="*" element={<MoviesPage />} />
              <Route path=":movieId" element={<MovieDetails />} />
              <Route path=":movieId/cast" element={<Cast />} />
              <Route path=":movieId/reviews" element={<Reviews />} />
            </Route>
            <Route path="*" element={<HomePage />} />
          </Routes>
        </Suspense>
      </Layout>
    </Router>
  );
};

export default App;
