import ReactHtmlParser from 'react-html-parser';
import DatePicker from '@cs/react-datepicker';
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { getDateValue } from '../../functions/dateUtils';

import './index.css';
import '@cs/react-datepicker/dist/react-datepicker.css';

const valueTypeOptions = {
  default: {
    valueTransform: date => date,
    showYearPicker: false,
    showMonthYearPicker: false,
    showTimeInput: false,
    showTimeSelect: false
  },
  yearOnly: {
    valueTransform: date => date.getFullYear(),
    showYearPicker: true,
    showMonthYearPicker: false,
    showTimeInput: false
  },
  monthYear: {
    valueTransform: date => date,
    showYearPicker: false,
    showMonthYearPicker: true,
    showTimeInput: false,
    showTimeSelect: false
  },
  dateTime: {
    valueTransform: date => date,
    showYearPicker: false,
    showMonthYearPicker: false,
    showTimeInput: true,
    showTimeSelect: false
  },
  dateTimeSelect: {
    valueTransform: date => date,
    showYearPicker: false,
    showMonthYearPicker: false,
    showTimeInput: false,
    showTimeSelect: true
  }
};

const DateSelector = ({
  title,
  stem,
  question,
  placeholderText,
  minDate,
  maxDate,
  value,
  updateValue,
  valueType = 'default',
  timeInputLabel = '',
  timeIntervals,
  timeCaption
}) => {
  const [dateValue, setDateValue] = useState();

  useEffect(() => {
    if (value) {
      setDateValue(
        valueType === 'yearOnly'
          ? new Date(value, 0, 1)
          : getDateValue(value, ['dateTime', 'dateTimeSelect'].includes(valueType))
      );
    }
  }, []);

  useEffect(() => {
    if (dateValue) {
      updateValue(valueTypeOptions[valueType].valueTransform(dateValue));
    } else {
      updateValue();
    }
  }, [dateValue]);

  const handleYearOnly = inputValue => {
    if (
      /^[1-9]\d{3}$/.test(inputValue) &&
      Number(inputValue) >= minDate.getFullYear() &&
      Number(inputValue) <= maxDate.getFullYear()
    ) {
      setDateValue(new Date(inputValue, 0, 1));
    } else {
      setDateValue();
    }
  };

  return (
    <section className="datePicker horizontal-padding">
      {title || stem || question ? (
        <div className="topContainer">
          {title ? <h3>{ReactHtmlParser(title)}</h3> : null}
          {stem ? <p>{ReactHtmlParser(stem)}</p> : null}
          {question ? <p>{ReactHtmlParser(question)}</p> : null}
        </div>
      ) : null}
      <div className="dateContainer">
        <DatePicker
          minDate={minDate}
          maxDate={maxDate}
          selected={dateValue}
          onChangeRaw={e => {
            // handle manual and yearOnly input
            if (e._reactName === 'onChange' && valueType === 'yearOnly') {
              handleYearOnly(e.target.value);
            }
          }}
          onChange={(date, e) => {
            // handle click and not yearOnly input
            if (
              valueType === 'dateTime' ||
              valueType === 'dateTimeSelect' ||
              e._reactName === 'onClick' ||
              valueType !== 'yearOnly'
            )
              setDateValue(date);
          }}
          placeholderText={ReactHtmlParser(placeholderText)}
          showYearPicker={valueTypeOptions[valueType].showYearPicker}
          showMonthYearPicker={valueTypeOptions[valueType].showMonthYearPicker}
          showTimeInput={valueTypeOptions[valueType].showTimeInput}
          timeInputLabel={timeInputLabel}
          showTimeSelect={valueTypeOptions[valueType].showTimeSelect}
          timeCaption={timeCaption}
          timeIntervals={timeIntervals}
        />
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAESSURBVHgB7ZTBUcMwEEW/1rqTDkgJpgNTQVwC3Bgu0dAASwEwOgSuSQnugNBB6IASzDUxFl8eDhmjGTyJb+QdPN6V9Hc12vkGPW7v9EoCchug3muNBM7pZCuYi8H74lGr/TXb32yAZeBna7BhuEoJNhkKw4IhIBaseud/OnOai8UktHiNcQAeRLBOCeILJYvOOwHBZdugfvG66eIbp9PMYEnpAkfAzj5siwubCUrGBY6EN5o2Aif8yzESFD23ifyKC28YxoxXLfcTvwSfn/QaA+H4VDv5Q5BzeM/XHdThrsWsn0vNoXJ0DkYwMifBfyHIuasxEvTIz2gOFUaCLu87g42eaA0cTfMMBxA7i40tvK6/ATdqT2ODjmo2AAAAAElFTkSuQmCC"
          onClick={() => document.querySelector('.react-datepicker-wrapper input').click()}
        />
      </div>
    </section>
  );
};

export default DateSelector;

DateSelector.propTypes = {
  title: PropTypes.string,
  stem: PropTypes.string,
  question: PropTypes.string,
  placeholderText: PropTypes.string,
  minDate: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.instanceOf(Date)]),
  maxDate: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.instanceOf(Date)]),
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.instanceOf(Date)]),
  updateValue: PropTypes.func.isRequired,
  valueType: PropTypes.string,
  timeInputLabel: PropTypes.string,
  timeIntervals: PropTypes.number,
  timeCaption: PropTypes.string
};
