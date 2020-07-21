import { combineReducers } from 'redux';
const initialMovieState = {
    list:[],
    favourites:[],
    showFavourites:false
}
import { ADD_MOVIES,ADD_TO_FAVOURITE,REMOVE_FAVOURITE,SET_SHOW_FAVOURITE } from '../actions';
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

        
      
            
        default:
            return state

    }

    return state

}


const initialSearchState = {
    result: {}
}
export function search (state = initialSearchState,action) {
    return state;
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