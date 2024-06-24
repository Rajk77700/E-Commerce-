import React, { useState } from 'react'
import {useNavigate} from "react-router-dom"
import { useAuth } from '../store/auth';
import {toast} from 'react-toastify'
import Footer from "../components/Footer"


function Register() {
    const [user,setUser] =useState({
      username: "",
      email: "",
      phone: "",
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
      // alert(user);
      console.log(user)
// HERE I M ADDING BACKEND WITH Register
      try {
      const response= await fetch(`http://localhost:5001/api/auth/register`,{
        method:"POST",
        headers:{
          "Content-Type":"application/json",
        },
        body:JSON.stringify(user),
      });

      
      const res_data=await response.json();
      console.log("response from server",res_data.extraDetails);
      
// after register input field should be empty
      if (response.ok){
        //STORE TOKEN IN LOCAL STORAGE
        
        storetokenInLocalStorage (res_data.token);
        setUser({ username: "",email: "",phone: "",password: ""});
        toast.success("Registration successfull")
        navigate("/"); // after register successfull navigate the user to Home page
      }else{
        toast.error(res_data.extraDetails ? res_data.extraDetails:res_data.message);
      }

    } catch (error) {
        console.log("register",error)
    }
  }


  return (
    <>
    <div className='maincontainer'>
      <div className='leftcontainer'>
        <img src='/images/furniture4.jpg' alt='' width='600px' height='500px'></img>
      </div>

      <div className='rightcontainer'>
        <h1>Registeration Form</h1>
        <br></br>
        <form onSubmit={handleSubmit}>
        <div>
         <label htmlFor='username'>User Name:</label><br></br>
         <input className='writearea' type='text' name='username' id='username' placeholder='Enter Your Name' value={user.username} onChange={handleInput} autoComplete='off'></input>
        </div>
        <div>
         <label htmlFor='email'>Email:</label><br></br>
         <input className='writearea'  type='email' name='email' id='email' placeholder='Enter Your Email' value={user.email} onChange={handleInput} autoComplete='off'></input>
        </div>
        <div>
         <label htmlFor='phone'>Phone:</label><br></br>
         <input className='writearea'  type='number' name='phone' id='phone' placeholder='Enter Your PhoneNo.' value={user.phone} onChange={handleInput} autoComplete='off'></input>
        </div>
        <div>
         <label htmlFor='password'>Password:</label><br></br>
         <input className='writearea'  type='password' name='password' id='password' placeholder='Enter Your Password' value={user.password} onChange={handleInput} autoComplete='off'></input>
         </div>
         <br></br>
         <button type='submit'>Register Now</button>
        </form>
      </div>

    </div>
    <Footer></Footer>
    </>
  )
}

export default Register