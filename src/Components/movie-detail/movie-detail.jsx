import { useEffect, lazy, Suspense } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { getMovieDetail, getVideo } from "../../Redux/actios" 
import SyncLoader from "react-spinners/SyncLoader"
import s from './movie-detail.module.css'
import e from "../Spinner/Spinner.module.css"
const Video = lazy(()=> import("../video/video"))

export default function MovieDeatil(){

    const {id} = useParams();

    const dispatch = useDispatch();
    const movie = useSelector(state => state.movieDetail);
    const url_img = 'https://image.tmdb.org/t/p/original';
    const cuevana_url = "https://ver.cuevana.pro/pelicula/";
    //const traduccion = useSelector(state => state.movieTraducido);

    
    useEffect(() =>{
        window.scrollTo(0,0)
        setTimeout(()=>{
        dispatch(getMovieDetail(id))
        },1000)
        //dispatch(getTraducion(id))
        dispatch(getVideo(id))
        dispatch(getMovieDetail(undefined))
    }, [dispatch, id]);
    
    function covertirTiempo(min){
        let horas = Math.floor(min / 60);
        min = min % 60
        return `${horas}h ${min}m`
    }

    function strCuevana(str){
        const minuscula = str.toLowerCase()
        const array = minuscula.split(' ')
        return array.join('-')
    }

    return(
        <section className={s.contenedor}>
            { movie === undefined ? (
                <div className={e.contenedorSpinner}>
                    <SyncLoader color={'#b1a8be'} size={80}/>
                </div>
            ) : movie === null ? (
                <>
                    <h3>Not found</h3>
                </>
            ) : (
                <div className={s.subcontenedor}>
                    <div className={s.contenido}>
                        <div className={s.portada}>
                            <h1>{movie.title}</h1>
                            <h5>{movie.tagline}</h5>
                            <img src={url_img + movie.poster_path} alt={movie.title} width={300} height={450}/>
                        </div>
                        <div className={s.infoMovie}>
                            <p>{movie.overview}</p>
                            <ul>
                                <li>Genres: {movie.genres.map((m) => m.name).join(", ")}{" "}</li>
                                <li>Release Date: {movie.release_date}</li>
                                <li>Duration: {covertirTiempo(movie.runtime)}</li>
                            </ul>
                            <p>
                                <strong>Watch the movie: </strong>
                                <a href={cuevana_url + strCuevana(movie.title)} target="blanck">Watch Movie</a>
                            </p>
                        </div>
                    </div>
                <div className={s.backdropimg} >
                    <figure className={s.contenedorPoster}>
                        <img src={url_img + movie.backdrop_path} alt={movie.title} className={s.poster} />
                    </figure>
                </div>
                <Suspense fallback={<div className={e.contenedorSpinner}><SyncLoader color={'#b1a8be'} size={50}/></div>}>
                    <Video />
                </Suspense>
            </div>
            )} 
        </section>
    )
}