import { useState } from 'react';
import './BookFinder.css';

const BookFinder = () => {
  const [query, setQuery] = useState('');
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const searchBooks = async (e) => {
    e.preventDefault();
    if (!query) return;

    setLoading(true);
    setError(null);

    try {
      const response = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=${query}&maxResults=12`
      );
      const data = await response.json();

      if (data.items) {
        setBooks(data.items);
      } else {
        setBooks([]);
        setError('No books found.');
      }
    } catch (err) {
      setError('Failed to fetch data.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="book-finder-container">
      <h2>Book Finder</h2>
      <p>Powered by Google Books API</p>

      <form onSubmit={searchBooks} className="search-form">
        <input
          type="text"
          placeholder="Search for books..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      {loading && <div className="loader">Loading...</div>}

      {error && <div className="error-msg">{error}</div>}

      <div className="books-grid">
        {books.map((book) => {
          const info = book.volumeInfo;
          return (
            <div key={book.id} className="book-card">
              <div className="book-cover">
                {info.imageLinks?.thumbnail ? (
                  <img src={info.imageLinks.thumbnail} alt={info.title} />
                ) : (
                  <div className="no-image">No Image</div>
                )}
              </div>
              <div className="book-info">
                <h3>{info.title}</h3>
                <p className="author">{info.authors?.join(', ')}</p>
                <a
                  href={info.previewLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="preview-btn"
                >
                  Preview
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BookFinder;
