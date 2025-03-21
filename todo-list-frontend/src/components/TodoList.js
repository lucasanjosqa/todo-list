import React from 'react';
import axios from 'axios';

const TodoList = ({ todos, fetchTodos }) => {
  // Função para alternar o estado da tarefa entre concluída e não concluída
  const toggleTodo = async (index) => {
    try {
      await axios.put(`http://localhost:5000/api/todos/${index}`);
      fetchTodos(); // Recarrega a lista de tarefas após a atualização
    } catch (error) {
      console.error('Erro ao completar tarefa:', error);
      alert('Falha ao completar a tarefa. Tente novamente.');
    }
  };

  const removeTodo = async (index) => {
    try {
      await axios.delete(`http://localhost:5000/api/todos/${index}`);
      fetchTodos(); // Recarrega a lista de tarefas após a remoção
    } catch (error) {
      console.error('Erro ao remover tarefa:', error);
      alert('Falha ao remover a tarefa. Tente novamente.');
    }
  };

  return (
    <ul>
      {todos.map((todo, index) => (
        <li key={index} style={{ display: 'flex', alignItems: 'center' }}>
          <input
            type="checkbox" 
            checked={todo.completed}
            onChange={() => toggleTodo(index)} // Chama a função para marcar/desmarcar a tarefa
          />
          <span style={{ textDecoration: todo.completed ? 'line-through' : 'none', flexGrow: 1 }}>
            {todo.task}
          </span>
          <button className="delete-button" onClick={() => removeTodo(index)}>×</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
