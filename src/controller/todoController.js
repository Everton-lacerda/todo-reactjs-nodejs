const express = require('express')


module.exports = function(server){
    const router = express.Router()
    server.use('/api', router)

    // TODO Routes
    const todoService = require('../services/todoServices')
    todoService.register(router, '/todos')
}