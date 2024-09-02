import { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import ReactHtmlParser from 'react-html-parser';

import './index.css';

const NumericScale = ({
  minNumber,
  maxNumber,
  stem,
  question,
  setValue,
  value,
  anchors,
  showAnchors = true,
  showAnchorArrows = true,
  anchorsAbove = false,
  increment = 1,
  symbol = '',
  descendingNumbers = false,
  showFirstDecimal = false,
  easternArabicNumerals = false,
  children
}) => {
  const [options, setOptions] = useState([]);
  const ref = useRef(null);
  const easternArabicNumeralList = ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩'];

  const convertToEasternArabicNumeral = numberString => {
    let easternArabicNumeral = '';

    for (let i = 0; i < numberString.length; i++) {
      const char = numberString.charAt(i);
      if (char >= '0' && char <= '9') {
        easternArabicNumeral += easternArabicNumeralList[parseInt(char)];
      } else {
        easternArabicNumeral += char;
      }
    }

    return easternArabicNumeral;
  };

  function convertFromEasternArabicNumeral(easternArabicNumeral) {
    let numberString = '';

    for (let i = 0; i < easternArabicNumeral.length; i++) {
      const char = easternArabicNumeral.charAt(i);
      const numeralIndex = easternArabicNumeralList.indexOf(char);
      if (numeralIndex !== -1) {
        numberString += numeralIndex.toString();
      } else {
        numberString += char;
      }
    }

    return numberString;
  }

  const buildOptionsList = target => {
    let optionsList = [];
    for (let i = minNumber; i <= maxNumber; i += increment) {
      const numberString =
        showFirstDecimal && i > minNumber && i < maxNumber ? i.toFixed(1) : i.toString();
      const text = easternArabicNumerals
        ? convertToEasternArabicNumeral(numberString)
        : numberString;

      optionsList.push({
        text,
        selected: text === target
      });
    }

    setOptions(descendingNumbers ? optionsList.reverse() : optionsList);
  };

  useEffect(() => {
    buildOptionsList();
  }, []);

  const handleSelect = target => {
    buildOptionsList(target);
    setValue(parseFloat(easternArabicNumerals ? convertFromEasternArabicNumeral(target) : target));
  };

  return (
    <section
      className={`numeric-scale${anchorsAbove ? ' anchors-above' : ''}${
        document.body.dir === 'rtl' ? ' rtl' : ''
      }`}
      style={{
        '--nrsElements': options.length,
        '--anchorsLength': Object.keys(anchors).length
      }}
    >
      {stem ? <p className="stem">{ReactHtmlParser(stem)}</p> : null}
      <p className="question">{ReactHtmlParser(question)}</p>
      <div className="scale-options" ref={ref}>
        {options.map((opt, idx) => {
          let className = 'ns-option';

          if (opt.selected || value == opt.text) {
            className += ' selected';
          }

          if (showAnchors && anchors && anchors[idx]) {
            className += ' hasAnchor';
            if (showAnchorArrows) className += ' showAnchorArrows';

            if (idx == 0) {
              className += ' firstAnchor';
            } else if (idx == options.length - 1) {
              className += ' lastAnchor';
            }
          }

          return (
            <div key={opt.text} className="options-group">
              <button className={className} onClick={e => handleSelect(e.target.textContent)}>
                {opt.text + symbol}
              </button>
              {showAnchors && anchors && anchors[idx] ? (
                <p className="anchor">{ReactHtmlParser(anchors[idx])}</p>
              ) : null}
            </div>
          );
        })}
      </div>
      {children ? <div className="nrs-children">{children}</div> : null}
    </section>
  );
};

NumericScale.propTypes = {
  minNumber: PropTypes.number.isRequired,
  maxNumber: PropTypes.number.isRequired,
  stem: PropTypes.string,
  question: PropTypes.string.isRequired,
  setValue: PropTypes.func.isRequired,
  value: PropTypes.number,
  anchors: PropTypes.object,
  showAnchors: PropTypes.bool,
  showAnchorArrows: PropTypes.bool,
  anchorsAbove: PropTypes.bool,
  increment: PropTypes.number,
  symbol: PropTypes.string,
  descendingNumbers: PropTypes.bool,
  showFirstDecimal: PropTypes.bool,
  easternArabicNumerals: PropTypes.bool
};

export default NumericScale;
