// CONNECTING MONGO DB WITH MONGOOSE
const mongoose = require("mongoose");

//mongodb+srv://rajkumarnishad947:<password>@pnpfurniture.h9ihvob.mongodb.net/?retryWrites=true&w=majority&appName=PnPFurniture
const URI =process.env.MONGODB_URI

const connectDB=async()=>{
    try {
        await mongoose.connect(URI);
        console.log('connection successfull with DB');
        
    } catch (error) {
        console.error("database connection failed");
    }
}
module.exports=connectDB;