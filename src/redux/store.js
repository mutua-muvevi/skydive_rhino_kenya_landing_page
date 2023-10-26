import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';

import { useDispatch as useAppDispatch, useSelector as useAppSelector } from 'react-redux';

import { persistStore } from 'redux-persist';

import persistedReducer from './rootreducer';

const middlewares = [ thunk];

if (process.env.NODE_ENV === `development`) {
	const { logger } = require(`redux-logger`);
	middlewares.push(logger);
}


export const useSelector = useAppSelector;

export const useDispatch = () => useAppDispatch();

export const store = createStore(
	persistedReducer,
	applyMiddleware(...middlewares)
);

export const persistor = persistStore(store);