import React from 'react';

function Error() {
  return (
    <>
      <div className='headcontainer'>
        <h1 className='error'> 404</h1>
        <h4>SORRY! PAGE NOT FOUND</h4>
        <p>Oops, it seems like the page you are trying to access doesn't exist.</p>

        <div className='btn-group'>
        <a href='/'><button>Return Home</button></a>
        </div>
      </div>
    </>
  );
}

export default Error;