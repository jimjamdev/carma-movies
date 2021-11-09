import { FunctionComponent } from 'react';
import clsx from 'clsx';
import styles from './default.module.scss';

import { AppHeader } from './app-header';
import { Container } from '~components/atoms/container';

export interface IDefaultLayout {
  className?: string;
}

export const DefaultLayout: FunctionComponent<IDefaultLayout> = ({ children, className }) => {
  const classNames = clsx(className, {
    [styles.root]: true,
  });
  return (
    <main className={classNames}>
      <AppHeader transparent={true} />
      {children}
    </main>
  );
};
