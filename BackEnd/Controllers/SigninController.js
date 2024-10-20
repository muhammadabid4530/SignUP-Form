const modelData=require('./SchemaModel');
const jwt = require('jsonwebtoken');

const signinData = async (req, res) => {
    const { userName, password } = req.params;
    
    try {
        const dbData = await modelData.findOne({ userName });
        
        if (!dbData) {
            return res.status(404).send({error:"User not found"});
        }

        if (password === dbData.password) {
            // res.status(200).send(dbData);
            const token = jwt.sign({ userId: dbData._id }, 'secret_key');
            res.status(200).json({ token: token });
        } else {
            res.status(401).send({message:"Invalid password"});
        }
    } catch (error) {
        console.error("Error:", error);
        res.status(500).send({error:"Internal Server Error"});
    }
};

module.exports=signinData;