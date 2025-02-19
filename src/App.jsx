import { Route, Routes } from "react-router-dom"
import Header from "./components/Header/Header"
// import Home from "./pages/Home/Home"
// import Movies from "./pages/Movies/Movies"
// import NotFound from "./pages/NotFound/NotFound"
// import MovieDetails from "./pages/MovieDetails/MovieDetails"
// import Cast from "./components/Cast/Cast"
// import Reviews from "./components/Reviews/Reviews"
import { lazy } from "react"


const Home = lazy(() => import("./pages/Home/Home"))
const Movies = lazy(() => import("./pages/Movies/Movies"))
const NotFound = lazy(() => import("./pages/NotFound/NotFound"))
const MovieDetails = lazy(() => import("./pages/MovieDetails/MovieDetails"))
const Cast = lazy(() => import("./components/Cast/Cast"))
const Reviews = lazy(() => import("./components/Reviews/Reviews"))


const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies/:movieId" element={<MovieDetails />} >
          <Route path="cast" element={ <Cast /> } />
          <Route path="reviews" element={ <Reviews /> } />
        </Route>
        <Route path="/movies" element={<Movies />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App
