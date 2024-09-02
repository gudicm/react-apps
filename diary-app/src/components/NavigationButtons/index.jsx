import PropTypes from 'prop-types';
import Button from '../Button';

import './index.css';

const NavigationButtons = ({ backwardFunc, forwardFunc, backwardText, forwardText, disabled }) => {
  return (
    <section className="navigation-buttons">
      {backwardText && <Button text={backwardText} onClick={backwardFunc} />}
      <Button text={forwardText} onClick={forwardFunc} accent={true} disabled={disabled} />
    </section>
  );
};

NavigationButtons.propTypes = {
  backwardText: PropTypes.string,
  backwardFunc: PropTypes.func,
  forwardText: PropTypes.string.isRequired,
  forwardFunc: PropTypes.func.isRequired,
  disabled: PropTypes.bool
};

export default NavigationButtons;
