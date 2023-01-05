const apiKey = "e174dd2ff6ed100dc0b3e87367e6b5c4"
const apiURL = "https://api.themoviedb.org/3/"

export const GET_POPULAR_MOVIES = "GET_POPULAR_MOVIES"
export const GET_MOVIES = "GET_MOVIES"
export const ADD_MOVIE_FAV = "ADD_MOVIE_FAV"
export const REMOVE_MOVIE_FAV = "REMOVE_MOVIE_FAV"
export const GET_MOVIES_DETAIL = "GET_MOVIES_DETAIL"
export const GET_MOVIES_TRADUCIDO = "GET_MOVIES_TRADUCIDO"
export const GET_VIDEO = "GET_VIDEO"

export function getPopularMovie(){
    const url = `${apiURL}movie/popular?api_key=${apiKey}`
    return async function(dispatch){
        const r = await fetch(url)
        const data = await r.json()
        dispatch({ type: GET_POPULAR_MOVIES, payload: data })
    }
};

export function getMovie(titulo){
    const url = `${apiURL}search/movie?api_key=${apiKey}&query=${titulo}`
    return function(dispatch){
        if(titulo){
            try{
            return fetch(url)
            .then(r => r.json())
            .then(data => {
            dispatch({type:GET_MOVIES, payload: data})
        })  } catch{
            dispatch({type:GET_MOVIES, payload: null})
        }
        }else{
            dispatch({type: GET_MOVIES})
        }
    }
};

export function getMovieDetail(movie){
    const url = `${apiURL}movie/${movie}?api_key=${apiKey}`
    return function(dispatch){
        if(movie){
            try{
            return fetch(url)
            .then(r => r.json())
            .then(data => {
            dispatch({type:GET_MOVIES_DETAIL, payload: data})
        })  } catch{
            dispatch({type:GET_MOVIES_DETAIL, payload: null})
        }
        }else{
            dispatch({type: GET_MOVIES_DETAIL})
        }
    }
}

export function getTraducion(id){
    const url = `${apiURL}movie/${id}/translations?api_key=${apiKey}`
    return async function(dispatch){
        const r = await fetch(url)
        const data = await r.json()
        dispatch({ type: GET_MOVIES_TRADUCIDO, payload: data })
    }
}

export function getVideo(id){
    const url = `${apiURL}movie/${id}/videos?api_key=${apiKey}`
    return async function(dispatch){
        const r = await fetch(url)
        const data = await r.json()
        dispatch({ type: GET_VIDEO, payload: data })
    }
}

export function addMovieFav(){
    
};

export function removeMovieFav(){
    
};

