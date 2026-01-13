import { useState } from 'react';
import './KanbanBoard.css';

const KanbanBoard = () => {
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Learn React', status: 'todo' },
    { id: 2, title: 'Build a project', status: 'todo' },
    { id: 3, title: 'Learn Hooks', status: 'inProgress' },
    { id: 4, title: 'Deploy App', status: 'done' },
  ]);

  const [draggedTaskId, setDraggedTaskId] = useState(null);

  const onDragStart = (e, id) => {
    setDraggedTaskId(id);
    e.dataTransfer.effectAllowed = 'move';
  };

  const onDragOver = (e) => {
    e.preventDefault();
  };

  const onDrop = (e, status) => {
    e.preventDefault();
    const updatedTasks = tasks.map((task) => {
      if (task.id === draggedTaskId) {
        return { ...task, status };
      }
      return task;
    });
    setTasks(updatedTasks);
    setDraggedTaskId(null);
  };

  const renderColumn = (status, title) => {
    const columnTasks = tasks.filter((task) => task.status === status);

    return (
      <div
        className="kanban-column"
        onDragOver={onDragOver}
        onDrop={(e) => onDrop(e, status)}
      >
        <h3>
          {title} ({columnTasks.length})
        </h3>
        <div className="task-list">
          {columnTasks.map((task) => (
            <div
              key={task.id}
              className="kanban-task"
              draggable
              onDragStart={(e) => onDragStart(e, task.id)}
            >
              {task.title}
            </div>
          ))}
        </div>
      </div>
    );
  };

  const addTask = () => {
    const title = prompt('Enter task name:');
    if (title) {
      const newTask = {
        id: Date.now(),
        title,
        status: 'todo',
      };
      setTasks([...tasks, newTask]);
    }
  };

  return (
    <div className="kanban-container">
      <div className="kanban-header">
        <h2>Kanban Board</h2>
        <button className="add-btn" onClick={addTask}>
          + Add Task
        </button>
      </div>
      <div className="kanban-board">
        {renderColumn('todo', 'To Do')}
        {renderColumn('inProgress', 'In Progress')}
        {renderColumn('done', 'Done')}
      </div>
    </div>
  );
};

export default KanbanBoard;
