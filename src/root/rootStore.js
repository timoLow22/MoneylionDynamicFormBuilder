import {createStore, combineReducers, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './rootReducers';
import formCreatorReducer from '../screens/formCreator/reduxConfigs/formCreatorReducers';
import rootSaga from './rootSagas';

const sagaMiddleware = createSagaMiddleware();

export const rootStore = createStore(
  combineReducers({
    formCreatorReducer,
  }),
  applyMiddleware(sagaMiddleware),
);

sagaMiddleware.run(rootSaga);

export const action = (type) => rootStore.dispatch({type});
