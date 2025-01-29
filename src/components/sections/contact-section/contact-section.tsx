'use-client';

import Icon from '@/components/ui/icon/icon';
import { CONTACTS } from '@/data/contacts';
import { useContactAnimation } from '@/hooks/animation/use-contact-animation';
import Image from 'next/image';
import './contact-section.scss';

// @======================== ContactSection ========================@ //

function ContactSection(): React.JSX.Element {

  useContactAnimation();

  return (
    <section className='contact scroll' id='contact'>
      <div className='container'>
        <div className='contact__inner'>
          <h2 className='contact__heading heading'>My contacts</h2>
          <ul className='contact__list'>
            {CONTACTS.map(({ href, icon, text }) => {
              return (
                <li key={text} className='contact__item'>
                  <a href={href} className='contact__link' target='_blank'>
                    <Icon
                      className='contact__link-icon'
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
    </section>
  );
}
export default ContactSection;