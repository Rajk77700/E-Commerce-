import React from 'react'
import { useAuth } from '../store/auth';
import Footer from '../components/Footer';

function About() {
  const {user}=useAuth(); //this is for calling username on conatact page from backend
  return (
    <section>
      
      <div className='maincontainer'>
         
         <div className='leftcontainer'>
            <h2>
            <p style={{ color: 'green' }}  >Welcome {user ? `${user.username} to our Furniture website`: `to our website`}</p>
            </h2> <br></br>
            <div><h2>Welcome To Pramod Kumar Furniture Wala</h2></div><br></br>
            <p>At our shop, we make lots of different furniture for many parts of your home.
              Whether you need furniture for a wedding, your kitchen, doors, windows, beds, 
              or cupboards, we've got you covered. Our furniture is made with care and attention to detail, 
              so it looks great and lasts a long time.
            </p>
            <br></br>
            <div className='btn-group'>
            <a href='/contact'><button>Connect Now</button></a>
            <a href='/about'><button>Learn More</button></a>
          </div>
         </div>

         <div className='rightcontainer'>
           <img src='./images/furniture5.jpg' alt='' height='500px' width='620px'></img>
         </div>  
      </div>

      <div className='middlecontainer grid grid-four-cols'>
          <div className='div1'>
          <h2>50+</h2>
          <p>Shops Are Connected With Us</p>
          </div>
          <div className='div1'>
          <h2>10,000+</h2>
          <p>Happy Customers</p>
          </div>
          <div className='div1'>
          <h2>50+</h2>
          <p>Experienced Workers</p>
          </div>
          <div className='div1'>
          <h2>24/7</h2>
          <p>Service</p>
          </div>
        </div>
        <Footer></Footer>
    </section>
  )
}

export default About