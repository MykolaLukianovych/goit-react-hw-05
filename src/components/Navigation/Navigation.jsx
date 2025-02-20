import clsx from "clsx";
import { NavLink } from "react-router-dom"
import s from "./Navigation.module.css"

const buildLinkClass = ({ isActive }) => {
  return clsx(s.link, isActive && s.active);
};


const Navigation = () => {
  return (
      <div className={s.header}>
          <nav className={s.headerNav}>
              <NavLink to='/' className={buildLinkClass} >
                Home
              </NavLink>
              <NavLink to='/movies' className={buildLinkClass}>
                Movies
              </NavLink>
          </nav>
    </div>
  )
}

export default Navigation