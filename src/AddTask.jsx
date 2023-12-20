import React, { useState } from 'react';

const AddTask = ({ addTask }) => {
  const [text, setText] = useState('');

  const handleAddTask = () => {
    if (text.trim()) {
      addTask(text);
      setText('');
    }
  };

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Dodaj nowe zadanie"
      />
      <button onClick={handleAddTask}>Dodaj</button>
    </div>
  );
};

export default AddTask;
