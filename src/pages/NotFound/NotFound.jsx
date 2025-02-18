import { Link } from "react-router-dom"
import s from "./NotFound.module.css"

const NotFound = () => {
  return (
      <div className={s.NotFound}>
      <h1>Not Found 404</h1>
      <Link to='/' className={s.Link} >
                Home
              </Link>
      </div>
  )
}

export default NotFound