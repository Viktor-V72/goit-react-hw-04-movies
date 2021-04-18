import React, { Suspense, lazy } from 'react';
import { Route, NavLink, Switch } from 'react-router-dom';
import Container from './Components/Container/Container';
import NotFoundView from './views/NotFoundView';
import styles from './Components/Container/Container.module.css';

const HomePage = lazy(() =>
  import('./views/HomePage.jsx' /* webpackChunkName: "home-page" */),
);

const MoviesPage = lazy(() =>
  import('./views/MoviesPage.jsx' /* webpackChunkName: "movies-view" */),
);

const MovieDetailsPage = lazy(() =>
  import(
    './views/MovieDetailsPage.jsx' /* webpackChunkName: "movieDetail-view" */
  ),
);

const App = () => {
  return (
    <Container>
      <ul className={styles.nav}>
        <li className={styles.nav_item}>
          <NavLink exact to="/" className="NavLink">
            Home
          </NavLink>
        </li>
        <li className={styles.nav_item}>
          <NavLink to="/movies">Search Movies</NavLink>
        </li>
      </ul>

      <Suspense fallback={<h1>Загружаем...</h1>}>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/movies" component={MoviesPage} />
          <Route path="/movies/:movieId" component={MovieDetailsPage} />
          <Route component={NotFoundView} />
        </Switch>
      </Suspense>
    </Container>
  );
};

export default App;
