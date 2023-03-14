import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Nav from "./Components/nav/nav";
import "./App.css";
import e from "./Components/Spinner/Spinner.module.css"
import MovieDeatil from "./Components/movie-detail/movie-detail";
import About from "./Components/about/About";
const Home = lazy(()=> import("./Components/home/home"))

function App() {
  return (
    <div className="App">
        <Nav />
        <Suspense fallback={
          <div className={e.contenedorSpinner}></div>
        }>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movie/:id" element={<MovieDeatil />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Suspense>
      </div>
  );
}

export default App;
