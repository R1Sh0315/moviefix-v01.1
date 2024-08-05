import React from 'react';

const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500';

const MovieCardComponent = ({ movieDetail }) => {
    return (
        <div
            className='mf-cc-card-content'
            style={{ backgroundImage: `url(${IMAGE_BASE_URL + movieDetail.poster_path})` }}
        >
            <div className='mf-movie-details'>
                <div className='mf-c-title'>
                    {movieDetail.title.length > 13 ? movieDetail.title.slice(0, 13) + '...' : movieDetail.title}
                </div>
                <div className='mf-c-rating'>{movieDetail.vote_average}</div>
            </div>
        </div>
    );
};

export default MovieCardComponent;
