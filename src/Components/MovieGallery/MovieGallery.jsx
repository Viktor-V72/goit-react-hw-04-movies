import PropTypes from 'prop-types';
import styles from './MovieGallery.module.css';

const imgUrl = 'https://www.themoviedb.org/t/p/w220_and_h330_face';

const MovieGallery = ({ movies }) => (
  <ul className={styles.MovieGallery}>
    {movies.map(({ poster_path, id, name, title }) => (
      <li key={id} className={styles.MovieGalleryItem}>
        <img
          src={imgUrl + poster_path}
          alt=""
          className={styles.MovieGalleryItem_image}
        />
        <h2 className={styles.title}>{name || title}</h2>
      </li>
    ))}
  </ul>
);

MovieGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      poster_path: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
    }),
  ),
};

export default MovieGallery;
