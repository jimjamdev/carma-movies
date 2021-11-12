import { FunctionComponent, useEffect, useState } from 'react';
import clsx from 'clsx';
import { FontIcon } from '~components/atoms/font-icon';
import { IBase } from '~types/base';
import styles from './rate.module.scss';

export interface IRating extends IBase {
  rating: number;
  onChange?: any;
}

export const Rating: FunctionComponent<IRating> = ({
  rating,
  className,
  onChange,
}) => {
  const [rate, setRate] = useState(0);

  const handleStarClick = (index: number) => {
    setRate(index + 1);
  };

  const renderStars = () => {
    const number = Math.round(rating);

    if (number === 0) {
      return 'No rating';
    }

    return [...Array(10)].map((item, index) => {
      const classNames = clsx(className, {
        [styles.star]: true,
        [styles.starHighlighted]: index < rate
      });
      return (
        <FontIcon key={index} name="star" title={`${index + 1}`} className={classNames} onClick={() => handleStarClick(index)} />
      );
    });
  };

  useEffect(() => {
      onChange && onChange(rate)
  }, [onChange, rate])

  const classNames = clsx(className, {
    [styles.root]: true,
  });
  return (
    <div className={classNames}>
      <div className={styles.ratingText}>{rating}</div>
      {renderStars()}
    </div>
  );
};
