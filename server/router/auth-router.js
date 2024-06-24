const express=require("express");
const router=express.Router();
const authcontrollers=require("../controllers/auth-controllers");
const {signupSchema, loginSchema}=require("../validators/auth-validator");
const validate= require("../middlewares/validate-middleware");
const authMiddleware=require("../middlewares/auth-middleware");



// HOME PAGR ROUTE
router.route("/").get(authcontrollers.home);

// REGISTER PAGE ROUTE
router.route("/register").post(validate(signupSchema), authcontrollers.register);

// LOGIN PAGE ROUTE
router.route("/login").post(validate(loginSchema), authcontrollers.login);

// USER PAGE ROUTE

router.route("/user").get(authMiddleware,authcontrollers.user);


module.exports=router;