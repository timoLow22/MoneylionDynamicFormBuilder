import {all, fork} from 'redux-saga/effects';

import formCreatorSagas from '../screens/formCreator/reduxConfigs/formCreatorSagas';

export default function* rootSaga() {
  yield all([formCreatorSagas()]);
}
