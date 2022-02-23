import React from 'react';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from "./Movie.module.css";

function Movie({ id, title, medium_cover_image, summary, genres }) {
    return (
        <div className={styles.movieInfo}>
            <img className={styles.img} src={medium_cover_image} alt={title} />
            <h2 className={styles.title}><Link to={`/movie/${id}`}>{title}</Link></h2>
            <ul className={styles.genre_ul}>
                <strong>Genre : </strong>
                {genres.map((genre) =>
                    <li className={styles.genre_list} key={genre}>{genre}&nbsp;</li>
                )}
            </ul>
            <p className={styles.summary}>{summary}</p>
        </div >
    )
}

Movie.propTypes = {
    id: propTypes.number.isRequired,
    medium_cover_image: propTypes.string.isRequired,
    title: propTypes.string.isRequired,
    summary: propTypes.string.isRequired,
    genres: propTypes.arrayOf(propTypes.string).isRequired
}
export default Movie;