import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { addName } from '../redux/actions';
import { useHistory } from 'react-router-dom';
import { fetchQuestions } from '../redux/thunk/action';

const Login = ({ addName, fetchQuestions }) => {
  useEffect(() => {
    fetchQuestions();
  }, [fetchQuestions]);
  const [name, setName] = useState('');
  let history = useHistory();

  const activeButton = name.trim() ? false : true;

  const heandleSubmit = (e) => {
    e.preventDefault();

    addName(name);
    history.push('/');
  };
  return (
    <>
      <h1>Welcome!</h1>
      <p className='gray'>Enter your name</p>
      <form>
        <input
          placeholder='Name'
          type='text'
          onChange={(e) => setName(e.target.value)}
        />

        <button disabled={activeButton} onClick={heandleSubmit} type='submit'>
          Start
        </button>
      </form>
    </>
  );
};

const mapDispatchToProps = {
  addName,
  fetchQuestions,
};

export default connect(null, mapDispatchToProps)(Login);
