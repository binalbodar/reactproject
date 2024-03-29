import { applyMiddleware, createStore } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import thunk from 'redux-thunk';
import { rootReducer } from './Reduser';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ["Product", "Cart", "addtocart", "auth", "Cartform"]
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const configurStore = () => {
  let store = createStore(persistedReducer, applyMiddleware(thunk))
  return store
}

export const store = configurStore();

export let persistor = persistStore(store)