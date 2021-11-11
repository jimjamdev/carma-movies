import { FunctionComponent } from 'react';
import { IBase } from '~types/base';
import { Text } from '~components/atoms/text';

import styles from './drop-down-item.module.scss'

export interface IDropDownItem extends IBase {
  onClick?: () => void
}

export const DropDownItem: FunctionComponent<IDropDownItem> = ({children}) => {
  return (
    <div className={styles.root}><Text weight="bold" transform="uppercase">{children}</Text></div>
  )
}