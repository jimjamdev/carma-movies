import {
  FunctionComponent,
  SyntheticEvent,
  useState,
  useRef,
  useEffect,
} from 'react';
import { useToggle, useClickAway } from 'ahooks';
import clsx from 'clsx';
import { DropdownParentItem } from '~components/molecules/drop-down/parent-item';
import { IBase } from '~types/base';

import { Text } from '~components/atoms/text';
import { DropDownItem } from '~components/molecules/drop-down/drop-down-item';
import { DropDownPanel } from '~components/molecules/drop-down/drop-down-panel';

import styles from './drop-down.module.scss';

export interface IDropdown extends IBase {
  defaultItem: number;
  items: Array<any>;
  onChange?: ({ name, value }: { name: string; value: string }) => {
    name: string;
    value: string;
  };
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
  const [selectedItem, setSelectedItem] = useState(items[defaultItem]);

  const ref = useRef<HTMLDivElement>(null);

  const toggleOpen = (e: SyntheticEvent) => {
    e.preventDefault();
    toggle();
  };

  const handleSelectItem = (item: any) => {
    setSelectedItem(item);
  };

  useClickAway(() => {
    toggle(false);
  }, ref);

  useEffect(() => {
    const filterSelected = items.filter((item) => item !== selectedItem);
    setListItems(filterSelected);
  }, [items, selectedItem]);

  useEffect(() => {
    const el = ref?.current;
    const height: number = el?.clientHeight || 0;
    setDropdownHeight(height);
  }, []);

  useEffect(() => {
    onChange && onChange(selectedItem);
  }, [onChange, selectedItem]);

  const classNames = clsx(className, {
    [styles.root]: true,
  });

  return (
    <div ref={ref} className={`drop-down ${classNames}`} onClick={toggleOpen}>
      <DropdownParentItem isOpen={isOpen}>
        {selectedItem.name}
      </DropdownParentItem>
      <DropDownPanel show={isOpen} topPosition={dropdownHeight}>
        {listItems &&
          listItems.map((item) => {
            return (
              <DropDownItem
                key={item.name}
                onClick={() => handleSelectItem(item)}
              >
                {item.name}
              </DropDownItem>
            );
          })}
      </DropDownPanel>
    </div>
  );
};
