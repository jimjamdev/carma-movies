import { FunctionComponent, ReactNode } from 'react';
import clsx from 'clsx';
import { INavItem } from '~components/molecules/nav';
import styles from './default.module.scss';

import { AppHeader } from './app-header';
import { AppFooter } from './app-footer';

export interface IDefaultLayout {
  menuItems?: Array<INavItem>
  banner?: ReactNode | Array<ReactNode>;
  content?: ReactNode | Array<ReactNode>;
  className?: string;
  headerPosition?: 'fixed' | 'sticky' | 'static'
}

export const DefaultLayout: FunctionComponent<IDefaultLayout> = ({
  menuItems,
  banner,
  content,
  headerPosition,
  className,
}) => {

  /* This could come from a DB */
  const menu: Array<INavItem> = [
    { id: 1, text: 'Home', href: '/' },
    { id: 2, text: 'Search', href: '/search' },
    { id: 3, text: 'Movie Stats', href: '/stats' },
  ];


  const classNames = clsx(className, {
    [styles.root]: true,
  });
  return (
    <main className={classNames}>
     <header className={styles.templateHeader}>
       <AppHeader menuItems={menu} position={headerPosition} transparent={true} />
     </header>
      <section className={styles.templateBanner}>
        {banner}
      </section>
      <section className={styles.templateContent}>
        {content}
      </section>
      <footer className={styles.templateFooter}>
        <AppFooter />
      </footer>
    </main>
  );
};
