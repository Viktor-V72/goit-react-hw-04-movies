import { Component } from 'react';
import { searchMovies } from '../Components/apiService/apiService';
import Searchbar from '../Components/Searchbar/Searchbar';
import MovieGallery from '../Components/MovieGallery/MovieGallery';

class MoviesPage extends Component {
  state = { movies: [], searchQuery: '' };

  componentDidMount() {
    if (this.props.location.query) {
      searchMovies(this.props.location.query).then(data =>
        this.setState({ movies: data.results }),
      );
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.fetchMovies();
    }
  }

  onChangeQuery = query => {
    const { history } = this.props;
    this.setState({
      searchQuery: query,
      images: [],
      error: null,
    });
    history.push({
      query: query,
    });
  };

  fetchMovies = () => {
    const { searchQuery } = this.state;

    searchMovies(searchQuery).then(data =>
      this.setState({ movies: data.results }),
    );
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
