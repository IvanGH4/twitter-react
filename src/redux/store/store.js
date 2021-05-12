import { createStore, combineReducers } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import userReducer from "../reducers/userReducer";
import tweetReducer from "../reducers/tweetReducer";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  userReducer,
  tweetReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedReducer);
export const persistor = persistStore(store);
