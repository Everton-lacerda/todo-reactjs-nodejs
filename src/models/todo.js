const restful = require('node-restful')
const mongoose = restful.mongoose

const TodoSchema = new mongoose.Schema({
    description: {type: String, required: true},
    done: {type: Boolean, require: true, default: false},
    created: { type: Date, default: Date.now}
})



module.exports = restful.model('Todo', TodoSchema)
// module.exports = mongoose.model('Todo', TodoSchema)