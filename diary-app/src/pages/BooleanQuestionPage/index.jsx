import ReactHtmlParser from 'react-html-parser';
import {
  BooleanQuestion,
  NavigationButtons,
  NoScrollContainer,
  NoScrollContainerV2
} from '../../index.js';

const BooleanQuestionPage = ({
  pageNumber,
  value,
  updateValue,
  pageInfo,
  booleanButtons,
  forwardText,
  backwardText,
  forwardFunc,
  backwardFunc,
  windowInnerHeight,
  noScroll = true,
  noScrollV2 = false
}) => {
  const { note, stem, question, answers, responseValues } = pageInfo;
  const { buttonFalse, buttonTrue } = booleanButtons;

  const isNextButtonDisabled = () => {
    const answersMappingKeys = answers.map(answer => answer.mappingKey);
    return !Object.keys(value).toString().includes(answersMappingKeys.toString());
  };

  const booleanQuestionPageSection = (
    <section className={`Page${pageNumber}`}>
      <div className="top-container">
        {note ? <p className="note horizontal-padding">{ReactHtmlParser(note)}</p> : null}
        {stem ? <p className="stem horizontal-padding">{ReactHtmlParser(stem)}</p> : null}
        <p className="question horizontal-padding">{ReactHtmlParser(question)}</p>
        {answers.map((answer, idx) => (
          <BooleanQuestion
            key={`BooleanQuestion_${pageNumber}_${idx}`}
            className="horizontal-padding"
            handleButtonChange={val =>
              updateValue(answer.mappingKey, [responseValues[Number(val)]])
            }
            selectionState={
              value[answer.mappingKey]?.length &&
              Boolean(responseValues.indexOf(value[answer.mappingKey][0]))
            }
            question={answer.text}
            buttonTrue={buttonTrue}
            buttonFalse={buttonFalse}
          />
        ))}
      </div>
      <NavigationButtons
        {...{
          forwardText,
          backwardText,
          forwardFunc,
          backwardFunc,
          disabled: isNextButtonDisabled()
        }}
      />
    </section>
  );

  if (noScrollV2) {
    return (
      <NoScrollContainerV2 windowInnerHeight={windowInnerHeight}>
        {booleanQuestionPageSection}
      </NoScrollContainerV2>
    );
  }

  return noScroll ? (
    <NoScrollContainer>{booleanQuestionPageSection}</NoScrollContainer>
  ) : (
    booleanQuestionPageSection
  );
};

export default BooleanQuestionPage;
