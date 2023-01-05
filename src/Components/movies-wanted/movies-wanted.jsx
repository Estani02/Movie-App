import { useSelector } from "react-redux";
import s from '../movie/home.module.css'
import { Link } from "react-router-dom";


export default function MoviesWanted(){

    const moviesFound = useSelector(state => state.movieLoaded)

    return(
        <>
        <dl className={s.contenedorPrincipal}>
            <dt className={s.tituloContenedorP}>MOVIE WANTED</dt>
            <dd className={s.contenedorMovies}>
            {moviesFound?.map((m)=>
                <div key={m.id} className={s.subcontenedorMovies}>
                    <Link to={`/movie/${m.id}`} >
                        <img src={`https://image.tmdb.org/t/p/w400${m.poster_path}`} alt="not found" className={s.img} />
                    </Link>    
                    <Link to={`/movie/${m.id}`} className={s.link}>
                        <span>{m.title}</span>
                    </Link>
                </div>
             )}
            </dd>
        </dl>
        </>
    )
}