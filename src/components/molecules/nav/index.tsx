import { FunctionComponent, useState, useEffect, ReactNode } from 'react';
import clsx from 'clsx';
import { NavItem, INavItem } from '~components/molecules/nav/nav-item';
import styles from './nav.module.scss';

export interface INav {
  menuItems: Array<INavItem>;
  className?: string;
  childComponent?: any;
  vertical?: boolean;
}

const Nav: FunctionComponent<INav> = ({
  menuItems,
  className,
  childComponent,
  vertical,
}) => {
  const [items, setItems] = useState(menuItems);
  const ChildComponent = childComponent || NavItem;

  const renderNavItems = (list: Array<INavItem>) => {
    return list.map((item) => {
      return (
        <li key={item?.id}>
          <ChildComponent {...item} />
        </li>
      );
    });
  };

  useEffect(() => {
    setItems(menuItems);
  }, [menuItems]);

  const classNames = clsx(className, {
    [styles.root]: true,
    [styles.vertical]: vertical,
  });

  return (
    <nav className={`nav ${classNames}`}>
      <ul>{items && renderNavItems(items)}</ul>
    </nav>
  );
};

export type { INavItem };
export { Nav };
