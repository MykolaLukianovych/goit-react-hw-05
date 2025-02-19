import axios from "axios";

const options = {
    params: {language: 'en-US'},
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NzYwYWZkMjNkYTU0MjFlZGQ2ODZmNmI5ZWI3ZTM0ZiIsIm5iZiI6MTczOTg3OTAwMS40NDMsInN1YiI6IjY3YjQ3MjU5NjExM2M0OTNkYzZlMDRiZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.mIYM6YRH9eHanfdCXuv7VhlnRFWrsh3hEhuXIIF3B1I'
    }
};



export const TrendingMovies = async () => {
    const { data } = await axios.get('https://api.themoviedb.org/3/trending/movie/day?language=en-US', options);
    return data.results
}

export const ShowMovieDetails = async (movieId) => {
    const { data } = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}`, options);
    return data
}

export const GetCast = async (movieId) => {
  const { data } = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}/credits`, options);
  return data.cast;
}

export const GetReview = async (movieId) => {
  const { data } = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}/reviews`, options);
  return data.results;
}


const optionsToSearch = {
  params: {
    include_adult: 'false',
    language: 'en-US',
    page: '1',
    query: '',
  },
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NzYwYWZkMjNkYTU0MjFlZGQ2ODZmNmI5ZWI3ZTM0ZiIsIm5iZiI6MTczOTg3OTAwMS40NDMsInN1YiI6IjY3YjQ3MjU5NjExM2M0OTNkYzZlMDRiZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.mIYM6YRH9eHanfdCXuv7VhlnRFWrsh3hEhuXIIF3B1I'
  }
};

export const SearchMovies = async (query) => {
    const { data } = await axios.get('https://api.themoviedb.org/3/search/movie', {
        ...optionsToSearch,
        params: { ...optionsToSearch.params, query }
    });
    return data.results;
}