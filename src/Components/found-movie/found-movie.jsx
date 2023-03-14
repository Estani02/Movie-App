import { useSelector } from "react-redux";
import s from "../home/home.module.css";
import { Link } from "react-router-dom";

export default function FoundMovie() {
  const moviesFound = useSelector((state) => state.movieLoaded);

  return (
    <>
      {moviesFound.length === 0 ? (
        <div className={s.containerMovieNotFound}>
          <h1 className={s.tituloContenedorP}>MOVIE {} NOT FOUND</h1>
        </div>
      ) : (
        <dl className={s.contenedorPrincipal}>
          <dt className={s.tituloContenedorP}>FOUND MOVIE</dt>
          <dd className={s.contenedorMovies}>
            {moviesFound?.map((m) => (
              <div key={m.id} className={s.subcontenedorMovies}>
                <Link to={`/movie/${m.id}`}>
                  <img
                    src={`https://image.tmdb.org/t/p/w400${m.poster_path}`}
                    alt="not found"
                    className={s.img}
                  />
                </Link>
                <Link to={`/movie/${m.id}`} className={s.link}>
                  <span>{m.title}</span>
                </Link>
              </div>
            ))}
          </dd>
        </dl>
      )}
    </>
  );
}
