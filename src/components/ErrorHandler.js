import React from 'react';
import { Page } from '.';

export default function ErrorHandler() {
  const errors = [];
  for (let [k, v] of Object.entries(localStorage)) {
    errors.push([k, v]);
  }

  function clearStorage() {
    localStorage.clear();
    sessionStorage.clear();
  }

  function reload() {
    window.location.href = '/';
  }

  return (
    <Page id='error-page'>
      <button onClick={clearStorage}>Clear Storage</button>
      <button onClick={reload}>Reload</button>
      {errors.map((error, i) => (
        <div key={`error-${i}`}>
          <h1>{error[0]}</h1>
          <p>{error[1]}</p>
        </div>
      ))}
    </Page>
  );
}
