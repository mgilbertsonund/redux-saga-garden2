import axios from 'axios';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { put, takeEvery } from 'redux-saga/effects';
const sagaMiddleware = createSagaMiddleware();
function* fetchPlants() {
  try {
    const plants = yield axios.get('/api/plants');
    console.log(plants);
    yield put({ type: 'SET_PLANTS', payload: plants.data });
  } catch (error) {
    console.log(error);
  }
}
function* postPlant(action) {
  try {
    yield axios.post('/api/plants', action.payload);
    yield put({ type: 'FETCH_PLANTS' });
  } catch (error) {
    console.log(error);
  }
}
function* deletePlant(action) {
  const plantId = action.payload.id;
  try {
    yield axios.delete(`/api/plants/${plantId}`);
  } catch (error) {
    console.log(error);
  }
}
function* rootSaga() {
  yield takeEvery('FETCH_PLANTS', fetchPlants);
  yield takeEvery('ADD_PLANT', postPlant);
  yield takeEvery('DELETE_PLANT', deletePlant);
}
const plantList = (state = [], action) => {
  switch (action.type) {
    case 'SET_PLANTS':
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
