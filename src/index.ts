import express from 'express'
import mongoose from 'mongoose'
import CustomerRoutes from './routes/CustomerRoutes'

const app = express()
const port = 3001
app.use(express.json())
mongoose.connect("mongodb://localhost:27017/youtubeNew").then(() => console.log('ahmed test')).catch((i)=>console.log('errr' ,i))
app.use('/customer',CustomerRoutes)
app.listen(port,()=>{
    console.log('server is running')
}
)
//ahmed test git
//ahmed test git&githup
/*git remote add origin https://github.com/ahmedGHtarek0/New-Youtbe.git
git branch -M main
git push -u origin main
*/