import { Route, Routes } from "react-router-dom"
import { lazy, Suspense } from "react"
import Navigation from "./components/Navigation/Navigation"


const HomePage = lazy(() => import("./pages/HomePage/HomePage"))
const MoviesPage = lazy(() => import("./pages/MoviesPage/MoviesPage"))
const NotFound = lazy(() => import("./pages/NotFound/NotFound"))
const MovieDetailsPage = lazy(() => import("./pages/MovieDetailsPage/MovieDetailsPage"))
const MovieCast = lazy(() => import("./components/MovieCast/MovieCast"))
const MovieReviews = lazy(() => import("./components/MovieReviews/MovieReviews"))


const App = () => {

  


  return (
    <div>
      <Navigation />
      <Suspense fallback={<h2>Loading...</h2>}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies/:movieId" element={<MovieDetailsPage />} >
          <Route path="cast" element={ <MovieCast /> } />
          <Route path="reviews" element={ <MovieReviews /> } />
        </Route>
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="*" element={<NotFound />} />
        </Routes>
        </Suspense>
    </div>
  );
};

export default App
