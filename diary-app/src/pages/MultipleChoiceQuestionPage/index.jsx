import {
  MultipleChoiceQuestion,
  NavigationButtons,
  NoScrollContainer,
  NoScrollContainerV2
} from '../../index.js';

const MultipleChoiceQuestionPage = ({
  pageNumber,
  pageInfo,
  stepValue,
  updateValue,
  forwardText,
  backwardText,
  forwardFunc,
  backwardFunc,
  noScroll = true,
  noScrollV2 = false,
  windowInnerHeight
}) => {
  const {
    note,
    stem,
    question,
    answers,
    copyright,
    style,
    allowMultiple,
    allowAnswerToggle,
    skippable,
    isBoolean
  } = pageInfo;

  const mcqSection = (
    <section className={`Page${pageNumber}`}>
      <MultipleChoiceQuestion
        {...{
          note,
          stem,
          question,
          answers,
          copyright,
          style,
          allowMultiple,
          allowAnswerToggle,
          skippable,
          isBoolean,
          value: stepValue,
          setValue: updateValue
        }}
      />
      <NavigationButtons
        {...{
          forwardText,
          backwardText,
          forwardFunc,
          backwardFunc,
          disabled: !(skippable || (Array.isArray(stepValue) && stepValue.length > 0))
        }}
      />
    </section>
  );
  if (noScrollV2) {
    return (
      <NoScrollContainerV2 windowInnerHeight={windowInnerHeight}>{mcqSection}</NoScrollContainerV2>
    );
  }

  return noScroll ? <NoScrollContainer>{mcqSection}</NoScrollContainer> : mcqSection;
};

export default MultipleChoiceQuestionPage;
