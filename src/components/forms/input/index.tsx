import clsx from 'clsx';
import { FunctionComponent, FormEvent } from 'react';
import { Container } from '~components/atoms/container';
import { FontIcon } from '~components/atoms/font-icon';
import { IBase } from '~types/base';

import styles from './input.module.scss';

export interface IInput extends IBase {
  name: string;
  type?: string;
  placeholder?: string;
  icon?: string;
  onChange?: any;
  rounded?: boolean;
  size?: 'large'
  color?: 'mono' | 'primary' | 'secondary'
}

export const Input: FunctionComponent<IInput> = ({
  name,
  onChange,
  className,
  icon,
  placeholder,
  rounded,
  type = 'text',
  size,
  color= 'mono',
}) => {
  const classNames = clsx(className, {
    [styles.root]: true,
    [styles.colorPrimary]: color === 'primary',
    [styles.colorSecondary]: color === 'secondary',
    [styles.colorMono]: color === 'mono',
    [styles.large]: size === 'large',
    [styles.rounded]: rounded
  });
  return (
    <div className={classNames}>
      <Container>
        <input
          name={name}
          id={name}
          onChange={onChange}
          placeholder={placeholder}
          type={type}
        />
        {icon && <button><FontIcon name={icon} /></button>}
      </Container>
    </div>
  );
};
