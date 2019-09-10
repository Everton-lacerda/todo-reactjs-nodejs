const server =  require('./config/server')
require('./config/database')
require('./controller/todoController')(server)