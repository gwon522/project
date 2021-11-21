import { createStore, applyMiddleware } from 'redux';
import { cretaeSagaMiddleware } from 'redux-saga'
import { logger } from 'react-logger'
import { composeWithDevTools } from 'react-devtools'
import rootReducer from './modules/index'
import rootSaga from './sagas/index'

export default function configureStore() {
    // const sagaMiddleware = cretaeSagaMiddleware();
    // const middlewares = [sagaMiddleware, logger];
    const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(logger)),);
    // sagaMiddleware.run(rootSaga);

    return store;
}