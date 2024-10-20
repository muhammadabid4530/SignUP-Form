const modelData=require('../Controllers/StudentDataModel');
const jwt =require('jsonwebtoken');
const StudentData=async(req,res)=>{
    try{
        const {name,rollNo,mobileNo,email,userId}=req.body;
        const decodedToken=jwt.decode(userId);
        const userIdString = decodedToken.userId;
        const data=new modelData({"name":name,"rollNo":rollNo,"mobileNo":mobileNo,"email":email,"userId":userIdString})
        const result=await data.save()
        res.status(200).json({ message: 'Data saved successfully', data: result });
    }
    catch(error){
        res.status(500).json({ message: 'Data cant be send', data: error });
    }
}
module.exports=StudentData;