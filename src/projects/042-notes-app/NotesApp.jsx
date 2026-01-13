import { useState } from 'react';
import './NotesApp.css';

const NotesApp = () => {
  const [notes, setNotes] = useState([
    { id: 1, text: 'Buy milk' },
    { id: 2, text: 'Walk the dog' },
  ]);
  const [inputText, setInputText] = useState('');
  const [isEditing, setIsEditing] = useState(null);
  const [editText, setEditText] = useState('');

  const addNote = () => {
    if (!inputText.trim()) return;
    const newNote = { id: Date.now(), text: inputText };
    setNotes([...notes, newNote]);
    setInputText('');
  };

  const deleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  const startEdit = (note) => {
    setIsEditing(note.id);
    setEditText(note.text);
  };

  const saveEdit = (id) => {
    setNotes(
      notes.map((note) => (note.id === id ? { ...note, text: editText } : note))
    );
    setIsEditing(null);
    setEditText('');
  };

  return (
    <div className="notes-container">
      <h2>Notes App</h2>

      <div className="note-input-area">
        <textarea
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="New note..."
        />
        <button onClick={addNote}>Add Note</button>
      </div>

      <div className="notes-grid">
        {notes.length === 0 && <p className="no-notes">No notes yet.</p>}
        {notes.map((note) => (
          <div key={note.id} className="note-card">
            {isEditing === note.id ? (
              <div className="edit-mode">
                <textarea
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                />
                <button className="save-btn" onClick={() => saveEdit(note.id)}>
                  Save
                </button>
              </div>
            ) : (
              <div className="view-mode">
                <p>{note.text}</p>
                <div className="note-actions">
                  <button className="edit-btn" onClick={() => startEdit(note)}>
                    Edit
                  </button>
                  <button
                    className="delete-btn"
                    onClick={() => deleteNote(note.id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default NotesApp;
