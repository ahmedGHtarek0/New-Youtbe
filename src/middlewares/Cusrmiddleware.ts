import { NextFunction ,Request,Response} from "express";
import jwt from 'jsonwebtoken'
import CustDb from "../modules/CustomerDb";
export interface Extendsreq extends Request{
    Cust?:any
}

const CustomerMiddleware=(req:Extendsreq,res:Response,next:NextFunction)=>{
    try{
    const authorization = req.get("authorization");
    if(!authorization){
        res.status(403).send('no authorization header  :(')
        return
    }
    const token =authorization.split(' ')[1]
    if(!token){
        res.status(403).send('the  token wasnot here  :(((')
        return
       }
       jwt.verify(token,'Customer',async(err:any,payload:any)=>{
        if(err){
            res.status(403).send('invalid token :( mr hacker')
            return
        }
        if(!payload){
            res.status(403).send('man man what are u doing :((((())))')
        }
        const userpaload= payload as ({email:string})
        const user=await CustDb.findOne({email:userpaload.email})
        if(!user){
            res.status(403).send(' where is the user')
        }
        req.Cust=user
        console.log(req.Cust._id)
        next()
       })
    }catch(err){
        console.log(err+' the err in the Customer Middlewar')
    }
}

export default CustomerMiddleware;