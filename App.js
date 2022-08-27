import React from 'react';
import Route from './src/route';
import { Provider } from "react-redux";
import store, { persistor } from "./src/redux/store";
import { PersistGate } from 'redux-persist/integration/react';

export default App = () => (
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <Route />
        </PersistGate>
    </Provider>
)



