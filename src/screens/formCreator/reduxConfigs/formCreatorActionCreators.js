import {ADD_ENTRY, DELETE_ENTRY, SUBMIT_FORM} from './formCreatorTypes';

export const addEntry = (entry) => ({
  type: ADD_ENTRY,
  payload: entry,
});

export const deleteEntry = (entryId) => ({
  type: DELETE_ENTRY,
  payload: entryId,
});
