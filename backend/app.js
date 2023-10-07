import express from 'express'
import {spawn} from 'child_process'



// importing the app route
import authRoute from './Routes/authRoute.js'


const app=express()
const PORT=3001


// using the json parser from the express
app.use(express.json())
// requiring the auth routes
app.use('/api/v1/auth',authRoute)

const childPython=spawn('python3',['--version'])
childPython.stdout.on('data',(data)=>{
    console.log(`${data}`)
})

app.listen(PORT,()=>{
    console.log(`The server is running on ${PORT}`)
})





