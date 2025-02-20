import MovieList from "../../components/MovieList/MovieList"
import s from "./HomePage.module.css"




const HomePage = () => {
  return (
      <div className={s.homePage}>
      <h1>Trending today</h1>
      <MovieList />
    </div>
  )
}

export default HomePage