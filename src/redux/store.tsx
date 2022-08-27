import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import AsyncStorage from "@react-native-async-storage/async-storage";
import rootReducer from "./rootReducer";
import * as rp from 'redux-persist'
import {
    FLUSH,
    PAUSE,
    PERSIST,
    persistReducer,
    persistStore,
    PURGE,
    REGISTER,
    REHYDRATE,
} from "redux-persist";

const persistConfig = {
    key: "root",
    version: 1,
    storage: AsyncStorage,
    blacklist: ["age"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [rp.FLUSH, rp.REHYDRATE, rp.PAUSE, rp.PERSIST, rp.PURGE, rp.REGISTER],
            },
        }),
});

export const persistor = persistStore(store);
export default store;
