import express from 'express'
import mongoose from 'mongoose'

const app = express()
const port = 3001
app.use(express.json())
mongoose.connect("mongodb://localhost:27017/youtubeNew").then(() => console.log('ahmed test')).catch((i)=>console.log('errr' ,i))

app.listen(port,()=>{
    console.log('server is running')
}
)
//ahmed test git
//ahmed test git&githup