import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import movieApi from "../common/apis/movieApi";
import {ApiKey} from "../common/apis/MovieApiKey"
//CreateAsync Thunk is a middle ware
export const fetchAsyncMovies = createAsyncThunk("movies/fetchAsyncMovies", async ()=>{
    const movieText = "Harry";
    const response = await movieApi.get(`?apiKey=${ApiKey}&s=${movieText}&type=movie`);
    console.log("The response of API", response);
    return response.data;
})

export const fetchAsyncShows = createAsyncThunk("movies/fetchAsyncShows", async ()=>{
    const seriesText = "Friends";
    const response = await movieApi.get(`?apiKey=${ApiKey}&s=${seriesText}&type=series`);
    console.log("The response of API", response);
    return response.data;
})

export const fetchAsyncDetails = createAsyncThunk("movies/fetchAsyncDetails", async (id)=>{
    const seriesText = "Friends";
    const response = await movieApi.get(`?apiKey=${ApiKey}&i=${id}&Plot=full`);
    console.log("The response of API", response);
    return response.data;
})


const initialState = {
    movies:{},
    shows:{}, 
    selectedMovieorShow:{}

}
const movieSlice = createSlice({
    name:"movies",
    initialState,
    reducers:{
        addMovies:(state, {payload})=>{
            state.movies = payload; //used inplace of {...state, payload}

        }
    },
    extraReducers:{
        [fetchAsyncMovies.pending]:()=>{
            console.log("pending")
        },
        [fetchAsyncMovies.fulfilled]:(state, {payload})=>{
            console.log("Fetched Successfully");
            return {...state, movies:payload}
        },
        [fetchAsyncMovies.rejected]:()=>{
            console.log("Rejected")
        },
        [fetchAsyncShows.fulfilled]:(state, {payload})=>{
            console.log("Fetched Successfully");
            return {...state, shows:payload}
        },
        [fetchAsyncDetails.fulfilled]:(state, {payload})=>{
            console.log("Fetched Successfully");
            return {...state, selectedMovieorShow:payload}
        }
    }
})

export const {addMovies} = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies
export const getAllShows = (state) => state.movies.shows
export const getDetails = (state) => state.movies.selectedMovieorShow
export default movieSlice.reducer;