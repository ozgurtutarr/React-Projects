import { useState } from 'react';
import './MovieSearch.css';

const MovieSearch = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);

  // Mock Data
  const mockMovies = [
    {
      imdbID: 'tt1375666',
      Title: 'Inception',
      Year: '2010',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg',
    },
    {
      imdbID: 'tt0133093',
      Title: 'The Matrix',
      Year: '1999',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg',
    },
    {
      imdbID: 'tt0816692',
      Title: 'Interstellar',
      Year: '2014',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFhNWMtZDNlNDQ3M2Q5MDMyXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
    },
    {
      imdbID: 'tt0468569',
      Title: 'The Dark Knight',
      Year: '2008',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg',
    },
    {
      imdbID: 'tt0111161',
      Title: 'The Shawshank Redemption',
      Year: '1994',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
    },
    {
      imdbID: 'tt2380307',
      Title: 'Coco',
      Year: '2017',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BYjQ5NjM0YzytY2Y4ZC00OTFjLWI3MWEtNDYzNjZkZDAyM2M4XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
    },
  ];

  const searchMovies = async (e) => {
    e.preventDefault();
    setLoading(true);
    setHasSearched(true);

    // Simulate API call
    setTimeout(() => {
      if (!query.trim()) {
        setMovies([]);
        setLoading(false);
        return;
      }

      const results = mockMovies.filter((movie) =>
        movie.Title.toLowerCase().includes(query.toLowerCase())
      );
      setMovies(results);
      setLoading(false);
    }, 800);
  };

  return (
    <div className="movie-container">
      <h2>Movie Search</h2>
      <form onSubmit={searchMovies} className="search-box">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for a movie (e.g., Matrix)"
        />
        <button type="submit">Search</button>
      </form>

      {loading && <div className="loader">Searching...</div>}

      <div className="movie-grid">
        {!loading && hasSearched && movies.length === 0 && (
          <p>No movies found. Try searching for "Matrix" or "Inception".</p>
        )}
        {movies.map((movie) => (
          <div key={movie.imdbID} className="movie-card">
            <img src={movie.Poster} alt={movie.Title} />
            <div className="movie-info">
              <h3>{movie.Title}</h3>
              <span>{movie.Year}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieSearch;
