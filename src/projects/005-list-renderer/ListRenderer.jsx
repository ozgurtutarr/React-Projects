import { useState } from 'react';

const ListRenderer = () => {
  const [items] = useState([
    { id: 1, name: 'React', type: 'Library' },
    { id: 2, name: 'Angular', type: 'Framework' },
    { id: 3, name: 'Vue', type: 'Framework' },
    { id: 4, name: 'Svelte', type: 'Compiler' },
    { id: 5, name: 'Next.js', type: 'Framework' },
  ]);

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
      <h2>Frontend Technologies List</h2>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {items.map((item) => (
          <li
            key={item.id}
            style={{
              padding: '10px',
              border: '1px solid #ccc',
              marginBottom: '5px',
              borderRadius: '5px',
              textAlign: 'left',
            }}
          >
            <strong>{item.name}</strong> -{' '}
            <span style={{ color: '#555' }}>{item.type}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListRenderer;
