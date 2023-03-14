import React from "react";
import s from "./About.module.css";
import linkedin from "../../utils/linkedinIcon.png";
import git from "../../utils/githubIcon.svg.png";
import movie from "../../utils/movieIcon.png";
import { useEffect } from "react";

export default function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={s.container}>
      <h1>MOVIE-APP</h1>
      <div className={s.subcontainer}>
        <img src={movie} alt="iconMovie" />
        <div>
          <p className={s.text}>
            Este proyecto me sirvió para afianzar conceptos de <b>React</b> y
            poner en practica <b>Redux</b>. Esta página dentro de todo es
            sencilla. Alguna de sus funcionalidades son:
          </p>
          <ul>
            <li>Ver cuáles son las películas del momento</li>
            <li>Buscar cualquier película/serie</li>
            <li>Ver el detalle de la película/serie incluyendo su tráiler</li>
            <li>Agregar o quitar de favoritos</li>
          </ul>
          <p className={s.text}>
            Se implementó librerías nuevas como la de <b>react-youtube</b> y
            <b>react-spinners</b>, que simplificaron la escritura del código.
          </p>
          <p className={s.text}>
            Te invito que veas mi repositorio y me digas que te pareció, también
            dejo mi LinkedIn donde cuento mis avances y mis próximos proyectos.
          </p>
          <div className={s.containerIcons}>
            <a
              target="_blank"
              href="https://github.com/Estani02/Movie-App"
              rel="noreferrer"
            >
              <img src={git} alt="Repo" className={s.iconGitHub} />
            </a>
            <a
              target="_blank"
              href="https://ar.linkedin.com/in/estanislao-olmedo-208510247?original_referer=https%3A%2F%2Fwww.google.com%2F"
              rel="noreferrer"
            >
              <img src={linkedin} alt="Linkedink" className={s.iconLinkedin} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
