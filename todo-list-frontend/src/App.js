import React, { useEffect, useState } from 'react';
import './style/App.css'
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import axios from 'axios';

const App = () => {
  const [todos, setTodos] = useState([]);

  // Função para buscar todos os to-dos do backend
  const fetchTodos = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/todos');
      setTodos(response.data);
    } catch (error) {
      console.error('Erro ao buscar tarefas:', error);
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div className="container">
      <h1>Todo List</h1>
      <TodoForm fetchTodos={fetchTodos} />
      <TodoList todos={todos} fetchTodos={fetchTodos} />
    </div>
  );
};

export default App;
