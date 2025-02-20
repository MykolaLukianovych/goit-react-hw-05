import { NavLink, useLocation } from "react-router-dom"
import s from './MovieList.module.css'


const MovieList = ({movies}) => {

    const location = useLocation();
    

  return (
    <div>
      <ul className={s.trendList}>
        {movies.map(item => <li key={item.id}>
          <NavLink to={`/movies/${item.id}`} className={s.link} state={location}>
            {item.title}
          </NavLink>
        </li>)}
          </ul>
    </div>
  )
}

export default MovieList