import { FunctionComponent } from 'react';
import clsx from 'clsx';

import styles from './container.module.scss';

export interface IContainer {
  className?: string;
}

export const Container: FunctionComponent<IContainer> = ({
  children,
  className,
}) => {
  const classNames = clsx(className, {
    [styles.root]: true,
  });
  return <div className={classNames}>{children}</div>;
};
