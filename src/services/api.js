import axios from "axios";

const options = {
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NzYwYWZkMjNkYTU0MjFlZGQ2ODZmNmI5ZWI3ZTM0ZiIsIm5iZiI6MTczOTg3OTAwMS40NDMsInN1YiI6IjY3YjQ3MjU5NjExM2M0OTNkYzZlMDRiZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.mIYM6YRH9eHanfdCXuv7VhlnRFWrsh3hEhuXIIF3B1I'
  }
};



export const TrendingMovies = async () => {
    const { data } = await axios.get('https://api.themoviedb.org/3/trending/movie/day?language=en-US', options);
    return data.results
}
