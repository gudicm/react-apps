import { useEffect, useState, useRef } from 'react';

const NoScrollContainer = ({ children }) => {
  const noScrollContainerRef = useRef();
  const [scale, setScale] = useState(100);
  const [opacity, setOpacity] = useState(0);
  const [initialMount, setInitialMount] = useState(true);
  const [windowInnerHeight] = useState(window.innerHeight);

  const getInnerHeight = () => {
    const isiOSWebView =
      /iPhone|iPad|iPod/.test(window.navigator.userAgent) &&
      !!(window.webkit && window.webkit.messageHandlers);
    const hasInput = document.querySelector('.numericDataEntry .inputContainer input');
    return isiOSWebView && hasInput ? windowInnerHeight : window.innerHeight;
  };

  const scaleContent = () => {
    const noScrollClientHeight = Math.floor(
      noScrollContainerRef.current.getBoundingClientRect().height
    );
    if (noScrollClientHeight <= getInnerHeight()) {
      setOpacity(1);
      return;
    }
    const newScale = scale * (getInnerHeight() / noScrollClientHeight);
    setScale(newScale);
  };

  useEffect(() => {
    if (!initialMount) {
      setScale(100);
    }
  }, [window.innerHeight]);

  useEffect(() => {
    if (initialMount) {
      setInitialMount(false);
    } else {
      scaleContent();
    }
  }, [initialMount, scale, window.innerHeight]);

  useEffect(() => {
    scaleContent();
    document.body.style.overflow = 'hidden';
  }, [document.body.clientHeight, document.documentElement.clientHeight, window.innerHeight]);

  return (
    <section
      ref={noScrollContainerRef}
      className="no-scroll-container"
      style={{
        opacity: opacity,
        transition: 'all 0.5s ease-in-out',
        '--scale': `${scale / 100}`,
        '--webViewHeight': `${window.innerHeight}px;`
      }}
    >
      {children}
    </section>
  );
};

export default NoScrollContainer;
