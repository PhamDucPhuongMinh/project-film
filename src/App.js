import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import MovieTVPerson from "./pages/MovieTVPerson";
import WatchDetail from "./pages/WatchDetail";
import WatchMovie from "./pages/WatchMovie";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/home" element={<Home />} />
        <Route
          exact
          path="/movie"
          element={<MovieTVPerson category="movie" />}
        />
        <Route exact path="/tv" element={<MovieTVPerson category="tv" />} />
        <Route
          exact
          path="/person"
          element={<MovieTVPerson category="person" />}
        />
        <Route exact path="/detail/:category/:id" element={<WatchDetail />} />
        <Route exact path="/watch/:category/:id" element={<WatchMovie />} />
        <Route exact path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
