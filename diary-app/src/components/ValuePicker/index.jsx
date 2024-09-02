import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import Dropdown from 'react-dropdown';
import ReactHtmlParser from 'react-html-parser';
import 'react-dropdown/style.css';

import './index.css';

const ValuePicker = ({ stem, question, unit, placeholder, value, setValue, options, inline }) => {
  const [selectedOption, setSelectedOption] = useState([]);

  useEffect(() => {
    setSelectedOption(!value ? '' : { text: value, label: value });
  }, [value]);

  const handleOptionSelect = option => {
    setSelectedOption(option);
    setValue(option.value);
  };

  const valuePickerDropdown = (
    <div className="value-picker-dropdown">
      <Dropdown
        className="value-picker-header"
        controlClassName="value-picker-control"
        menuClassName="value-picker-menu"
        arrowClassName="value-picker-arrow"
        placeholderClassName="value-picker-placeholder"
        options={options}
        onChange={handleOptionSelect}
        value={selectedOption}
        placeholder={placeholder}
      />
      {unit ? <div className="value-picker-unit">{ReactHtmlParser(unit)}</div> : null}
    </div>
  );

  return (
    <section className="value-picker horizontal-padding">
      {stem ? <div className="stem">{ReactHtmlParser(stem)}</div> : null}
      {question ? (
        <div className={inline ? 'question inline' : 'question'}>
          {ReactHtmlParser(question)}&nbsp;
          {inline ? valuePickerDropdown : null}
        </div>
      ) : null}
      {!inline && valuePickerDropdown}
    </section>
  );
};

ValuePicker.propTypes = {
  stem: PropTypes.string,
  question: PropTypes.string,
  unit: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  setValue: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  inline: PropTypes.bool
};

export default ValuePicker;
