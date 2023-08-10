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
import LoadingSpinner from './LoadingSpinner/LoadingSpinner';
import Layout from './Layout/Layout';

const App = () => {
  return (
    <Router>
      <Layout>
        <Suspense fallback={<LoadingSpinner />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/movies"  element={<MoviesPage />}/>
            <Route path="/movies/:movieId/*"  element={<MovieDetails />}/>
          </Routes>
        </Suspense>
      </Layout>
    </Router>
  );
};

export default App;
