import React, { Component } from 'react';
import Axios from 'axios';

const Api_Key = '0e6eebd27dfd68a7c4ec96f04756cc6c';
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
    const response = await Axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=${Api_Key}&language=en-US`,
    );

    this.setState({ ...response.data });
  }

  render() {
    const {
      name,
      title,
      id,
      poster_path,
      overview,
      release_date,
      first_air_date,
    } = this.state;
    return (
      <>
        <h1>Страница одной книги {this.props.match.params.movieId}</h1>
        <img src={imgUrl + poster_path} alt="" />
        <h2>{title || name}</h2>
        <p>Год: {release_date || first_air_date}</p>
        <p>{overview}</p>
      </>
    );
  }
}

export default MovieDetailsPage;
