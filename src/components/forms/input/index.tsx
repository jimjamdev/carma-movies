import clsx from 'clsx';
import { FunctionComponent } from 'react';
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
  onIconClick?: any;
  onEnterPress?: any;
  rounded?: boolean;
  defaultValue?: string;
  size?: 'large'
  color?: 'mono' | 'primary' | 'secondary'
}

export const Input: FunctionComponent<IInput> = ({
  name,
  onChange,
  onIconClick,
  onEnterPress,
  className,
  icon,
  placeholder,
  rounded,
  defaultValue,
  type = 'text',
  size,
  color= 'mono',
}) => {

  const handleKeyPress = (event: any) => {
    if(event.key === 'Enter'){
      onEnterPress && onEnterPress()
    }
  }

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
          onKeyDown={handleKeyPress}
          defaultValue={defaultValue}
          type={type}
        />
        {icon && <button onClick={onIconClick}><FontIcon name={icon} /></button>}
      </Container>
    </div>
  );
};
