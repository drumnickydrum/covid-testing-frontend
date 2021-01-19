import React, { useContext } from 'react';
import axios from 'axios';
import { useHistory, NavLink } from 'react-router-dom';
import {
  App,
  NavDisabled,
  SetApp,
  SetInfo,
  INIT_APP_STATE,
  INIT_INFO_STATE,
  SetRefresh,
} from '../Providers/ContextProvider.js';
import {
  Email,
  useSetAllAccount,
  INIT_ACCOUNT_STATE,
  Preferences,
} from '../Providers/AccountProvider.js';
import { useTryCatchFinally } from '../tools/useTryCatchFinally.js';
import { ReactComponent as AccountIcon } from '../icons/account.svg';
import { ReactComponent as AppointmentsIcon } from '../icons/appointments.svg';
import { ReactComponent as SettingsIcon } from '../icons/settings.svg';

const Navbar = () => {
  const history = useHistory();
  const tryCatchFinally = useTryCatchFinally();
  const { loggedIn } = useContext(App);
  const navDisabled = useContext(NavDisabled);
  const { remember } = useContext(Preferences);
  const email = useContext(Email);
  const setApp = useContext(SetApp);
  const setInfo = useContext(SetInfo);
  const setRefresh = useContext(SetRefresh);
  const setAllAccount = useSetAllAccount();

  const logout = () => {
    history.push('/');
    tryCatchFinally(tryFunc, undefined, undefined, finallyFunc);
    async function tryFunc() {
      const res = await axios.get('/common/logout');
      console.log(res.data);
    }
    function finallyFunc() {
      setApp(INIT_APP_STATE);
      setInfo(INIT_INFO_STATE);
      setRefresh(true);
      setAllAccount(INIT_ACCOUNT_STATE);
    }
  };

  return (
    <>
      <div className='info-footer'>
        <div className='error'>
          {remember ? 'REMEMBER: TRUE' : 'REMEMBER: FALSE'}
        </div>
        <div className='error'>
          {loggedIn ? 'Logged in.' : 'Not logged in.'}
        </div>
        <div className='error'>{email.email || 'No email.'}</div>
        <button onClick={logout}>Logout</button>
      </div>
      <div className='footer'>
        <nav className='navbar'>
          <NavLink
            to={navDisabled ? '#' : '/gateway/account'}
            className={navDisabled ? 'icon-disabled' : 'icon'}
            activeClassName='icon-active'
          >
            <AccountIcon />
          </NavLink>

          <NavLink
            to={navDisabled ? '#' : '/gateway/appointments'}
            className={navDisabled ? 'icon-disabled' : 'icon'}
            activeClassName='icon-active'
          >
            <AppointmentsIcon />
          </NavLink>

          <NavLink
            to={navDisabled ? '#' : '/gateway/settings'}
            className={navDisabled ? 'icon-disabled' : 'icon'}
            activeClassName='icon-active'
          >
            <SettingsIcon />
          </NavLink>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
