import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
// import createSagaMiddleware from 'redux-saga';
import rootReducer from './Reducers/rootReducer';
// import rootSaga from './Sagas/rootSaga';

/*const create = (): any => {
  const sagaMiddleware: any = createSagaMiddleware();
  const middleware: any = applyMiddleware(sagaMiddleware);
  const compose: any = composeWithDevTools(middleware);

  const storeCreator: any = createStore(rootReducer, compose);
  sagaMiddleware.run(rootSaga);

  return storeCreator;
};

const Store: any = create();*/

const Store: any = createStore(rootReducer);

export default Store;
