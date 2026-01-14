import { useState } from 'react';
import './CodeSnippetManager.css';

const CodeSnippetManager = () => {
  const [snippets, setSnippets] = useState([
    {
      id: 1,
      title: 'Hello World',
      language: 'javascript',
      code: 'console.log("Hello World");',
    },
    {
      id: 2,
      title: 'Python Loop',
      language: 'python',
      code: 'for i in range(5):\n    print(i)',
    },
  ]);
  const [form, setForm] = useState({
    title: '',
    language: 'javascript',
    code: '',
  });
  const [isEditing, setIsEditing] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEditing) {
      // Logic for editing normally goes here
      setIsEditing(false);
    } else {
      setSnippets([...snippets, { ...form, id: Date.now() }]);
    }
    setForm({ title: '', language: 'javascript', code: '' });
  };

  const deleteSnippet = (id) => {
    setSnippets(snippets.filter((s) => s.id !== id));
  };

  // Basic syntax highlight simulation
  const highlightCode = (code, lang) => {
    if (!code) return '';
    // Simple keyword highlighting for demo purposes
    const keywords = [
      'const',
      'let',
      'var',
      'function',
      'return',
      'import',
      'from',
      'def',
      'print',
      'for',
      'in',
      'if',
      'else',
    ];
    let highlighted = code;

    keywords.forEach((keyword) => {
      const regex = new RegExp(`\\b${keyword}\\b`, 'g');
      highlighted = highlighted.replace(
        regex,
        `<span class="keyword">${keyword}</span>`
      );
    });

    // Strings
    highlighted = highlighted.replace(
      /(["'])(?:(?=(\\?))\2.)*?\1/g,
      '<span class="string">$&</span>'
    );

    return { __html: highlighted };
  };

  return (
    <div className="snippet-manager-container">
      <div className="snippet-form-section">
        <h3>Add New Snippet</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Title"
            value={form.title}
            onChange={(e) => setForm({ ...form, title: e.target.value })}
            required
          />
          <select
            value={form.language}
            onChange={(e) => setForm({ ...form, language: e.target.value })}
          >
            <option value="javascript">JavaScript</option>
            <option value="python">Python</option>
            <option value="css">CSS</option>
            <option value="html">HTML</option>
          </select>
          <textarea
            placeholder="Paste code here..."
            value={form.code}
            onChange={(e) => setForm({ ...form, code: e.target.value })}
            required
          ></textarea>
          <button type="submit">Save Snippet</button>
        </form>
      </div>

      <div className="snippets-list">
        <h3>Your Snippets</h3>
        {snippets.length === 0 && <p className="empty-msg">No snippets yet.</p>}
        {snippets.map((snippet) => (
          <div key={snippet.id} className="snippet-card">
            <div className="snippet-header">
              <span className="lang-tag">{snippet.language}</span>
              <h4>{snippet.title}</h4>
              <button
                className="del-btn"
                onClick={() => deleteSnippet(snippet.id)}
              >
                &times;
              </button>
            </div>
            <pre className="code-display">
              <code
                dangerouslySetInnerHTML={highlightCode(
                  snippet.code,
                  snippet.language
                )}
              />
            </pre>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CodeSnippetManager;
