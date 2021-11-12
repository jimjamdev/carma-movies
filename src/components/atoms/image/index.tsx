import { FunctionComponent, useState } from 'react';
import { IBase } from '~types/base';

export interface IImage extends IBase {
  src: string;
  alt?: string;
  title?: string;
  style?: any;
  width?: string;
  height?: string;
}

export const Image: FunctionComponent<IImage> = ({
  src,
  alt,
  title,
  style,
  width,
  height,
}) => {
  const [imgUrl, setImgUrl] = useState(src);

  const handleImageError = () => {
    setImgUrl('/placeholder-image.jpg');
  };

  return (
    <img
      src={imgUrl}
      title={title}
      alt={alt}
      style={style}
      width={width}
      height={height}
      onError={handleImageError}
    />
  );
};
