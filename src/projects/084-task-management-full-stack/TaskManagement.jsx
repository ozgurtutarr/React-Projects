import { useState, useReducer } from 'react';
import './TaskManagement.css';

// Mock Backend "Database"
const initialTasks = [
  { id: 1, title: 'Setup Server', status: 'done', assignee: 'Devin' },
  {
    id: 2,
    title: 'Design Database Schema',
    status: 'in-progress',
    assignee: 'Jane',
  },
  {
    id: 3,
    title: 'Build API Endpoints',
    status: 'todo',
    assignee: 'Unassigned',
  },
  {
    id: 4,
    title: 'Write Documentation',
    status: 'todo',
    assignee: 'Unassigned',
  },
];

const ACTIONS = {
  ADD_TASK: 'ADD_TASK',
  MOVE_TASK: 'MOVE_TASK',
  DELETE_TASK: 'DELETE_TASK',
};

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.ADD_TASK:
      return [...state, action.payload];
    case ACTIONS.MOVE_TASK:
      return state.map((task) =>
        task.id === action.payload.id
          ? { ...task, status: action.payload.status }
          : task
      );
    case ACTIONS.DELETE_TASK:
      return state.filter((task) => task.id !== action.payload);
    default:
      return state;
  }
};

const TaskManagement = () => {
  const [tasks, dispatch] = useReducer(reducer, initialTasks);
  const [newTaskTitle, setNewTaskTitle] = useState('');

  const handleAddTask = (e) => {
    e.preventDefault();
    if (!newTaskTitle.trim()) return;
    const newTask = {
      id: Date.now(),
      title: newTaskTitle,
      status: 'todo',
      assignee: 'Unassigned',
    };
    dispatch({ type: ACTIONS.ADD_TASK, payload: newTask });
    setNewTaskTitle('');
  };

  const handleDragStart = (e, id) => {
    e.dataTransfer.setData('taskId', id);
  };

  const handleDrop = (e, status) => {
    const id = Number(e.dataTransfer.getData('taskId'));
    dispatch({ type: ACTIONS.MOVE_TASK, payload: { id, status } });
  };

  const handleDragOver = (e) => e.preventDefault();

  const renderColumn = (status, title) => {
    const columnTasks = tasks.filter((t) => t.status === status);

    return (
      <div
        className={`kanban-column column-${status}`}
        onDrop={(e) => handleDrop(e, status)}
        onDragOver={handleDragOver}
      >
        <h3>
          {title} ({columnTasks.length})
        </h3>
        <div className="task-list-area">
          {columnTasks.map((task) => (
            <div
              key={task.id}
              className="kanban-card"
              draggable
              onDragStart={(e) => handleDragStart(e, task.id)}
            >
              <h4>{task.title}</h4>
              <div className="card-footer">
                <span className="assignee-badge">{task.assignee}</span>
                <button
                  className="delete-card-btn"
                  onClick={() =>
                    dispatch({ type: ACTIONS.DELETE_TASK, payload: task.id })
                  }
                >
                  &times;
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="task-manage-container">
      <header className="board-header">
        <h2>Kanban Board (Mock Backend)</h2>
        <form onSubmit={handleAddTask} className="add-task-form">
          <input
            type="text"
            placeholder="New Task Title..."
            value={newTaskTitle}
            onChange={(e) => setNewTaskTitle(e.target.value)}
          />
          <button type="submit">Add Task</button>
        </form>
      </header>

      <div className="kanban-board">
        {renderColumn('todo', 'To Do')}
        {renderColumn('in-progress', 'In Progress')}
        {renderColumn('done', 'Done')}
      </div>
    </div>
  );
};

export default TaskManagement;
