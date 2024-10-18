import React from 'react';

interface HeroImageProps {
    src: string;
    width: string;
    height: string;
    alt?: string;
    className?: string;
}

const Image: React.FC<HeroImageProps> = ({
    src,
    width,
    height,
    alt,
    className
}) => {
    return (
        <img
            src={src}
            width={width}
            height={height}
            alt={alt}
            aria-hidden="true"
            className={className}
        />
    );
};

export default Image;
