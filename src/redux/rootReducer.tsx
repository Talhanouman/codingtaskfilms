import { combineReducers } from '@reduxjs/toolkit';
import CounterReducer from './counterSlice';

const rootReducer = combineReducers({
    CounterReducer,

})

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>