import { FunctionComponent, useEffect, useState } from 'react';
import clsx from 'clsx';
import { config } from '~config';
import { IMovie } from '~types';

import { FaderImage } from './fader-image';
import styles from './image-fader.module.scss';

export interface IImageFader {
  data?: Array<IMovie>;
  speed?: number
  className?: string;
}

export const ImageFader: FunctionComponent<IImageFader> = ({
  data,
  speed = 5000,
  className,
}) => {
  const [activeImage, setActiveImage] = useState(0);

  // Go the next next image or back to the start
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const nextImage = () => {
    const count = data?.length || 0
    const itemsCount = count - 1

    if (count === 0) return

    if(activeImage === itemsCount) {
      setActiveImage(0);
    } else {
      setActiveImage(prev => prev + 1);
    }
  };


  // Start the process onLoad
  useEffect(() => {
    const timer = setTimeout(() => {
      nextImage();
    }, speed);
    return () => clearTimeout(timer);
  }, [nextImage, speed]);

  const classNames = clsx(className, {
    [styles.root]: true,
  });

  const renderImages = () => {
    return (
      data &&
      data.map((value, index) => {
        const isActive = index === activeImage;
        return (
          <FaderImage
            key={value.id}
            title={value?.title}
            label={'Some label'}
            url={'/'}
            active={isActive}
            src={`${config.imagePath}/original${value.backdrop_path}`}
          />
        );
      })
    );
  };

  return <div className={`img-fader ${classNames}`}>{renderImages()}</div>;
};
