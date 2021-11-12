import clsx from 'clsx';
import { FunctionComponent } from 'react';
import { IBase } from '~types/base';
import styles from './font-icon.module.scss';

export interface IFontIcon extends IBase {
  name: string;
  title?: string;
}

export const FontIcon: FunctionComponent<IFontIcon> = ({
  name = 'face',
  title,
  onClick,
  className,
}) => {
  const classNames = clsx(className, {
    [styles.root]: true,
  });
  return <i className={`material-icons ${classNames}`} title={title} onClick={onClick}>{name}</i>;
};
