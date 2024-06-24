require("dotenv").config();
const express = require("express");
const cors=require("cors");
const app = express();
const authRoute = require("./router/auth-router"); 
const contactRoute=require("./router/contact-router");
const serviceRoute=require("./router/service-router");
const connectDB = require("./utilities/db");
const errorMiddleware = require("./middlewares/error-middleware");

const adminRoute = require ("./router/admin-router")


//handling cors
const corsOption={
    origin:"http://localhost:5173",
    methods:"GET, POST, PUT, DELETE, PATCH, HEAD",
    credentials:true,
}
app.use(cors(corsOption));
app.use(express.json()); // MIDDLEWARE

app.use("/api/auth",authRoute);
app.use("/api/form", contactRoute);
app.use("/api/data", serviceRoute);

// HERE I AM DEFINING ADMIN PANNEL ROUTE
app.use("/api/admin", adminRoute)


app.use(errorMiddleware);
const PORT=5001;
connectDB ().then(()=>{
app.listen(PORT,()=>{
    console.log(`server is running at port:${PORT}`);
});
})