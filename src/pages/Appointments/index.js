import React, { useEffect, useState, useContext } from 'react';
import { Redirect } from 'react-router-dom';
import tools from '../../tools/index.js';
import { App } from '../../Providers/Context.js';
import { Appointments } from '../../Providers/Account.js';
import useCustomHooks from '../../tools/useCustomHooks';
import AppointmentsList from './List.js';
import { AppointmentsSkeleton } from '../../components/Skeletons.js';

const Error = ({ error }) => <h1 className='error'>{error}</h1>;

const AppointmentsPage = () => {
  const { redirect } = useCustomHooks();

  const { error } = useContext(App);
  const appointments = useContext(Appointments);

  const [loading, setLoading] = useState(true);
  const [showPast, setShowPast] = useState(false);
  const [upcoming, setUpcoming] = useState([]);
  const [past, setPast] = useState([]);

  useEffect(() => {
    setLoading(true);
    let updated = [...appointments];
    updated.forEach((appointment) => (appointment.expanded = false));
    const sorted = tools.sortAppointments(updated);
    setUpcoming(sorted[0]);
    setPast(sorted[1]);
    setLoading(false);
  }, [appointments]);

  return redirect ? (
    <Redirect to='/gateway/appointments' />
  ) : (
    <>
      {error && <Error error={error} />}
      <div>
        <div className='appointments-tabs'>
          <div
            className={
              showPast ? 'appointments-tab' : 'appointments-tab-selected'
            }
            onClick={() => setShowPast(false)}
          >
            Upcoming
          </div>
          <div
            className={
              showPast ? 'appointments-tab-selected' : 'appointments-tab'
            }
            onClick={() => setShowPast(true)}
          >
            Past
          </div>
        </div>
        {loading ? (
          <AppointmentsSkeleton />
        ) : showPast ? (
          past.length === 0 ? (
            <h1>No past appointments.</h1>
          ) : (
            <AppointmentsList appointments={past} setAppointments={setPast} />
          )
        ) : upcoming.length === 0 ? (
          <h1>No upcoming appointments.</h1>
        ) : (
          <AppointmentsList
            appointments={upcoming}
            setAppointments={setUpcoming}
          />
        )}
      </div>
    </>
  );
};

export default AppointmentsPage;
