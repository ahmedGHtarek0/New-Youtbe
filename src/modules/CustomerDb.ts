import mongoose,{Schema,Document} from "mongoose";

interface Icustomer extends Document{
    name:string,
    email:string,
    password:string,
    ppic:string,//personal picture
    profilepic:string
}
const newschemaforcust= new Schema<Icustomer>({
    name:{type:String,required:true},
    email:{type:String,required:true},
    password:{type:String,required:true},
    ppic:{type:String},
    profilepic:{type:String},
})
const CustDb= mongoose.model<Icustomer>('Customer',newschemaforcust)
export default CustDb;