import clsx from 'clsx';
import { FunctionComponent } from 'react';

import styles from './input.module.scss'

export interface IInput extends HTMLInputElement {
  onChange: () => any;
}

export const Input:FunctionComponent<IInput> = ({onChange, className, type = 'text'}) => {
  const classNames = clsx(className, {
    [styles.root]: true,
  });
  return(
    <input onChange={onChange} className={classNames} type={type} />
  )
}