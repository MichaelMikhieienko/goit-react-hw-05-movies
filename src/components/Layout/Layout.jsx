import * as React from 'react';
import { NavLink } from 'react-router-dom';

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <div>
        <div>
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

export default Layout;
