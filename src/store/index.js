import { createStore, applyMiddleware, compose } from 'redux';
import { rootReducer } from './reducers';
import logger from 'redux-logger';

const configureStore = () => {
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__();
  const enhancers = composeEnhancers(applyMiddleware(logger));
  const store = createStore(rootReducer, composeEnhancers);

  return store;
};

const rootStore = configureStore();

export default rootStore;
