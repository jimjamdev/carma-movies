import { FunctionComponent } from 'react';
import Image from 'next/image';
import clsx from 'clsx';

import styles from './image-list.module.scss';

export interface IFaderImage {
  url?: string;
  src: string;
  active?: boolean;
  title?: string;
  label?: string;
  className?: string;
}

export const FaderImage: FunctionComponent<IFaderImage> = ({
  url,
  src,
  active,
  title,
  label,
  className,
}) => {

  const classNames = clsx(className, {
    [styles.root]: true,
    [styles.active]: active,
  });

  return (
    <div className={classNames}>
      <div className={styles.imageWrapper}>
        <Image src={src} alt={title} layout="fill" objectFit="cover" />
      </div>
    </div>
  );
};
