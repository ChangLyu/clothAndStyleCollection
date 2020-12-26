import React, { useReducer, useEffect } from "react";
import Movie from "./Movie";
import Search from "./Search";
import './MovieSearchApp.scss';
const MOVIE_API_URL = "https://www.omdbapi.com/?s=man&apikey=4a3b711b"; // you should replace this with yours

const initialState = {
    loading: true,
    movies: [],
    errorMessage: null
};
const reducer = (state, action) => {
    switch (action.type) {
        case "SEARCH_MOVIES_REQUEST":
            return {
                ...state,
                loading: true,
                errorMessage: null
            };
        case "SEARCH_MOVIES_SUCCESS":
            return {
                ...state,
                loading: false,
                movies: action.payload
            };
        case "SEARCH_MOVIES_FAILURE":
            return {
                ...state,
                loading: false,
                errorMessage: action.error
            };
        default:
            return state;
    }
};
const MovieSearchApp = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    // userEffect is a hook, get called after every update, accept two arguments, the function that we want to run, 
    // the array which will invoke function to run when its value get changed, if it is empty, it will run only once
    // Similar to componentDidMount and componentDidUpdate:
    useEffect(() => {
        fetch(MOVIE_API_URL)
            .then(response => response.json())
            .then(jsonResponse => {
                dispatch({
                    type: "SEARCH_MOVIES_SUCCESS",
                    payload: jsonResponse.Search
                });
            });
    }, []);

    const search = searchValue => {
        dispatch({
            type: "SEARCH_MOVIES_REQUEST"
        });

        fetch(`https://www.omdbapi.com/?s=${searchValue}&apikey=4a3b711b`)
            .then(response => response.json())
            .then(jsonResponse => {
                if (jsonResponse.Response === "True") {
                    dispatch({
                        type: "SEARCH_MOVIES_SUCCESS",
                        payload: jsonResponse.Search
                    });
                } else {
                    dispatch({
                        type: "SEARCH_MOVIES_SUCCESS",
                        payload: jsonResponse.Search
                    });
                }
            });
    };

    const { movies, errorMessage, loading } = state;
    return (
        <div className="movie-search-container">
            <h2>Movie Search</h2>
            <Search search={search} />
            <p className="App-intro">Sharing a few of our favourite movies</p>
            <div className="movies">
                {loading && !errorMessage ? (
                    <span>loading...</span>
                ) : errorMessage ? (
                    <div className="errorMessage">{errorMessage}</div>
                ) : (
                            movies.map((movie, index) => (
                                <Movie key={`${index}-${movie.Title}`} movie={movie} />
                            ))
                        )}
            </div>
        </div>
    );
};


export default MovieSearchApp;