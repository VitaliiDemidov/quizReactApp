import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchQuestions } from '../redux/thunk/action';
import { resetScore } from '../redux/actions';

const Result = ({ score, fetchQuestions, resetScore, name }) => (
  <div className='score-card'>
    <div className='score'>
      {name},you scored {score} / 10 correct answers!
      {score >= 7 ? 'You Won!!' : 'You Lost'}
    </div>
    <Link to='/'>
      <button
        className='playBtn'
        onClick={(() => fetchQuestions(), () => resetScore())}
      >
        Play again!
      </button>
    </Link>
    <Link to='/login'>
      <button className='playBtn' onClick={() => fetchQuestions()}>
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
};

export default connect(mapStateToProps, mapDispatchToProps)(Result);
