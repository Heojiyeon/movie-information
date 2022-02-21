import React from 'react';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Movie({ id, title, medium_cover_image, summary, genres }) {
    return (
        <div>
            <h2>
                <Link to={`/movie/${id}`}>{title}</Link>
            </h2>
            <img src={medium_cover_image} alt={title} />
            <p>{summary}</p>
            <ul>
                {genres.map((genre) =>
                    <li key={genre}>{genre}</li>
                )}
            </ul>
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