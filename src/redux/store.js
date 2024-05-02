import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import axios from 'axios';
import { takeEvery, put } from 'redux-saga/effects';

const sagaMiddleware = createSagaMiddleware();

function* fetchPlants() {
  try {
    const plants = yield axios.get('/api/plants');
    console.log(plants);
    yield put ({ type: 'ADD_PLANT', payload: plants.data });
  }
  catch(error) {
    console.log(error);
  }
}

function* postPlant(action) {
  try {
    yield axios.post('/api/plants', action.payload);
    yield put({ type: 'FETCH_PLANTS' });
  }
  catch(error) {
    console.log(error);
  }
}

function* rootSaga() {
  yield takeEvery('FETCH_PLANTS', fetchPlants);
  yield takeEvery('ADD_PLANT', postPlant);
}

const plantList = (state = [], action) => {
  switch (action.type) {
    case 'ADD_PLANT':
      return action.payload;
    default:
      return state;
  }
};

const store = createStore(
  combineReducers({ plantList }),
  applyMiddleware(sagaMiddleware, logger)
);

sagaMiddleware.run(rootSaga);

export default store;
