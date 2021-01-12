import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { GetAppContext } from '../Providers/AppContextProvider.js';
import AccountHeader from './Account/AccountHeader.js';
import AccountItemsList from './Account/AccountItemsList.js';
import LoginModal from './Modal/LoginModal.js';

const Account = () => {
  const history = useHistory();
  const { loggedIn } = useContext(GetAppContext);

  return !loggedIn ? (
    <LoginModal closeModal={history.goBack} />
  ) : (
    <div id='account-div'>
      <AccountHeader />
      <AccountItemsList />
    </div>
  );
};

export default Account;
