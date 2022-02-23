import React from 'react';
import propTypes from 'prop-types';
import styles from './MovieDetail.module.css';

// year(개봉연도), rating(평점), runtime(런타임), description(설명) 

function MovieDetail({ year, rating, runtime, description_full }) {
    return (
        <div className={styles.movieDetailInfo}>
            <div>
                <h2>year: {year}</h2>
                <h2>rating: {rating} scores</h2>
                <h2>runtime: {runtime} minutes</h2>
            </div>
            <div className={styles.descriptionFull}><strong>description_full: {description_full}</strong></div>
        </div>
    )
}

MovieDetail.propTypes = {
    id: propTypes.number.isRequired,
    title: propTypes.string.isRequired,
    year: propTypes.number.isRequired,
    rating: propTypes.number.isRequired,
    runtime: propTypes.number.isRequired,
    descriptio_full: propTypes.string.isRequired
}

export default MovieDetail;