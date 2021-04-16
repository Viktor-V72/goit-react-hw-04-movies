import React from 'react';
import { Route, NavLink, Switch } from 'react-router-dom';
import Container from './Components/Container/Container';
import HomePage from './views/HomePage';
import MoviesPage from './views/MoviesPage';
import MovieDetailsPage from './views/MovieDetailsPage';

const App = () => {
  return (
    <Container>
      <ul>
        <li>
          <NavLink exact to="/" className="NavLink">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/movies">Search Movies</NavLink>
        </li>
      </ul>

      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/movies" component={MoviesPage} />
        <Route path="/movies/:movieId" component={MovieDetailsPage} />
        <Route path="/movies/:movieId/cast" />
        <Route path="/movies/:movieId/reviews" />
        {/* <Route component={NotFoundView} /> */}
      </Switch>
    </Container>
  );
};

export default App;
