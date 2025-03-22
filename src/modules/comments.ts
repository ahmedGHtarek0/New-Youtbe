import mongoose,{Schema,Document} from "mongoose";

 export interface Icommenst extends Document{
    theowner:string,
    thepostid:string,
    comment:string,
    commentincomment:Icommen[],
    likes:number
 }
 export interface Icommen extends Document{
    theowner:string,
    thepostid:string,
    comment:string,
    likes:number
 }
 export const schemaforcommentincomments= new Schema<Icommen>({
    thepostid:{type:String,required:true},
    theowner:{type:String,required:true},
    comment:{type:String,required:true},
    likes:{type:Number,default:0,required:true}
 })
 export const schemaforcomments= new Schema<Icommenst>({
    thepostid:{type:String,required:true},
    theowner:{type:String,required:true},
    comment:{type:String,required:true},
    commentincomment:[schemaforcommentincomments],
    likes:{type:Number,default:0,required:true}
 })
 

 export const Comments= mongoose.model<Icommenst>('comments',schemaforcomments)