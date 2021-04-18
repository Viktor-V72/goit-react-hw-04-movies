import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import { searchDetails } from '../Components/apiService/apiService';
import Cast from '../Components/Cast/Cast';
import Reviews from '../Components/Reviews/Reviews';

const imgUrl = 'https://www.themoviedb.org/t/p/w220_and_h330_face';

class MovieDetailsPage extends Component {
  state = {
    title: null,
    name: null,
    id: null,
    poster_path: null,
    overview: null,
    release_date: null,
    first_air_date: null,
  };

  async componentDidMount() {
    const { movieId } = this.props.match.params;

    searchDetails(movieId).then(data => this.setState({ ...data }));
  }

  handleGoBack = () => {
    const { location, history } = this.props;
    history.push(location?.state?.from || '/movies');
  };

  render() {
    const {
      name,
      title,
      poster_path,
      overview,
      release_date,
      first_air_date,
    } = this.state;
    return (
      <>
        <button type="button" onClick={this.handleGoBack}>
          Go Back
        </button>
        <h1>{title || name}</h1>
        <img src={imgUrl + poster_path} alt="" />
        <p> {release_date || first_air_date}</p>
        <p>{overview}</p>

        <ul>
          <li>
            <Link
              to={{
                pathname: `${this.props.match.url}/cast`,
              }}
            >
              Cast
            </Link>
          </li>
          <li>
            {' '}
            <Link
              to={{
                pathname: `${this.props.match.url}/reviews`,
              }}
            >
              Reviews
            </Link>
          </li>
        </ul>

        <Switch>
          <Route
            exact
            path={`${this.props.match.path}/cast`}
            component={Cast}
          />
          <Route
            exact
            path={`${this.props.match.path}/reviews`}
            component={Reviews}
          />
        </Switch>
      </>
    );
  }
}

export default MovieDetailsPage;
