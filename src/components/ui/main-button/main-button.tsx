import Link from 'next/link';
import Icon from '../icon/icon';
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
  return (
    <Link
      className={`${bemClassName} main-button`}
      href={href}
    >
      <div className='main-button__text'>
        {text}
      </div>
      <Icon
        className='main-button__icon'
        src={iconPath}
        width={10}
        height={10}
      />
    </Link>
  );
}
export default MainButton;