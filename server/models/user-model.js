
 // schema for REGISTERATION forms
const mongoose=require("mongoose");
const bcrypt=require("bcryptjs");
const jwt=require("jsonwebtoken")

const userSchema= new mongoose.Schema({
    username:{
        type: String,
        require: true,
    },
    email:{
        type: String,
        require: true,
    },
    phone:{
        type: String,
        require: true,
    },
    password:{
        type: String,
        require: true,
    },
    isAdmin:{
        type: Boolean,
        default: false,
    },
})

// ----------------------------------------------------------------------------------------
// SECURE THE PASSWORD BY USING BCRYPT
userSchema.pre('save',async function(){
    // console.log("pre method ",this);
    const user = this;

    if (!user.isModified("password")){
        next();
    }
    try {
        const saltRound= await bcrypt.genSalt(10);
        const hash_password = await bcrypt.hash(user.password, saltRound);
        user.password=hash_password
    } catch (error) {
        next(error);
    }
})

//COMPARE THE PASSWORD
userSchema.methods.comparePassword= async function(password){
    return bcrypt.compare(password, this.password);
}

//-----------------------------------------------------------------------------------------

//Json Web Token
userSchema.methods.generateToken= async function (){
  try {
    return jwt.sign(
        {
        userId: this._id.toString(),
        email: this.email,
        isAdmin: this.isAdmin,
    },
    process.env.JWT_SELECTED_KEY,{
        expiresIn: "30d",
    }
);
  } catch (error) {
    console.error(error)
  } 
};
//-----------------------------------------------------------------------

// Define model name or the collection name
const User= new mongoose.model("User", userSchema);

module.exports=User; 