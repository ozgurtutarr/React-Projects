import { useState } from 'react';
import './SurveyCreator.css';

const SurveyCreator = () => {
  const [questions, setQuestions] = useState([
    { id: 1, text: 'Do you like React?', type: 'yesno' },
    { id: 2, text: 'Rate your experience', type: 'rating' },
  ]);

  const [newQText, setNewQText] = useState('');
  const [newQType, setNewQType] = useState('text');

  const addQuestion = () => {
    if (!newQText) return;
    setQuestions([
      ...questions,
      { id: Date.now(), text: newQText, type: newQType },
    ]);
    setNewQText('');
  };

  const removeQuestion = (id) => {
    setQuestions(questions.filter((q) => q.id !== id));
  };

  return (
    <div className="survey-container">
      <header className="survey-header">
        <h2>Survey Builder</h2>
        <button className="preview-btn">👁 Preview</button>
      </header>

      <div className="survey-workspace">
        <aside className="toolbox">
          <h3>Add Question</h3>
          <div className="form-control">
            <label>Question Text</label>
            <input
              type="text"
              value={newQText}
              onChange={(e) => setNewQText(e.target.value)}
              placeholder="e.g. What is your age?"
            />
          </div>
          <div className="form-control">
            <label>Type</label>
            <select
              value={newQType}
              onChange={(e) => setNewQType(e.target.value)}
            >
              <option value="text">Short Text</option>
              <option value="longtext">Long Text</option>
              <option value="yesno">Yes / No</option>
              <option value="rating">Rating (1-5)</option>
              <option value="radio">Multiple Choice (Mock)</option>
            </select>
          </div>
          <button className="add-btn" onClick={addQuestion}>
            + Add to Survey
          </button>
        </aside>

        <main className="survey-canvas">
          {questions.length === 0 && (
            <p className="empty-msg">
              No questions yet. Add one from the sidebar.
            </p>
          )}

          {questions.map((q, idx) => (
            <div key={q.id} className="question-card">
              <div className="q-header">
                <span className="q-number">Q{idx + 1}</span>
                <span className="q-type-badge">{q.type}</span>
                <button
                  className="remove-btn"
                  onClick={() => removeQuestion(q.id)}
                >
                  Trash
                </button>
              </div>
              <h3>{q.text}</h3>
              <div className="q-preview-area">
                {q.type === 'text' && (
                  <input type="text" disabled placeholder="Short answer text" />
                )}
                {q.type === 'longtext' && (
                  <textarea disabled placeholder="Long answer text"></textarea>
                )}
                {q.type === 'yesno' && (
                  <div className="options">
                    <label>
                      <input type="radio" disabled /> Yes
                    </label>
                    <label>
                      <input type="radio" disabled /> No
                    </label>
                  </div>
                )}
                {q.type === 'rating' && (
                  <div className="rating-stars">
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                  </div>
                )}
                {q.type === 'radio' && (
                  <div className="options">
                    <label>
                      <input type="radio" disabled /> Option 1
                    </label>
                    <label>
                      <input type="radio" disabled /> Option 2
                    </label>
                  </div>
                )}
              </div>
            </div>
          ))}
        </main>
      </div>
    </div>
  );
};

export default SurveyCreator;
