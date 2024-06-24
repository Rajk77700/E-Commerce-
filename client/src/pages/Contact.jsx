import React, { useState } from 'react';
import { useAuth } from '../store/auth';
import {toast} from 'react-toastify';
import Footer from '../components/Footer';

const  defaultContactForm ={
  username: "",
  email: "",
  message: "",
}

function Contact() {
  const [contact,setContact]=useState({
    defaultContactForm
  });

  const [userData, setUserData]=useState(true);
  const {user}=useAuth();
  if(userData && user){
    setContact({
      username: user.username,
      email: user.email,
      message: "",
    });
    setUserData(false);
  }

  const handleInput=(e)=>{
    const name=e.target.name;
    const value=e.target.value;

    setContact({...contact,[name]:value,})
  }

  // form submit
  const handleSubmit=async(e)=>{
    e.preventDefault();

    try {
      const response=await fetch("http://localhost:5001/api/form/contact",{
        method:"POST",
        headers:{
          "Content-Type":"application/json",
        },
        body:JSON.stringify(contact),
      });
      if (response.ok){
        setContact(defaultContactForm);
        const data=await response.json();
        console.log(data);
        toast.success("msg send successfully");
      }
    } catch (error) {
      console.log(error);
    }
    
  }
  return (
    <>
      <div className='maincontainer'>
       <div className='leftcontainer'>
         <img src='./images/phone.jpg' alt='' height='300px' width='700px'></img>
         <br></br>
         <ul>
         <li><h4>Mobile No.: 0000000000</h4></li>
         <li><h4>Email: Phalane@gmail.com</h4></li>
         </ul>
       </div>

       <div className='rightcontainer'>
        <h1>Contact Us</h1>
        <br></br>
        <form onSubmit={handleSubmit}>
         <div>
         <label htmlFor='username'>Username:</label><br></br>
         <input type='text' name='username' id='username' placeholder='Enter Your Name' value={contact.username} onChange={handleInput} required autoComplete='off'></input>
         </div>
         <div>
         <label htmlFor='email'>Email:</label><br></br>
         <input type='email' name='email' id='email' placeholder='Enter Your Email' value={contact.email} onChange={handleInput} required autoComplete='off'></input>
         </div>
         <div>
         <label htmlFor='message'>Message:</label><br></br>
         <textarea name='message' id='message' placeholder='Write Your Message' value={contact.message} onChange={handleInput} cols='24' rows='7' required></textarea>
         </div>
         <button type='submit'>Submit</button>
         </form>
       </div>
      </div>
       {/* MAP */}
       <div className='map'>
       <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14008.67797417457!2d77.3762586503206!3d28.624681810700586!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ceff135b3084b%3A0x19ccb4e95c69306d!2sSector%2063%2C%20Noida%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1704772339512!5m2!1sen!2sin" width="1475" height="300"  allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
       </div>
      <Footer></Footer>
    </>
  )
}

export default Contact