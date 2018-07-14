import reducer from '../reducers/reducer';
import { createStore } from 'redux';

const store= createStore(reducer, "Store");

 export default store;