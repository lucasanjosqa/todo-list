import React, { useState } from 'react';
import axios from 'axios';

const TodoForm = ({ fetchTodos }) => {
  const [task, setTask] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!task) {
      setError('Task is required.');
      return;
    }
    setError(''); // Limpa a mensagem de erro

    try {
      await axios.post('http://localhost:5000/api/todos', { task });
      setTask('');
      fetchTodos();
    } catch (error) {
      console.error('Erro ao adicionar tarefa:', error);
      setError('Failed to add task. Please try again.'); // Mensagem de erro genérica
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add a new task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button type="submit">Add Task</button>
      {error && <p style={{ color: 'red' }}>{error}</p>} {/* Exibe mensagem de erro */}
    </form>
  );
};

export default TodoForm;
