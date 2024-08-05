import { useState, useEffect } from 'react';
import axios from 'axios';

const API_KEY = '01baf902dc5a992cf55d86666843934e';
const BASE_URL = 'https://api.themoviedb.org/3';

const useFetchMovies = (year, genre, yearList) => {
    const [movies, setMovies] = useState([]);
    const [moviesByYear, setMoviesByYear] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchMovies = async () => {
            setLoading(true);
            try {
                const response = await axios.get(
                    `${BASE_URL}/discover/movie?api_key=${API_KEY}&sort_by=popularity.desc&primary_release_year=${year}&vote_count.gte=100&with_genres=${genre}`
                );
                setMovies(response.data.results);

                const requests = yearList.map(y => 
                    axios.get(`${BASE_URL}/discover/movie?api_key=${API_KEY}&sort_by=popularity.desc&primary_release_year=${y}&vote_count.gte=100&with_genres=${genre}`)
                );
                const responses = await Promise.all(requests);

                const moviesByYearData = responses.reduce((acc, res, idx) => {
                    acc[yearList[idx]] = res.data.results;
                    return acc;
                }, {});
                console.log(moviesByYearData[2015][0].vote_average)
                setMoviesByYear(moviesByYearData);

            } catch (error) {
                console.error('Error fetching movies:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchMovies();
    }, [year, genre, yearList]);

    return { movies, moviesByYear, loading };
};

export default useFetchMovies;
