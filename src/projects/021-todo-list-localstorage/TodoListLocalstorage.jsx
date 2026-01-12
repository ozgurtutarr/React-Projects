import { useState, useEffect } from 'react';
import './TodoListLocalstorage.css';

const TodoListLocalstorage = () => {
  const [todos, setTodos] = useState(() => {
    // Lazy initialization to read from local storage
    const savedTodos = localStorage.getItem('todos');
    if (savedTodos) {
      return JSON.parse(savedTodos);
    } else {
      return [];
    }
  });
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    setTodos([
      ...todos,
      { id: Date.now(), text: inputValue, completed: false },
    ]);
    setInputValue('');
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="todo-ls-container">
      <h2>ToDo List (LocalStorage)</h2>
      <p className="subtitle">Refresh the page, your tasks will stay!</p>

      <form onSubmit={addTodo} className="todo-ls-form">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="What needs to be done?"
        />
        <button type="submit">Add</button>
      </form>

      <ul className="todo-ls-list">
        {todos.length === 0 ? (
          <li className="empty-msg">No tasks yet.</li>
        ) : (
          todos.map((todo) => (
            <li
              key={todo.id}
              className={`todo-ls-item ${todo.completed ? 'completed' : ''}`}
            >
              <span onClick={() => toggleTodo(todo.id)}>{todo.text}</span>
              <button
                onClick={() => deleteTodo(todo.id)}
                className="delete-btn"
              >
                &times;
              </button>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default TodoListLocalstorage;
