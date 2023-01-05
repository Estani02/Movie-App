import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Nav from "./Components/nav/nav";
import SyncLoader from "react-spinners/SyncLoader";
import "./App.css";
import e from "./Components/Spinner/Spinner.module.css"
import MovieDeatil from "./Components/movie-detail/movie-detail";
const Home = lazy(()=> import("./Components/movie/home"))
//const MovieDeatil = lazy(()=> import("./Components/movie-detail/movie-detail.jsx"))




function App() {
  return (
    <div className="App">
        <Nav />
        <Suspense fallback={
          <div className={e.contenedorSpinner}>
            {/* <SyncLoader 
            color={'#b1a8be'} 
            size={90}/> */}
          </div>
        }>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movie/:id" element={<MovieDeatil />} />
          </Routes>
        </Suspense>
      </div>
  );
}

export default App;
