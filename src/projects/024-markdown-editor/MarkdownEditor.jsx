import { useState } from 'react';
import './MarkdownEditor.css';

const MarkdownEditor = () => {
  const [markdown, setMarkdown] = useState(
    '# Hello World\n\n**This is bold text**\n\n*This is italic text*\n\n- List item 1\n- List item 2\n\n> Blockquote'
  );

  const parseMarkdown = (text) => {
    // Very basic parser - in a real app, use 'react-markdown' or 'marked'
    // This is just to demonstrate the concept without external deps
    let html = text
      .replace(/^# (.*$)/gim, '<h1>$1</h1>') // h1
      .replace(/^## (.*$)/gim, '<h2>$1</h2>') // h2
      .replace(/^### (.*$)/gim, '<h3>$1</h3>') // h3
      .replace(/\*\*(.*)\*\*/gim, '<b>$1</b>') // bold
      .replace(/\*(.*)\*/gim, '<i>$1</i>') // italic
      .replace(/^\> (.*$)/gim, '<blockquote>$1</blockquote>') // quote
      .replace(/\n$/gim, '<br />')
      .replace(/\n/gim, '<br />');

    return { __html: html };
  };

  return (
    <div className="markdown-container">
      <h2>Markdown Editor</h2>
      <div className="editor-wrapper">
        <textarea
          className="editor-input"
          value={markdown}
          onChange={(e) => setMarkdown(e.target.value)}
        />
        <div
          className="editor-preview"
          dangerouslySetInnerHTML={parseMarkdown(markdown)}
        />
      </div>
    </div>
  );
};

export default MarkdownEditor;
