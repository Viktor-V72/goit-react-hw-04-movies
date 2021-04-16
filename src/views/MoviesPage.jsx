import { Component } from 'react';
import axios from 'axios';
import Searchbar from '../Components/Searchbar/Searchbar';
import MovieGallery from '../Components/MovieGallery/MovieGallery';

const Api_Key = '0e6eebd27dfd68a7c4ec96f04756cc6c';

class MoviesPage extends Component {
  state = { movies: [], searchQuery: '' };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.fetchMovies();
      console.log(this.state.searchQuery);
    }
  }

  onChangeQuery = query => {
    this.setState({
      searchQuery: query,
      images: [],
      error: null,
    });
  };

  fetchMovies = () => {
    const { searchQuery } = this.state;

    return axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=${Api_Key}&query=${searchQuery}&language=en-US&page=1&include_adult=false`,
      )
      .then(response => {
        this.setState({ movies: response.data.results });
      })
      .catch(error => this.setState({ error }));
  };

  render() {
    return (
      <>
        <Searchbar onSearch={this.onChangeQuery} />

        <MovieGallery movies={this.state.movies} />
      </>
    );
  }
}

export default MoviesPage;
