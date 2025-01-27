import { WORKS } from '@/data/works';
import './works-section.scss';
import Work from '@/components/ui/work/work';

// @======================== WorksSection ========================@ //

function WorksSection(): React.JSX.Element {
  return (
    <section className='works scroll' id='works'>
      <div className='container'>
        <div className='works__inner'>
          <h2 className='works__heading heading'>My works</h2>
          <ul className='works__list'>
            {WORKS.map(({ href, label, imgSrc, gifSrc, gifMobSrc }) => {
              return (
                <Work
                  className={'works__item'}
                  key={label}
                  href={href}
                  imgSrc={imgSrc}
                  label={label}
                  gifSrc={gifSrc}
                  gifMobSrc={gifMobSrc}
                />
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
export default WorksSection;