import {
  NumericScale,
  NavigationButtons,
  NoScrollContainer,
  NoScrollContainerV2
} from '../../index.js';

const NumericRatingScalePage = ({
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
  windowInnerHeight,
  children
}) => {
  const {
    mappingKey,
    stem,
    question,
    min,
    max,
    anchors,
    showAnchors,
    showAnchorArrows,
    anchorsAbove,
    increment,
    symbol,
    descendingNumbers,
    showFirstDecimal,
    easternArabicNumerals,
    skippable
  } = pageInfo;

  const nrsSection = (
    <section className={`Page${pageNumber}`}>
      <NumericScale
        {...{
          stem,
          question,
          minNumber: min,
          maxNumber: max,
          anchors,
          showAnchors,
          showAnchorArrows,
          anchorsAbove,
          increment,
          symbol,
          descendingNumbers,
          showFirstDecimal,
          easternArabicNumerals,
          value: value[mappingKey],
          setValue: val => updateValue(mappingKey, val),
          children
        }}
      />
      <NavigationButtons
        {...{
          forwardText,
          backwardText,
          forwardFunc,
          backwardFunc,
          disabled: !(skippable || value[mappingKey] !== undefined)
        }}
      />
    </section>
  );
  if (noScrollV2) {
    return (
      <NoScrollContainerV2 windowInnerHeight={windowInnerHeight}>{nrsSection}</NoScrollContainerV2>
    );
  }

  return noScroll ? <NoScrollContainer>{nrsSection}</NoScrollContainer> : nrsSection;
};

export default NumericRatingScalePage;
