import React, { useState } from 'react';
import './style.css';
import TaskBar from './TaskBar';
import Panel from './Panel';
import Button from './Button';

export default function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (newTask) => {
    setTasks((prevState) => {
      return [...prevState, newTask];
    });
  };

  return (
    <div>
      <Panel tasks={tasks} />
      <TaskBar addTask={addTask} />
    </div>
  );
}
