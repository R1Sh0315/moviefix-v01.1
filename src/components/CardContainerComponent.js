import { useContext, useEffect, useRef, useState } from 'react';
import { SharedContext } from '../hooks/SharedContext';
import useFetchMovies from '../hooks/useFetchMovies';

const genres = {
    All: '',
    Action: 28,
    Comedy: 35,
    Horror: 27,
    Drama: 18,
    SciFi: 878,
};

const years = [2024, 2023, 2022, 2021, 2020, 2019, 2018, 2017, 2016, 2015, 2013, 2012, 2011, 2010, 2009];

const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500';

const CardContainerComponent = () => {
    const { genre } = useContext(SharedContext);
    const [currentYear, setCurrentYear] = useState(2012);
    const { moviesByYear, loading } = useFetchMovies(currentYear, genres[genre], years);
    const yearRef = useRef({});
    const containerRef = useRef(null);

    const handleScroll = (e) => {
        if (e.target.scrollTop === 0 && currentYear < years[years.length - 1]) {
            setCurrentYear(prevYear => prevYear + 1);
        }
        if (e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight && currentYear > years[0]) {
            setCurrentYear(prevYear => prevYear - 1);
        }
    };

    useEffect(() => {
        setTimeout(() => {
            if (yearRef.current[2012]) {
                yearRef.current[2012].scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }, 500);
    }, []);

    useEffect(() => {
        if (yearRef.current[currentYear]) {
            yearRef.current[currentYear].scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }, [currentYear]);

    const displayMovieCard = (movieArr) => {
        const topMovies = movieArr?.slice(0, 20);
        return (
            <>
                {topMovies.map((movieDetail, idx) => (
                    <div key={idx} className='mf-cc-card-content'
                        style={{ backgroundImage: `url(${IMAGE_BASE_URL + movieDetail.poster_path})` }}
                    >
                        <div className='mf-movie-details'>
                            <div className='mf-c-title'>{movieDetail.title.length > 13 ? movieDetail.title.slice(0, 13) + '...' : movieDetail.title}</div>
                            <div className='mf-c-rating'>{movieDetail.vote_average}</div>
                        </div>
                    </div>
                ))}
            </>
        );
    };

    return (
        <div className="mf-cc-container" onScroll={handleScroll} ref={containerRef} >
            {years.map((year, idx) => (
                <div key={idx} className='mf-cc-content' ref={el => yearRef.current[year] = el}>
                    <div className="mf-cc-year">{year}</div>
                    <div className="mf-cc-cardlist-container">
                        {loading ? <div>Loading...</div> : displayMovieCard(moviesByYear[year] || [])}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default CardContainerComponent;
