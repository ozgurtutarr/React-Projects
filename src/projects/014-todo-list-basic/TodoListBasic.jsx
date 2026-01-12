import { useState } from 'react';
import './TodoListBasic.css';

const TodoListBasic = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const addTodo = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    setTodos([...todos, inputValue]);
    setInputValue('');
  };

  const deleteTodo = (indexToDelete) => {
    setTodos(todos.filter((_, index) => index !== indexToDelete));
  };

  return (
    <div className="todo-container">
      <h2>ToDo List (Basic)</h2>
      <form onSubmit={addTodo} className="todo-form">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="New Task..."
        />
        <button type="submit">Add</button>
      </form>
      <ul className="todo-list">
        {todos.length === 0 ? (
          <li className="empty-msg">No tasks yet. Add one!</li>
        ) : (
          todos.map((todo, index) => (
            <li key={index} className="todo-item">
              <span>{todo}</span>
              <button onClick={() => deleteTodo(index)} className="delete-btn">
                Delete
              </button>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default TodoListBasic;
