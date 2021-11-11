import { FunctionComponent } from 'react';
import Image from 'next/image';
import clsx from 'clsx';
import { Heading } from '~components/atoms/heading';
import { IBase } from '~types/base';

import styles from './movie-item.module.scss'

export interface IMovieItem extends IBase {
  title: string;
  imageUrl :string;
  rating: string | number;
  href: string;
}

export const MovieItem:FunctionComponent<IMovieItem> = ({title, className, imageUrl, rating, href}) => {
  const classNames = clsx(className, {
    [styles.root]: true,
  });
  return <div className={`movie-item ${classNames}`}>
    <Image
      src={imageUrl}
      alt={title}
      width={64}
      height={96} />
    <Heading size="sm">{title}</Heading>
  </div>
}