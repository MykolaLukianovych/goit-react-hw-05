import { useEffect, useState } from "react";
import { TrendingMovies } from "../../services/api";
import s from "./Home.module.css"
import { NavLink, useNavigate } from "react-router-dom";



const Home = () => {
  const [trend, setTrend] = useState([]);
  useEffect(() => {
    const getMovies = async () => {
      const movies = await TrendingMovies();
      setTrend(movies)
    }
    getMovies();
  }, []);

  const navigate = useNavigate();

   const handleMovieClick = (movieId) => {
    navigate(`/movies/${movieId}`);
  };
  
  return (
      <div className={s.homePage}>
          <h1>Trending today</h1>
      <ul className={s.trendList}>
        {trend.map(item => <li key={item.id} onClick={() => handleMovieClick(item.id)}>
          <NavLink to={`/movies/${item.id}`} className={s.link}>
            {item.original_title}
          </NavLink>
        </li>)}
          </ul>
    </div>
  )
}

export default Home