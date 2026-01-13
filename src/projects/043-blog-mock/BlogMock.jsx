import { useState } from 'react';
import './BlogMock.css';

const BlogMock = () => {
  const [view, setView] = useState('list'); // 'list' or 'detail'
  const [selectedPost, setSelectedPost] = useState(null);

  const posts = [
    {
      id: 1,
      title: 'Introduction to React',
      content:
        'React is a JavaScript library for building user interfaces. It lets you create re-usable UI components...',
      author: 'John Doe',
      date: '2025-01-01',
    },
    {
      id: 2,
      title: 'Understanding Hooks',
      content:
        'Hooks allow functional components to have access to state and other React features...',
      author: 'Jane Smith',
      date: '2025-01-05',
    },
    {
      id: 3,
      title: 'CSS in JS',
      content:
        'There are many ways to style React components. One popular method is CSS-in-JS libraries like Styled Components...',
      author: 'Bob Wilson',
      date: '2025-01-10',
    },
  ];

  const handleReadMore = (post) => {
    setSelectedPost(post);
    setView('detail');
  };

  const handleBack = () => {
    setSelectedPost(null);
    setView('list');
  };

  return (
    <div className="blog-container">
      <h2>Mock Blog</h2>

      {view === 'list' ? (
        <div className="post-list">
          {posts.map((post) => (
            <div key={post.id} className="post-preview">
              <h3>{post.title}</h3>
              <p className="post-meta">
                By {post.author} on {post.date}
              </p>
              <p className="post-excerpt">{post.content.substring(0, 60)}...</p>
              <button onClick={() => handleReadMore(post)}>Read More</button>
            </div>
          ))}
        </div>
      ) : (
        <div className="post-detail">
          <button onClick={handleBack} className="back-btn">
            &larr; Back to Posts
          </button>
          <h1>{selectedPost.title}</h1>
          <p className="post-meta">
            By {selectedPost.author} on {selectedPost.date}
          </p>
          <hr />
          <div className="post-body">
            <p>{selectedPost.content}</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default BlogMock;
