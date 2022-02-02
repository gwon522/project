import { createStore, applyMiddleware } from 'redux';
import cretaeSagaMiddleware from 'redux-saga';
import { logger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import { rootReducer } from './modules/index';
import rootSaga from './sagas/index';


export default function configureStore() {
    const sagaMiddleware = cretaeSagaMiddleware();
    const middlewares = [sagaMiddleware, logger];
    const store = createStore(
        rootReducer,
        composeWithDevTools(applyMiddleware(...middlewares)),
    );
    sagaMiddleware.run(rootSaga);

    return store;
}
