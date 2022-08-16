import {createStore} from 'redux';
import reducer from './Reducers/userReducer';

const store = createStore(reducer);

export default store;