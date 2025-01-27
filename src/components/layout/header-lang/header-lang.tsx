import './header-lang.scss';

// ^======================== HeaderLang ========================^ //

import Image from 'next/image';

function HeaderLang(): React.JSX.Element {
  return (
    <div className='header-lang'>
      <div className='header-lang__selected'>
        <div className='header-lang__icon'>
          <Image
            src='/img/icons/eng.svg'
            width={45}
            height={45}
            alt='english'
          />
        </div>
        <div className='header-lang__name'>EN</div>
      </div>
      <div className='header-lang__dropdown'>
        <div className='header-lang__dropdown-item'>
          <a className='header-lang__dropdown-link' href='index-ru.html'>
            <div className='header-lang__icon'>
              <Image
                src='/img/icons/rus.svg'
                width={45}
                height={45}
                alt='russian'
              />
            </div>
            <div className='header-lang__name'>RU</div>
          </a>
        </div>
      </div>
    </div>
  );
}
export default HeaderLang;