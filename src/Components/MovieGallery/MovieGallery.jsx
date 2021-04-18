import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';
import styles from './MovieGallery.module.css';

const imgUrl = 'https://www.themoviedb.org/t/p/w220_and_h330_face';

const MovieGallery = ({ movies, location }) => (
  <ul className={styles.MovieGallery}>
    {movies.map(({ poster_path, id, name, title }) => (
      <li key={id} className={styles.MovieGalleryItem}>
        <Link
          to={{
            pathname: `movies/${id}`,
            state: { from: location },
          }}
        >
          <img
            src={imgUrl + poster_path}
            alt=""
            className={styles.MovieGalleryItem_image}
          />
        </Link>
        <h2 className={styles.title}>{name || title}</h2>
      </li>
    ))}
  </ul>
);

MovieGallery.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      poster_path: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    }),
  ),
  location: PropTypes.object.isRequired,
};

export default withRouter(MovieGallery);
