import { useState, useRef } from 'react';
import './FileUploader.css';

const FileUploader = () => {
  const [files, setFiles] = useState([]);
  const [isDragOver, setIsDragOver] = useState(false);
  const fileInputRef = useRef(null);

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragOver(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragOver(false);
    const newFiles = Array.from(e.dataTransfer.files);
    addFiles(newFiles);
  };

  const handleFileInput = (e) => {
    const newFiles = Array.from(e.target.files);
    addFiles(newFiles);
  };

  const addFiles = (newFiles) => {
    // Add upload progress property
    const filesWithProgress = newFiles.map((file) => ({
      file,
      id: Math.random().toString(36).substr(2, 9),
      progress: 0,
    }));

    setFiles((prev) => [...prev, ...filesWithProgress]);

    // Simulate upload for each file
    filesWithProgress.forEach((fileObj) => simulateUpload(fileObj.id));
  };

  const simulateUpload = (fileId) => {
    let progress = 0;
    const interval = setInterval(() => {
      progress += Math.random() * 20;
      if (progress >= 100) {
        progress = 100;
        clearInterval(interval);
      }
      setFiles((prev) =>
        prev.map((f) => (f.id === fileId ? { ...f, progress } : f))
      );
    }, 500);
  };

  const removeFile = (id) => {
    setFiles(files.filter((f) => f.id !== id));
  };

  const formatSize = (bytes) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  return (
    <div className="uploader-container">
      <h2>File Uploader</h2>

      <div
        className={`drop-zone ${isDragOver ? 'active' : ''}`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={() => fileInputRef.current.click()}
      >
        <input
          type="file"
          multiple
          hidden
          ref={fileInputRef}
          onChange={handleFileInput}
        />
        <div className="drop-content">
          <span className="icon">☁️</span>
          <p>Drag & Drop files here or click to browse</p>
        </div>
      </div>

      <div className="file-list">
        {files.map(({ file, id, progress }) => (
          <div key={id} className="file-item">
            <div className="file-icon">📄</div>
            <div className="file-info">
              <span className="file-name">{file.name}</span>
              <span className="file-size">{formatSize(file.size)}</span>
              <div className="progress-bar-bg">
                <div
                  className="progress-fill"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
            </div>
            <button className="remove-btn" onClick={() => removeFile(id)}>
              &times;
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FileUploader;
