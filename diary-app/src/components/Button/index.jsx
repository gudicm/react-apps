import PropTypes from "prop-types";
import ReactHtmlParser from "react-html-parser";

import "./index.css";

const Button = ({ accent = false, disabled = false, onClick, text }) => {
  return (
    <button
      className={accent ? "accent" : ""}
      disabled={disabled}
      onClick={(e) => onClick(e)}
    >
      {ReactHtmlParser(text)}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  accent: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
};

export default Button;
