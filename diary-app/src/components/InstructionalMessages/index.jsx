import PropTypes from 'prop-types';
import ReactHtmlParser from 'react-html-parser';

import './index.css';

const InstructionalMessages = ({ messages }) => {
  return messages && messages.length > 0 ? (
    <section className="instructionalMessages horizontal-padding">
      {messages.map((msg, idx) => (
        <p key={msg + idx}>{ReactHtmlParser(msg)}</p>
      ))}
    </section>
  ) : null;
};

export default InstructionalMessages;

InstructionalMessages.propTypes = {
  messages: PropTypes.arrayOf(PropTypes.string),
};
