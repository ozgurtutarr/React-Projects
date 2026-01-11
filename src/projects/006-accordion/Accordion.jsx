import { useState } from 'react';

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const questions = [
    {
      id: 1,
      question: 'What is React?',
      answer: 'React is a JavaScript library for building user interfaces.',
    },
    {
      id: 2,
      question: 'What is a Component?',
      answer: "Components are the building blocks of a React application's UI.",
    },
    {
      id: 3,
      question: 'What is State?',
      answer:
        'State is a built-in React object that is used to contain data or information about the component.',
    },
  ];

  const toggleAccordion = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto' }}>
      <h2>React FAQ (Accordion)</h2>
      <div
        style={{
          border: '1px solid #ccc',
          borderRadius: '5px',
          overflow: 'hidden',
        }}
      >
        {questions.map((item, index) => (
          <div key={item.id} style={{ borderBottom: '1px solid #eee' }}>
            <div
              onClick={() => toggleAccordion(index)}
              style={{
                backgroundColor: activeIndex === index ? '#f0f0f0' : '#fff',
                padding: '15px',
                cursor: 'pointer',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                fontWeight: 'bold',
              }}
            >
              {item.question}
              <span>{activeIndex === index ? '-' : '+'}</span>
            </div>
            {activeIndex === index && (
              <div
                style={{
                  padding: '15px',
                  backgroundColor: '#fff',
                  borderTop: '1px solid #eee',
                }}
              >
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Accordion;
