import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ReactHtmlParser from 'react-html-parser';

import './index.css';

const MultipleChoiceQuestion = ({
  note,
  stem,
  question,
  answers,
  copyright,
  style,
  allowMultiple = false,
  allowAnswerToggle = false,
  skippable = false,
  isBoolean = false,
  value,
  setValue
}) => {
  const [answerList, setAnswerList] = useState([]);

  useEffect(() => {
    setAnswerList(
      answers.map(ans => ({
        text: ans,
        selected:
          (typeof value === 'boolean' && !Boolean(answers.indexOf(ans)) === value) ||
          (!isBoolean &&
            ((value && value.includes(ans)) ||
              (value && value.includes(answers.indexOf(ans))) ||
              (value && value.includes(String(answers.indexOf(ans)))))) // backwards compatible, matches text or index
      }))
    );

    if (skippable && !value) {
      // default the value to array [null]
      // a value is required for prop validation and enabling the button
      // you need to handle the condition of a skipped question elsewhere
      setValue([null]);
    }
  }, [value]);

  const handleSelect = target => {
    if (allowMultiple) {
      const list = answerList.map(ans => ({
        text: ans.text,
        selected: target === ans.text ? !ans.selected : ans.selected
      }));

      setAnswerList(list);
      setValue(list.filter(ans => ans.selected).map(ans => ans.text));
    } else {
      const list = answerList.map(ans => ({
        text: ans.text,
        selected: target === ans.text
      }));

      setAnswerList(list);
      setValue([target]);
    }
  };

  return (
    <>
      <div className="mcq">
        {note ? <p className="note">{ReactHtmlParser(note)}</p> : null}
        {stem ? <p className="stem">{ReactHtmlParser(stem)}</p> : null}
        <p className="question">{ReactHtmlParser(question)}</p>
        <ul style={{ listStyle: style || 'disc' }}>
          {answerList.map((answer, idx) => {
            let isSelected = false;

            if (Array.isArray(value)) {
              isSelected = value.includes(answer.text);
            } else if (value === Object(value)) {
              isSelected = Object.values(value).flat().includes(answer.text);
            }

            return (
              <Question
                key={idx}
                text={answer.text}
                handleSelect={handleSelect}
                selected={allowAnswerToggle ? isSelected : isSelected || answer.selected}
              />
            );
          })}
        </ul>
      </div>
      {copyright ? (
        <p className="mcq-copyright horizontal-padding">{ReactHtmlParser(copyright)}</p>
      ) : null}
    </>
  );
};

MultipleChoiceQuestion.propTypes = {
  note: PropTypes.string,
  stem: PropTypes.string,
  question: PropTypes.string.isRequired,
  answers: PropTypes.arrayOf(PropTypes.string).isRequired,
  copyright: PropTypes.string,
  style: PropTypes.oneOf(['none', 'disc', 'circle', 'square', 'decimal']),
  allowMultiple: PropTypes.bool,
  skippable: PropTypes.bool,
  isBoolean: PropTypes.bool,
  value: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
  setValue: PropTypes.func.isRequired
};

export default MultipleChoiceQuestion;

const Question = ({ text, selected, handleSelect }) => {
  return (
    <li
      onClick={() => handleSelect(text)}
      className={selected ? 'mcq-answer selected' : 'mcq-answer'}
    >
      <span className="mcq-answer-text">{ReactHtmlParser(text)}</span>
    </li>
  );
};
