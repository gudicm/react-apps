import { useEffect, useState, useRef } from 'react';

const NoScrollContainerV2 = ({ windowInnerHeight, children }) => {
  const noScrollContainerRef = useRef();
  const [scale, setScale] = useState(100);
  const [opacity, setOpacity] = useState(0);
  const [initialMount, setInitialMount] = useState(true);

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
  }, [windowInnerHeight]);

  useEffect(() => {
    if (initialMount) {
      setInitialMount(false);
    } else {
      scaleContent();
    }
  }, [initialMount, scale, windowInnerHeight]);

  useEffect(() => {
    scaleContent();
    document.body.style.overflow = 'hidden';
  }, [document.body.clientHeight, document.documentElement.clientHeight, windowInnerHeight]);

  return (
    <section
      ref={noScrollContainerRef}
      style={{
        height: '100%',
        opacity: opacity,
        transition: 'all 0.5s ease-in-out',
        '--scale': `${scale / 100}`,
        '--webViewHeight': `${windowInnerHeight}px;`
      }}
    >
      {children}
    </section>
  );
};

export default NoScrollContainerV2;
