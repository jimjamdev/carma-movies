import { FunctionComponent } from 'react';
import Image from 'next/image';
import clsx from 'clsx';
import { config } from '~config';
import { IMovie } from '~types';

import styles from './image-fader.module.scss';

export interface IImageFader {
  data?: Array<IMovie>;
  className?: string;
}

export const ImageFader: FunctionComponent<IImageFader> = ({
  data,
  className,
}) => {
  const classNames = clsx(className, {
    [styles.root]: true,
  });

  const renderImages = () => {
    return (
      data &&
      data.map((value) => {
        return (
          <div key={value.id} className={styles.imageWrapper}>
            <Image
              src={`${config.imagePath}/original${value.backdrop_path}`}
              alt={value.title}
              layout="fill"
              objectFit="cover"
            />
          </div>
        );
      })
    );
  };

  return <div className={classNames}>{renderImages()}</div>;
};
