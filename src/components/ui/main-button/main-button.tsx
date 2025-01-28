import useReplaceImgWithSvg from '@/hooks/use-replace-Img-with-svg';
import Image from 'next/image';
import Link from 'next/link';
import './main-button.scss';

// ^======================== MainButton ========================^ //
type MainButtonProps = {
  bemClassName: string;
  href: string;
  text: string;
  iconPath: string;
};
function MainButton(mainButtonProps: MainButtonProps): React.JSX.Element {
  const { bemClassName, href, text, iconPath } = mainButtonProps;
  // useReplaceImgWithSvg();
  return (
    <Link
      className={`${bemClassName} main-button`}
      href={href}
    >
      <div className='main-button__text'>
        {text}
      </div>
      <div className='main-button__icon'></div>
      <Image
        className=''
        src={iconPath}
        alt=''
        width={20}
        height={20}
      />
    </Link>
  );
}
export default MainButton;