import { useState } from 'react';
import { SearchMovies } from '../../services/api';
import s from './Movies.module.css'
import { NavLink, useLocation } from 'react-router-dom';


const Movies = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const location = useLocation()



  const handleSearch = async () => {
    if (query.trim().length > 2) {
      const results = await SearchMovies(query);
      setMovies(results);
      setQuery("")
    }
  };
  
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
      setQuery("")
    }
  };

  return (
    <div className={s.searckWrap}>
      <h1>Search Movies</h1>
      
      <div className={s.search}>
        <input
          className={s.input}
          type="text"
          placeholder="Enter movie name..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        
        <button onClick={handleSearch}>Search</button>
      </div>

      <ul>
        {movies.map((item) => (
          <li key={item.id}>
            <NavLink to={item.id.toString()} state={location} className={s.link}>
              {item.title}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Movies;