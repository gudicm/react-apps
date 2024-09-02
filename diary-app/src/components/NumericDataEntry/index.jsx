import React, { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';
import ReactHtmlParser from 'react-html-parser';

import './index.css';

const NumericDataEntry = ({
  title,
  stem,
  question,
  minInput = 0,
  maxInput = Infinity,
  label,
  allowDecimal = false,
  allowNegative = false,
  numberOfDecimalPlaces = 2,
  showErrorMessage = false,
  errorMessageText = '',
  value,
  setValue
}) => {
  const [errorMessage, setErrorMessage] = useState(null);
  const [inputValue, setInputValue] = useState('');
  const [isEntering, setIsEntering] = useState(false);
  const inputRef = useRef();

  useEffect(() => {
    setInputValue(!value && value !== 0 ? '' : value);
  }, []);

  const handleFocus = () => {
    const { value } = inputRef.current;
    inputRef.current.setSelectionRange(value.length, value.length);
  };

  const handleBlur = () => {
    if (value && value.endsWith('.')) {
      setValue(value.slice(0, -1));
    }
  };

  const handleKeyDown = e => {
    const { selectionStart, selectionEnd, value } = inputRef.current;
    const selectionLength = selectionEnd - selectionStart;
    if (
      e.key === '0' &&
      value.length &&
      selectionLength === 0 &&
      (selectionStart === 0 || (selectionStart === 1 && value.startsWith('-')))
    ) {
      e.preventDefault();
      inputRef.current.setSelectionRange(value.length, value.length);
    } else if (e.key === 'Enter' || e.keyCode === 13) {
      e.target.blur();
    }
  };

  const handleInput = value => {
    const replacedValue = value.replace(/[^0-9]/g, '');
    const parsedValue = parseInt(replacedValue);
    const min = String(minInput);
    const max = String(maxInput);
    const minSliced = parseInt(min.slice(0, value.length));
    const maxSliced = parseInt(max.slice(0, value.length));
    const limitCheck =
      min.length === max.length
        ? parsedValue >= minSliced && parsedValue <= maxSliced
        : parsedValue <= maxInput;

    if (!showErrorMessage) {
      if (value.startsWith('0') && (value.length > 1 || minInput > 0)) {
        return;
      } else if (!value) {
        setValue('');
        setIsEntering(false);
      } else if (limitCheck) {
        if (parsedValue >= minInput) {
          setValue(String(parsedValue));
          setIsEntering(false);
        } else {
          setValue('');
          setInputValue(replacedValue);
          setIsEntering(true);
        }
      }
    } else {
      let newErrorMessage = null;
      setInputValue(replacedValue);
      if (value === '' || Number.isNaN(parsedValue)) {
        setValue(undefined);
      } else if (parsedValue < minInput || parsedValue > maxInput) {
        newErrorMessage = errorMessageText;
        setValue(undefined);
      } else {
        setValue(String(parsedValue));
      }
      setErrorMessage(newErrorMessage);
    }
  };

  const isValidForDecimalInput = (charC, elValue) => {
    if (charC == 46) {
      if (elValue.indexOf('.') === elValue.length - 1) {
        return true;
      } else {
        return false;
      }
    } else {
      if (charC > 31 && (charC < 48 || charC > 57)) return false;
    }
    return true;
  };

  const checkDecimalPlaces = elValue => {
    if (elValue.indexOf('.')) {
      const decimals = elValue.split('.')[1];
      return !decimals || decimals.length <= numberOfDecimalPlaces;
    }
    return true;
  };

  const handleDecimalInput = value => {
    if (value && value.length) {
      const characterCode = value.charCodeAt(value.length - 1);
      const newValue = value.slice(0, -1);
      if (!isValidForDecimalInput(characterCode, value)) {
        showErrorMessage ? setInputValue(newValue) : setValue(newValue);
        return;
      }

      if (!checkDecimalPlaces(value)) {
        showErrorMessage ? setInputValue(newValue) : setValue(newValue);
        return;
      }
    }

    const parsedValue = parseFloat(value);
    if (!showErrorMessage) {
      const isEmptyOrWithinBoundaries =
        value === '' || (parsedValue >= minInput && parsedValue <= maxInput);
      if (isEmptyOrWithinBoundaries) {
        setValue(value);
      }
    } else {
      let newErrorMessage = null;
      setInputValue(value);
      if (value === '' || Number.isNaN(parsedValue)) {
        setValue(undefined);
      } else if (parsedValue < minInput || parsedValue > maxInput) {
        newErrorMessage = errorMessageText;
        setValue(undefined);
      } else {
        setValue(value);
      }
      setErrorMessage(newErrorMessage);
    }
  };

  const handleNegativeInput = value => {
    let replacedValue = value.replace(/[^\d-]|(?!^)-/g, '');
    replacedValue =
      replacedValue.charAt(0) === '-'
        ? '-' + replacedValue.slice(1).replace('-', '')
        : replacedValue.replace('-', '');
    replacedValue = replacedValue.replace(/^0+([0-9])/, '0');
    replacedValue = replacedValue === '-0' ? '-' : replacedValue;

    const parsedValue = parseInt(replacedValue);
    if (!Number.isNaN(parsedValue) && (parsedValue < minInput || parsedValue > maxInput)) {
      setErrorMessage(errorMessageText);
    } else {
      setValue(replacedValue);
      setErrorMessage(null);
    }
  };

  const handleNegativeDecimalInput = value => {
    let replacedValue = value.replace(/[^\d-.]|(?!^)-|(\.)(?=\.)/g, '');
    replacedValue =
      replacedValue.charAt(0) === '-'
        ? '-' + replacedValue.slice(1).replace('-', '')
        : replacedValue.replace('-', '');
    const firstDotIndex = replacedValue.indexOf('.');
    replacedValue =
      firstDotIndex !== -1
        ? replacedValue.slice(0, firstDotIndex + 1) +
          replacedValue.slice(firstDotIndex + 1).replace('.', '')
        : replacedValue;

    if (replacedValue === '0' && replacedValue.length > 1) {
      replacedValue = replacedValue.slice(0, 1);
    }
    if (
      replacedValue.startsWith('-0') &&
      replacedValue.length > 2 &&
      replacedValue.charAt(2) !== '.'
    ) {
      replacedValue = replacedValue.slice(0, 2);
    }

    const decimalNumberParts = replacedValue.split('.');
    if (decimalNumberParts.length > 1) {
      decimalNumberParts[1] = decimalNumberParts[1].slice(0, numberOfDecimalPlaces);
      replacedValue = decimalNumberParts.join('.');
    }

    const parsedValue = parseFloat(replacedValue);
    if (!Number.isNaN(parsedValue) && (parsedValue < minInput || parsedValue > maxInput)) {
      setErrorMessage(errorMessageText);
    } else {
      setValue(replacedValue);
      setErrorMessage(null);
    }
  };

  const positiveIntegersIncludingZero = !allowDecimal && !allowNegative;
  const positiveDecimalsIncludingZero = allowDecimal && !allowNegative;
  const integers = !allowDecimal && allowNegative;
  const realNumbers = allowDecimal && allowNegative;

  return (
    <section className="numericDataEntry">
      {title ? <h2>{ReactHtmlParser(title)}</h2> : null}
      {stem ? <p>{ReactHtmlParser(stem)}</p> : null}
      {question ? <p>{ReactHtmlParser(question)}</p> : null}
      <div className="inputContainer">
        {positiveIntegersIncludingZero && (
          <input
            type="text"
            inputMode="numeric"
            pattern="[0-9]*"
            value={showErrorMessage || isEntering ? inputValue : !value && value !== 0 ? '' : value}
            onInput={e => handleInput(e.target.value)}
            onKeyDown={handleKeyDown}
            onFocus={handleFocus}
            ref={inputRef}
            autoComplete="off"
          />
        )}
        {positiveDecimalsIncludingZero && (
          <input
            type="text"
            inputMode="decimal"
            pattern={`^\\d*(\\.\\d{0,${numberOfDecimalPlaces}})?$`}
            value={showErrorMessage ? inputValue : !value && value !== 0 ? '' : value}
            onInput={e => handleDecimalInput(e.target.value)}
            onKeyDown={handleKeyDown}
            onFocus={handleFocus}
            onBlur={handleBlur}
            ref={inputRef}
            autoComplete="off"
          />
        )}
        {integers && (
          <input
            type="text"
            inputMode="numeric"
            pattern="-?[0-9]*"
            value={value || ''}
            onInput={e => handleNegativeInput(e.target.value)}
            onKeyDown={handleKeyDown}
            onFocus={handleFocus}
            ref={inputRef}
            autoComplete="off"
          />
        )}
        {realNumbers && (
          <input
            type="text"
            inputMode="decimal"
            pattern={`-?\\d*(\\.\\d{0,${numberOfDecimalPlaces}})?$`}
            value={value || ''}
            onInput={e => handleNegativeDecimalInput(e.target.value)}
            onKeyDown={handleKeyDown}
            onFocus={handleFocus}
            onBlur={handleBlur}
            ref={inputRef}
            autoComplete="off"
          />
        )}
        <label>{label}</label>
        <div className="numericDataEntry-warning-text">{errorMessage}</div>
      </div>
    </section>
  );
};

NumericDataEntry.propTypes = {
  title: PropTypes.string,
  stem: PropTypes.string,
  question: PropTypes.string,
  minInput: PropTypes.number,
  maxInput: PropTypes.number,
  label: PropTypes.string,
  allowDecimal: PropTypes.bool,
  allowNegative: PropTypes.bool,
  numberOfDecimalPlaces: PropTypes.number,
  showErrorMessage: PropTypes.bool,
  errorMessageText: PropTypes.string,
  value: PropTypes.string,
  setValue: PropTypes.func.isRequired
};

export default NumericDataEntry;
