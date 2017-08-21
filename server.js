const express = require('express');
const tasksContainer = require('./tasks.json');
const app = express();

app.use(express.static(__dirname))

if (process.env.NODE_ENV !== 'production') {
  const webpack = require('webpack')
  const webpackDevMiddleware = require('webpack-dev-middleware')
  const webpackHotMiddleware = require('webpack-hot-middleware')
  const config = require('./webpack.config.js')
  const compiler = webpack(config)

  app.use(webpackHotMiddleware(compiler))
  app.use(webpackDevMiddleware(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
  }))
}

/**
 * GET /tasks
 * 
 * Return the list of tasks with status code 200.
 */
app.get('/tasks', (req, res) => {  
  return res.status(200).json(tasksContainer.tasks);
});

/**
 * Get /task/:id
 * 
 * id: Number
 * 
 * Return the task for the given id.
 * 
 * If found return status code 200 and the resource.
 * If not found return status code 404.
 * If id is not valid number return status code 400.
 */
app.get('/task/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);

  if (Number.isNaN(id)) {
    return res.status(400).json({
      message: 'Bad request.',
    });
  } 
  
  const task = tasksContainer.tasks.find((item) => item.id === id);

  if (!task) {
    return res.status(404).json({
      message: 'Not found.',
    });
  }

  return res.status(200).json(task);
  
});

/**
 * PUT /task/update/:id/:title/:description
 * 
 * id: Number
 * title: string
 * description: string
 * 
 * Update the task with the given id.
 * If the task is found and update as well, return a status code 204.
 * If the task is not found, return a status code 404.
 * If the provided id is not a valid number return a status code 400.
 */
app.put('/task/update/:id/:title/:description', (req, res) => {
  const id = parseInt(req.params.id, 10);

  if (Number.isNaN(id)) {
    return res.status(400).json({
      message: 'Bad request.',
    });
  } 

  const task = tasksContainer.tasks.find(item => item.id === id);

  if (!task) {
    return res.status(404).json({
      message: 'Not found.',
    });
  }   

  task.title = req.params.title;
  task.description = req.params.description;
  return res.status(204).json({
    message: 'Successfully updated',
  });
 
});

/**
 * POST /task/create/:title/:description
 * 
 * title: string
 * description: string
 * 
 * Add a new task to the array tasksContainer.tasks with the given title and description.
 * Return status code 201.
 */
app.post('/task/create/:title/:description', (req, res) => {
  const task = {
    id: tasksContainer.tasks.length,
    title: req.params.title,
    description: req.params.description,
    createdAt: new Date().getTime(),
  };

  tasksContainer.tasks.push(task);

  return res.status(201).json(task);
});

/**
 * DELETE /task/delete/:id
 * 
 * id: Number
 * 
 * Delete the task linked to the  given id.
 * If the task is found and deleted as well, return a status code 204.
 * If the task is not found, return a status code 404.
 * If the provided id is not a valid number return a status code 400.
 */
app.delete('/task/delete/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);

  if (Number.isNaN(id)) {
    return res.status(400).json({
      message: 'Bad request.',
    });
  } 

  const task = tasksContainer.tasks.find(item => item.id === id);

  if (task === null) {
    return res.status(404).json({
      message: 'Not found.',
    });
  }   

  const taskIndex = tasksContainer.tasks;
  tasksContainer.tasks.splice(taskIndex, 1);
  return res.status(200).json({
    message: 'Updated successfully',
  });
});

//Init with index.html
app.get('*', function(req, res) {
  res.sendFile(__dirname + '/index.html');  
})

app.set("port", process.env.PORT || 9001);

app.listen(app.get("port"), () => {
  process.stdout.write(`The server is up and running on port:${app.get("port")}\n`);  
});
