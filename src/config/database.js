const mongoose = require('mongoose')

// const url = 'mongodb+srv://usuario_admin:everton3b@cluster0-lqciw.mongodb.net/jobs?retryWrites=true&w=majority'
const options = { reconnectTries: Number.MAX_VALUE, reconnectInterval: 500, poolSize: 5, useNewUrlParser: true }

// mongoose.connect(url, options)
mongoose.connect('mongodb://localhost:27017/todo', { useUnifiedTopology: true, useNewUrlParser: true });
mongoose.set('useCreateIndex', true)

mongoose.connection.on('error', (err) => {
    console.log('Erro na conexão com o banco de dados: ' + err)
})
mongoose.connection.on('disconnected', () => {
    console.log('Aplicação disconetada do banco de dados!')
})
mongoose.connection.once('connected', () => {
    console.log('Aplicação conectada ao banco de dados!')
})