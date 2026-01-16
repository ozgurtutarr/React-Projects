import { useState, useEffect } from 'react';
import './NetflixClone.css';

const NetflixClone = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  // Mock Data
  const movies = [
    {
      id: 1,
      title: 'Stranger Things',
      img: 'https://via.placeholder.com/300x450/000000/FFFFFF?text=Stranger+Things',
    },
    {
      id: 2,
      title: 'The Crown',
      img: 'https://via.placeholder.com/300x450/000000/FFFFFF?text=The+Crown',
    },
    {
      id: 3,
      title: 'Black Mirror',
      img: 'https://via.placeholder.com/300x450/000000/FFFFFF?text=Black+Mirror',
    },
    {
      id: 4,
      title: 'Ozark',
      img: 'https://via.placeholder.com/300x450/000000/FFFFFF?text=Ozark',
    },
    {
      id: 5,
      title: 'Narcos',
      img: 'https://via.placeholder.com/300x450/000000/FFFFFF?text=Narcos',
    },
    {
      id: 6,
      title: 'Spider-Man',
      img: 'https://via.placeholder.com/300x450/000000/FFFFFF?text=Spider-Man',
    },
    {
      id: 7,
      title: 'Money Heist',
      img: 'https://via.placeholder.com/300x450/000000/FFFFFF?text=Money+Heist',
    },
    {
      id: 8,
      title: 'Dark',
      img: 'https://via.placeholder.com/300x450/000000/FFFFFF?text=Dark',
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="netflix-container">
      {/* Navbar */}
      <nav className={`netflix-nav ${isScrolled ? 'scrolled' : ''}`}>
        <div className="nav-logo">NETFLIX (Clone)</div>
        <div className="nav-links">
          <span>Home</span>
          <span>TV Shows</span>
          <span>Movies</span>
          <span>My List</span>
        </div>
      </nav>

      {/* Hero */}
      <header className="netflix-hero">
        <div className="hero-content">
          <h1>Interstellar</h1>
          <p>
            When Earth becomes uninhabitable in the future, a farmer and ex-NASA
            pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a
            team of researchers, to find a new planet for humans.
          </p>
          <div className="hero-btns">
            <button className="btn-play">▶ Play</button>
            <button className="btn-info">ℹ More Info</button>
          </div>
        </div>
      </header>

      {/* Rows */}
      <div className="netflix-rows">
        <RowSection title="Trending Now" movies={movies} />
        <RowSection title="Top Rated" movies={[...movies].reverse()} />
        <RowSection title="Action Movies" movies={movies} />
      </div>
    </div>
  );
};

const RowSection = ({ title, movies }) => {
  return (
    <div className="row-section">
      <h3>{title}</h3>
      <div className="row-posters">
        {movies.map((movie) => (
          <div key={movie.id} className="poster-card">
            <img src={movie.img} alt={movie.title} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default NetflixClone;
