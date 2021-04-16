import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import styles from '../Components/MovieGallery/MovieGallery.module.css';

const Api_Key = '0e6eebd27dfd68a7c4ec96f04756cc6c';
const imgUrl = 'https://www.themoviedb.org/t/p/w220_and_h330_face';

class HomePage extends Component {
  state = { movies: [] };

  async componentDidMount() {
    const response = await axios
      .get(`https://api.themoviedb.org/3/trending/movie/day?api_key=${Api_Key}`)
      .catch(error => this.setState({ error }));

    this.setState({ movies: response.data.results });
  }

  render() {
    return (
      <>
        <h1 className={styles.title_head}>Trending Movies</h1>

        <ul className={styles.MovieGallery}>
          {this.state.movies.map(movie => (
            <li key={movie.id} className={styles.MovieGalleryItem}>
              <Link to={`movies/${movie.id}`}>
                <img
                  src={imgUrl + movie.poster_path}
                  alt=""
                  className={styles.MovieGalleryItem_image}
                />
              </Link>
              <h2 className={styles.title}>{movie.name || movie.title}</h2>
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default HomePage;
