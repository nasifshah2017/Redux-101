// This is the root reducer!!
// It is the store manager for all reducers.

// To make a root reducer:
// 1. We need to get a method from Redux, called combineReducers.
// Each individual Reducers will get combined together into one 
// big store.
import { combineReducers } from 'redux';

// 2. Get each individual Reducer
import frozenReducer from './frozenReducer';
import produceReducer from './produceReducer';
import meatReducer from './meatReducer';

// 3. Call combineReducers and hand it an object.
// Each key in the combineReducers will be a piece of state 
// in the Redux store, and each value will be a reducer and
// that reducer will return a piece of state to the Redux store. 
const rootreducer = combineReducers({
    frozen: frozenReducer,   // Importing from frozenReducer.js
    produce: produceReducer,
    meat: meatReducer
})

export default rootreducer;