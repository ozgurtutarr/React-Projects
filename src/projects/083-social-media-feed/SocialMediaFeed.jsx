import { useState, useRef, useEffect } from 'react';
import './SocialMediaFeed.css';

const SocialMediaFeed = () => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      user: 'johndoe',
      content: 'Just had clear sky today! ☀️',
      likes: 12,
      liked: false,
      comments: [],
    },
    {
      id: 2,
      user: 'janedoe',
      content: 'Learning React is fun! ⚛️',
      likes: 45,
      liked: false,
      comments: [],
    },
    {
      id: 3,
      user: 'dev_guru',
      content: 'Code sleep repeat. 💻',
      likes: 102,
      liked: false,
      comments: [],
    },
  ]);
  const [loading, setLoading] = useState(false);
  const feedRef = useRef(null);

  // Infinite Scroll Simulation
  const handleScroll = (e) => {
    const { scrollTop, clientHeight, scrollHeight } = e.target;
    if (scrollHeight - scrollTop === clientHeight && !loading) {
      loadMorePosts();
    }
  };

  const loadMorePosts = () => {
    setLoading(true);
    setTimeout(() => {
      const newPosts = [
        {
          id: Date.now() + 1,
          user: 'random_user',
          content: 'This feed never ends! 🔄',
          likes: 5,
          liked: false,
          comments: [],
        },
        {
          id: Date.now() + 2,
          user: 'traveler',
          content: 'Where should I go next? 🌍',
          likes: 8,
          liked: false,
          comments: [],
        },
      ];
      setPosts((prev) => [...prev, ...newPosts]);
      setLoading(false);
    }, 1500);
  };

  const toggleLike = (id) => {
    setPosts(
      posts.map((post) =>
        post.id === id
          ? {
              ...post,
              liked: !post.liked,
              likes: post.liked ? post.likes - 1 : post.likes + 1,
            }
          : post
      )
    );
  };

  return (
    <div className="social-feed-container">
      <header className="feed-header">
        <h2>Socialgram</h2>
      </header>

      {/* Stories Rail */}
      <div className="stories-rail">
        {['You', 'Jane', 'Mike', 'Sarah', 'Alex'].map((name, i) => (
          <div key={i} className="story-circle">
            <div className="avatar-placeholder"></div>
            <span>{name}</span>
          </div>
        ))}
      </div>

      <div className="feed-scroll-area" onScroll={handleScroll} ref={feedRef}>
        {posts.map((post) => (
          <div key={post.id} className="post-card">
            <div className="post-header">
              <div className="avatar-small"></div>
              <span className="username">{post.user}</span>
            </div>

            <div className="post-content">{post.content}</div>

            <div className="post-actions">
              <button
                className={`action-btn like-btn ${post.liked ? 'active' : ''}`}
                onClick={() => toggleLike(post.id)}
              >
                ♥ {post.likes}
              </button>
              <button className="action-btn">💬 Comment</button>
              <button className="action-btn">➢ Share</button>
            </div>
          </div>
        ))}
        {loading && <div className="loading-spinner">Loading more...</div>}
      </div>
    </div>
  );
};

export default SocialMediaFeed;
