import CustDb from "../modules/CustomerDb"

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