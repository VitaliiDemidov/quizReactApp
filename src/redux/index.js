import { ADD_NAME, RESEST_SCORE, ADD_RESULT, RESET_NAME } from './actions';
import { SET_QESTION } from './thunk/action';

const initialState = {};
export const nameReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NAME:
      return {
        ...state,
        name: action.payload,
      };
    case ADD_RESULT:
      return { ...state, result: { ...state.result, ...action.payload } };
    case RESET_NAME:
      return initialState;
    case RESEST_SCORE:
      return { ...state, result: {} };
    default:
      return state;
  }
};
export const quizReducer = (state = [], action) => {
  switch (action.type) {
    case SET_QESTION:
      return [...action.payload];
    default:
      return state;
  }
};
