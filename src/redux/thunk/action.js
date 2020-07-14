export const SET_QESTION = 'SET_QESTION';

export const fetchQuestions = () => {
  return async (dispatch) => {
    const response = await fetch(
      `https://opentdb.com/api.php?amount=10&category=9&difficulty=medium&type=boolean`
    );
    const json = await response.json();
    const results = json.results;
    dispatch({
      type: SET_QESTION,
      payload: results,
    });
  };
};
