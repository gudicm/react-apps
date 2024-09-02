import {
  ValuePicker,
  NavigationButtons,
  NoScrollContainer,
  NoScrollContainerV2
} from '../../index.js';

const ValuePickerPage = ({
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
  noScrollV2 = false,
  inline = false
}) => {
  const { stem, question, options, placeholder, unit, skippable } = pageInfo;

  const vpSection = (
    <section className={`Page${pageNumber}`}>
      <ValuePicker
        {...{
          stem,
          question,
          unit,
          placeholder,
          value,
          setValue: updateValue,
          options,
          inline
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
      <NoScrollContainerV2 windowInnerHeight={windowInnerHeight}>{vpSection}</NoScrollContainerV2>
    );
  }

  return noScroll ? <NoScrollContainer>{vpSection}</NoScrollContainer> : vpSection;
};

export default ValuePickerPage;
