import {
  NumericDataEntry,
  NavigationButtons,
  NoScrollContainer,
  NoScrollContainerV2
} from '../../index.js';

const NumericDataEntryPage = ({
  pageNumber,
  pageInfo,
  value,
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
    mappingKey,
    title,
    stem,
    question,
    min,
    max,
    label,
    allowDecimal,
    allowNegative,
    numberOfDecimalPlaces,
    showErrorMessage,
    errorMessageText,
    skippable
  } = pageInfo;

  const ndeSection = (
    <section className={`Page${pageNumber}`}>
      <NumericDataEntry
        {...{
          title,
          stem,
          question,
          minInput: min,
          maxInput: max,
          label,
          allowDecimal,
          allowNegative,
          numberOfDecimalPlaces,
          showErrorMessage,
          errorMessageText,
          value: value[mappingKey],
          setValue: val => updateValue(mappingKey, val)
        }}
      />
      <NavigationButtons
        {...{
          forwardText,
          backwardText,
          forwardFunc,
          backwardFunc,
          disabled: !(
            skippable ||
            (value[mappingKey] &&
              !Number.isNaN(
                allowDecimal ? parseFloat(value[mappingKey]) : parseInt(value[mappingKey])
              ))
          )
        }}
      />
    </section>
  );

  if (noScrollV2) {
    return (
      <NoScrollContainerV2 windowInnerHeight={windowInnerHeight}>{ndeSection}</NoScrollContainerV2>
    );
  }

  return noScroll ? <NoScrollContainer>{ndeSection}</NoScrollContainer> : ndeSection;
};

export default NumericDataEntryPage;
