const Todo = require('../models/todo')


Todo.methods(['get', 'post', 'put', 'delete'])
Todo.updateOptions({new: true})

module.exports = Todo

