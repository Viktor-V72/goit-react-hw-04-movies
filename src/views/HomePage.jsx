import React, { Component } from 'react';
import { fetchTrends } from '../Components/apiService/apiService';
import MovieGallery from '../Components/MovieGallery/MovieGallery';
import styles from '../Components/MovieGallery/MovieGallery.module.css';

class HomePage extends Component {
  state = { movies: [] };

  async componentDidMount() {
    fetchTrends().then(data => this.setState({ movies: data.results }));
  }

  render() {
    return (
      <>
        <h1 className={styles.title_head}>Trending Movies</h1>
        <MovieGallery movies={this.state.movies} />
      </>
    );
  }
}

export default HomePage;
