import React from 'react';
import { Button, Input } from '../../components';
import { ReactComponent as EditIcon } from '../../icons/PencilLine.svg';

export const PreviewText = ({ state, title }) => {
  return (
    <div className='item-text'>
      {!state.edit && (
        <>
          <h2>{title}</h2>
          <p className='light'>{state.preview}</p>{' '}
        </>
      )}
      {state.userError && <p className='error'>{state.userError}</p>}
    </div>
  );
};

export const CancelBtnOrEmpty = ({ state, cancel }) => {
  return state.edit ? (
    <Button onClick={cancel} label='Cancel' size='small' />
  ) : (
    <div></div>
  );
};

// the entire containing div handles the onClick
export const SaveOrEditBtns = ({ state }) => {
  return (
    <Button
      size='small'
      addClass={state.edit ? '' : 'b-none'}
      label={state.edit ? 'save' : <EditIcon className='icon' />}
    />
  );
};

export const Inputs = ({ fields, state, handleInput, handleKeyDown }) => {
  return (
    <form className='item-inputs'>
      {fields.map((field) => {
        return (
          <div
            className='account-input'
            key={field + '-div'}
            onKeyDown={handleKeyDown}
          >
            <Input
              field={field}
              value={state.input[field]}
              onChange={(e) => handleInput(e, field)}
            />
          </div>
        );
      })}
    </form>
  );
};
