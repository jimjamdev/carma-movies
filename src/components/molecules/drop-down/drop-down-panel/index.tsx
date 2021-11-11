import clsx from 'clsx';
import { FunctionComponent } from 'react';
import { IBase } from '~types/base';
import { useSpring, animated } from '@react-spring/web';

import style from './drop-down-panel.module.scss';

export interface IDropDownPanel extends IBase {
  show: boolean;
  topPosition: number;
}

export const DropDownPanel: FunctionComponent<IDropDownPanel> = ({
  children,
  className,
  topPosition,
  show,
}) => {
  // A little animation
  const props = useSpring({
      top: show ? topPosition : 0
    })

  const classNames = clsx(className, {
    [style.root]: true,
    [style.show]: show,
  });
  return (
      <animated.div className={`drop-down-panel ${classNames}`} style={props}>
        {children}
      </animated.div>
  );
};
