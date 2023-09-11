const mongoose=require("mongoose")
mongoose.connect("mongodb://localhost:27017/subscription_app/authentication")
.then(()=>{
    console.log("mongodb connected");
})
.catch(()=>{
    console.log('failed');
})


const newSchema=new mongoose.Schema({
    email:{
        type: String,
        required:true
    },
    password:{
        type: String,
        required:true
    },
    name:{
        type: string,
        required: true
    }
})

const collection = mongoose.model("collection",newSchema)

module.exports=collection

