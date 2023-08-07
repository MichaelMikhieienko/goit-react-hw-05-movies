// App.jsx
import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import HomePage from './Home/Home';
import MoviesPage from './Movies/Movies';
import MovieDetails from './MovieDetails/MovieDetails';
import Cast from './Cast/Cast';
import Reviews from './Reviews/Reviews';
import LoadingSpinner from './LoadingSpinner/LoadingSpinner';

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <div>
        <div>
          {/* Используем NavLink вместо обычных кнопок */}
          <NavLink to="/" className="active" end>
            Home
          </NavLink>
          <NavLink to="/movies" className="active">
            Movies
          </NavLink>
        </div>

        {children}
      </div>
    </React.Fragment>
  );
};

const App = () => {
  return (
    <Router>
      <Layout>
        <Suspense fallback={<LoadingSpinner />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/movies" element={<MoviesPage />} />
            <Route path="/movies/:movieId" element={<MovieDetails />} />
            <Route path="/movies/:movieId/cast" element={<Cast />} />
            <Route path="/movies/:movieId/reviews" element={<Reviews />} />
            <Route path="*" element={<HomePage />} />
          </Routes>
        </Suspense>
      </Layout>
    </Router>
  );
};

export default App;






