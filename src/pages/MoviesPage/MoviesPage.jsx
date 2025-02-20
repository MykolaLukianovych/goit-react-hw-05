import { useState, useEffect } from 'react';
import { SearchMovies } from '../../services/api';
import s from './MoviesPage.module.css';
import { useSearchParams } from 'react-router-dom';
import MovieList from '../../components/MovieList/MovieList';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState(searchParams.get('query') || '');

  useEffect(() => {
    const queryParam = searchParams.get('query');
    if (queryParam && queryParam.trim().length > 2) {
      const fetchMovies = async () => {
        const results = await SearchMovies(queryParam);
        setMovies(results);
      };
      fetchMovies();
    }
  }, [searchParams]);

  const handleSearch = () => {
    if (query.trim().length > 2) {
      setSearchParams({ query });
    }
  };
  
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
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
        <MovieList movies={movies}/>
    </div>
  );
};

export default Movies;