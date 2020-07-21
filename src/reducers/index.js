import { combineReducers } from 'redux';
const initialMovieState = {
    list:[],
    favourites:[],
    showFavourites:false
}
import { ADD_MOVIES,ADD_TO_FAVOURITE,REMOVE_FAVOURITE,SET_SHOW_FAVOURITE, ADD_SEARCH_RESULT, ADD_MOVIE_TO_LIST } from '../actions';
export function movies (state = initialMovieState,action) {
    
    switch(action.type) {
        case ADD_MOVIES : 
            return {
                ...state,
                list: action.movies
            }
        case ADD_TO_FAVOURITE :
            return {
                ...state,
                favourites: [action.movie, ...state.favourites]
            }
        case REMOVE_FAVOURITE :
            console.log("in reducer",action.movie);
            const filteredArray = state.favourites.filter((movie)=>{
                if(movie.Title!==action.movie.Title) {
                    return movie
                }
            });
            return {
                ...state,
                favourites: filteredArray
            }
        case SET_SHOW_FAVOURITE :
            return {
                ...state,
                showFavourites:action.val
            }
        case ADD_MOVIE_TO_LIST:
            return {
                ...state,
                list:[action.movie, ...state.list]
            }
        default:
            return state

    }

    

}


const initialSearchState = {
    result: {},
    showSearchResults: false
}
export function search (state = initialSearchState,action) {

    switch(action.type) {
        case ADD_SEARCH_RESULT : 
            return {
                ...state,
                result:action.movie,
                showSearchResults: true
            }
        case ADD_MOVIE_TO_LIST:
            console.log("SEARCH REDUCER")
            return {
                ...state,
                showSearchResults:false
            }
        default :
            return state;
       

    }

    return state
    
} 

const initialRootState = {
    movies:initialMovieState,
    search:initialSearchState
}
// export default function rootReducer (state = initialRootState,action) {
//     return {
//         movies:movies(state.movies,action),
//         search:search(state.search,action)
//     }
// }

export default combineReducers ({
    movies:movies,
    search:search
})