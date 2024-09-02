import {
  TimePicker,
  NavigationButtons,
  NoScrollContainer,
  NoScrollContainerV2
} from '../../index.js';

const TimePickerPage = ({
  pageNumber,
  pageInfo,
  value,
  updateValue,
  forwardText,
  backwardText,
  forwardFunc,
  backwardFunc,
  windowInnerHeight,
  noScroll = true,
  noScrollV2 = false
}) => {
  const { mappingKey, stem, question, min, max, skippable } = pageInfo;

  const tpSection = (
    <section className={`Page${pageNumber}`}>
      <TimePicker
        {...{
          stem,
          question,
          value,
          setValue: val => updateValue(mappingKey, val)
        }}
      />
      <NavigationButtons
        {...{
          forwardText,
          backwardText,
          forwardFunc,
          backwardFunc,
          disabled: !(skippable || value !== undefined)
        }}
      />
    </section>
  );
  if (noScrollV2) {
    return (
      <NoScrollContainerV2 windowInnerHeight={windowInnerHeight}>{tpSection}</NoScrollContainerV2>
    );
  }

  return noScroll ? <NoScrollContainer>{tpSection}</NoScrollContainer> : tpSection;
};

export default TimePickerPage;
