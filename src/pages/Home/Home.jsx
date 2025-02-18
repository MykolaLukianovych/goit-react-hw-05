import { useEffect, useState } from "react";
import { TrendingMovies } from "../../services/api";
import s from "./Home.module.css"
import { Link } from "react-router-dom";

const Home = () => {
 

  const [trend, setTrend] = useState([]);
  useEffect(() => {
    const getMovies = async () => {
      const movies = await TrendingMovies();
      setTrend(movies)
    }
    getMovies();
  })
  
  return (
      <div className={s.homePage}>
          <h1>Trending today</h1>
      <ul className={s.trendList}>
        {trend.map(item => <li key={item.id}>
          <Link to={item.id.toString()}>
            {item.original_title}
          </Link>
        </li>)}
          </ul>
    </div>
  )
}

export default Home