import { combineReducers } from 'redux';
import { nameReducer, quizReducer } from './index';

export const rootReducer = combineReducers({
  user: nameReducer,
  quiz: quizReducer,
});
