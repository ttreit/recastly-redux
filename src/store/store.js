import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './../reducers/main.js';
import exampleVideoData from '../data/exampleVideoData.js';

var composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
var store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

export default store;

//DEVTOOLS\\

//to switch back to no devtools (so store test passes) Comment out the two lines below and uncomment line 20
//var store = createStore(rootReducer, applyMiddleware(thunk));



