import { useState, useEffect } from 'react';
import ReactHtmlParser from 'react-html-parser';
import PropTypes from 'prop-types';

import './index.css';

const BooleanQuestion = ({
  title,
  stem,
  question,
  buttonTrue,
  buttonFalse,
  skippable,
  disabled,
  handleButtonChange,
  selectionState,
  className
}) => {
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    if (typeof selectionState === 'boolean') {
      handleClick(selectionState);
    }
  }, [selectionState]);

  useEffect(() => {
    if (disabled) {
      setSelected(null);
    }
  }, [disabled]);

  const handleClick = bool => {
    setSelected(bool);
    handleButtonChange(bool);
  };

  return (
    <div
      className={`${disabled ? 'booleanQuestion disabled' : 'booleanQuestion'}${
        className ? ` ${className}` : ''
      }`}
    >
      <div className="left">
        <h3>{ReactHtmlParser(title)}</h3>
        <p>{ReactHtmlParser(stem)}</p>
        <p>{ReactHtmlParser(question)}</p>
      </div>
      <div className="right">
        <button
          disabled={disabled}
          className={selected !== null && selected == true ? 'buttonTrue selected' : 'buttonTrue'}
          onClick={() => {
            handleClick(true);
          }}
        >
          {ReactHtmlParser(buttonTrue)}
        </button>
        <button
          disabled={disabled}
          className={
            selected !== null && selected == false ? 'buttonFalse selected' : 'buttonFalse'
          }
          onClick={() => {
            handleClick(false);
          }}
        >
          {ReactHtmlParser(buttonFalse)}
        </button>
      </div>
    </div>
  );
};

BooleanQuestion.propTypes = {
  title: PropTypes.string,
  stem: PropTypes.string,
  question: PropTypes.string,
  buttonTrue: PropTypes.string.isRequired,
  buttonFalse: PropTypes.string.isRequired,
  skippable: PropTypes.bool,
  disabled: PropTypes.bool,
  handleButtonChange: PropTypes.func.isRequired,
  selectionState: PropTypes.bool,
  className: PropTypes.string
};

export default BooleanQuestion;
