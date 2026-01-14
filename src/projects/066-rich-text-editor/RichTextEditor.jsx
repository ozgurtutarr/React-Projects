import { useState, useRef } from 'react';
import './RichTextEditor.css';

const RichTextEditor = () => {
  const contentEditableRef = useRef(null);
  const [htmlContent, setHtmlContent] = useState('<p>Start typing here...</p>');

  const executeCommand = (command, value = null) => {
    document.execCommand(command, false, value);
    if (contentEditableRef.current) {
      contentEditableRef.current.focus();
    }
  };

  const handleInput = (e) => {
    setHtmlContent(e.currentTarget.innerHTML);
  };

  return (
    <div className="rte-container">
      <h2>Rich Text Editor</h2>

      <div className="toolbar">
        <button
          onMouseDown={(e) => {
            e.preventDefault();
            executeCommand('bold');
          }}
          className="tool-btn bold"
        >
          B
        </button>
        <button
          onMouseDown={(e) => {
            e.preventDefault();
            executeCommand('italic');
          }}
          className="tool-btn italic"
        >
          I
        </button>
        <button
          onMouseDown={(e) => {
            e.preventDefault();
            executeCommand('underline');
          }}
          className="tool-btn underline"
        >
          U
        </button>
        <span className="separator">|</span>
        <button
          onMouseDown={(e) => {
            e.preventDefault();
            executeCommand('justifyLeft');
          }}
          className="tool-btn"
        >
          Left
        </button>
        <button
          onMouseDown={(e) => {
            e.preventDefault();
            executeCommand('justifyCenter');
          }}
          className="tool-btn"
        >
          Center
        </button>
        <button
          onMouseDown={(e) => {
            e.preventDefault();
            executeCommand('justifyRight');
          }}
          className="tool-btn"
        >
          Right
        </button>
        <span className="separator">|</span>
        <button
          onMouseDown={(e) => {
            e.preventDefault();
            executeCommand('insertOrderedList');
          }}
          className="tool-btn"
        >
          OL
        </button>
        <button
          onMouseDown={(e) => {
            e.preventDefault();
            executeCommand('insertUnorderedList');
          }}
          className="tool-btn"
        >
          UL
        </button>
      </div>

      <div
        className="editor-area"
        contentEditable
        ref={contentEditableRef}
        onInput={handleInput}
        suppressContentEditableWarning={true}
        dangerouslySetInnerHTML={{ __html: htmlContent }}
      ></div>

      <div className="html-preview">
        <h4>HTML Output:</h4>
        <div className="code-block">{htmlContent}</div>
      </div>
    </div>
  );
};

export default RichTextEditor;
