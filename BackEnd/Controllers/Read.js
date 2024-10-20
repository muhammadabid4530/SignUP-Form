const modelData=require('./SchemaModel');

const ReadData=async(req,res)=>{
    const data=await modelData.find({});
    res.send(data);
}

module.exports=ReadData;