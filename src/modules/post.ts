import mongoose,{Schema,Document} from "mongoose";
import { Icommenst, schemaforcomments } from "./comments";
 interface Ipost extends Document{
    idofowner:string
    postpics:[]
    allComments:Icommenst[]
    likes:number
 }
 const schemaforposts= new Schema<Ipost>({
    idofowner:{type:String,required:true},
    postpics:{type:[],required:true},
    allComments:[schemaforcomments],
    likes:{type:Number,required:true,default:0},
 })
 export const Post= mongoose.model<Ipost>('Post',schemaforposts)