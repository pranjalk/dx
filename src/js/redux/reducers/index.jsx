import { combineReducers } from 'redux';
import search from './searchReducer.jsx';
import display from './displayReducer.jsx';
import cart from './cartReducer.jsx';

export default combineReducers({
  search,
  display,
  cart,
});
