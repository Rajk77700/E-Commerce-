import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../store/auth';
import {toast} from 'react-toastify'
import Footer from "../components/Footer"

function Login() {
  const [user,setUser]=useState({
    email:"",
    password: "",
  });

  const navigate=useNavigate();
const {storetokenInLocalStorage}=useAuth();


  const handleInput=(e)=>{
    let name=e.target.name;
    let value=e.target.value;

    setUser({...user,[name]:value,});
 };

 // Form Submission
 const handleSubmit= async(e)=>{
   e.preventDefault();
   try {
    const response=await fetch(`http://localhost:5001/api/auth/login`,{
      method:"POST",
      headers:{
        "Content-type":"application/json",
      },
      body: JSON.stringify(user),
    });

    console.log("Login Form",response)
    const res_data=await response.json();

    if(response.ok){
      // STORE TOKEN IN LOCAL STORAGE
      storetokenInLocalStorage (res_data.token);
      
      setUser({email:"", password:""});
      toast.success("Login successfull")
      navigate("/")
    }else{
      toast.error(res_data.extraDetails ? res_data.extraDetails:res_data.message)
      console.log("Invalid credential");

    }
   } catch (error) {
    console.log(error)
   }
   console.log(user)
  //  alert(user);
 }
  return (
    <>
      
      <div className='maincontainer'>
         <div className='leftcontainer'>
           <img src='./images/1-8.jpg' alt='' width='600px' height='500px'></img>
         </div>

         <div className='rightcontainer'>
            <h1>Login Form</h1>
            <br></br>

           <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor='email'>Email:</label><br></br>
              <input className='writearea'  type='email' name='email' id='email' placeholder='Enter Your Email' value={user.email} onChange={handleInput} required autoComplete='off'></input>
            </div>
            <div>
              <label htmlFor='password'>Password:</label><br></br>
              <input className='writearea'  type='password' name='password' id='password' placeholder='Enter Your Password' value={user.password} onChange={handleInput} required autoComplete='off'></input>
            </div>
            <br></br>
            <button type='submit'>Login</button>
           </form>

         </div>
      </div>
      <Footer></Footer>
    </>
  )
}

export default Login