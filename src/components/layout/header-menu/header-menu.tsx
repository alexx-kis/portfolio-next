import './header-menu.scss';

// ^======================== HeaderMenu ========================^ //
const HEADER_MENU_ITEMS = [
  {
    link: '#!',
    name: 'Home',
  },
  {
    link: '#about',
    name: 'About me',
  },
  {
    link: '#works',
    name: 'My works',
  },
  {
    link: '#contact',
    name: 'Contact',
  },
];

export default function HeaderMenu() {
  return (
    <ul className='header-menu'>
      {HEADER_MENU_ITEMS.map(({ link, name }, index) => {
        return (
          <li key={index} className='header-menu__item'>
            <a href={link} className='header-menu__link'>
              {name}
            </a>
          </li>
        );
      })}
    </ul>
  );
}
