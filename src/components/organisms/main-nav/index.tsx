import clsx from 'clsx';
import { FunctionComponent } from 'react';
import { INav, Nav } from '~components/molecules/nav';
import { MainNavItem } from './main-nav-item';

import styles from './main-nav.module.scss'

export const MainNav: FunctionComponent<INav> = ({menuItems, className}) => {
  const classNames = clsx(className, {
    [styles.root]: true,
  });
  return <Nav className={classNames} menuItems={menuItems} childComponent={MainNavItem} />
}