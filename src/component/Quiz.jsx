import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addResult } from '../redux/actions';
import { useHistory } from 'react-router-dom';

const Quiz = ({ name, quiz, addResult }) => {
  const history = useHistory();
  const [index, setIndex] = useState(0);
  let currentQuestion = quiz[index].question;
  let currentAnswer = quiz[index].correct_answer;

  const heandleClick = (e) => {
    const result = e.target.value;
    if (result === currentAnswer && quiz.length === index + 1) {
      setIndex(index + 1);
      history.push('/result');
    } else if (result !== currentAnswer && quiz.length === index + 1) {
      history.push('/result');
    } else {
      setIndex(index + 1);
    }
    const obj = {
      [index]: result === currentAnswer ? 1 : 0,
    };

    return addResult(obj);
  };

  const activeNext = quiz.length - 1 === index;
  const activePrev = index === 0;
  return (
    <div>
      <h2 className='App-link'>
        <small>Hello,</small> {name}!
      </h2>
      <span>
        question {index + 1} from {quiz.length}
      </span>
      <div>
        <h3 className='text'>{currentQuestion}</h3>
        <h5>Is it True or False?</h5>
      </div>
      <div className='buttons'>
        <div className='rows'>
          <button
            className='button-prev'
            disabled={activePrev}
            onClick={() => setIndex(index - 1)}
          >
            {`<<`}
          </button>
          <button
            className='button-next'
            disabled={activeNext}
            onClick={() => setIndex(index + 1)}
          >
            {`>>`}
          </button>
        </div>
        <div className='rows'>
          <button className='button-true' onClick={heandleClick} value='True'>
            TRUE
          </button>
          <button className='button-false' onClick={heandleClick} value='False'>
            FALSE
          </button>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    name: state.user.name,
    quiz: state.quiz,
  };
};

const mapDispatchToProps = {
  addResult,
};

export default connect(mapStateToProps, mapDispatchToProps)(Quiz);
