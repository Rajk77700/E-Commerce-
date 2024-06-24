const {z}=require("zod");

const loginSchema = z.object({
    email: z
    .string({requied_error: "Email is required"})
    .trim()
    .email({message:"Invalid email address"})
    .min(3,{message:"Email must be at least 3 characters."})
    .max(100,{message:"Email must be not more than 100 characters."}),

    password: z
    .string({requied_error: "Password is required"})
    .min(6,{message:"Password must be at least 6 characters."})
    .max(100,{message:"Password must be not more than 100 characters."}),
})

// CREATE AN OBJECT SCHEMA
const signupSchema=loginSchema.extend({
    username: z
    .string({requied_error: "Name is required"})
    .trim()
    .min(3,{message:"Name must be at least 3 characters."})
    .max(100,{message:"Name must be not more than 100 characters."}),

    email: z
    .string({requied_error: "Email is required"})
    .trim()
    .email({message:"Invalid email address"})
    .min(3,{message:"Email must be at least 3 characters."})
    .max(100,{message:"Email must be not more than 100 characters."}),

    phone: z
    .string({requied_error: "Phone No. is required"})
    .trim()
    .min(10,{message:"Number must be at least 10 characters."})
    .max(20,{message:"Name must be not more than 20 characters."}),

    password: z
    .string({requied_error: "Password is required"})
    .min(6,{message:"Password must be at least 6 characters."})
    .max(100,{message:"Password must be not more than 100 characters."}),
})
module.exports={signupSchema, loginSchema};