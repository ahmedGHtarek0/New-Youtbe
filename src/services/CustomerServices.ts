import mongoose from "mongoose"
import CustDb from "../modules/CustomerDb"
import jwt from 'jsonwebtoken'
interface Customer{
    name?:string,
    email:string,
    password:string
}
export const AddNewCustomer=async({name,email,password}:Customer)=>{
    const SearchAboutCustomer= await CustDb.findOne({email})
    if(SearchAboutCustomer){
        return({data:'the customer is already exist',status:401})
    }
    const addnewCust:any=await CustDb.create({name,email,password})
    await addnewCust.save()
    return({data:tokenForCustomer({email}),status:201})
}
const tokenForCustomer=(data:any)=>{
return(jwt.sign(data,'Customer'))
}
export const loginCust=async({email,password}:Customer)=>{
const SearchAboutCustomer= await CustDb.findOne({email})
if(!SearchAboutCustomer){
    return{data:'the email is not exists',status:401}
}
if(SearchAboutCustomer.password!==password){
return{data:'the password is wrong',status:401}
}
return({data:tokenForCustomer({email}),status:201})
}