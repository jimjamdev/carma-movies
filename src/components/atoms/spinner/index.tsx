import { FunctionComponent } from 'react';
import clsx from 'clsx';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import styles from './spinner.module.scss';
import { IBase } from '~types/base';

export interface ISpinner extends IBase {}

export const Spinner: FunctionComponent<ISpinner> = ({ className }) => {
  const classNames = clsx(className, {
    [styles.root]: true,
  });
  return (
    <div className={classNames}>
      <Loader
        type="Bars"
        color="#FFA900"
        height={100}
        width={100}
      />
    </div>
  );
};
