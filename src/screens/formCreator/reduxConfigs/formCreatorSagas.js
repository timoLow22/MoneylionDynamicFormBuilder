import {all, put, takeLatest} from 'redux-saga/effects';
import {push} from '../../../navigator/navigationServices';

export default function* formCreatorSagas() {
  yield all([watchAddEntry(), watchDeleteEntry()]);
}

//watcher functions here
function* watchAddEntry() {
  yield takeLatest('ADD_ENTRY', updateEntries, ...arguments);
}

function* watchDeleteEntry() {
  yield takeLatest('DELETE_ENTRY', removeEntry, ...arguments);
}
//end watcher functions

function* updateEntries(props) {
  yield put({
    type: 'UPDATE_ENTRIES',
    value: props.payload,
  });
}

function* removeEntry(props) {
  yield put({
    type: 'REMOVE_ENTRY',
    value: props.payload,
  });
}
