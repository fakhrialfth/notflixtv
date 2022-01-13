import { createStore } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

import userReducer from './reducer'

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, userReducer);

if (module.hot) {
  module.hot.accept('./reducer', () => {
    // This fetch the new state of the above reducers.
    const nextRootReducer = require('./reducer').default
    store.replaceReducer(
      persistReducer(persistConfig, nextRootReducer)
    )
  })
}
const store = createStore(persistedReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
const persistor = persistStore(store);

export { store, persistor };
