import {combineReducers} from 'redux';
import app, {State as App} from './app'

export interface RootState {
  app : App;
}
export default combineReducers({app});