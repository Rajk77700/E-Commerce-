
import React from 'react'
import { useAuth } from '../store/auth';
// import Footer from '../components/Footer';
import About from './About';

function Home() {
  const {user}=useAuth();
  return (
    <>
      <div className='maincontainer'>
        <div className='leftcontainer'>
        <h2>
            <p style={{ color: 'green' }}  >Welcome {user ? `${user.username} to our Furniture website`: `to our website`}</p>
            </h2> <br></br>
          <div>We Are The Best Furniture Maker</div>
          <br></br>
          <div><h2>Welcome to Pramod Kumar Furniture Wala</h2></div>
          <br></br>
          <div>Your one-stop destination for premium furniture: where style meets comfort,
           and quality meets affordability.
           Discover curated collections of stylish and high-quality furniture at our store. 
           From classic elegance to modern chic, we offer a diverse range of pieces to elevate your living spaces. 
           Find the perfect balance of style, comfort, and value in every corner of our showroom.
            </div>
            <br></br>
          <div className='btn-group'>
            <a href='/contact'><button>Connect Now</button></a>
            <a href='/about'><button>Learn More</button></a>
          </div>
        </div>
        <br></br>
        <div className='rightcontainer'>
         <img src='/images/furniture5.jpg' alt=''width='700px' height='500px'></img>
        </div>
      </div>

      <br></br>

       {/* middle CONTAINER */}
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
        <br></br>
        <br></br>
        {/* last bottom  */}
      <div className='lastcontainer'>    
        <div className='rightcontainers'>
         <img src='/images/furniture4.jpg' alt=''width='600px' height='400px'></img>
        </div>

        <div className='leftcontainer'>
          <div>We are the Best Furniture Maker</div>
          <br></br>
          <div><h2>Let's Start shopping</h2></div>
          <br></br>
          <div>Furniture for kids serves numerous benefits beyond more functionality. 
          It fosters a sense of ownership and responsibility, encourages independence and creativity,
           and provides a safe and comfortable space for play, study, and rest. Additionally, 
           well-designed kids' furniture promotes proper posture and supports their physical development, enhancing overall well-being.
            </div>
            <br></br>
          <div className='btn-group'>
            <a href='/contact'><button>Connect Now</button></a>
            <a href='/about'><button>Learn More</button></a>
          </div>
        </div>
      </div>
      <h1 className='about'>ABOUT US</h1>
      <About></About>
      {/* <Footer></Footer>   */}
    </>
  )
}

export default Home;