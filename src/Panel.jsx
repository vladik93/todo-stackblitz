import React from 'react';
import Task from './Task';

const Panel = ({ tasks }) => {
  return (
    <div className="panel">
      {tasks.map((task, index) => {
        return (
          <Task
            key={index}
            id={index}
            title={task.title}
            content={task.content}
          />
        );
      })}
      {/*
      <Task key={1} id={1} title="Title 1" content="Content text here hbhvhhfhggfvvvvvccvnjhv ygvbbb uhgjyhuuuuhgvuygv ygg." />
      <Task key={1} id={1} title="Title 1" content="Content text here content" />
      <Task key={1} id={1} title="Title 1" content="Content text here" />
      <Task key={1} id={1} title="Title 1" content="Content text here" />
      */}
    </div>
  );
};

export default Panel;
