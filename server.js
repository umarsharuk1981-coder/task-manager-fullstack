const express = require('express');
const app = express();

app.use(express.json());

let tasks = [];

app.get('/tasks', (req, res) => {
  res.json(tasks);
});

app.post('/tasks', (req, res) => {
  const task = req.body;
  tasks.push(task);
  res.json({ message: 'Task added' });
});

app.delete('/tasks/:id', (req, res) => {
  tasks.splice(req.params.id, 1);
  res.json({ message: 'Task deleted' });
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
