import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { rootReducer } from 'store/reducers';
import rootSaga from 'store/sagas';
import logger from 'redux-logger';

const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware();
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__();
  const enhancers = composeEnhancers(applyMiddleware(sagaMiddleware, logger));
  const store = createStore(rootReducer, enhancers);

  rootSaga.map(sagaMiddleware.run);
  return store;
};

const rootStore = configureStore();

export default rootStore;
