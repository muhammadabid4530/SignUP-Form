const modelData=require('./SchemaModel');

const SignupData=async(req,res)=>{
    try{

        const {userName}=req.body;
        const checkEmail = await modelData.findOne({ userName });
        if(checkEmail){
            res.status(400).json({ error: 'Email already exists' })
        }
        else{
            const data=new modelData(req.body)
            const result=await data.save()
            res.status(200).json({ message: 'User signed up successfully', user: result });

        }
    }
    catch(error){
        res.status(500).json({error:'server error'});
    }
}

module.exports=SignupData;