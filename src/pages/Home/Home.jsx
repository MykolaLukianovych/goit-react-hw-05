import { useEffect, useState } from "react";
import { TrendingMovies } from "../../services/api";
import s from "./Home.module.css"
import { NavLink, useLocation } from "react-router-dom";



const Home = () => {
  const [trend, setTrend] = useState([]);
  const location = useLocation();
  

  useEffect(() => {
    const getMovies = async () => {
      const movies = await TrendingMovies();
      setTrend(movies)
    }
    getMovies();
  }, []);
  
  return (
      <div className={s.homePage}>
          <h1>Trending today</h1>
      <ul className={s.trendList}>
        {trend.map(item => <li key={item.id}>
          <NavLink to={`/movies/${item.id}`} className={s.link} state={location}>
            {item.original_title}
          </NavLink>
        </li>)}
          </ul>
    </div>
  )
}

export default Home