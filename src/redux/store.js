import { configureStore } from '@reduxjs/toolkit';
import { persistStore } from 'redux-persist';
import logger from 'redux-logger';

import rootReducer from './root-reducer';

const middlewares = [];

    middlewares.push(logger);

// Create the store using Redux Toolkit's configureStore
export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(middlewares),
});

// Create the persistor for persistence
export const persistor = persistStore(store);

export default { store, persistor };
