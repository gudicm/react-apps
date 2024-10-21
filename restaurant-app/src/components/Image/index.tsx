import React from 'react';

interface HeroImageProps {
    src: string;
    width: string;
    height: string;
    alt?: string;
    className?: string;
    lazyLoading?: boolean;
}

const Image: React.FC<HeroImageProps> = ({
    src,
    width,
    height,
    alt,
    className,
    lazyLoading = false,
}) => {
    return (
        <img
            src={src}
            width={width}
            height={height}
            alt={alt}
            className={className}
            loading={lazyLoading ? 'lazy' : 'eager'}
        />
    );
};

export default Image;
