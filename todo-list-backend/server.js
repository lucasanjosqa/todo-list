const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

let todos = [];

app.get('/api/todos', (req, res) => {
    res.json(todos);
});

app.post('/api/todos', (req, res) => {
    const { task } = req.body; 
    if (!task) {
        return res.status(400).json({ error: 'Task is required' });
    }
    const newTodo = { task, completed: false };
    todos.push(newTodo);
    res.status(201).json(newTodo);
});

app.put('/api/todos/:index', (req, res) => {
    const index = req.params.index; 
    if (index < 0 || index >= todos.length) {
        return res.status(404).json({ error: 'Todo not found' });
    }
    todos[index].completed = !todos[index].completed;
    res.json(todos[index]); 
});

app.delete('/api/todos/:index', (req, res) => {
    const index = req.params.index; 
    if (index < 0 || index >= todos.length) {
        return res.status(404).json({ error: 'Todo not found' });
    }
    todos.splice(index, 1);
    res.status(204).send();
});

// Middleware para tratamento de erros
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Something went wrong!' }); 
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
