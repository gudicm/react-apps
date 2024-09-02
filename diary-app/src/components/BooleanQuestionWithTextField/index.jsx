import { useState, useEffect } from "react";
import ReactHtmlParser from "react-html-parser";
import PropTypes from "prop-types";

import "./index.css";

const BooleanQuestionWithTextField = ({
  title,
  stem,
  question,
  buttonTrue,
  buttonFalse,
  label,
  skippable,
  disabled,
  textValue,
  handleTextChange,
  handleButtonChange,
  selectionState,
}) => {
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    if (typeof selectionState === "boolean") {
      handleClick(selectionState);
    }
  }, [selectionState]);

  useEffect(() => {
    if (disabled) {
      setSelected(null);
    }
  }, [disabled]);

  const handleClick = (bool) => {
    setSelected(bool);
    handleButtonChange(bool);
  };

  return (
    <div
      className={
        disabled
          ? "booleanQuestionWithTextField disabled"
          : "booleanQuestionWithTextField"
      }
    >
      <div className="left">
        <h3>{ReactHtmlParser(title)}</h3>
        <p>{ReactHtmlParser(stem)}</p>
        <p>{ReactHtmlParser(question)}</p>
        <form>
          <label htmlFor="explanation">{ReactHtmlParser(label)}</label>
          <textarea
            className={disabled || selected !== true ? "disabled" : ""}
            disabled={disabled || selected !== true}
            name="explanation"
            value={disabled || selected !== true ? "" : textValue}
            onChange={(e) => handleTextChange(e.target.value)}
          />
        </form>
      </div>
      <div className="right">
        <button
          disabled={disabled}
          className={
            selected !== null && selected == true
              ? "buttonTrue selected"
              : "buttonTrue"
          }
          onClick={() => {
            handleClick(true);
          }}
        >
          {ReactHtmlParser(buttonTrue)}
        </button>
        <button
          disabled={disabled}
          className={
            selected !== null && selected == false
              ? "buttonFalse selected"
              : "buttonFalse"
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

BooleanQuestionWithTextField.propTypes = {
  title: PropTypes.string.isRequired,
  stem: PropTypes.string,
  question: PropTypes.string,
  buttonTrue: PropTypes.string.isRequired,
  buttonFalse: PropTypes.string.isRequired,
  skippable: PropTypes.bool,
  disabled: PropTypes.bool,
  selectionState: PropTypes.bool,
  label: PropTypes.string.isRequired,
  textValue: PropTypes.string.isRequired,
  handleTextChange: PropTypes.func.isRequired,
  handleButtonChange: PropTypes.func.isRequired,
};

export default BooleanQuestionWithTextField;
