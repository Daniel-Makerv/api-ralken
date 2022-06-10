import express from 'express'
import userRouter from './routes/users'
import cors from 'cors'
const app = express()
app.use(express.json())
const PORT = 3000
app.use(cors());

app.use('/apiv1/users', userRouter)

app.listen(PORT, ()=>{
    console.log(`server corriendo en el puerto ${PORT}`)
})