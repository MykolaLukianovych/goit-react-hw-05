import { useState } from 'react';
import { SearchMovies } from '../../services/api';
import s from './Movies.module.css'
import { NavLink, useNavigate } from 'react-router-dom';


const Movies = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();


  const handleSearch = async () => {
    if (query.trim().length > 2) {
      const results = await SearchMovies(query);
      setMovies(results);
      setQuery("")
    }
  };

   const handleMovieClick = (movieId) => {
    navigate(`/movies/${movieId}`);
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
            <NavLink to={item.id.toString()} onClick={() => handleMovieClick(movies.id)}>
              {item.title}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Movies;