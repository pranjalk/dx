import { combineReducers } from 'redux';
import search from './searchReducer.jsx';
import display from './displayReducer.jsx';

export default combineReducers({
  search,
  display,
});
