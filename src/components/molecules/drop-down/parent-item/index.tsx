import clsx from 'clsx';
import { FunctionComponent } from 'react';
import { IBase } from '~types/base';
import { Text } from '~components/atoms/text';

import styles from './parent-item.module.scss';

export interface IParentItem extends IBase {
  isOpen: boolean;
  onClick?: () => void;
}

export const DropdownParentItem: FunctionComponent<IParentItem> = ({
  children,
  isOpen,
  onClick,
  className,
}) => {

  const classNames = clsx(className, {
    [styles.root]: true,
    [styles.open]: isOpen,
  });

  return (
    <div className={classNames} onClick={onClick}>
      <Text weight="heavy" transform="uppercase">
        {children}
      </Text>
    </div>
  );
};
