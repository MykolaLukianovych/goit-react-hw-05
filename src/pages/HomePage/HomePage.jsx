import { useEffect, useState } from "react";
import MovieList from "../../components/MovieList/MovieList"
import s from "./HomePage.module.css"
import { TrendingMovies } from "../../services/api";




const HomePage = () => {

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      const movies = await TrendingMovies();
      setMovies(movies)
    }
    getMovies();
  }, []);

  return (
      <div className={s.homePage}>
      <h1>Trending today</h1>
      <MovieList movies={ movies } />
    </div>
  )
}

export default HomePage