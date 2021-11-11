import {
  FunctionComponent,
  SyntheticEvent,
  useState,
  useRef,
  useEffect,
} from 'react';
import { useToggle, useClickAway } from 'ahooks';
import clsx from 'clsx';
import { IBase } from '~types/base';

import { Text } from '~components/atoms/text';
import { DropDownItem } from '~components/molecules/drop-down/drop-down-item';
import { DropDownPanel } from '~components/molecules/drop-down/drop-down-panel';

import styles from './drop-down.module.scss';

export interface IDropdown extends IBase {
  defaultItem: number;
  items: Array<any>;
  onChange?: (name: string, value: string) => void;
}

export const DropDown: FunctionComponent<IDropdown> = ({
  className,
  items,
  defaultItem = 0,
  onChange,
}) => {
  const [isOpen, { toggle }] = useToggle();
  const [listItems, setListItems] = useState(items);
  const [dropdownHeight, setDropdownHeight] = useState(0);
  const [selectedItem, setSelectedItem] = useState(defaultItem);

  const ref = useRef<HTMLDivElement>(null);

  console.log('listItems', listItems, 'dropdownHeight', dropdownHeight);

  const toggleOpen = (e: SyntheticEvent) => {
    e.preventDefault();
    toggle();
  };

  const handleSelectItem = (index: number) => {
    setSelectedItem(index);
  };

  useClickAway(() => {
    toggle(false);
  }, ref);

  useEffect(() => {
    const filterSelected = items.filter((i) => i !== selectedItem);
    setListItems(filterSelected);
  }, [items, selectedItem]);

  useEffect(() => {
    const el = ref?.current
    const height: number = el?.clientHeight || 0
    setDropdownHeight(height)
  }, [])

  const classNames = clsx(className, {
    [styles.root]: true,
  });

  return (
    <div ref={ref} className={`drop-down ${classNames}`} onClick={toggleOpen}>
      <div className={styles.parentItem}>
        <Text transform="uppercase" weight="heavy">{items[selectedItem].name}</Text>
      </div>
      <DropDownPanel show={isOpen} topPosition={dropdownHeight}>
        {listItems &&
          listItems.map((item, index) => {
            return (
              <DropDownItem key={item.text} onClick={() => handleSelectItem(index)}>
                {item.name}
              </DropDownItem>
            );
          })}
      </DropDownPanel>
    </div>
  );
};
