
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, withRouter  } from "react-router-dom";
import { getPopularMovie } from "../../Redux/actios";
import FoundMovie from "../found-movie/found-movie";
import s from './home.module.css';


export default function Home(){
    
    const dispatch = useDispatch()
    const moviesPopular = useSelector(state => state.moviePopular)
    const arraySearch = useSelector(state => state.movieLoaded);
    
    useEffect(()=>{
        dispatch(getPopularMovie())
    }, [dispatch])
    
    
    return(
        <>
       { arraySearch === undefined ? (
            <dl className={s.contenedorPrincipal}>
                <dt className={s.tituloContenedorP}>POPULAR MOVIES</dt>
                <dd className={s.contenedorMovies}>
                    {moviesPopular?.map((m)=>
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
            ) : (
                <FoundMovie />
            )
        }
        </>
    )
};

    