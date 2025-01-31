import { CERTIFICATES } from '@/data/certificates';
import Image from 'next/image';
import './certificates.scss';

// $======================== Certificates ========================$ //

function Certificates(): React.JSX.Element {
  return (
    <div className='certificates'>
      <h2 className='certificates__heading heading _small'>
        My certificates
      </h2>
      <ul className='certificates__list'>

        {CERTIFICATES.map(({ id, path }) => (
          <li key={id} className='certificates__item certificate'>
            <Image
              src={path}
              alt=''
              width={1708}
              height={2400}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Certificates;