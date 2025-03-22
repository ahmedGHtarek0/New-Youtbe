import express, { Router } from 'express'
import { AddNewCustomer, loginCust } from '../services/CustomerServices'
import CustomerMiddleware, { Extendsreq } from '../middlewares/Cusrmiddleware'
import { cloudeimage } from '../middlewares/profileandpersonalPic'
import { addallthinge, Addlike, AddPost, deletelike } from '../services/customerallCrud'

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
router.post('/updprofile',CustomerMiddleware,cloudeimage.fields([{name:'profilepic',maxCount:1},{name:'ppic',maxCount:1}]),async(req:any,res)=>{
    const path1=req.files['profilepic'][0]['path']
    const path2=req.files['ppic'][0]['path']
    const id=req.Cust._id
    const {name}=req.body
    const {data,status}= await addallthinge({name,path2,path1,id})
    console.log(path1)
    console.log(path2)
    console.log(name)
    res.status(status).send(data)
})
router.post('/addpost',CustomerMiddleware,cloudeimage.array('images',1),async(req:any,res)=>{
    const pic= req.files.map((File:any)=>File.path)
    const id=req.Cust._id
    const {data,status}= await AddPost({pic,id})
    res.status(status).send(data)
})
router.post('/addlike/:idofpost',CustomerMiddleware,async(req:any,res)=>{
    const {idofpost}=req.params
    const {data,status}= await Addlike({idofpost})
    res.status(status).send(data)

})
router.post('/deletelike/:idofpost',CustomerMiddleware,async(req:any,res)=>{
    const {idofpost}=req.params
    const {data,status}= await deletelike({idofpost})
    res.status(status).send(data)

})
export default  router