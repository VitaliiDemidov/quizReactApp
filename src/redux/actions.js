export const ADD_NAME = 'ADD_NAME';
export const RESEST_SCORE = 'RESEST_SCORE';
export const ADD_RESULT = 'ADD_RESULT';
export const RESET_NAME = 'RESET_NAME';

export const addName = (payload) => ({
  type: ADD_NAME,
  payload,
});
export const resetScore = () => ({
  type: RESEST_SCORE,
});
export const addResult = (payload) => ({
  type: ADD_RESULT,
  payload,
});
export const resetName = () => ({
  type: RESET_NAME,
});
