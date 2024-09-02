import PropTypes from 'prop-types';
import ReactHtmlParser from 'react-html-parser';
import Button from '../../components/Button';

import InstructionalMessages from '../../components/InstructionalMessages';
import { NoScrollContainer, NoScrollContainerV2 } from '../../index.js';

import './index.css';
import '../../components/NavigationButtons/index.css';

const TitlePage = ({
  title,
  lang,
  copyright,
  buttonText,
  buttonFunc,
  instructionalMessages,
   v ,
  noScroll = true,
  noScrollV2 = false,
  windowInnerHeight
}) => {
  const titlePageSection = (
    <section className="title">
      <div className="top-container">
        {title ? <h1>{ReactHtmlParser(title)}</h1> : null}
        {instructionalMessages ? <InstructionalMessages messages={instructionalMessages} /> : null}
        {children ? <div className="title-children">{children}</div> : null}
      </div>
      <div className="bottom-container">
        <div className="copyright">
          <p>{ReactHtmlParser(lang)}</p>
          <p>{ReactHtmlParser(copyright)}</p>
        </div>
        <div className="button-container">
          <Button text={buttonText} onClick={buttonFunc} accent={true} />
        </div>
      </div>
    </section>
  );
  if (noScrollV2) {
    return (
      <NoScrollContainerV2 windowInnerHeight={windowInnerHeight}>
        {titlePageSection}
      </NoScrollContainerV2>
    );
  }

  return noScroll ? <NoScrollContainer>{titlePageSection}</NoScrollContainer> : titlePageSection;
};

TitlePage.propTypes = {
  title: PropTypes.string,
  lang: PropTypes.string,
  copyright: PropTypes.string,
  buttonText: PropTypes.string.isRequired,
  buttonFunc: PropTypes.func.isRequired,
  instructionalMessages: PropTypes.arrayOf(PropTypes.string),
  noScroll: PropTypes.bool,
  noScrollV2: PropTypes.bool,
  windowInnerHeight: PropTypes.number
};

export default TitlePage;
