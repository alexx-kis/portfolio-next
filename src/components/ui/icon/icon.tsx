import Image from 'next/image';
import './icon.scss';

// ^======================== Icon ========================^ //

type IconProps = {
  className: string;
  path: string;
  width: number;
  height: number;
};

function Icon(iconProps: IconProps): React.JSX.Element {
  const { className, path, width, height } = iconProps;
  return (
    <Image
      className={className}
      src={path}
      alt=''
      width={width}
      height={height}
    />
  );
}
export default Icon;