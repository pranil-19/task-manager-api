const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')
 
const app = express()
const port = process.env.PORT || 3000

// app.use((req,res,next) => {
//     if(req.method === 'GET'){
//         res.send('GET requests are disabled')
//     }
//     else{
//         next()
//     }
// })

// app.use((req, res, next) => {
//     res.status(503).send('Site is currently down. Check back soon!')
// })

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})

// const User = require('./models/user')
// const Task = require('./models/task')

// const main = async () => {

    // taken a task and we find entire user profile who create this task 
    // const task = await Task.findById('627efd3f4efe9a9639bdb3c5')
    // await task.populate('owner')
    // console.log(task.owner)

    // taken a user and we find entire tasks created by this user 
    // const user = await User.findById('627efa2260f16b8e518f2edc')
    // await user.populate('tasks')
    // console.log(user.tasks)
// }

// main()   