import React, { Component } from 'react';
import axios from 'axios';
import styles from '../MovieGallery/MovieGallery.module.css';

const Api_Key = '0e6eebd27dfd68a7c4ec96f04756cc6c';

class Reviews extends Component {
  state = { reviews: [] };

  async componentDidMount() {
    const { movieId } = this.props.match.params;
    const response = await axios
      .get(
        `
https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${Api_Key}&language=en-US&page=1`,
      )
      .catch(error => this.setState({ error }));

    this.setState({ reviews: response.data.results });
  }

  render() {
    return (
      <>
        <h1 className={styles.title_head}>Reviews</h1>
        {this.state.reviews.length > 0 ? (
          <ul>
            {this.state.reviews.map(review => (
              <li key={review.id} className={styles.MovieGalleryItem}>
                <h2 className={styles.title}>{review.author}</h2>
                <p>{review.content}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>N/A</p>
        )}
      </>
    );
  }
}

export default Reviews;
