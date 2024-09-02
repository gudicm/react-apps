import ReactHtmlParser from 'react-html-parser';
import {
  InstructionalMessages,
  NavigationButtons,
  NoScrollContainer,
  NoScrollContainerV2
} from '../../index.js';

import './index.css';

const InstructionPage = ({
  pageNumber,
  title,
  messages,
  copyright,
  forwardText,
  backwardText,
  forwardFunc,
  backwardFunc,
  noScroll = true,
  noScrollV2 = false,
  windowInnerHeight
}) => {
  const instructionSection = (
    <section className={`Page${pageNumber}`}>
      {title && (
        <h1 className="instructional-title horizontal-padding">{ReactHtmlParser(title)}</h1>
      )}
      <InstructionalMessages {...{ messages }} />
      <div className="instructional-copyright horizontal-padding">{ReactHtmlParser(copyright)}</div>
      <NavigationButtons {...{ forwardText, backwardText, forwardFunc, backwardFunc }} />
    </section>
  );
  if (noScrollV2) {
    return (
      <NoScrollContainerV2 windowInnerHeight={windowInnerHeight}>
        {instructionSection}
      </NoScrollContainerV2>
    );
  }

  return noScroll ? (
    <NoScrollContainer>{instructionSection}</NoScrollContainer>
  ) : (
    instructionSection
  );
};

export default InstructionPage;
