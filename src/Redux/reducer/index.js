import { 
    ADD_MOVIE_FAV, 
    GET_MOVIES, 
    GET_MOVIES_DETAIL, 
    GET_POPULAR_MOVIES, 
    REMOVE_MOVIE_FAV,
    GET_MOVIES_TRADUCIDO,
    GET_VIDEO, 
    } from "../actios";

const initialState = {
    moviePopular: [],
    movieLoaded: undefined,
    movieFav: [],
    movieTraducido: [],
    video: [],
    movieDetail: undefined
}

const rootReducer = (state = initialState, {type, payload}) => {
    switch(type){
        case GET_POPULAR_MOVIES:
            return{
                ...state,
                moviePopular: payload.results
            }
        case GET_MOVIES:
            return{
                ...state,
                movieLoaded: payload.results.filter(movie => movie.poster_path !== null ),
            }
        case GET_MOVIES_DETAIL:
            return{
                ...state,
                movieDetail: payload
            }
        case GET_MOVIES_TRADUCIDO:
            return{
                ...state,
                movieTraducido: payload.translations.filter(m => m.iso_3166_1 === "MX")
            }
        case GET_VIDEO:
            return{
                ...state,
                video: payload.results.filter(m => m.type === "Trailer")
            }
        case ADD_MOVIE_FAV:
            return{
                ...state,
                movieFav: payload
            }
        case REMOVE_MOVIE_FAV: 
            return{
                ...state,
                movieFav: payload
            }
            default:
                return {...state}
        }
}

export default rootReducer;