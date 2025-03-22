import CustDb from "../modules/CustomerDb"
import { Post } from "../modules/post"

interface addallthing{
    name:string,
    path1?:string,
    path2:string,
    id:string
}
export const addallthinge=async({name,path1,path2,id}:addallthing)=>{
    try{
const SearchAboutCustomer= await CustDb.findOne({_id:id})
if(!SearchAboutCustomer){
    return({data:'the customer is not exsits',status:401})
}
if(!path1||!path2){
    const updCust= await CustDb.findByIdAndUpdate({_id:id},{$set:{name}})
await updCust?.save()
return({data:updCust,status:201})
}
const updCust= await CustDb.findByIdAndUpdate({_id:id},{$set:{name,profilepic:path1,ppic:path2}},{ new: true, runValidators: true })
 await updCust?.save()
return({data:updCust,status:201})
    }catch(err){
        console.log(err)
        return { data: "An error occurred while updating the customer", status: 500 };
    }
}
interface Ipost{
    pic:[],
    id:string
}
export const AddPost=async({pic,id}:Ipost)=>{
    try{
const addpost= await Post.create({postpics:pic,idofowner:id})
await addpost.save()
return({data:addpost,status:201})
    }catch(err){
        return({data:'err here'+err,status:401})
    }
}

interface like{
    idofpost:string
}
export const Addlike=async({idofpost}:like)=>{
    const seacrhaboutcomment= await Post.findById({_id:idofpost})
    if(!seacrhaboutcomment){
        return({data:'eror here in like in post',status:401})
    }
    seacrhaboutcomment.likes+=1
    await seacrhaboutcomment.save()
    return({data:seacrhaboutcomment,status:201})

}
export const deletelike=async({idofpost}:like)=>{
    const seacrhaboutcomment= await Post.findById({_id:idofpost})
    if(!seacrhaboutcomment){
        return({data:'eror here in like in post',status:401})
    }
    seacrhaboutcomment.likes-=1
    await seacrhaboutcomment.save()
    return({data:seacrhaboutcomment,status:201})

}
