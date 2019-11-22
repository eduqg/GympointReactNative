import { combineReducers } from 'redux';

import checkin from './checkin/reducer';
import helporder from './helporder/reducer';

export default combineReducers({
  checkin,
  helporder,
});
