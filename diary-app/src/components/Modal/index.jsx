import NavigationButtons from '../NavigationButtons';
import PropTypes from 'prop-types';
import ReactHtmlParser from 'react-html-parser';

import './index.css';

const Modal = ({ title, text, backText, forwardText, backAction, forwardAction, className }) => {
  return (
    <section className={className ? `modal-container ${className}` : 'modal-container'}>
      <div className="modal-overlay"></div>
      <section className="modal">
        <h3>{ReactHtmlParser(title)}</h3>
        <p>{ReactHtmlParser(text)}</p>
        <NavigationButtons
          backwardFunc={backAction}
          forwardFunc={forwardAction}
          forwardText={forwardText}
          backwardText={backText}
        />
      </section>
    </section>
  );
};

Modal.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  forwardAction: PropTypes.func.isRequired,
  forwardText: PropTypes.string.isRequired,
  backAction: PropTypes.func.isRequired,
  backText: PropTypes.string.isRequired,
  className: PropTypes.string
};

export default Modal;
