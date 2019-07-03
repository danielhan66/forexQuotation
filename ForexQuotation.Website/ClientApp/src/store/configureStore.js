import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga'
import { routerReducer, routerMiddleware } from 'react-router-redux';
import reducers from '../reducers'
import rootSaga from '../sagas'

export default function configureStore (history, initialState) {
  console.log("configureStore..............");
  // create the saga middleware
  const sagaMiddleware = createSagaMiddleware();

  const middleware = [
    sagaMiddleware,
    routerMiddleware(history)
  ];

  // In development, use the browser's Redux dev tools extension if installed
  const enhancers = [];
  const isDevelopment = process.env.NODE_ENV === 'development';
  if (isDevelopment && typeof window !== 'undefined' && window.devToolsExtension) {
    enhancers.push(window.devToolsExtension());
  }

  console.log("enhancers......", enhancers);

  const rootReducer = combineReducers({
    ...reducers,
    routing: routerReducer
  });

  console.log("reducer.....");
  console.log(rootSaga);

  const store = createStore(
    rootReducer,
    initialState,
    compose(applyMiddleware(...middleware), ...enhancers)
  );

  sagaMiddleware.run(rootSaga)

  return store;
}
