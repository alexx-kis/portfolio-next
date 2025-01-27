import clsx from 'clsx';
import './burger.scss';

// ^======================== Burger ========================^ //

type BurgerProps = {
  isActive: boolean,
  onBurgerClick: () => void;
};

function Burger(burgerProps: BurgerProps): React.JSX.Element {
  const { isActive, onBurgerClick } = burgerProps;
  return (
    <div
      className={clsx(
        'burger',
        { '_active': isActive }
      )}
      onClick={onBurgerClick}
    >
      <div className='burger__line'></div>
      <div className='burger__line'></div>
      <div className='burger__line'></div>
    </div>
  );
}
export default Burger;