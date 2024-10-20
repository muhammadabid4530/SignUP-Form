const modelData=require('../Controllers/StudentDataModel');
const jwt =require('jsonwebtoken');

const outputData=async(req,res)=>{
    try{
        const {userId}=req.body;
        const decodedToken=jwt.decode(userId);
        const userIdString = decodedToken.userId;
        const data=await modelData.find({userId:userIdString})
        res.send(data);
    }
    catch(error)
    {
        res.send("There is error")
    }
}

module.exports=outputData;