


//action types
export const ADD_MOVIES = "ADD_MOVIES";
export const ADD_TO_FAVOURITE = "ADD_TO_FAVOURITE";
export const REMOVE_FAVOURITE = "REMOVE_FAVOURITE";
export const SET_SHOW_FAVOURITE = "SET_SHOW_FAVOURITE";
export const ADD_SEARCH_RESULT  = "ADD_SEARCH_RESULT";
export const ADD_MOVIE_TO_LIST  = "ADD_MOVIE_TO_LIST";


//action creators
export function addMovies(movies) {
    return {
        type:ADD_MOVIES,
        movies:movies
    }
}

export function addFavourite(movie) {
    return {
        type:ADD_TO_FAVOURITE,
        movie:movie

    }
}

export function removeFavourite(movie) {
    console.log("in action",movie);
    return {
        type:REMOVE_FAVOURITE,
        movie:movie

    }
}

export function setShowFavourite(val) {
    
    return {
        type:SET_SHOW_FAVOURITE,
        val:val

    }
}

export function handleMovieSearch(movie) {
   console.log("inside action");
   const url = `http://www.omdbapi.com/?apikey=3ca5df7&t=${movie}`;
   return function(dispatch) {
    fetch(url)
    .then(response=>response.json())
    .then((movie)=>
    {
        console.log(movie)
        dispatch(addMovieSearchResult(movie));

    
    
    
    });
    

   }
  


}

export function addMovieSearchResult (movie) {
    return {
        type: ADD_SEARCH_RESULT,
        movie
    }
}

export function addMovieToList (movie) {
    return {
        type: ADD_MOVIE_TO_LIST,
        movie
    }
}