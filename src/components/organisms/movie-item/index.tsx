import { FunctionComponent, useState } from 'react';
import clsx from 'clsx';
// import Image from 'next/image';
import { FontIcon } from '~components/atoms/font-icon';
import { Heading } from '~components/atoms/heading';
import { Image } from '~components/atoms/image';
import { Link } from '~components/atoms/link';
import { Text } from '~components/atoms/text';
import { IBase } from '~types/base';

import styles from './movie-item.module.scss';

export interface IMovieItem extends IBase {
  title: string;
  imageUrl: string;
  rating: string | number;
  date: string;
  href: string;
}

export const MovieItem: FunctionComponent<IMovieItem> = ({
  title,
  className,
  imageUrl,
  rating,
  date,
  href,
}) => {


  const classNames = clsx(className, {
    [styles.root]: true,
  });

  return (
    <div className={`movie-item ${classNames}`}>
      <div className={styles.imageContainer}>
        <Link href={href}>
          {/* next/image not playing nice, just want a % width and a height auto */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <Image
            src={imageUrl}
            alt={title}
            width="100%"
            height="auto"
          />
        </Link>
      </div>
      <div className={styles.textPanel}>
        <div className={styles.textPanelTop}>
          <Text size="sm">
            <FontIcon name="star" />
            {rating}
          </Text>
          <Text size="sm">
            {rating}
            <FontIcon name="thumb_up" />
          </Text>
        </div>
        <div className={styles.textPanelHeading}>
          <Heading size="xs" color="mono" weight="medium">
            <Link href={href}>{title}</Link>
          </Heading>
        </div>
      </div>
    </div>
  );
};
