const express = require('express'); // Import the express module to create an Express application
const app = express(); // Create an instance of an Express application

// An array to store to-do items, each item is an object with id, task, and completed properties
let todos = [
    { id: 1, task: 'Learn Node.js', completed: false }, // First to-do item
    { id: 2, task: 'Build a to-do app', completed: false }, // Second to-do item
];

app.use(express.json()); // Middleware to parse incoming JSON requests into JavaScript objects

// Route to handle GET requests to '/todos', returns all to-do items
app.get('/todos', (req, res) => {
    res.json(todos); // Respond with the list of to-do items in JSON format
});

// Route to handle POST requests to '/todos', adds a new to-do item
app.post('/todos', (req, res) => {
    const newTodo = {
        id: todos.length + 1, // Generate a new id by adding 1 to the length of the current todos array
        task: req.body.task, // Get the task description from the request body
        completed: false, // Set the initial completed status to false
    };
    todos.push(newTodo); // Add the new to-do item to the todos array
    res.json({ msg: 'Todo added!', todo: newTodo }); // Respond with a message and the new to-do item
});

// Route to handle PUT requests to '/todos/:id', updates a specific to-do item
app.put('/todos/:id', (req, res) => {
    const id = parseInt(req.params.id); // Parse the id from the request parameters and convert it to an integer
    const todo = todos.find(todo => todo.id === id); // Find the to-do item with the matching id
    if (todo) { // If the to-do item is found
        todo.completed = true; // Mark the to-do item as completed
        res.json({ msg: 'Todo updated!', todo }); // Respond with a message and the updated to-do item
    } else { // If the to-do item is not found
        res.status(404).json({ msg: 'Todo not found!' }); // Respond with a 404 status and an error message
    }
});

// Route to handle DELETE requests to '/todos/:id', deletes a specific to-do item
app.delete('/todos/:id', (req, res) => {
    const id = parseInt(req.params.id); // Parse the id from the request parameters and convert it to an integer
    const initialLength = todos.length; // Store the initial length of the todos array
    todos = todos.filter(todo => todo.id !== id); // Filter out the to-do item with the matching id
    if (todos.length < initialLength) { // If the length of the todos array is reduced
        res.json({ msg: 'Todo deleted!' }); // Respond with a message indicating the to-do item was deleted
    } else { // If the length of the todos array is not reduced
        res.status(404).json({ msg: 'Todo not found!' }); // Respond with a 404 status and an error message
    }
});

// Start the server and listen for requests on port 3000
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000'); // Log a message indicating the server is running
});
