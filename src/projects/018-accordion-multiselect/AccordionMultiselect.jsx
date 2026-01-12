import { useState } from 'react';
import './AccordionMultiselect.css';

const AccordionMultiselect = () => {
  const [selected, setSelected] = useState([]);

  const data = [
    {
      id: 1,
      question: 'What is React?',
      answer: 'React is a JavaScript library for building user interfaces.',
    },
    {
      id: 2,
      question: 'What are props?',
      answer:
        'Props are inputs to a React component. They are data passed down from a parent component to a child component.',
    },
    {
      id: 3,
      question: 'What is state?',
      answer:
        "State is a plain JavaScript object used by React to represent information about the component's current situation.",
    },
    {
      id: 4,
      question: 'What is a hook?',
      answer:
        "Hooks are functions that let you 'hook into' React state and lifecycle features from function components.",
    },
  ];

  const handleToggle = (id) => {
    if (selected.includes(id)) {
      setSelected(selected.filter((itemId) => itemId !== id));
    } else {
      setSelected([...selected, id]);
    }
  };

  return (
    <div className="accordion-wrapper">
      <h2>Accordion (Multi-select)</h2>
      <div className="accordion">
        {data.map((item) => (
          <div className="accordion-item" key={item.id}>
            <div
              className={`accordion-title ${
                selected.includes(item.id) ? 'active' : ''
              }`}
              onClick={() => handleToggle(item.id)}
            >
              <h3>{item.question}</h3>
              <span>{selected.includes(item.id) ? '-' : '+'}</span>
            </div>
            {selected.includes(item.id) && (
              <div className="accordion-content">{item.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AccordionMultiselect;
