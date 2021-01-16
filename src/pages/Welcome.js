import React from 'react';
import { useHistory } from 'react-router-dom';

const Welcome = () => {
  const history = useHistory();

  return (
    <div className='welcome-div'>
      <img className='img-sml' src='/img/welcome1.jpg' alt='Illustration' />
      <h1>Hello</h1>
      <p>City MD is here to make your life easier during the pandemic.</p>
      <img className='img-med ' src='/img/welcome2.jpg' alt='Illustration' />
      <h1>No more waiting!</h1>
      <p>In four simple steps, you can book a COVID-19 testing appointment.</p>
      <button
        autoFocus
        className='btn'
        onClick={() => history.push('/search/form')}
      >
        LET'S START
      </button>
    </div>
  );
};

export default Welcome;
