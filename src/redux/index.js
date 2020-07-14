import { ADD_NAME, RESEST_SCORE, ADD_RESULT } from './actions';
import { SET_QESTION } from './thunk/action';

const initialState = {};
export const nameReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NAME:
      return {
        ...state,
        name: action.payload,
        points: 0,
      };
    case ADD_RESULT:
      return { ...state, result: { ...state.result, ...action.payload } };
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
