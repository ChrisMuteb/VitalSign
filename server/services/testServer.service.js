const todos = ['thai rice', 'macdonald'];

const getTodos = (req, res) => {
    console.log('get todos')
    res.status(200).json(todos);
};

const addTodo = (req, res) => {
    const { todo } = req.body;

    if (!todo) {
        res.status(400).json({ error: 'missing todo' });
    }
    else {
        todos.push(todo);
        res.status(200).json(todos);
    }
}

module.exports = { getTodos, addTodo }