import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchQuestions } from '../redux/thunk/action';
import { resetScore, resetName } from '../redux/actions';
import style from './result.module.css';

const Result = ({ score, fetchQuestions, resetScore, resetName, name }) => (
  <div>
    <div className={style.text}>
      <h3>
        {name},you scored {score} / 10 correct answers!
      </h3>
      <h4>{score >= 7 ? 'You Won!!' : 'You Lost'}</h4>
    </div>
    <Link to='/'>
      <button
        className={style.button_true}
        onClick={(() => fetchQuestions(), () => resetScore())}
      >
        Play again!
      </button>
    </Link>
    <Link to='/login'>
      <button
        className={style.button_true}
        onClick={(() => fetchQuestions(), () => resetName())}
      >
        New game
      </button>
    </Link>
  </div>
);

const mapStateToProps = (state) => {
  return {
    name: state.user.name,
    score: Object.values(state.user.result).reduce(
      (acc, item) => acc + item,
      0
    ),
  };
};

const mapDispatchToProps = {
  fetchQuestions,
  resetScore,
  resetName,
};

export default connect(mapStateToProps, mapDispatchToProps)(Result);
