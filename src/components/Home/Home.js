import React, { useEffect, useState } from 'react';
import MovieListing from '../MovieListing/MovieListing';

import { useDispatch } from 'react-redux';
import {fetchAsyncMovies, fetchAsyncShows} from "../../movies/movieSlice"


const Home = () => {
    const [movies, setMovies] = useState([]);
    const  dispatch = useDispatch();
    useEffect(()=>{
        dispatch(fetchAsyncMovies());
        dispatch(fetchAsyncShows())
    }, [dispatch]);
    return (
        <>
            <div className='banner-img'></div>
            <MovieListing movies={movies}/> {/* pass the movies as a prop to MovieListing */}
        </>
    );
};

export default Home;
