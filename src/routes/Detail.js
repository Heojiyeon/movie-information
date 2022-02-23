import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import MovieDetail from '../components/MovieDetail';

function Detail() {
    const [movieDetail, setMovieDetail] = useState("");

    const { id } = useParams();
    const getMovie = async () => {
        const json = await (
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        ).json();
        setMovieDetail(json.data.movie);
    };

    useEffect(() => {
        getMovie();
    }, []);

    //   year(개봉연도), rating(평점), runtime(런타임), description_full(설명)
    return <div>
        <div>
            <MovieDetail
                title={movieDetail.title}
                year={movieDetail.year}
                rating={movieDetail.rating}
                runtime={movieDetail.runtime}
                description_full={movieDetail.description_full}
            />
        </div>
    </div>
}

export default Detail;