import clsx from 'clsx';
import { FunctionComponent } from 'react';
import { IBase } from '~types/base';
import styles from './font-icon.module.scss';

export interface IFontIcon extends IBase {
  name: string;
}

export const FontIcon: FunctionComponent<IFontIcon> = ({
  name = 'face',
  className,
}) => {
  const classNames = clsx(className, {
    [styles.root]: true,
  });
  return <i className={`material-icons ${classNames}`}>{name}</i>;
};
