import React from 'react';
import PropTypes from 'prop-types';
import ReactHtmlParser from 'react-html-parser';

import './index.css';

const TimePicker = ({ stem, question, value = '', setValue }) => {
  return (
    <section className="time-picker horizontal-padding">
      <div className="topContainer">
        {stem && <p className="timepicker-stem">{ReactHtmlParser(stem)}</p>}
        {question && <p className="timepicker-question">{ReactHtmlParser(question)}</p>}
      </div>
      <input
        type="time"
        className="timepicker-input"
        value={value}
        onChange={e => setValue(e.target.value)}
      />
    </section>
  );
};

TimePicker.propTypes = {
  stem: PropTypes.string,
  question: PropTypes.string,
  value: PropTypes.string,
  setValue: PropTypes.func.isRequired
};

export default TimePicker;
