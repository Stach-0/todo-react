import React, { useState } from 'react';
import TaskList from './TaskList';
import AddTask from './AddTask';
import './App.css'; // Importuj styl

const App = () => {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Zadanie 1', date: new Date().toLocaleString() },
    { id: 2, text: 'Zadanie 2', date: new Date().toLocaleString() },
    { id: 3, text: 'Zadanie 3', date: new Date().toLocaleString() },
  ]);

  const addTask = (text) => {
    const newTask = { id: tasks.length + 1, text, date: new Date().toLocaleString() };
    setTasks([...tasks, newTask]);
  };

  const removeTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="app-container"> {/* Dodaj klasę dla centrowania */}
      <h1>Lista Zadań</h1>
      <AddTask addTask={addTask} />
      <TaskList tasks={tasks} removeTask={removeTask} />
    </div>
  );
};

export default App;
