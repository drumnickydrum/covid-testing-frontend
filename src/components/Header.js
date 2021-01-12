import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { GetAppContext } from '../Providers/AppContextProvider.js';

const Header = () => {
  const history = useHistory();
  const { navDisabled } = useContext(GetAppContext);

  return (
    <>
      <header className='header'>
        <button
          id='btn-back'
          className={navDisabled ? 'btn navDisabled' : 'btn'}
          disabled={navDisabled}
          onClick={history.goBack}
        >
          Back
        </button>
        <h1 className='title'>TITLE</h1>
        <button
          id='btn-info'
          className={navDisabled ? 'btn navDisabled' : 'btn'}
          disabled={navDisabled}
          onClick={() => history.push('/information')}
        >
          Information
        </button>
      </header>
    </>
  );
};

export default Header;
