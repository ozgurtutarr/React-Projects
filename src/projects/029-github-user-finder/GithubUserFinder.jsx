import { useState } from 'react';
import './GithubUserFinder.css';

const GithubUserFinder = () => {
  const [username, setUsername] = useState('');
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchUser = async (e) => {
    e.preventDefault();
    if (!username) return;

    setLoading(true);
    setError(null);
    setUserData(null);

    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      if (!response.ok) {
        throw new Error('User not found');
      }
      const data = await response.json();
      setUserData(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="github-container">
      <h2>GitHub User Finder</h2>
      <form onSubmit={fetchUser} className="github-form">
        <input
          type="text"
          placeholder="Enter GitHub username..."
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p className="error">{error}</p>}

      {userData && (
        <div className="github-profile">
          <img src={userData.avatar_url} alt={userData.login} />
          <div className="profile-info">
            <h3>
              <a href={userData.html_url} target="_blank" rel="noreferrer">
                {userData.name || userData.login}
              </a>
            </h3>
            <p>{userData.bio}</p>
            <div className="stats">
              <span>
                <strong>Repos:</strong> {userData.public_repos}
              </span>
              <span>
                <strong>Followers:</strong> {userData.followers}
              </span>
              <span>
                <strong>Following:</strong> {userData.following}
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GithubUserFinder;
