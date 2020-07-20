
const initialMovieState = {
    list:[],
    favourites:[],
    showFavourites:false
}
import { ADD_MOVIES,ADD_TO_FAVOURITE,REMOVE_FAVOURITE,SET_SHOW_FAVOURITE } from '../actions';
export default function movies (state = initialMovieState,action) {
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