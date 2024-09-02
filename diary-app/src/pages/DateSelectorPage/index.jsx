import {
  DateSelector,
  NavigationButtons,
  NoScrollContainer,
  NoScrollContainerV2,
  getDateString
} from '../../index.js';

const DateSelectorPage = ({
  pageNumber,
  pageInfo,
  value,
  updateValue,
  setValue,
  valueType,
  getDateValue = date => getDateString(date, ['dateTime', 'dateTimeSelect'].includes(valueType)),
  forwardText,
  forwardFunc,
  backwardText,
  backwardFunc,
  noScroll = true,
  noScrollV2 = false,
  windowInnerHeight
}) => {
  const {
    title,
    stem,
    question,
    placeholderText,
    minDate,
    maxDate,
    mappingKey,
    timeInputLabel,
    timeIntervals,
    timeCaption
  } = pageInfo;

  const dateSection = (
    <section className={`Page${pageNumber}`}>
      <DateSelector
        {...{
          title,
          stem,
          question,
          placeholderText,
          minDate,
          maxDate,
          value: value[mappingKey],
          updateValue: val => {
            if (val) {
              updateValue(mappingKey, valueType === 'yearOnly' ? val : getDateValue(val));
            } else {
              delete value[mappingKey];
              setValue(value);
            }
          },
          valueType,
          timeInputLabel,
          timeIntervals,
          timeCaption
        }}
      />
      <NavigationButtons
        {...{ forwardText, forwardFunc, backwardFunc, backwardText, disabled: !value[mappingKey] }}
      />
    </section>
  );
  if (noScrollV2) {
    return (
      <NoScrollContainerV2 windowInnerHeight={windowInnerHeight}>{dateSection}</NoScrollContainerV2>
    );
  }

  return noScroll ? <NoScrollContainer>{dateSection}</NoScrollContainer> : dateSection;
};

export default DateSelectorPage;
