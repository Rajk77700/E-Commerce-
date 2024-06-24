import React from 'react'
import '../Services.css';
import { useAuth } from '../store/auth'



function Service() {
  const {services}=useAuth();
  return (
    <>
    <section className='section-service'>
      <div className='ctnr'>
        <h2 className='mainheading'>Our Services</h2>
      </div>

      <div className='container grid grid-three-cols'>
    {
      Array.isArray(services) && services.map((curElem, index)=>{
        {/* const {price, description, provider, service}=curElem; */}
        return (
        <div className='card' key={index}>
          <div className='card-image'>
            <img src={curElem.imageUrl} alt='images' className='card-media'/>
          </div>
          <div className='card-details'>
            <div className='grids grid-two-cols'>
              <p>{curElem.provider}</p>
              <p>{curElem.price}</p>
            </div>
            <h3>{curElem.service}</h3>
            <p>{curElem.description}</p>
          </div>
        </div>);
      })
    }  
      </div>
    </section>
    </>
  )
}

export default Service