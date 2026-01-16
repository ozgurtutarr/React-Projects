import { useState, useEffect } from 'react';
import './CodepenClone.css';

const CodepenClone = () => {
  const [html, setHtml] = useState('<h1>Hello World!</h1>');
  const [css, setCss] = useState('h1 { color: red; }');
  const [js, setJs] = useState('console.log("Hello from JS");');
  const [srcDoc, setSrcDoc] = useState('');

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrcDoc(`
                <html>
                  <body>${html}</body>
                  <style>${css}</style>
                  <script>${js}</script>
                </html>
            `);
    }, 500); // 500ms delay to avoid flash of processing

    return () => clearTimeout(timeout);
  }, [html, css, js]);

  return (
    <div className="codepen-container">
      <header className="cp-header">
        <div className="cp-logo">CodePen Mock</div>
        <button className="cp-save-btn">Save</button>
      </header>

      <div className="cp-editors">
        <div className="cp-editor-col">
          <div className="cp-label html-lbl">HTML</div>
          <textarea
            value={html}
            onChange={(e) => setHtml(e.target.value)}
            spellCheck="false"
          />
        </div>
        <div className="cp-editor-col">
          <div className="cp-label css-lbl">CSS</div>
          <textarea
            value={css}
            onChange={(e) => setCss(e.target.value)}
            spellCheck="false"
          />
        </div>
        <div className="cp-editor-col">
          <div className="cp-label js-lbl">JS</div>
          <textarea
            value={js}
            onChange={(e) => setJs(e.target.value)}
            spellCheck="false"
          />
        </div>
      </div>

      <div className="cp-preview">
        <div className="cp-preview-bar">Result</div>
        <iframe
          title="preview"
          srcDoc={srcDoc}
          sandbox="allow-scripts"
          width="100%"
          height="100%"
        />
      </div>
    </div>
  );
};

export default CodepenClone;
