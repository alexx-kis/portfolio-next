import Icon from '@/components/ui/icon/icon';
import { CONTACTS } from '@/data/contacts';
import './footer.scss';

// $======================== Footer ========================$ //

function Footer(): React.JSX.Element {
  return (
    <footer className='footer' id='contact'>
      <div className='container'>
        <div className='footer__inner'>
          <h2 className='footer__heading heading'>
            Connect with me
          </h2>
          <ul className='footer__list'>
            {CONTACTS.map(({ href, icon, text }) => {
              return (
                <li key={text} className='footer__item'>
                  <a href={href} className='footer__link' target='_blank'>
                    <Icon
                      className='footer__link-icon'
                      src={icon}
                      width={45}
                      height={45}
                    />
                    {text}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </footer>
  );
}
export default Footer;