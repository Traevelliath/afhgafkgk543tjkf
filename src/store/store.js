import { compose, createStore, applyMiddleware } from 'redux';
import { logger } from 'redux-logger/src';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/es/storage';
import { rootReducer } from './root-reducer';
import createSagaMiddleware from 'redux-saga';

import { rootSaga } from './root-saga';


const persistConfig = {
    key: 'root',
    storage,
    whitelist: [ 'cart' ]
};

const sagaMiddleware = createSagaMiddleware();

const composeEnhancer = (process.env.NOVE_ENV !== 'production' && window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__)
    || compose;

const middlewares = [ process.env.NODE_ENV !== 'production' && logger, sagaMiddleware ].filter(Boolean);

const persistedReducer = persistReducer(persistConfig, rootReducer);

const composedEnhancers = composeEnhancer(applyMiddleware(...middlewares));

export const store = createStore(persistedReducer, composedEnhancers);

export const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);
