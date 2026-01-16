import { useState } from 'react';
import './BlogPlatform.css';

// Mock Markdown content logic
const MARKDOWN_MOCK = {
  1: {
    title: 'Why Next.js is Awesome',
    content: `# Next.js Features\n\nNext.js gives you the best developer experience with all the features you need for production: hybrid static & server rendering, TypeScript support, smart bundling, route pre-fetching, and more.\n\n## Key Features\n- Image Optimization\n- Internationalization\n- Next.js Analytics`,
    date: 'Oct 12, 2023',
    author: 'Lee Robinson',
  },
  2: {
    title: 'React Server Components',
    content: `# Server Components\n\nReact Server Components allow you to render components on the server, reducing the amount of JavaScript sent to the client.\n\n> This is a game changer for performance!`,
    date: 'Nov 05, 2023',
    author: 'Dan Abramov',
  },
  3: {
    title: 'CSS Modules vs Tailwind',
    content: `# CSS Strategies\n\nBoth are great options. CSS Modules scope styles locally by default. Tailwind uses utility classes for rapid UI development.\n\n*Choose what fits your team.*`,
    date: 'Dec 01, 2023',
    author: 'Styling Guru',
  },
};

const BlogPlatform = () => {
  const [activeRoute, setActiveRoute] = useState('home'); // home | post/:id
  const [postId, setPostId] = useState(null);

  const navigateToPost = (id) => {
    setPostId(id);
    setActiveRoute('post');
    window.scrollTo(0, 0);
  };

  const navigateHome = () => {
    setActiveRoute('home');
    setPostId(null);
  };

  /* Helper to simulate markdown rendering (naive replacement) */
  const renderMarkdown = (text) => {
    let html = text
      .replace(/^# (.*$)/gim, '<h1>$1</h1>')
      .replace(/^## (.*$)/gim, '<h2>$1</h2>')
      .replace(/^\> (.*$)/gim, '<blockquote>$1</blockquote>')
      .replace(/\*\*(.*)\*\*/gim, '<b>$1</b>')
      .replace(/\n/gim, '<br />');
    return { __html: html };
  };

  return (
    <div className="blog-platform-container">
      <nav className="blog-nav">
        <h1 onClick={navigateHome} style={{ cursor: 'pointer' }}>
          NextBlog (Mock)
        </h1>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>

      <main className="blog-content">
        {activeRoute === 'home' ? (
          <div className="post-list">
            <div className="hero-section">
              <h1>Welcome to the Future of JAMstack</h1>
              <p>
                Simulating Static Site Generation (SSG) in a client-side app.
              </p>
            </div>

            <div className="latest-posts">
              <h2>Latest Articles</h2>
              <div className="grid">
                {Object.entries(MARKDOWN_MOCK).map(([id, post]) => (
                  <div
                    key={id}
                    className="blog-card"
                    onClick={() => navigateToPost(id)}
                  >
                    <div className="card-image-placeholder"></div>
                    <div className="card-info">
                      <h3>{post.title}</h3>
                      <p className="meta">
                        {post.date} • {post.author}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <article className="blog-post">
            <button onClick={navigateHome} className="back-btn">
              ← Back to Home
            </button>
            <div className="post-header-content">
              <h1>{MARKDOWN_MOCK[postId].title}</h1>
              <p className="post-meta">
                By <strong>{MARKDOWN_MOCK[postId].author}</strong> on{' '}
                {MARKDOWN_MOCK[postId].date}
              </p>
            </div>
            <div
              className="markdown-body"
              dangerouslySetInnerHTML={renderMarkdown(
                MARKDOWN_MOCK[postId].content
              )}
            />
          </article>
        )}
      </main>

      <footer className="blog-footer">
        <p>© 2023 NextBlog Clone. Powered by React Mock.</p>
      </footer>
    </div>
  );
};

export default BlogPlatform;
