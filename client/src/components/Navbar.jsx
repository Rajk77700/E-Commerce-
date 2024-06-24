import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'
import { useAuth } from '../store/auth';


function Navbar() {
  const {isLogin}=useAuth();
  return (
    <>
        <header className='navcontainer'>
            <div className='container'>
                 <div className='logo'>
                    <a href='/' className='logo_color'>P.K_Furniture</a>
                 </div>

                 <nav>
                    <ul>
                        <li><NavLink to='/'>Home</NavLink></li>
                        <li><NavLink to='/about'>About</NavLink></li>
                        <li><NavLink to='/service'>Service</NavLink></li>
                        <li><NavLink to='/contact'>Contact</NavLink></li>

                        {isLogin ? (
                        <li><NavLink to='/logout' >Logout</NavLink></li>
                        ):(
                        <>
                        <li><NavLink to='/register'>Register</NavLink></li>
                        <li><NavLink to='/login'>Login</NavLink></li>
                        </>)}
                        
                    </ul>
                 </nav>
            </div>
        </header>
        
    </>
    
  )
}

export default Navbar