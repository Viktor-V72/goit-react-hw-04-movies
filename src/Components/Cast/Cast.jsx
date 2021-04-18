import React, { Component } from 'react';
import axios from 'axios';
import styles from '../MovieGallery/MovieGallery.module.css';

const Api_Key = '0e6eebd27dfd68a7c4ec96f04756cc6c';
const imgUrl = 'https://www.themoviedb.org/t/p/w220_and_h330_face';

class Cast extends Component {
  state = { credits: [] };

  async componentDidMount() {
    const { movieId } = this.props.match.params;
    const response = await axios
      .get(
        `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${Api_Key}&language=en-US`,
      )
      .catch(error => this.setState({ error }));

    this.setState({ credits: response.data.cast });
  }

  render() {
    return (
      <>
        <h1 className={styles.title_head}>Cast</h1>

        <ul className={styles.MovieGallery}>
          {this.state.credits.map(credit => (
            <li key={credit.id} className={styles.MovieGalleryItem}>
              <img
                src={imgUrl + credit.profile_path}
                alt=""
                className={styles.MovieGalleryItem_image}
              />
              <h2 className={styles.title}>{credit.name}</h2>
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default Cast;
