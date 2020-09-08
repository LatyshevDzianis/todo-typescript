import { combineReducers } from 'redux'

import todoReducer from './todo'
import {RootState} from '../types/todoState';

export default combineReducers<RootState>({
  todo: todoReducer,
});