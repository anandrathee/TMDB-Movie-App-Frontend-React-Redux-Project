import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Trending from "./components/Trending";
import Popular from "./components/Popular";
import Movie from "./components/Movie";
import Tv from "./components/Tv";
import People from "./components/People";
import Moviedetails from "./components/Moviedetails";
import Tvdetails from "./components/Tvdetails";
import PersonDetails from "./components/PersonDetails";
import Trailer from "./components/templates/Trailer";
import NotFound from "./components/NotFound";

const App = () => {
  return (
    <div className="w-screen h-screen bg-[#1F1E24] flex ">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trending" element={<Trending />} />
        <Route path="/popular" element={<Popular />} />

        <Route path="/movie" element={<Movie />}/>
        <Route path="/movie/details/:id" element={<Moviedetails />} >
        <Route path="/movie/details/:id/trailer" element={<Trailer/>}/>
        </Route>

        <Route path="/tv" element={<Tv />}/>
        <Route path="/tv/details/:id" element={<Tvdetails />}>
        <Route path="/tv/details/:id/trailer" element={<Trailer/>}/>
        </Route>

        <Route path="/people" element={<People />}/>
        <Route path="/person/details/:id" element={<PersonDetails />} />
        <Route path="*" element={<NotFound />} />
        
      </Routes>
    </div>
  );
};

export default App;
