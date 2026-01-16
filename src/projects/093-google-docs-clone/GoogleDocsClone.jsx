import { useState } from 'react';
import './GoogleDocsClone.css';

const GoogleDocsClone = () => {
  const [content, setContent] = useState('Type something here...');
  const [title, setTitle] = useState('Untitled Document');

  const handleCommand = (command) => {
    document.execCommand(command, false, null);
  };

  return (
    <div className="docs-container">
      <header className="docs-header">
        <div className="docs-logo">📄</div>
        <div className="docs-meta">
          <input
            type="text"
            className="docs-title-input"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <div className="menu-bar">
            <span>File</span>
            <span>Edit</span>
            <span>View</span>
            <span>Insert</span>
            <span>Format</span>
            <span>Tools</span>
          </div>
        </div>
        <div className="header-right">
          <div className="share-btn">🔒 Share</div>
          <div className="user-icon-small">U</div>
        </div>
      </header>

      <div className="toolbar">
        <button onClick={() => handleCommand('undo')}>↩</button>
        <button onClick={() => handleCommand('redo')}>↪</button>
        <span className="separator">|</span>
        <button className="icon-btn" onClick={() => handleCommand('bold')}>
          <b>B</b>
        </button>
        <button className="icon-btn" onClick={() => handleCommand('italic')}>
          <i>I</i>
        </button>
        <button className="icon-btn" onClick={() => handleCommand('underline')}>
          <u>U</u>
        </button>
        <span className="separator">|</span>
        <button onClick={() => handleCommand('justifyLeft')}>Left</button>
        <button onClick={() => handleCommand('justifyCenter')}>Center</button>
        <button onClick={() => handleCommand('justifyRight')}>Right</button>
      </div>

      <div className="editor-bg">
        <div
          className="docs-page"
          contentEditable
          suppressContentEditableWarning={true}
          onInput={(e) => setContent(e.currentTarget.innerText)}
        >
          Start typing your document...
        </div>
      </div>
    </div>
  );
};

export default GoogleDocsClone;
