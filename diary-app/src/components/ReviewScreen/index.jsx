import ReactHtmlParser from 'react-html-parser';
import PropTypes from 'prop-types';

import VisualAnalogScale from '../VisualAnalogScale';
import NavigationButtons from '../NavigationButtons';

import './index.css';

const ReviewScreen = ({
  title,
  subtitle,
  instructions,
  results = [],
  backwardFunc,
  forwardFunc,
  backwardText,
  forwardText
}) => {
  return (
    <section className="reviewScreen">
      <div className="top">
        <h2>{ReactHtmlParser(title)}</h2>
        <p>{ReactHtmlParser(instructions)}</p>
        <div className="results">
          {results.map((res, idx) => (
            <div className="domain" key={idx}>
              {res.domain ? <h3>{ReactHtmlParser(res.domain)}</h3> : null}
              {res.entries.map((entry, idx) => (
                <div key={idx} className="result">
                  <ul>
                    {entry.title ? (
                      <li className="review-title">{ReactHtmlParser(entry.title)}</li>
                    ) : null}
                    {entry.stem ? <li className="stem">{ReactHtmlParser(entry.stem)}</li> : null}
                    {entry.question ? (
                      <li className="question">{ReactHtmlParser(entry.question)}</li>
                    ) : null}
                    {entry.vas ? (
                      <li className="vas-answer">
                        <VisualAnalogScale
                          minValue={entry.vas.min}
                          maxValue={entry.vas.max}
                          startLabel={entry.vas.startLabel}
                          endLabel={entry.vas.endLabel}
                          isDisabled={true}
                          value={entry.answer}
                          anchors={entry.vas.anchors}
                          markerInterval={entry.vas.markerInterval}
                          showAnchors={entry.vas.showAnchors}
                          showAnchorArrows={entry.vas.showAnchorArrows}
                          showNumbers={entry.vas.showNumbers}
                          showMarkers={entry.vas.showMarkers}
                        />
                        {entry.editFunc && entry.editText ? (
                          <button onClick={entry.editFunc}>
                            {ReactHtmlParser(entry.editText)}
                          </button>
                        ) : null}
                      </li>
                    ) : (
                      <li className={document.body.dir == 'rtl' ? 'answer rtl' : 'answer'}>
                        <p>{ReactHtmlParser(String(entry.answer))}</p>
                        {entry.editFunc && entry.editText ? (
                          <button onClick={entry.editFunc}>
                            {ReactHtmlParser(entry.editText)}
                          </button>
                        ) : null}
                      </li>
                    )}
                  </ul>
                </div>
              ))}
            </div>
          ))}
        </div>
        {subtitle && <p>{ReactHtmlParser(subtitle)}</p>}
      </div>
      <NavigationButtons
        backwardFunc={backwardFunc}
        forwardFunc={forwardFunc}
        backwardText={backwardText}
        forwardText={forwardText}
      />
    </section>
  );
};

const resultType = PropTypes.shape({
  domain: PropTypes.string,
  entries: PropTypes.arrayOf(
    PropTypes.shape({
      index: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
      answer: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string,
        PropTypes.bool,
        PropTypes.arrayOf(PropTypes.string)
      ]),
      question: PropTypes.string,
      stem: PropTypes.string,
      title: PropTypes.string,
      editFunc: PropTypes.func,
      editText: PropTypes.string
    })
  )
});

ReviewScreen.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  instructions: PropTypes.string,
  backwardFunc: PropTypes.func.isRequired,
  forwardFunc: PropTypes.func.isRequired,
  backwardText: PropTypes.string.isRequired,
  forwardText: PropTypes.string.isRequired,
  results: PropTypes.arrayOf(resultType)
};

export default ReviewScreen;
