import { useState } from 'react';
import './FormBuilder.css';

const FormBuilder = () => {
  const [formFields, setFormFields] = useState([]);
  const [draggedItem, setDraggedItem] = useState(null);

  const fieldTypes = [
    { type: 'text', label: 'Text Input', icon: '🔤' },
    { type: 'textarea', label: 'Text Area', icon: '📝' },
    { type: 'checkbox', label: 'Checkbox', icon: '☑️' },
    { type: 'select', label: 'Dropdown', icon: '🔻' },
    { type: 'button', label: 'Button', icon: '🔘' },
  ];

  const handleDragStart = (e, type) => {
    setDraggedItem(type);
    e.dataTransfer.effectAllowed = 'copy';
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'copy';
  };

  const handleDrop = (e) => {
    e.preventDefault();
    if (draggedItem) {
      const newField = {
        id: Date.now(),
        type: draggedItem.type,
        label: `New ${draggedItem.label}`,
        placeholder: 'Enter text...',
      };
      setFormFields([...formFields, newField]);
      setDraggedItem(null);
    }
  };

  const removeField = (id) => {
    setFormFields(formFields.filter((field) => field.id !== id));
  };

  const updateLabel = (id, newLabel) => {
    setFormFields(
      formFields.map((field) =>
        field.id === id ? { ...field, label: newLabel } : field
      )
    );
  };

  const renderField = (field) => {
    switch (field.type) {
      case 'text':
        return <input type="text" placeholder={field.placeholder} disabled />;
      case 'textarea':
        return <textarea placeholder={field.placeholder} disabled />;
      case 'checkbox':
        return (
          <div className="checkbox-wrapper">
            <input type="checkbox" disabled /> <span>Option</span>
          </div>
        );
      case 'select':
        return (
          <select disabled>
            <option>Option 1</option>
            <option>Option 2</option>
          </select>
        );
      case 'button':
        return (
          <button className="dummy-btn" disabled>
            Submit
          </button>
        );
      default:
        return null;
    }
  };

  return (
    <div className="form-builder-container">
      <h2>Drag & Drop Form Builder</h2>

      <div className="builder-layout">
        <div className="sidebar-tools">
          <h3>Toolbox</h3>
          <p className="hint">Drag items to the canvas</p>
          <div className="tools-list">
            {fieldTypes.map((item) => (
              <div
                key={item.type}
                className="tool-item"
                draggable
                onDragStart={(e) => handleDragStart(e, item)}
              >
                <span>{item.icon}</span>
                {item.label}
              </div>
            ))}
          </div>
        </div>

        <div
          className="form-canvas"
          onDragOver={handleDragOver}
          onDrop={handleDrop}
        >
          {formFields.length === 0 ? (
            <div className="empty-state">
              Drop items here to build your form
            </div>
          ) : (
            formFields.map((field) => (
              <div key={field.id} className="field-wrapper">
                <div className="field-header">
                  <input
                    className="label-edit"
                    value={field.label}
                    onChange={(e) => updateLabel(field.id, e.target.value)}
                  />
                  <button
                    className="remove-btn"
                    onClick={() => removeField(field.id)}
                  >
                    &times;
                  </button>
                </div>
                {renderField(field)}
              </div>
            ))
          )}
        </div>
      </div>

      {formFields.length > 0 && (
        <div className="json-preview">
          <h3>Form Schema JSON</h3>
          <pre>{JSON.stringify(formFields, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default FormBuilder;
