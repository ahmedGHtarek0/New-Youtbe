import express from 'express'
import { AddNewCustomer, loginCust } from '../services/CustomerServices'

const router = express()

router.post('/signupCustomer',async(req,res)=>{
    const {name,email,password}=req.body
    const {data,status}= await AddNewCustomer({name,email,password})
    res.status(status).send(data)
})
router.post('/loginForCutomer',async(req,res)=>{
    const {email,password}=req.body
    const {data,status}= await loginCust({email,password})
    res.status(status).send(data)
})



export default  router